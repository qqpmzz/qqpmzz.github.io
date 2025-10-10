---
layout: default
title: Home
---

# Welcome to My GitHub Pages

안녕하세요! 이것은 Jekyll로 만든 간단한 GitHub Pages입니다.

## About

This is a simple Jekyll-based website hosted on GitHub Pages. Jekyll은 정적 사이트 생성기로, Markdown으로 작성된 콘텐츠를 HTML로 변환하여 웹사이트를 만들어줍니다.

## Features

- 간단한 구조
- GitHub Pages 호환
- Markdown 지원
- 자동 빌드 및 배포
- 무료 호스팅

## Getting Started

### 1. 설치 및 설정

Jekyll을 사용하기 위해서는 Ruby가 설치되어 있어야 합니다. Windows, macOS, Linux 모두 지원됩니다.

```bash
gem install jekyll bundler
bundle install
```

### 2. 로컬 서버 실행

개발 중에는 로컬 서버를 실행하여 실시간으로 변경사항을 확인할 수 있습니다.

```bash
bundle exec jekyll serve
```

서버가 시작되면 `http://localhost:4000`에서 사이트를 확인할 수 있습니다.

### 3. GitHub에 배포

변경사항을 GitHub에 푸시하면 자동으로 GitHub Pages에 배포됩니다.

```bash
git add .
git commit -m "Update content"
git push origin main
```

## 프로젝트 구조

Jekyll 프로젝트는 다음과 같은 구조로 구성됩니다:

- `_config.yml`: 사이트 전역 설정 파일
- `_layouts/`: HTML 레이아웃 템플릿
- `_includes/`: 재사용 가능한 HTML 조각
- `_posts/`: 블로그 포스트 (날짜 기반)
- `_site/`: 빌드된 정적 사이트 (자동 생성)
- `assets/`: CSS, JavaScript, 이미지 등의 정적 파일

## Markdown 가이드

### 헤딩

Markdown에서는 `#`을 사용하여 헤딩을 작성합니다.

### 강조

**굵은 글씨**는 `**텍스트**`로, *기울임*은 `*텍스트*`로 작성합니다.

### 리스트

순서 없는 리스트:
- 항목 1
- 항목 2
- 항목 3

순서 있는 리스트:
1. 첫 번째
2. 두 번째
3. 세 번째

### 링크와 이미지

[링크 텍스트](https://example.com)
![이미지 대체 텍스트](https://via.placeholder.com/150)

### 코드 블록

인라인 코드는 \`코드\`로 작성하고, 코드 블록은 세 개의 백틱으로 감쌉니다.

## 유용한 팁

### Liquid 템플릿

Jekyll은 Liquid 템플릿 언어를 사용합니다. 변수, 조건문, 반복문 등을 사용할 수 있습니다.

예시:
- `{{ "{{ site.title " }}}}`  - 사이트 제목 출력
- `{{ "{{ page.title " }}}}`  - 페이지 제목 출력
- `{{ "{{ content " }}}}`     - 페이지 내용 출력

### Front Matter

모든 페이지의 상단에는 YAML 형식의 Front Matter를 작성할 수 있습니다.

```yaml
---
layout: default
title: 페이지 제목
date: 2025-10-09
---
```

### 플러그인

Jekyll은 다양한 플러그인을 지원합니다:
- jekyll-feed: RSS 피드 생성
- jekyll-seo-tag: SEO 메타태그 자동 생성
- jekyll-sitemap: 사이트맵 자동 생성
- jekyll-paginate: 페이지네이션 기능

## 커스터마이징

### 테마 변경

`_config.yml` 파일에서 테마를 변경할 수 있습니다:

```yaml
theme: minima
```

또는 `remote_theme`을 사용하여 GitHub의 테마를 사용할 수 있습니다.

### CSS 커스터마이징

`assets/css/style.css` 파일을 만들어 스타일을 추가할 수 있습니다.

### 레이아웃 커스터마이징

`_layouts/` 폴더에 HTML 파일을 만들어 커스텀 레이아웃을 만들 수 있습니다.

## 참고 자료

- [Jekyll 공식 문서](https://jekyllrb.com/)
- [GitHub Pages 문서](https://docs.github.com/en/pages)
- [Markdown 가이드](https://www.markdownguide.org/)
- [Liquid 템플릿 문서](https://shopify.github.io/liquid/)

## 자주 묻는 질문

### Q: Jekyll 빌드가 실패합니다.

A: `Gemfile.lock`을 삭제하고 `bundle install`을 다시 실행해보세요.

### Q: 로컬에서는 되는데 GitHub Pages에서 안 됩니다.

A: GitHub Pages에서 지원하는 플러그인과 gem 버전을 확인하세요. `github-pages` gem을 사용하면 로컬 환경을 GitHub Pages와 동일하게 맞출 수 있습니다.

### Q: 커스텀 도메인을 사용하고 싶습니다.

A: 저장소의 Settings > Pages에서 Custom domain을 설정하고, DNS 레코드를 추가하세요.

## 마치며

Jekyll과 GitHub Pages를 사용하면 복잡한 서버 설정 없이 빠르고 안전한 정적 웹사이트를 만들 수 있습니다. Markdown으로 콘텐츠를 작성하고, Git으로 버전 관리를 하며, 무료로 호스팅까지 할 수 있는 훌륭한 플랫폼입니다.

더 많은 기능과 사용법은 공식 문서를 참고하세요!

---

*Last updated: October 9, 2025*
