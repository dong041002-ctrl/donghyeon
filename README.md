# GIFT PICK · 선물 궁합 편집숍

> 선물에도 궁합이 있다니까요?

띠, 사주 오행, MBTI로 받는 사람의 ‘선물 운’을 점쳐서 어울리는 선물을 골라주는 선물 큐레이션 쇼핑몰입니다.
연성대학교 수업 과제로 만든 프로젝트예요.

## 주요 기능

- **선물 궁합 머신**: 관계, 태어난 해(띠·오행), MBTI, 예산을 넣으면 궁합 리포트와 추천 선물 3개를 보여줘요.
- **오늘의 띠별 선물 운세**: 날짜마다 바뀌는 12띠 운세와 행운의 선물.
- **주간 한정 드롭**: 수량 한정 상품과 일요일 자정까지 남은 시간.
- **MBTI 선물 사전**: 16유형별 추천 선물.
- **상품 114종**: 종류, 상황, 받는 분, 예산으로 거르고 정렬할 수 있어요.
- **주문**: 장바구니, 옵션·각인, 포장·메시지 카드, 주소 몰라도 보내기, 스마트스토어 결제 연결, 계좌이체 주문서.
- **홈 화면에 추가**: 휴대폰 홈 화면에 추가하면 앱처럼 열려요.

## 폴더 구조

```
giftpick/
├─ index.html              페이지 본문
├─ manifest.webmanifest    홈 화면 앱 설정 (이름, 아이콘, 색)
├─ .nojekyll               GitHub Pages가 파일을 그대로 올리게 하는 빈 파일
├─ README.md               이 설명서
└─ assets/
   ├─ css/style.css        디자인
   ├─ js/app.js            상품 데이터와 모든 기능
   └─ icons/               사이트·홈 화면 아이콘
```

## GitHub Pages로 올리는 법

1. GitHub에서 **New repository**로 Public 저장소를 만들어요 (예: `giftpick`).
2. **Add file → Upload files**에서 이 폴더 **안의 파일과 `assets` 폴더를 전부** 끌어다 놓고 **Commit changes**를 눌러요.
   - `giftpick` 폴더 자체가 아니라 그 안의 내용물을 올려야 해요. 저장소 첫 화면에 `index.html`이 바로 보여야 정상이에요.
3. **Settings → Pages**에서 Source는 **Deploy from a branch**, Branch는 **main / (root)** 로 정하고 **Save**를 눌러요.
4. 1~5분 뒤 `https://아이디.github.io/giftpick/` 주소로 접속할 수 있어요.

## 운영 정보 바꾸기

`assets/js/app.js` 맨 위의 `CONFIG`에서 바꿔요.

```js
const CONFIG = {
  bank: { name: "신한은행", account: "110-503-448091", holder: "신동현" },
  smartstore: "https://smartstore.naver.com/",   // 내 스마트스토어 주소
  kakao: "@giftpick",                           // 카카오톡 채널 ID
  bizEmail: "dong041002@naver.com",
  ...
};
```

- 상품마다 `ss: ""` 칸에 스마트스토어 상품 번호를 넣으면 해당 상품 페이지로 바로 연결돼요.
- 한정 드롭 수량은 `app.js`에서 `const DROP`을 찾아 실제 재고로 고쳐요.

## 알아둘 점

- 서버가 없는 정적 사이트예요. 계좌이체 주문은 손님이 주문 내용을 복사해 카카오톡 채널로 보내는 방식이에요.
- 띠·오행·MBTI 궁합은 재미로 보는 콘텐츠예요.
- GitHub Pages는 실제 상거래 사이트를 운영하는 용도로는 쓸 수 없어요. 과제 시연용으로 사용하고, 실제 판매는 스마트스토어 같은 쇼핑몰 서비스를 이용하세요.
- 저장소가 Public이면 파일 안의 계좌번호, 이름, 이메일을 누구나 볼 수 있어요.

© 2026 기프트픽 (GIFT PICK) · 대표 신동현
