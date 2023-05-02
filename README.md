<h1>🛒 오픈마켓</h1>

- React + TypeScript 개인 프로젝트

- 배포 URL : https://react-commerce-theta.vercel.app/
- 구매자
  - 아이디 : buyer1
  - 비밀번호 : hodu0910
- 판매자
  - 아이디 : seller1
  - 비밀번호 : hodu0910

### ✔ 구현 기능

```
✔ 인증
  - 로그인 / 로그아웃
  - 구매자 회원가입
  - 유효성 검사
  - JWT Cookie 저장
✔ 홈
  - 배너 및 이미지 캐러셀
  - 상품 리스트 페이지네이션
✔ 상품 검색
✔ 상품
  - 상품 상세
  - 상품 주문 및 장바구니
✔ 장바구니
  - 장바구니 체크
  - 장바구니 추가, 삭제
✔ 주문하기
  - 주문하기
✔ 주문목록
  - 주문 목록 무한 스크롤
  - 상품 상세 페이지 바로 주문
  - 장바구니 페이지 선택 주문
✔ 게시물 작성
  - 판매자 게시물 리스트 무한 스크롤
  - 상품 추가, 수정, 삭제
```

### 👉 1차 개발 목표

```
- React + TypeScript 로 직접 개발하고 배포
- React Query 사용
- React Query Custom Hook
- Infinite Scroll 구현
- Pagination 구현
- Image Lazy 구현
- 구매자, 판매자 권한 분리
- 구매자
  → 장바구니 및 구매 기능
- 판매자
  → 게시물 관리
```

### 👉 2차 개발 목표

```
- Next.js 개발
- 컴포넌트 세분화
- Error Boundary 처리
- 이미지 최적화
- 성능 최적화
```

### 💡사용자 경험 향상

```
- 현재 페이지에 있는 데이터를 불러올 때 다음 페이지의 데이터를 미리 prefetch 함으로 사용자 경험 향상
- 페이지가 넘어갈 때 캐싱된 데이터를 사용하여 다음 페이지의 데이터를 불러올 때까지 기다리지 않아도 됨
- useQueries를 사용하여 병렬적으로 데이터 처리
```

### 📗 프레임워크 및 라이브러리

```
- React
- React-Query
- React-hook-form
- Mui
```

### 📁 폴더 구조

```
📦public
 ┣ 📜index.html
📦src
 ┣ 📂assets
 ┃ ┗ 📂image
 ┣ 📂components
 ┃ ┣ 📂alert
 ┃ ┣ 📂banner
 ┃ ┣ 📂carousel
 ┃ ┣ 📂cart
 ┃ ┣ ┗ 📂cartList
 ┃ ┣ 📂common
 ┃ ┣ ┗ 📂layout
 ┃ ┣ 📂order
 ┃ ┣ 📂payment
 ┃ ┣ 📂product
 ┃ ┣ ┣ 📂productDetail
 ┃ ┣ ┣ 📂productItem
 ┃ ┣ ┗ 📂productList
 ┃ ┣ 📂seller
 ┃ ┣ 📂skeleton
 ┃ ┣ 📂spinner
 ┃ ┣ 📂table
 ┣ 📂constants
 ┣ 📂hooks
 ┣ 📂lib
 ┣ 📂pages
 ┣ 📂services
 ┣ 📂util
 ┣ 📜App.tsx
 ┣ 📜index.tsx
```
