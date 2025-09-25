---
layout: default
---

<section class="welcome-section">
    <h2>🚀 환영합니다!</h2>
    <p>이 블로그는 <strong>Jekyll</strong>과 <strong>GitHub Pages</strong>로 만들어진 정적 블로그입니다.</p>
    <p>Markdown으로 글을 작성하면 자동으로 예쁜 웹페이지로 변환됩니다!</p>
</section>

<section>
    <h2>👨‍💻 About Me</h2>
    <p>안녕하세요! 저는 <strong>개발을 사랑하는</strong> 개발자입니다.</p>
    
    <h3>🔧 관심 분야</h3>
    <ul>
        <li><strong>🌐 웹 개발</strong>: React, Node.js, Python</li>
        <li><strong>📱 앱 개발</strong>: Flutter, React Native</li>
        <li><strong>🎮 게임 개발</strong>: Unity, C#</li>
        <li><strong>🤖 AI/ML</strong>: TensorFlow, PyTorch</li>
    </ul>
</section>

<section>
    <h2>📚 최근 글</h2>
    <div class="post-list">
        {% for post in site.posts limit:5 %}
        <article class="post-item">
            <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
            <div class="post-meta">
                {{ post.date | date: "%Y년 %m월 %d일" }}
                {% if post.categories and post.categories.size > 0 %}
                  • {{ post.categories | join: ', ' }}
                {% endif %}
            </div>
            {% if post.excerpt %}
                <p>{{ post.excerpt | strip_html | truncate: 200 }}</p>
            {% endif %}
        </article>
        {% endfor %}
        
        {% if site.posts.size == 0 %}
        <p>아직 작성된 글이 없습니다. 첫 번째 글을 작성해보세요!</p>
        {% endif %}
    </div>
    
    {% if site.posts.size > 5 %}
    <div style="text-align: center; margin-top: 2rem;">
        <a href="{{ "/archive/" | relative_url }}" style="color: #2e86de; text-decoration: none; font-weight: 500;">모든 글 보기 →</a>
    </div>
    {% endif %}
</section>