// ===== 전역 변수 =====
let posts = [];
let filteredPosts = [];

// ===== DOM 요소들 =====
const themeToggle = document.getElementById('themeToggle');
const searchInput = document.getElementById('searchInput');
const postsGrid = document.getElementById('postsGrid');
const categoriesContainer = document.getElementById('categories');

// ===== 초기화 =====
document.addEventListener('DOMContentLoaded', function () {
    initializeTheme();
    loadPosts();
    setupEventListeners();
});

// ===== 테마 관리 =====
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// ===== 이벤트 리스너 설정 =====
function setupEventListeners() {
    themeToggle.addEventListener('click', toggleTheme);
    searchInput.addEventListener('input', handleSearch);
}

// ===== 포스트 로딩 =====
async function loadPosts() {
    try {
        showLoading();

        // 실제로는 서버에서 포스트 목록을 가져오지만, 
        // 여기서는 하드코딩된 포스트 목록을 사용합니다
        const postFiles = [
            'first-post.md',
            'javascript-tips.md',
            'css-grid-guide.md'
        ];

        const postPromises = postFiles.map(filename => loadMarkdownPost(filename));
        posts = await Promise.all(postPromises);

        filteredPosts = [...posts];
        displayPosts();
        displayCategories();

    } catch (error) {
        console.error('포스트 로딩 중 오류:', error);
        showError();
    }
}

