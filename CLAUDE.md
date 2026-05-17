# 집리셋 (ZipReset) — CLAUDE.md

## 프로젝트 개요

**집리셋**은 가구/생활용품 비움(처분)과 채움(구매)을 연결하는 한국어 모바일 e-커머스 앱입니다.  
핵심 컨셉: **비움(Declutter) → 채움(Refill)** — 버리고 싶은 물건을 수거하고, AI·VR로 새 가구를 추천.

- **Vercel 프로젝트**: `zipreset-home`
- **배포 org**: `team_6zpGvzdCP2nXjYW1g2VJxE3U`

---

## 파일 구조

```
집리셋/
├── index.html           # 메인 홈 화면
├── onboarding.html      # 온보딩/스플래시 화면
├── CLAUDE.md            # 이 문서
├── css/                 # 스타일시트 폴더
│   └── index.css        # 메인 홈 스타일
├── js/                  # 자바스크립트 폴더 (추후 추가)
├── images/              # 모든 로컬 이미지 에셋
│   ├── banner-img1~4.png        # 메인 배너 슬라이더
│   ├── category-img1~10.png     # 카테고리 아이콘
│   ├── card img1~4.png          # 상품 카드
│   ├── tip img1~6.png           # 스토리/팁 카드
│   ├── bg-img1~3.png            # 매거진 배경
│   ├── nbn-img1~3.png           # 스토리 추가 이미지
│   ├── logo-r.png               # 로고 R 마크 이미지
│   └── icon-home.png            # 하단 홈 아이콘
└── .vercel/
    └── project.json
```

---
## 작업페이지
html, css, javaScript파일은 분류해서 작업
css폴더에 **.css로 저장하고,
ja폴더에 **.js로 저장




## 기술 스택

| 항목 | 내용 |
|------|------|
| 마크업 | 순수 HTML5 (프레임워크 없음) |
| 스타일 | 인라인 `<style>` 태그 (외부 CSS 파일 없음) |
| 폰트 | Google Fonts — `Pretendard` (400, 500, 700) |
| 배포 | Vercel (정적 호스팅) |
| 이미지 | 로컬 `images/` 폴더 (Figma 에셋 다운로드 후 저장) |

---



## 디자인 시스템

### 색상
```css
--color-primary:    #5a2e2a;   /* 다크 브라운-레드 (로고, 가격, 하단 nav 배경) */
--color-accent:     #FF8732;   /* 오렌지 (홈 버튼, 뱃지) */
--color-bg:         #ffffff;
--color-bg-section: #fcfbfb;   /* 상품 섹션 배경 */
--color-bg-footer:  #f6f6f6;
--color-text:       #000000;
--color-text-sub:   #444444;
--color-text-muted: #666666;
--color-border:     rgba(0,0,0,0.05);
```

### 폰트 크기
| 용도 | 크기 |
|------|------|
| 섹션 제목 | 19–20px, weight 500–700 |
| 배너 제목 | 27px, weight 500 |
| 상품명 | 13px, weight 500 |
| 카테고리 라벨 | 12px, weight 400 |
| 가격 | 16px, weight 700 |
| 하단 nav 라벨 | 10px |

### 레이아웃
- **최대 너비**: 430px (모바일 퍼스트)
- **기본 좌우 패딩**: 20px
- **카테고리 패딩**: 28px 16px
- **카드 크기**: 155×155px
- **카테고리 박스**: 73×73px (border-radius 없음, `rgba(251,251,251,0.5)` 배경)

---

## 페이지별 섹션 구조

### `index.html` (메인 홈)

1. **Header** — sticky, 62px 높이, 로고 + 검색/장바구니/알림 아이콘
2. **Banner Slider** — 431px 높이, 4장 슬라이드, 스크롤 스냅, 배너 인디케이터 (border-radius: 60px)
3. **Category Grid** — 10개 카테고리, 5열 × 2행, row-gap 36px
4. **Product Cards** — 가로 스크롤, 155px 카드
5. **Story Cards** — 가로 스크롤, 320×330px 카드
6. **Magazine** — 가로 스크롤, 320×410px 카드
7. **Footer** — 사업자 정보 + 링크
8. **Bottom Nav** — fixed, 78px, 5탭 (카테고리·비움·홈·채움·마이)

### `onboarding.html` (온보딩)

- 전체 화면 배경 이미지 + 오버레이
- 브랜드명 `ZipReset` (Bebas Neue 66px)
- 태그라인 "Clear. Reset. Live better"
- 하단 nav (반투명 배경, 홈 버튼으로 메인 이동)

---

## 카테고리 목록 (순서)

| # | 이름 | 이미지 |
|---|------|--------|
| 1 | 침실 | category-img1.png |
| 2 | 거실가구 | category-img2.png |
| 3 | 옷장·드레스룸 | category-img3.png |
| 4 | 다이닝 | category-img4.png |
| 5 | 부엌 | category-img5.png |
| 6 | 생활가전 | category-img6.png |
| 7 | 욕실용품 | category-img7.png |
| 8 | 주방용품 | category-img8.png |
| 9 | 비움 | category-img9.png |
| 10 | 채움 | category-img10.png |

---

## Figma 작업 규칙

- **Figma 파일 키**: `OGPtYAImuyJdHN5XW0WVKT` (파일명: 최정윤)
- Figma에서 받은 이미지 에셋 URL은 **7일 후 만료** → 반드시 `images/` 폴더에 다운로드하여 로컬 경로로 교체
- React/Tailwind 코드로 출력되더라도 **순수 HTML+CSS로 변환**하여 적용
- Tailwind 클래스는 사용하지 않음 (CDN/의존성 설치 없음)

---

## 코딩 컨벤션

- 모든 스타일은 `<style>` 태그 내 클래스로 관리
- 인라인 `style=""` 속성은 예외적인 경우에만 사용 (예: 슬라이드별 오버레이 색상)
- 클래스 네이밍: BEM 비사용, kebab-case 단순 명칭 (`banner-wrap`, `category-grid` 등)
- 가로 스크롤 컴포넌트는 `scroll-snap-type: x mandatory` + `overflow-x: auto` 패턴 사용
- 이미지 대체 텍스트(`alt`)는 한국어로 작성

---

## 개발 시 주의사항

1. **파일명에 공백 포함**: `zipresrt home.html`, `card img1.png` 등 — 링크 시 정확히 일치시킬 것
2. `onboarding.html`의 홈버튼은 `zipresrt home.html`로 링크됨
3. 카테고리 아이콘 박스는 `border-radius` 없는 정사각형 (Figma 디자인 기준)
4. 배너 인디케이터는 `border-radius: 60px` (pill 모양)
5. 하단 홈 버튼은 `images/icon-home.png` (filled 스타일 아이콘) 사용
