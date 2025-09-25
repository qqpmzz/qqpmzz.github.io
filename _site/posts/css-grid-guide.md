# CSS Grid 마스터하기

**작성일:** 2025-09-26  
**카테고리:** 디자인  
**태그:** CSS, Grid, 레이아웃

CSS Grid는 2차원 레이아웃을 만들 때 가장 강력한 도구입니다.

## 기본 Grid 설정

```css
.grid-container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: auto 1fr auto;
    gap: 20px;
}
```

## Grid Areas 활용

```css
.grid-container {
    display: grid;
    grid-template-areas:
        "header header header"
        "sidebar main main"
        "footer footer footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
```

## 반응형 Grid

```css
.responsive-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}
```

Grid를 제대로 활용하면 복잡한 레이아웃도 쉽게 만들 수 있습니다! 🎨