// ===== 마크다운 파일 로딩 =====
async function loadMarkdownPost(filename) {
    try {
        const response = await fetch(`posts/${filename}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const markdown = await response.text();
        return parseMarkdownPost(markdown, filename);
    } catch (error) {
        console.error(`포스트 ${filename} 로딩 실패:`, error);
        return null;
    }
}

// ===== 마크다운 파싱 =====
function parseMarkdownPost(markdown, filename) {
    const lines = markdown.split('\\n');
    let title = '';
    let date = '';
    let category = '';
    let tags = [];
    let content = '';
    let excerpt = '';

    // 제목 추출 (첫 번째 # 헤딩)
    const titleLine = lines.find(line => line.startsWith('# '));
    title = titleLine ? titleLine.replace('# ', '') : filename.replace('.md', '');

    // 메타데이터 추출
    const metaStartIndex = lines.findIndex(line => line.includes('**작성일:**'));
    if (metaStartIndex !== -1) {
        for (let i = metaStartIndex; i < metaStartIndex + 5; i++) {
            const line = lines[i];
            if (line.includes('**작성일:**')) {
                date = line.split('**작성일:**')[1]?.trim() || '';
            }
            if (line.includes('**카테고리:**')) {
                category = line.split('**카테고리:**')[1]?.trim() || '';
            }
            if (line.includes('**태그:**')) {
                const tagString = line.split('**태그:**')[1]?.trim() || '';
                tags = tagString.split(',').map(tag => tag.trim()).filter(tag => tag);
            }
        }
    }

    // 본문 내용 추출 (메타데이터 이후)
    const contentStartIndex = Math.max(metaStartIndex + 5, 0);
    content = lines.slice(contentStartIndex).join('\\n');

    // 요약 생성 (첫 번째 단락)
    const contentWithoutMeta = content.replace(/\\*\\*[^*]+\\*\\*/g, '').trim();
    const firstParagraph = contentWithoutMeta.split('\\n\\n')[0];
    excerpt = firstParagraph ? firstParagraph.substring(0, 150) + '...' : '';

    return {
        title,
        date: date || '2025-09-26',
        category: category || '기타',
        tags: tags.length > 0 ? tags : ['일반'],
        content,
        excerpt,
        filename: filename.replace('.md', ''),
        slug: filename.replace('.md', '')
    };
}

// ===== 포스트 표시 =====
function displayPosts() {
    if (filteredPosts.length === 0) {
        showEmptyState();
        return;
    }

    postsGrid.innerHTML = filteredPosts
        .filter(post => post !== null)
        .map(createPostCard)
        .join('');
}

function createPostCard(post) {
    return `
        <article class="post-card" onclick="openPost('${post.slug}')">
            <h4><a href="#" onclick="event.preventDefault(); openPost('${post.slug}')">${post.title}</a></h4>
            <div class="post-meta">
                <span><i class="fas fa-calendar"></i> ${post.date}</span>
                <span><i class="fas fa-folder"></i> ${post.category}</span>
            </div>
            <div class="post-excerpt">${post.excerpt}</div>
            <div class="post-tags">
                ${post.tags.map(tag => `<a href="#" class="tag" onclick="event.stopPropagation(); filterByTag('${tag}')">${tag}</a>`).join('')}
            </div>
        </article>
    `;
}

// ===== 카테고리 표시 =====
function displayCategories() {
    const categories = {};
    posts.filter(post => post !== null).forEach(post => {
        categories[post.category] = (categories[post.category] || 0) + 1;
    });

    categoriesContainer.innerHTML = Object.entries(categories)
        .map(([category, count]) => `
            <a href="#" class="category" onclick="filterByCategory('${category}')">
                <i class="fas fa-folder"></i>
                ${category}
                <span class="category-count">${count}</span>
            </a>
        `).join('');
}

// ===== 검색 기능 =====
function handleSearch(event) {
    const query = event.target.value.toLowerCase().trim();

    if (query === '') {
        filteredPosts = [...posts];
    } else {
        filteredPosts = posts.filter(post =>
            post !== null && (
                post.title.toLowerCase().includes(query) ||
                post.content.toLowerCase().includes(query) ||
                post.tags.some(tag => tag.toLowerCase().includes(query)) ||
                post.category.toLowerCase().includes(query)
            )
        );
    }

    displayPosts();
}

// ===== 필터링 기능 =====
function filterByCategory(category) {
    filteredPosts = posts.filter(post => post !== null && post.category === category);
    displayPosts();

    // 검색창 초기화
    searchInput.value = '';
}

function filterByTag(tag) {
    filteredPosts = posts.filter(post => post !== null && post.tags.includes(tag));
    displayPosts();

    // 검색창 초기화  
    searchInput.value = '';
}

// ===== 포스트 열기 =====
function openPost(slug) {
    // 실제로는 post.html로 이동하거나 SPA 라우팅을 할 수 있습니다
    // 여기서는 간단히 alert으로 구현
    const post = posts.find(p => p && p.slug === slug);
    if (post) {
        // 새 창에서 포스트 내용을 보여주는 간단한 구현
        const postWindow = window.open('', '_blank');
        postWindow.document.write(`
            <!DOCTYPE html>
            <html lang="ko">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${post.title} - QPMZ Blog</title>
                <link rel="stylesheet" href="style.css">
                <style>
                    .post-container { max-width: 800px; margin: 2rem auto; padding: 0 2rem; }
                    .post-header { margin-bottom: 2rem; }
                    .post-content { line-height: 1.8; }
                    .post-content h2 { margin: 2rem 0 1rem 0; }
                    .post-content p { margin-bottom: 1rem; }
                    .post-content pre { background: #f8f9fa; padding: 1rem; border-radius: 5px; overflow-x: auto; }
                    .post-content code { background: #e9ecef; padding: 0.2rem 0.4rem; border-radius: 3px; }
                    .post-content blockquote { border-left: 4px solid #007bff; padding-left: 1rem; margin: 1rem 0; font-style: italic; }
                    .back-button { display: inline-block; margin-bottom: 2rem; color: #007bff; text-decoration: none; }
                </style>
            </head>
            <body>
                <div class="post-container">
                    <a href="javascript:window.close()" class="back-button">← 목록으로 돌아가기</a>
                    <article class="post-header">
                        <h1>${post.title}</h1>
                        <div class="post-meta">
                            <span>📅 ${post.date}</span>
                            <span>📁 ${post.category}</span>
                            <span>🏷️ ${post.tags.join(', ')}</span>
                        </div>
                    </article>
                    <div class="post-content">${convertMarkdownToHTML(post.content)}</div>
                </div>
            </body>
            </html>
        `);
    }
}

// ===== 간단한 마크다운 to HTML 변환 =====
function convertMarkdownToHTML(markdown) {
    let html = markdown;

    // 제목들
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

    // 볼드와 이탤릭
    html = html.replace(/\\*\\*(.*?)\\*\\*/gim, '<strong>$1</strong>');
    html = html.replace(/\\*(.*?)\\*/gim, '<em>$1</em>');

    // 링크
    html = html.replace(/\\[([^\\]]+)\\]\\(([^\\)]+)\\)/gim, '<a href="$2" target="_blank">$1</a>');

    // 코드 블록
    html = html.replace(/```([\\s\\S]*?)```/gim, '<pre><code>$1</code></pre>');
    html = html.replace(/`([^`]+)`/gim, '<code>$1</code>');

    // 인용구
    html = html.replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>');

    // 리스트
    html = html.replace(/^\\d+\\. (.*$)/gim, '<li>$1</li>');
    html = html.replace(/^- (.*$)/gim, '<li>$1</li>');

    // 줄바꿈
    html = html.replace(/\\n\\n/gim, '</p><p>');
    html = '<p>' + html + '</p>';

    // 빈 p 태그 제거
    html = html.replace(/<p><\/p>/gim, '');

    return html;
}

// ===== UI 상태 관리 =====
function showLoading() {
    postsGrid.innerHTML = `
        <div class="loading">
            <div class="spinner"></div>
            <p>포스트를 불러오는 중...</p>
        </div>
    `;
}

function showError() {
    postsGrid.innerHTML = `
        <div class="empty-state">
            <i class="fas fa-exclamation-triangle"></i>
            <h3>오류가 발생했습니다</h3>
            <p>포스트를 불러올 수 없습니다.</p>
        </div>
    `;
}

function showEmptyState() {
    postsGrid.innerHTML = `
        <div class="empty-state">
            <i class="fas fa-search"></i>
            <h3>검색 결과가 없습니다</h3>
            <p>다른 검색어로 시도해보세요.</p>
        </div>
    `;
}

// ===== 전역 함수들 (HTML에서 호출) =====
window.openPost = openPost;
window.filterByCategory = filterByCategory;
window.filterByTag = filterByTag;