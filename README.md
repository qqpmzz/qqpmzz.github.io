# qqpmzz.github.io

간단한 Jekyll 기반 GitHub Pages 사이트입니다.

## 로컬에서 실행하기

1. Ruby와 Bundler 설치
2. 의존성 설치:
   ```bash
   bundle install
   ```
3. 로컬 서버 실행:
   ```bash
   bundle exec jekyll serve
   ```
4. 브라우저에서 `http://localhost:4000` 접속

## GitHub Pages 배포

이 저장소를 GitHub에 푸시하면 자동으로 `https://qqpmzz.github.io`에 배포됩니다.

## 파일 구조

- `_config.yml`: Jekyll 설정 파일
- `index.md`: 홈페이지
- `_layouts/`: HTML 레이아웃 템플릿
- `Gemfile`: Ruby 의존성 관리
