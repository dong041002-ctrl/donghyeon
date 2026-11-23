/* GIFT PICK — 선물 궁합 편집숍 */
/* ==========================================================
   운영 설정 — 실제 오픈 전에 이 부분만 바꾸면 됩니다
   ========================================================== */
const CONFIG = {
  bank: { name: "신한은행", account: "110-503-448091", holder: "신동현" },
  smartstore: "https://smartstore.naver.com/",   // 스마트스토어 주소로 교체 (예: https://smartstore.naver.com/giftpick)
  kakao: "@giftpick",                           // 카카오톡 채널 ID
  bizEmail: "dong041002@naver.com",             // 기업 문의 이메일
  shipping: 3000,
  freeFrom: 50000,
  depositHours: 24,
  wrapPremium: 3500,   // 상품당
  cardFee: 1500
};

/* 상품 — ss: 각 상품의 스마트스토어 상품 번호 (예: "1234567890"). 비워두면 스토어 첫 화면으로 연결 */
const PRODUCTS = [
  {id:"candle",  name:"새벽 무화과 소이 캔들", sub:"220g · 약 45시간", price:24000, ss:"", rel:["친구","연인","동료"], occ:["생일","집들이","감사"], desc:"잘 익은 무화과와 은은한 우드 향. 유리 용기는 다 쓰고 나면 작은 화병으로 쓰기 좋아요.", art:{kind:"candle",a:"#C98E7E",b:"#E9C3B4",bg:"#F2E2DC",l:"새벽 무화과"}},
  {id:"hand",    name:"핸드크림 트리오",       sub:"30ml × 3 · 무화과/피오니/코튼", price:19000, ss:"", rel:["친구","동료","부모님"], occ:["감사","생일"], desc:"끈적임 없이 빠르게 스며드는 핸드크림 세 가지 향. 가방에 넣기 좋은 크기예요.", art:{kind:"tubes",a:"#D9A6A8",b:"#B7C2B0",bg:"#F3E7E4"}},
  {id:"perfume", name:"오 드 퍼퓸 ‘흰 차’",     sub:"30ml · 화이트 티, 머스크", price:58000, ss:"", rel:["연인","친구"], occ:["기념일","생일"], desc:"갓 우린 백차와 부드러운 머스크. 가볍게 시작해 피부에 오래 남는 향이에요.", art:{kind:"perfume",a:"#E7CFC4",b:"#2E2427",bg:"#EFE4E0"}},
  {id:"wallet",  name:"이니셜 각인 카드지갑",   sub:"베지터블 레더 · 각인 무료", price:46000, ss:"", rel:["동료","친구","연인"], occ:["졸업","생일"], desc:"쓸수록 색이 깊어지는 이탈리아 베지터블 가죽. 받는 분의 이니셜을 앞면에 눌러 찍어 드려요.", art:{kind:"wallet",a:"#8C4A3A",b:"#AE3650",bg:"#EEDDD6",l:"G · P"}},
  {id:"tea",     name:"계절 블렌딩 티 세트",     sub:"틴 케이스 + 찻잔 1개", price:38000, ss:"", rel:["부모님","동료"], occ:["감사","집들이"], desc:"제주 녹차에 유자와 캐모마일을 더한 블렌딩 티. 하루를 차분하게 마무리하는 선물이에요.", art:{kind:"tea",a:"#7E8F78",b:"#C9A979",bg:"#E8E6DC",l:"유자 캐모마일"}},
  {id:"scarf",   name:"실크 트윌 스카프",        sub:"90 × 90cm · 실크 100%", price:79000, ss:"", rel:["부모님","연인"], occ:["기념일","감사"], desc:"부드러운 광택의 실크 트윌. 목에 두르거나 가방에 묶어 오래 쓰는 선물이에요.", art:{kind:"scarf",a:"#B9546A",b:"#F3D9C8",bg:"#F1E1DE"}},
  {id:"pen",     name:"졸업 각인 만년필",        sub:"EF 닙 · 컨버터 포함", price:64000, ss:"", rel:["친구","동료"], occ:["졸업"], desc:"새로 시작하는 사람에게 건네는 첫 만년필. 몸체에 이름이나 날짜를 각인해 드려요.", art:{kind:"pen",a:"#2F3A3A",b:"#C9B6A6",bg:"#E9E2DD"}},
  {id:"coffee",  name:"드립백 커피 10입",        sub:"싱글 오리진 2종", price:9800, ss:"", rel:["동료","친구"], occ:["감사","그냥"], desc:"뜨거운 물만 있으면 되는 핸드드립. 바쁜 동료에게 부담 없이 건네기 좋아요.", art:{kind:"coffee",a:"#B86F5A",b:"#5B4038",bg:"#EFE2D9"}},
  {id:"bouquet", name:"미니 드라이플라워 부케",  sub:"높이 약 25cm", price:9900, ss:"", rel:["친구","연인"], occ:["생일","졸업","기념일"], desc:"시들지 않는 작은 꽃다발. 책상 위에 오래 두고 볼 수 있어요.", art:{kind:"bouquet",a:"#C9707F",b:"#E9DCCB",bg:"#F3E6E2"}},
  {id:"letter",  name:"레터프레스 카드 세트",    sub:"카드 4장 + 봉투", price:7500, ss:"", rel:["친구","부모님","동료"], occ:["감사","생일","그냥"], desc:"두꺼운 코튼지에 눌러 찍은 카드. 직접 쓴 몇 줄이 가장 오래 남는 선물이 돼요.", art:{kind:"letter",a:"#E6D3C3",b:"#AE3650",bg:"#F4ECE7"}},
  {id:"diffuser",name:"리드 디퓨저 ‘숲의 오후’", sub:"200ml · 약 2개월", price:29000, ss:"", rel:["친구","동료","부모님"], occ:["집들이"], desc:"편백과 베르가못이 섞인 맑은 숲 향. 새 집의 현관이나 거실에 잘 어울려요.", art:{kind:"diffuser",a:"#9DAE9A",b:"#6F8A70",bg:"#E7EAE2"}},
  {id:"mug",     name:"세라믹 머그 페어",        sub:"350ml × 2 · 핸드메이드", price:32000, ss:"", rel:["연인","친구"], occ:["집들이","기념일"], desc:"하나씩 손으로 빚어 모양이 조금씩 다른 머그 두 개. 둘이 함께 쓰는 아침을 선물하세요.", art:{kind:"mug",a:"#E9DCCF",b:"#AE3650",bg:"#F2E4E0"}}
];

/* 위탁 공급처 — 상품별 제휴 공방 (과제용 가상 공급처) */
const MAKERS = {candle:"제휴 캔들 공방 · 서울 성수", hand:"제휴 바디케어 브랜드", perfume:"제휴 니치 향수 공방", wallet:"제휴 가죽 공방 · 각인 가능", tea:"제휴 티 블렌딩 하우스 · 제주", scarf:"제휴 실크 스튜디오", pen:"제휴 문구 편집숍 · 각인 가능", coffee:"제휴 로스터리", bouquet:"제휴 플라워 공방", letter:"제휴 레터프레스 스튜디오", diffuser:"제휴 캔들 공방 · 서울 성수", mug:"제휴 도자기 공방 · 경기 이천"};
PRODUCTS.forEach(p => p.maker = MAKERS[p.id] || "제휴 공방");

/* 상품 상세 정보 — 옵션, 각인, 상품정보 제공고시, 디테일 컷 위치 */
const EXTRA = {
  candle:{code:"GP-C101", zoom:"120 220 160 200", opt:{label:"향", onArt:true, values:["새벽 무화과","흰 머스크","라벤더 우드"]}, spec:{size:"지름 8 × 높이 9cm · 220g", material:"소이 왁스, 코튼 심지, 유리 용기, 원목 뚜껑", origin:"대한민국", note:"연소 시간 약 45시간 · 불을 켠 채 자리를 비우지 마세요"}},
  hand:{code:"GP-B102", zoom:"96 180 208 260", spec:{size:"30ml × 3개", material:"정제수, 시어버터, 글리세린 외 (전성분 상세 표기)", origin:"대한민국", note:"사용기한 제조일로부터 30개월"}},
  perfume:{code:"GP-F103", zoom:"136 236 128 160", spec:{size:"30ml", material:"변성알코올, 향료, 정제수", origin:"대한민국", note:"사용기한 개봉 후 24개월 · 화기 주의"}},
  wallet:{code:"GP-L104", zoom:"104 214 192 240", opt:{label:"색상", values:[{name:"브라운",a:"#8C4A3A"},{name:"블랙",a:"#2F2A2B"},{name:"버건디",a:"#6B2233"}]}, eng:{max:3, hint:"영문 이니셜 3자까지", ph:"예) JHK"}, spec:{size:"10.5 × 7.5cm · 카드 4~6장", material:"베지터블 소가죽 (이탈리아산 원피)", origin:"대한민국 (수작업)", note:"각인 상품은 제작 후 교환·환불 불가"}},
  tea:{code:"GP-T105", zoom:"96 250 140 175", opt:{label:"블렌딩", onArt:true, values:["유자 캐모마일","제주 말차 현미","얼그레이 로즈"]}, spec:{size:"50g 틴 + 찻잔 150ml", material:"녹차, 유자필, 캐모마일 / 도자기 찻잔", origin:"대한민국", note:"유통기한 제조일로부터 18개월"}},
  scarf:{code:"GP-S106", zoom:"110 270 176 220", opt:{label:"색상", values:[{name:"로즈",a:"#B9546A"},{name:"네이비",a:"#2E3A5C",b:"#E8D6C3"},{name:"아이보리",a:"#E9DFCF",b:"#B9546A"}]}, spec:{size:"90 × 90cm", material:"실크 100% (트윌)", origin:"대한민국", note:"드라이클리닝 권장"}},
  pen:{code:"GP-P107", zoom:"130 236 160 200", opt:{label:"닙 굵기", onArt:true, values:["EF","F"]}, eng:{max:10, hint:"이름·날짜 10자까지", ph:"예) 2027.02 졸업"}, spec:{size:"길이 14cm · 22g", material:"레진 바디, 스테인리스 닙", origin:"대한민국 (조립·각인)", note:"컨버터와 잉크 카트리지 2개 포함 · 각인 후 교환·환불 불가"}},
  coffee:{code:"GP-D108", zoom:"120 226 160 200", spec:{size:"10g × 10입", material:"원두 100% (에티오피아, 콜롬비아)", origin:"대한민국 (로스팅)", note:"로스팅 후 3개월 안에 드시는 걸 권해요"}},
  bouquet:{code:"GP-W109", zoom:"118 150 176 220", opt:{label:"컬러", values:[{name:"더스티 로즈"},{name:"크림 화이트",a:"#E4D6C4"}]}, spec:{size:"높이 약 25cm", material:"드라이플라워 (스타티스, 래빗테일, 라벤더 외), 크라프트지", origin:"대한민국", note:"직사광선과 습기를 피해서 두세요"}},
  letter:{code:"GP-K110", zoom:"150 210 176 220", opt:{label:"문구", onArt:true, values:["고마워요","축하해요","사랑해요"]}, spec:{size:"카드 10 × 14.8cm × 4장 + 봉투 4장", material:"코튼지 600g, 실링 스티커", origin:"대한민국", note:"문구는 4장 모두 같아요"}},
  diffuser:{code:"GP-R111", zoom:"130 290 140 175", opt:{label:"향", onArt:true, values:["숲의 오후","새벽 무화과","흰 머스크"]}, spec:{size:"200ml · 리드 스틱 8개", material:"디퓨저 베이스, 향료, 유리병", origin:"대한민국", note:"약 2개월 사용 · 어린이 손이 닿지 않는 곳에 두세요"}},
  mug:{code:"GP-M112", zoom:"96 246 176 220", opt:{label:"컬러 조합", values:[{name:"로즈 + 크림"},{name:"크림 + 크림",b:"#E9DCCF"},{name:"로즈 + 로즈",a:"#C9707F"}]}, spec:{size:"350ml × 2 · 지름 8.5 × 높이 9.5cm", material:"도자기 (수작업, 식기세척기 사용 가능)", origin:"대한민국 (경기 이천)", note:"손으로 빚어 모양과 유약 흐름이 하나씩 달라요"}}
};
PRODUCTS.forEach(p => Object.assign(p, EXTRA[p.id] || {}));
PRODUCTS.find(p=>p.id==="pen").art.l = "EF";
/* 추가 상품 16종 */
const MORE = [
  {id:"wine", name:"크리스탈 와인잔 페어", sub:"450ml × 2 · 무연 크리스탈", price:48000, ss:"", rel:["연인","부모님","친구"], occ:["집들이","기념일"], maker:"제휴 글라스 스튜디오", code:"GP-G113", zoom:"110 186 180 225", desc:"얇은 림과 긴 스템으로 와인 향이 잘 모이는 잔. 새 집에서 처음 여는 와인과 함께 건네기 좋아요.", art:{kind:"wine",a:"#7A1E2E",b:"#E9DCD6",bg:"#EFE4E2"}, spec:{size:"높이 23cm · 450ml × 2", material:"무연 크리스탈 글라스", origin:"대한민국", note:"식기세척기 사용 가능 · 깨지기 쉬운 상품이라 이중 완충 포장해요"}},
  {id:"necklace", name:"실버 이니셜 목걸이", sub:"925 실버 · 펜던트 각인", price:69000, ss:"", rel:["연인","친구"], occ:["기념일","생일"], maker:"제휴 주얼리 공방", code:"GP-J114", zoom:"140 290 120 150", desc:"작은 원형 펜던트에 이니셜 하나를 새겨 드려요. 매일 하기 좋은 가는 체인이에요.", art:{kind:"jewel",a:"#6E2233",b:"#C9CBD1",bg:"#F1E3E3",l:"J"}, opt:{label:"체인 길이", values:["45cm","40cm","50cm"]}, eng:{max:1, hint:"영문 대문자 1자", ph:"예) J"}, spec:{size:"펜던트 지름 10mm · 체인 40/45/50cm", material:"925 스털링 실버", origin:"대한민국 (수작업)", note:"각인 후 교환·환불 불가 · 보증서 동봉"}},
  {id:"macaron", name:"수제 마카롱 12구", sub:"6가지 맛 × 2", price:28000, ss:"", rel:["친구","동료","연인"], occ:["생일","감사","그냥"], maker:"제휴 디저트 공방", code:"GP-E115", zoom:"110 320 160 200", desc:"아몬드 가루로 매일 굽는 마카롱. 라즈베리, 바닐라, 피스타치오, 솔티캐러멜, 얼그레이, 유자 맛이에요.", art:{kind:"macaron",a:"#D98C9A",b:"#E9D9B5",bg:"#F4E8E4"}, spec:{size:"12개입 · 지름 4.5cm", material:"아몬드 가루, 설탕, 달걀흰자, 버터 (알레르기: 견과류, 달걀, 우유)", origin:"대한민국", note:"냉장 보관 · 받은 날로부터 5일 안에 드세요 · 아이스팩 동봉"}},
  {id:"choco", name:"수제 트러플 초콜릿 9구", sub:"다크 · 루비 · 밀크", price:22000, ss:"", rel:["연인","친구","동료"], occ:["기념일","감사"], maker:"제휴 쇼콜라티에", code:"GP-E116", zoom:"120 270 160 200", desc:"생크림을 넣어 입에서 부드럽게 녹는 트러플 세 가지 맛. 금박 하나가 올라간 건 루비 초콜릿이에요.", art:{kind:"choco",a:"#B5596B",b:"#4A2A20",bg:"#EEE2DC"}, spec:{size:"9개입 · 개당 약 12g", material:"카카오매스, 생크림, 설탕, 코코아버터 (알레르기: 우유, 대두)", origin:"대한민국", note:"18℃ 이하 보관 · 받은 날로부터 14일"}},
  {id:"diary", name:"리넨 커버 다이어리 2027", sub:"A5 · 만년형 · 240p", price:26000, ss:"", rel:["친구","동료"], occ:["졸업","생일","그냥"], maker:"제휴 문구 편집숍", code:"GP-K117", zoom:"118 220 176 220", desc:"손에 닿는 감촉이 좋은 리넨 커버에 이름을 금박으로 찍어 드려요. 날짜 없는 만년형이라 언제 시작해도 좋아요.", art:{kind:"book",a:"#7C8E7A",b:"#C9A45C",bg:"#E9E8E0"}, opt:{label:"커버 색상", values:[{name:"세이지",a:"#7C8E7A"},{name:"로즈",a:"#B9546A"},{name:"네이비",a:"#2E3A5C"}]}, eng:{max:12, hint:"이름 12자까지 (금박)", ph:"예) Minji Kim"}, spec:{size:"148 × 210mm · 240쪽", material:"리넨 커버, 미색 모조지 100g", origin:"대한민국", note:"금박 후 교환·환불 불가"}},
  {id:"olive", name:"올리브 나무 미니 화분", sub:"높이 약 35cm · 도자기 화분", price:35000, ss:"", rel:["부모님","친구","동료"], occ:["집들이","졸업"], maker:"제휴 플랜트 숍", code:"GP-N118", zoom:"120 160 160 200", desc:"평화와 새 시작을 뜻하는 올리브 나무. 햇빛 드는 창가에 두고 일주일에 한 번 물만 주면 돼요.", art:{kind:"plant",a:"#8FA48A",b:"#E9E1D6",bg:"#ECEAE2"}, opt:{label:"화분 색", values:[{name:"화이트",b:"#E9E1D6"},{name:"테라코타",b:"#C27A5A"}]}, spec:{size:"높이 약 35cm · 화분 지름 12cm", material:"올리브 나무, 배양토, 도자기 화분", origin:"대한민국", note:"살아있는 식물이라 잎 모양이 하나씩 달라요 · 겨울철 동해 방지 포장"}},
  {id:"lamp", name:"버섯 무드등 ‘노을’", sub:"높이 22cm · 무선 충전식", price:54000, ss:"", rel:["연인","친구"], occ:["집들이","생일"], maker:"제휴 조명 스튜디오", code:"GP-H119", zoom:"110 190 180 225", desc:"해 질 녘 같은 따뜻한 빛을 내는 무드등. 선 없이 6시간 켜져 있어서 침대 옆이나 식탁 어디든 옮겨 쓸 수 있어요.", art:{kind:"lamp",a:"#F2D6C2",b:"#C9A27E",bg:"#E9DED8"}, opt:{label:"색상", values:[{name:"노을 핑크"},{name:"크림",a:"#F3E9D8"},{name:"세이지",a:"#C9D3C3"}]}, spec:{size:"지름 18 × 높이 22cm", material:"오팔 유리 갓, 알루미늄 바디, LED", origin:"대한민국", note:"KC 인증 · USB-C 충전 · 3단계 밝기"}},
  {id:"towel", name:"호텔 타월 3장 세트", sub:"40수 코튼 · 40 × 80cm", price:39000, ss:"", rel:["부모님","동료","친구"], occ:["집들이","감사"], maker:"제휴 리빙 브랜드", code:"GP-H120", zoom:"130 220 160 200", desc:"호텔에서 쓰는 두툼한 40수 타월 세 장. 실용적인 선물을 좋아하는 분께 실패 없는 선택이에요.", art:{kind:"towel",a:"#E7C9C6",b:"#C9D3C3",bg:"#F1E9E6"}, spec:{size:"40 × 80cm × 3장 · 장당 180g", material:"면 100% (40수)", origin:"대한민국", note:"첫 세탁 전 단독 세탁 권장"}},
  {id:"eyemask", name:"실크 수면 안대", sub:"멀버리 실크 22momme · 파우치 포함", price:24000, ss:"", rel:["친구","연인","동료"], occ:["생일","감사","그냥"], maker:"제휴 실크 스튜디오", code:"GP-S121", zoom:"110 240 180 225", desc:"피부에 자국이 남지 않는 매끈한 실크 안대. 잠이 부족한 바쁜 사람에게 건네는 작은 휴식이에요.", art:{kind:"mask",a:"#C98A92",b:"#F3E5DD",bg:"#F2E6E4"}, opt:{label:"색상", values:[{name:"블러시",a:"#C98A92"},{name:"샴페인",a:"#D9B98E"},{name:"차콜",a:"#3A3436"}]}, spec:{size:"20 × 9cm · 밴드 길이 조절", material:"멀버리 실크 100% (22momme)", origin:"대한민국", note:"찬물 손세탁"}},
  {id:"blanket", name:"울 혼방 니트 블랭킷", sub:"130 × 170cm · 가죽 스트랩", price:89000, ss:"", rel:["부모님","연인"], occ:["기념일","집들이"], maker:"제휴 니트 공방", code:"GP-H122", zoom:"96 270 176 220", desc:"소파에 두고 덮기 좋은 묵직한 니트 블랭킷. 가죽 스트랩으로 말아서 보관할 수 있어요.", art:{kind:"blanket",a:"#C9A99A",b:"#7A5A44",bg:"#EEE4DE"}, opt:{label:"색상", values:[{name:"오트밀",a:"#C9A99A"},{name:"차콜",a:"#5A5456"},{name:"세이지",a:"#9AAA94"}]}, spec:{size:"130 × 170cm · 약 1.1kg", material:"울 30%, 아크릴 70% / 소가죽 스트랩", origin:"대한민국", note:"드라이클리닝 권장"}},
  {id:"lip", name:"립밤 & 립오일 세트", sub:"립밤 4g + 립오일 5ml + 립밤 틴", price:15000, ss:"", rel:["친구","동료","연인"], occ:["생일","그냥"], maker:"제휴 바디케어 브랜드", code:"GP-B123", zoom:"120 230 160 200", desc:"건조한 계절에 꼭 필요한 입술 보습 세트. 은은한 로즈 컬러가 비쳐서 데일리로 쓰기 좋아요.", art:{kind:"lip",a:"#C4566B",b:"#E9D3C3",bg:"#F3E6E3"}, spec:{size:"립밤 4g, 립오일 5ml, 틴 10g", material:"시어버터, 호호바오일, 비즈왁스 외 (전성분 상세 표기)", origin:"대한민국", note:"사용기한 제조일로부터 24개월"}},
  {id:"frame", name:"원목 포토 프레임", sub:"4×6 사진용 · 이젤형", price:19000, ss:"", rel:["친구","부모님","연인"], occ:["졸업","기념일"], maker:"제휴 목공방", code:"GP-H124", zoom:"126 200 160 200", desc:"함께 찍은 사진 한 장을 넣어 선물하세요. 주문서 메모에 사진을 보내주시면 인화해서 끼워 드려요.", art:{kind:"frame",a:"#7A5232",b:"#F1B9A0",bg:"#EFE6E0"}, opt:{label:"나무", values:[{name:"월넛",a:"#7A5232"},{name:"오크",a:"#C49A6C"}]}, spec:{size:"외경 15 × 20cm · 4×6 사진용", material:"원목, 강화 유리", origin:"대한민국 (수작업)", note:"사진 인화 서비스 무료 (카카오톡으로 사진 전송)"}},
  {id:"sachet", name:"라벤더 향 주머니 3입", sub:"리넨 파우치 · 서랍·옷장용", price:8900, ss:"", rel:["동료","친구","부모님"], occ:["감사","집들이","그냥"], maker:"제휴 캔들 공방 · 서울 성수", code:"GP-C125", zoom:"130 290 140 175", desc:"말린 라벤더를 채운 작은 리넨 주머니. 옷장이나 서랍에 넣어두면 은은한 향이 한 달 넘게 가요.", art:{kind:"sachet",a:"#E6DCCB",b:"#9C8FB0",bg:"#EEEAE6"}, spec:{size:"8 × 11cm × 3개", material:"리넨, 말린 라벤더", origin:"대한민국", note:"향이 옅어지면 주머니를 가볍게 주물러주세요"}},
  {id:"honey", name:"꿀 스틱 10입", sub:"국산 아카시아꿀 12g × 10", price:9500, ss:"", rel:["부모님","동료"], occ:["감사","그냥"], maker:"제휴 양봉원", code:"GP-E126", zoom:"130 300 140 175", desc:"하나씩 뜯어 먹는 아카시아꿀. 따뜻한 물이나 차에 타기 좋아서 일하는 동료에게 부담 없이 건네기 좋아요.", art:{kind:"honey",a:"#E2A33C",b:"#C9A27E",bg:"#F1E8DC"}, spec:{size:"12g × 10개", material:"아카시아꿀 100% (국산)", origin:"대한민국", note:"1세 미만 영아에게 먹이지 마세요 · 유통기한 24개월"}},
  {id:"socks", name:"울 양말 3켤레 세트", sub:"울 70% · 230~260mm", price:16000, ss:"", rel:["친구","동료","부모님"], occ:["생일","감사","그냥"], maker:"제휴 니트 공방", code:"GP-A127", zoom:"120 230 176 220", desc:"발목까지 따뜻한 울 양말 세 켤레. 겨울 생일에 받으면 매일 신게 되는 선물이에요.", art:{kind:"socks",a:"#B9546A",b:"#E6D8C6",bg:"#EFE6E2"}, spec:{size:"230~260mm (프리사이즈)", material:"울 70%, 나일론 25%, 스판덱스 5%", origin:"대한민국", note:"찬물 손세탁 · 건조기 사용 금지"}},
  {id:"keyring", name:"가죽 이니셜 키링", sub:"베지터블 레더 · 황동 링", price:12000, ss:"", rel:["친구","연인","동료"], occ:["생일","졸업","그냥"], maker:"제휴 가죽 공방 · 각인 가능", code:"GP-L128", zoom:"100 260 176 220", desc:"이니셜 두 글자를 눌러 찍은 가죽 키링. 카드지갑과 같은 가죽이라 함께 선물하기 좋아요.", art:{kind:"keyring",a:"#8C4A3A",b:"#C9A45C",bg:"#EEE3DC",l:"MK"}, opt:{label:"색상", values:[{name:"브라운",a:"#8C4A3A"},{name:"블랙",a:"#2F2A2B"},{name:"탄",a:"#B98A60"}]}, eng:{max:2, hint:"영문 이니셜 2자", ph:"예) MK"}, spec:{size:"9 × 2.5cm · 링 지름 25mm", material:"베지터블 소가죽, 황동", origin:"대한민국 (수작업)", note:"각인 후 교환·환불 불가"}}
];
PRODUCTS.push(...MORE);


/* ---------------- 그림 (스튜디오 촬영 느낌의 상품 컷) ---------------- */
let UID = 0;
const hx = h => { h=h.replace("#",""); return [0,2,4].map(i=>parseInt(h.substr(i,2),16)); };
const mix = (h1,h2,t) => { const b=hx(h2); return "#"+hx(h1).map((v,i)=>Math.round(v+(b[i]-v)*t).toString(16).padStart(2,"0")).join(""); };
const lt = (h,t) => mix(h,"#ffffff",t), dk = (h,t) => mix(h,"#000000",t);
const cyl = (id,c,o=1) => `<linearGradient id="${id}" x1="0" x2="1"><stop offset="0" stop-color="${dk(c,.3)}" stop-opacity="${o}"/><stop offset=".2" stop-color="${lt(c,.12)}" stop-opacity="${o}"/><stop offset=".34" stop-color="${lt(c,.3)}" stop-opacity="${o}"/><stop offset=".55" stop-color="${c}" stop-opacity="${o}"/><stop offset="1" stop-color="${dk(c,.36)}" stop-opacity="${o}"/></linearGradient>`;
const cylV = (id,c) => `<linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${dk(c,.25)}"/><stop offset=".25" stop-color="${lt(c,.35)}"/><stop offset=".5" stop-color="${c}"/><stop offset="1" stop-color="${dk(c,.45)}"/></linearGradient>`;
const sheet = (id,c) => `<linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${lt(c,.16)}"/><stop offset=".55" stop-color="${c}"/><stop offset="1" stop-color="${dk(c,.16)}"/></linearGradient>`;
const sh = (cx,w,y=420,o=1) => `<ellipse cx="${cx+w*.3}" cy="${y+2}" rx="${w*1.2}" ry="${Math.max(6,w*.16)}" fill="#2A1218" opacity="${(.14*o).toFixed(3)}" filter="url(#gpB16)"/><ellipse cx="${cx}" cy="${y}" rx="${w*.96}" ry="${Math.max(3,w*.075)}" fill="#2A1218" opacity="${(.42*o).toFixed(3)}" filter="url(#gpB3)"/>`;
const spec = (x,y,w,h,o=.5) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${w/2}" fill="url(#gpSpec)" opacity="${o}"/>`;
const T = (x,y,s,txt,o={}) => `<text x="${x}" y="${y}" text-anchor="middle" font-family="${o.serif?'Gowun Batang,serif':'Noto Sans KR,sans-serif'}" font-size="${s}" font-weight="${o.w||400}" letter-spacing="${o.ls||0}" fill="${o.fill||'#3B2A30'}"${o.op?` opacity="${o.op}"`:""}${o.tr?` transform="${o.tr}"`:""}>${txt}</text>`;
const rnd = seed => { let s=seed; return () => (s=(s*9301+49297)%233280)/233280; };
function scene(u,bg,body,vb,label){
  return `<svg viewBox="${vb}" role="img" aria-label="${esc(label)}" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="${u}bd" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${lt(bg,.45)}"/><stop offset=".64" stop-color="${bg}"/><stop offset=".82" stop-color="${dk(bg,.05)}"/><stop offset="1" stop-color="${dk(bg,.11)}"/></linearGradient><radialGradient id="${u}lg" cx=".22" cy=".12" r=".95"><stop offset="0" stop-color="#fff" stop-opacity=".6"/><stop offset=".55" stop-color="#fff" stop-opacity="0"/></radialGradient></defs><rect x="-50" y="-50" width="500" height="600" fill="url(#${u}bd)"/><rect x="-50" y="-50" width="500" height="600" fill="url(#${u}lg)"/>${body}<rect x="-50" y="-50" width="500" height="600" filter="url(#gpGrain)"/></svg>`;
}
const ART = {
  candle:(u,s)=>{const wood="#B98A60";return `<defs>${cyl(u+"g",s.a,.9)}${cyl(u+"lab","#FBF6EF")}<radialGradient id="${u}f"><stop offset="0" stop-color="#FFD991" stop-opacity=".85"/><stop offset="1" stop-color="#FFD991" stop-opacity="0"/></radialGradient><radialGradient id="${u}wd" cx=".4" cy=".35" r=".7"><stop offset="0" stop-color="${lt(wood,.15)}"/><stop offset="1" stop-color="${dk(wood,.2)}"/></radialGradient></defs>
${sh(300,48,418,.7)}<ellipse cx="300" cy="360" rx="50" ry="60" fill="url(#${u}wd)"/><ellipse cx="300" cy="360" rx="38" ry="46" fill="none" stroke="${dk(wood,.18)}" stroke-width="1.2" opacity=".6"/><ellipse cx="300" cy="360" rx="22" ry="27" fill="none" stroke="${dk(wood,.18)}" opacity=".35"/>
${sh(200,70)}<circle cx="200" cy="200" r="86" fill="url(#${u}f)"/>
<path d="M130 252Q130 244 138 244H262Q270 244 270 252V406Q270 420 256 420H144Q130 420 130 406Z" fill="url(#${u}g)"/>
<rect x="136" y="262" width="128" height="150" rx="6" fill="#F4E9DC" opacity=".28"/>
<ellipse cx="200" cy="262" rx="63" ry="9" fill="#F3E7D9"/><ellipse cx="200" cy="262" rx="63" ry="9" fill="none" stroke="${dk(s.a,.2)}" stroke-opacity=".25"/>
<ellipse cx="200" cy="246" rx="70" ry="8.5" fill="none" stroke="#fff" stroke-opacity=".6" stroke-width="1.4"/>
<path d="M146 298Q200 304 254 298V374Q200 380 146 374Z" fill="url(#${u}lab)"/>
${T(200,317,6.5,"GIFT PICK",{ls:3,fill:"#8A7A80"})}${T(200,341,16,s.l,{serif:1})}<line x1="178" y1="351" x2="222" y2="351" stroke="#CDBDB7" stroke-width=".8"/>${T(200,364,6.5,"SOY CANDLE · 220g",{ls:1.6,fill:"#7A6A70"})}
<line x1="200" y1="262" x2="200" y2="239" stroke="#2E2220" stroke-width="2.2" stroke-linecap="round"/>
<ellipse cx="200" cy="214" rx="12" ry="20" fill="#FFC56E" opacity=".55" filter="url(#gpB3)"/>
<path d="M200 192C213 207 213 224 200 236 187 224 187 207 200 192Z" fill="#F6B95E"/><path d="M200 209C206 216 206 225 200 232 194 225 194 216 200 209Z" fill="#FFF4D8"/>
${spec(144,252,11,154,.6)}${spec(248,252,6,154,.3)}<rect x="132" y="404" width="136" height="14" rx="7" fill="#fff" opacity=".14"/>`},

  tubes:(u,s)=>{const tube=(cx,c,name,id,dy=0)=>`<g transform="translate(0 ${dy})"><defs>${cyl(id,c)}${cyl(id+"c","#EEE6DE")}</defs>${sh(cx,26,420,.8)}<path d="M${cx-32} 198H${cx+32}L${cx+24} 352Q${cx+24} 358 ${cx+18} 358H${cx-18}Q${cx-24} 358 ${cx-24} 352Z" fill="url(#${id})"/><rect x="${cx-33}" y="184" width="66" height="16" rx="2" fill="${dk(c,.05)}"/>${[...Array(10)].map((_,i)=>`<line x1="${(cx-28+i*6.2).toFixed(1)}" y1="186" x2="${(cx-28+i*6.2).toFixed(1)}" y2="198" stroke="${dk(c,.2)}" stroke-opacity=".45"/>`).join("")}<rect x="${cx-21}" y="356" width="42" height="64" rx="4" fill="url(#${id}c)"/><line x1="${cx-21}" y1="362" x2="${cx+21}" y2="362" stroke="#000" stroke-opacity=".08"/>${T(cx,284,13,name,{ls:4,w:500,fill:dk(c,.5),tr:`rotate(-90 ${cx} 280)`})}${T(cx+14,284,5.5,"HAND CREAM 30ml",{ls:1.5,fill:dk(c,.45),tr:`rotate(-90 ${cx+14} 280)`})}${spec(cx-20,206,7,140,.45)}</g>`;
    return tube(200,s.b,"FIG",u+"m",-12)+tube(132,s.a,"PEONY",u+"l")+tube(268,"#E6D2C2","COTTON",u+"r");},

  perfume:(u,s)=>{const st="#E8DED2";return `<defs>${cyl(u+"p",st)}${cyl(u+"l",s.a,.9)}</defs>
${sh(200,100)}<ellipse cx="200" cy="420" rx="100" ry="13" fill="${dk(st,.2)}"/><rect x="100" y="372" width="200" height="48" fill="url(#${u}p)"/><ellipse cx="200" cy="372" rx="100" ry="13" fill="${lt(st,.35)}"/>
${[[150,374,4,1.2],[232,369,4,1.2],[262,376,3,1],[180,380,4,1.2],[140,398,3,1.5],[222,405,3,1.5],[272,392,3,1.5]].map(([x,y,rx,ry])=>`<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${dk(st,.25)}" opacity=".35"/>`).join("")}
<ellipse cx="214" cy="372" rx="70" ry="7" fill="#2A1218" opacity=".28" filter="url(#gpB3)"/><ellipse cx="176" cy="378" rx="34" ry="4" fill="${lt(s.a,.3)}" opacity=".7" filter="url(#gpB3)"/>
<rect x="138" y="220" width="124" height="152" rx="10" fill="${lt(s.a,.55)}" fill-opacity=".55" stroke="#fff" stroke-opacity=".7" stroke-width="1.2"/>
<rect x="147" y="244" width="106" height="112" rx="4" fill="url(#${u}l)"/><rect x="147" y="244" width="106" height="7" rx="3" fill="#fff" opacity=".35"/><rect x="139" y="352" width="122" height="19" rx="8" fill="#fff" opacity=".28"/>
<rect x="186" y="204" width="28" height="18" fill="url(#gpGoldH)"/>
<rect x="164" y="138" width="72" height="68" rx="4" fill="url(#gpBlack)"/><rect x="164" y="138" width="72" height="4" rx="2" fill="#fff" opacity=".12"/>${spec(172,144,6,56,.25)}
<rect x="164" y="278" width="72" height="46" fill="#F8F3EC"/>${T(200,297,13,s.l||"흰 차",{serif:1})}${T(200,308,6,s.e||"WHITE TEA",{ls:2.2,fill:"#6E5F65"})}${T(200,318,5.5,"EAU DE PARFUM · 30ML",{ls:1,fill:"#8A7A80"})}
${spec(144,226,8,140,.75)}${spec(249,226,4,140,.4)}`},

  wallet:(u,s)=>{const a=s.a;return `<defs>${sheet(u+"w",a)}</defs>${sh(200,104,414)}
<g transform="rotate(3 210 260)"><rect x="150" y="204" width="146" height="94" rx="7" fill="${s.b}"/><rect x="164" y="220" width="40" height="28" rx="4" fill="url(#gpGoldH)" opacity=".85"/></g>
<g transform="rotate(-4 200 260)"><rect x="128" y="214" width="150" height="94" rx="7" fill="#F6F1EA"/><rect x="142" y="230" width="58" height="7" rx="2" fill="#C9B6B0"/><rect x="142" y="243" width="36" height="5" rx="2" fill="#DDD0CB"/></g>
<g transform="rotate(-4 200 330)"><rect x="104" y="252" width="192" height="150" rx="14" fill="url(#${u}w)"/><path d="M176 252A24 22 0 0 0 224 252Z" fill="${dk(a,.35)}"/>
<path d="M106 300Q200 290 294 300" fill="none" stroke="${dk(a,.4)}" stroke-width="2"/><path d="M106 302.5Q200 292.5 294 302.5" fill="none" stroke="${lt(a,.25)}" stroke-opacity=".45"/>
<rect x="113" y="261" width="174" height="132" rx="9" fill="none" stroke="${lt(a,.4)}" stroke-width="1.3" stroke-dasharray="5 4"/><rect x="104" y="252" width="192" height="150" rx="14" fill="none" stroke="${dk(a,.32)}" stroke-width="2"/>
${T(201,356,24,s.l,{serif:1,ls:6,fill:"#fff",op:.16})}${T(200,355,24,s.l,{serif:1,ls:6,fill:dk(a,.4),op:.75})}${T(200,378,6.5,"GIFT PICK",{ls:3,fill:dk(a,.4),op:.7})}
<ellipse cx="150" cy="276" rx="60" ry="20" fill="#fff" opacity=".12" filter="url(#gpB8)"/></g>`},

  tea:(u,s)=>{const cer="#F4EEE8";return `<defs>${cyl(u+"t",s.a)}${cyl(u+"lid",s.b)}${cyl(u+"lb","#F7F1E8")}${cyl(u+"c",cer)}<radialGradient id="${u}tea"><stop offset="0" stop-color="#C99248"/><stop offset="1" stop-color="#8A5A22"/></radialGradient></defs>
${sh(165,58)}<rect x="110" y="230" width="110" height="190" rx="3" fill="url(#${u}t)"/><rect x="110" y="282" width="110" height="84" fill="url(#${u}lb)"/>
${T(165,300,6,"GIFT PICK TEA",{ls:2.4,fill:"#8A7A80"})}${T(165,323,12.5,s.l,{serif:1})}${T(165,339,6,"SEASONAL BLEND",{ls:1.6,fill:"#6E5F65"})}${T(165,354,6,"50g",{ls:1.6,fill:"#8A7A80"})}
<rect x="106" y="200" width="118" height="40" rx="3" fill="url(#${u}lid)"/><rect x="106" y="236" width="118" height="4" fill="#000" opacity=".18"/><ellipse cx="165" cy="200" rx="59" ry="6" fill="${lt(s.b,.3)}"/>${spec(124,206,8,206,.4)}
${[[226,418],[236,414],[218,412]].map(([x,y],i)=>`<ellipse cx="${x}" cy="${y}" rx="5" ry="2" transform="rotate(${i*40-20} ${x} ${y})" fill="#5E6B3E"/>`).join("")}
${sh(292,66,416)}<ellipse cx="292" cy="414" rx="66" ry="12" fill="${dk(cer,.08)}"/><ellipse cx="292" cy="411" rx="66" ry="11" fill="${cer}"/><ellipse cx="292" cy="410" rx="40" ry="6.5" fill="${dk(cer,.06)}"/>
<path d="M336 364C360 364 360 394 332 396" fill="none" stroke="${dk(cer,.1)}" stroke-width="8" stroke-linecap="round"/>
<path d="M246 356H338C338 392 320 408 292 408 264 408 246 392 246 356Z" fill="url(#${u}c)"/><ellipse cx="292" cy="356" rx="46" ry="8" fill="#FBF8F4"/><ellipse cx="292" cy="357" rx="41" ry="6.3" fill="url(#${u}tea)"/>
<g filter="url(#gpB3)" stroke="#fff" stroke-width="4" fill="none" opacity=".6" stroke-linecap="round"><path d="M282 340C270 324 294 316 282 296"/><path d="M304 342C294 330 312 322 304 306"/></g>`},

  scarf:(u,s)=>{const M="matrix(1.7,-0.4,0.8,0.62,80,340)",a=s.a,b=s.b;const p1=(n)=>n.toFixed(1);
    const motif=`<rect width="100" height="100" fill="${a}"/><rect x="4" y="4" width="92" height="92" fill="none" stroke="${b}" stroke-width="3.2"/><rect x="9" y="9" width="82" height="82" fill="none" stroke="${b}" stroke-width=".8"/>${[...Array(9)].map((_,i)=>`<circle cx="${14+i*9}" cy="6.5" r="1.1" fill="${b}"/><circle cx="${14+i*9}" cy="93.5" r="1.1" fill="${b}"/>`).join("")}<circle cx="50" cy="50" r="24" fill="none" stroke="${b}" stroke-width="1.6"/><circle cx="50" cy="50" r="18" fill="none" stroke="${b}" stroke-width=".6"/>${[...Array(12)].map((_,i)=>{const t=i*Math.PI/6,x=p1(50+21*Math.cos(t)),y=p1(50+21*Math.sin(t));return `<ellipse cx="${x}" cy="${y}" rx="3" ry="1.4" transform="rotate(${i*30} ${x} ${y})" fill="${b}"/>`}).join("")}<circle cx="50" cy="50" r="9" fill="${b}" opacity=".8"/><circle cx="50" cy="50" r="3.5" fill="${a}"/>${[[16,16],[84,16],[16,84],[84,84]].map(([x,y])=>`<rect x="${x-4}" y="${y-4}" width="8" height="8" transform="rotate(45 ${x} ${y})" fill="${b}"/>`).join("")}<rect width="100" height="100" fill="url(#${u}sh)"/>`;
    return `<defs><linearGradient id="${u}sh" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".18"/><stop offset=".42" stop-color="#fff" stop-opacity="0"/><stop offset=".55" stop-color="#fff" stop-opacity=".28"/><stop offset=".7" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".18"/></linearGradient></defs>
<g transform="translate(8 14) ${M}" filter="url(#gpB8)"><rect width="100" height="100" fill="#2A1218" opacity=".3"/></g>
<g transform="translate(0 12) ${M}"><rect width="100" height="100" fill="${dk(a,.38)}"/></g><g transform="translate(0 8) ${M}"><rect width="100" height="100" fill="${dk(a,.22)}"/></g><g transform="translate(0 4) ${M}"><rect width="100" height="100" fill="${dk(a,.1)}"/></g>
<g transform="${M}">${motif}</g>`},

  pen:(u,s)=>{const bx="#2C3038";return `<defs>${sheet(u+"bx",bx)}${cylV(u+"pb",s.a)}${cylV(u+"pc",dk(s.a,.15))}</defs>${sh(211,122,390)}
<polygon points="114,280 308,280 326,300 96,300" fill="${lt(bx,.14)}"/><rect x="96" y="300" width="230" height="88" rx="3" fill="url(#${u}bx)"/><rect x="96" y="300" width="230" height="2" fill="#fff" opacity=".15"/>
<text x="211" y="350" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="9" letter-spacing="5" fill="url(#gpGoldH)">GIFT PICK</text>${T(211,364,5.5,s.e||("FOUNTAIN PEN · "+s.l),{ls:2,fill:"#9A9CA3"})}
<g transform="rotate(-9 210 286)"><g transform="translate(5 7)" filter="url(#gpB3)" opacity=".45"><rect x="62" y="278" width="266" height="18" rx="9" fill="#000"/></g>
<path d="M98 281L60 287L98 293Z" fill="url(#gpGoldH)"/><line x1="66" y1="287" x2="92" y2="287" stroke="#7A5E2C" stroke-width=".8"/><circle cx="88" cy="287" r="1.4" fill="#7A5E2C"/>
<rect x="92" y="279" width="16" height="16" rx="3" fill="#1D1C1E"/><rect x="104" y="277" width="128" height="20" rx="10" fill="url(#${u}pb)"/><rect x="226" y="276" width="104" height="22" rx="11" fill="url(#${u}pc)"/>
<rect x="226" y="276" width="7" height="22" fill="url(#gpGold)"/><rect x="246" y="270" width="72" height="5" rx="2.5" fill="url(#gpGoldH)"/><circle cx="248" cy="275" r="3" fill="url(#gpGold)"/></g>`},

  coffee:(u,s)=>{const bag=(cx,c,rot,name,id,dark)=>{const f=dark?"#fff":"#3B2A30",f2=dark?"#F1E4E0":"#6E5F65";return `<g transform="rotate(${rot} ${cx} 420)"><defs>${sheet(id,c)}</defs>${sh(cx,54,420,.7)}<rect x="${cx-54}" y="226" width="108" height="194" rx="5" fill="url(#${id})"/><rect x="${cx-54}" y="226" width="108" height="22" rx="5" fill="#000" opacity=".06"/><path d="M${cx-54} 252h6l3 4 3-4h96" fill="none" stroke="${dark?'#fff':'#000'}" stroke-opacity=".25" stroke-dasharray="3 3"/><circle cx="${cx}" cy="310" r="25" fill="none" stroke="${f}" stroke-opacity=".75" stroke-width="1.2"/>${T(cx,307,7.5,"DRIP BAG",{ls:2,fill:f,w:500})}${T(cx,318,5.5,name,{ls:1.6,fill:f2})}${T(cx,372,5.5,"GIFT PICK ROASTERY",{ls:1.8,fill:f2})}${T(cx,384,5.5,"10g × 10",{ls:1.4,fill:f2})}${spec(cx-46,232,6,180,.3)}</g>`};
    const r=rnd(7);const beans=[...Array(7)].map(()=>{const x=Math.round(110+r()*190),y=Math.round(414+r()*10),ro=Math.round(r()*180);return `<g transform="rotate(${ro} ${x} ${y})"><ellipse cx="${x}" cy="${y}" rx="7" ry="4.6" fill="#4A2E22"/><ellipse cx="${x-1.5}" cy="${y-1.2}" rx="4" ry="2" fill="#7A5240" opacity=".6"/><path d="M${x-6} ${y}q6 2 12 0" stroke="#24150F" stroke-width="1" fill="none"/></g>`}).join("");
    return bag(146,"#EFE4D7",-6,"ETHIOPIA",u+"a",0)+bag(256,s.b,5,"COLOMBIA",u+"b",1)+bag(200,s.a,0,"HOUSE BLEND",u+"c",1)+beans;},

  bouquet:(u,s)=>{const a=s.a,b=s.b;const head=`<g stroke="#8E8466" stroke-width="1.6" fill="none" stroke-linecap="round"><path d="M200 380L140 150M200 380L268 146M200 380L236 170M200 380L168 166"/></g>
${[[146,170],[150,188],[154,206],[266,158],[262,176],[258,194],[234,180],[170,176]].map(([x,y],i)=>`<ellipse cx="${x}" cy="${y}" rx="5.5" ry="2.6" transform="rotate(${i%2?50:-50} ${x} ${y})" fill="#9C8FB0"/>`).join("")}
<g stroke="#7D8A62" stroke-width="2.2" stroke-linecap="round"><path d="M200 380L162 236M200 380L206 214M200 380L246 236M200 380L184 256M200 380L228 262M200 380L150 262"/></g>
${[[150,258],[142,248],[256,250]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="7" fill="#9DAA8C"/>`).join("")}
${[[164,226,22],[246,230,20]].map(([x,y,r])=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${a}"/><circle cx="${x}" cy="${y}" r="${r*.7}" fill="none" stroke="${dk(a,.22)}" stroke-width="1.4"/><circle cx="${x}" cy="${y}" r="${r*.4}" fill="none" stroke="${dk(a,.25)}" stroke-width="1.2"/><circle cx="${x-r*.3}" cy="${y-r*.35}" r="${r*.35}" fill="#fff" opacity=".18"/>`).join("")}
<g filter="url(#gpB3)">${[[206,204,15,22],[186,252,10,15],[228,262,9,14]].map(([x,y,rx,ry])=>`<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${b}"/>`).join("")}</g>
${[[206,204,11,17],[186,252,7,11],[228,262,6,10]].map(([x,y,rx,ry])=>`<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${lt(b,.35)}"/>`).join("")}`;
    return `<defs>${sheet(u+"k","#D9C2A2")}${sheet(u+"p",lt(a,.55))}</defs>
<g transform="translate(22 -6)" filter="url(#gpB8)" opacity=".16"><path d="M128 270L200 430 272 270Z" fill="#2A1218"/><circle cx="200" cy="225" r="70" fill="#2A1218"/></g>${sh(200,30,422)}
<g transform="rotate(5 200 425)">${head}<path d="M118 262L200 428 286 256 250 276 200 268 150 278Z" fill="url(#${u}k)"/><path d="M136 270L200 428 258 270 226 282 172 284Z" fill="url(#${u}p)" opacity=".92"/><path d="M150 278L200 428" stroke="#000" stroke-opacity=".08"/>
<path d="M184 360Q200 366 218 358" fill="none" stroke="#C9B49A" stroke-width="3"/><path d="M200 362q-16 6-22 20M200 362q14 8 18 22" fill="none" stroke="#C9B49A" stroke-width="2"/>
<g transform="rotate(-12 227 381)"><rect x="210" y="372" width="34" height="18" rx="2" fill="#FBF7F2"/>${T(227,384,5,"GIFT PICK",{ls:1.2,fill:"#8A7A80"})}</g></g>`},

  letter:(u,s)=>{const r=rnd(3);const seal=[...Array(18)].map((_,i)=>{const t=i/18*Math.PI*2,rr=15+r()*3;return `${(210+rr*Math.cos(t)).toFixed(1)},${(352+rr*Math.sin(t)).toFixed(1)}`}).join(" ");
    return `<defs>${sheet(u+"e",s.a)}<radialGradient id="${u}s" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="${lt(s.b,.25)}"/><stop offset="1" stop-color="${dk(s.b,.25)}"/></radialGradient></defs>${sh(236,78,402,.6)}
<g transform="rotate(7 236 300)"><rect x="160" y="196" width="152" height="206" rx="2" fill="#FBF8F3"/><rect x="160" y="196" width="152" height="206" rx="2" fill="none" stroke="#000" stroke-opacity=".05"/>${T(236.8,276.8,17,s.l,{serif:1,fill:"#fff",op:.9})}${T(236,276,17,s.l,{serif:1,fill:"#8E7F84"})}<line x1="212" y1="292" x2="260" y2="292" stroke="#D6C8C2"/>${T(236,310,6.5,"LETTERPRESS CARD",{ls:2.4,fill:"#9A8B90"})}${T(236,386,5,"GIFT PICK",{ls:1.6,fill:"#B3A5AA"})}</g>
${sh(196,104,420)}<rect x="92" y="290" width="208" height="130" rx="3" fill="url(#${u}e)"/><path d="M92 420L180 360M300 420L230 362" stroke="#000" stroke-opacity=".07"/>
<path d="M92 292L210 352L300 292Z" fill="${lt(s.a,.18)}" stroke="#000" stroke-opacity=".08"/>
<polygon points="${seal}" fill="url(#${u}s)"/><circle cx="210" cy="352" r="9" fill="none" stroke="${dk(s.b,.35)}" stroke-opacity=".5"/>${T(210,355.5,8,"G",{serif:1,fill:dk(s.b,.4),op:.8})}
<path d="M120 300q4 40 0 120" stroke="#C9A97F" stroke-width="2.4" fill="none" opacity=".85"/>`},

  diffuser:(u,s)=>{const bottle="M160 304H240V316C268 324 276 342 276 366V402C276 414 266 420 250 420H150C134 420 124 414 124 402V366C124 342 132 324 160 316Z";
    return `<defs><clipPath id="${u}c"><path d="${bottle}"/></clipPath>${cyl(u+"lq",s.b,.75)}</defs>${sh(200,80)}
${[[-24,-162],[-14,-176],[-4,-184],[8,-182],[18,-172],[28,-158],[0,-170],[-30,-140]].map(([dx,dy],i)=>`<line x1="200" y1="310" x2="${(200+dx*3.1).toFixed(1)}" y2="${310+dy}" stroke="${i%2?'#7E5E40':'#94744F'}" stroke-width="3" stroke-linecap="round"/>`).join("")}
<path d="${bottle}" fill="${lt(s.a,.55)}" fill-opacity=".45" stroke="#fff" stroke-opacity=".75" stroke-width="1.2"/>
<rect x="120" y="356" width="160" height="70" fill="url(#${u}lq)" clip-path="url(#${u}c)"/><ellipse cx="200" cy="356" rx="74" ry="5" fill="${lt(s.b,.4)}" opacity=".6" clip-path="url(#${u}c)"/>
<rect x="170" y="286" width="60" height="22" rx="3" fill="url(#gpBlack)"/>
<rect x="158" y="364" width="84" height="34" fill="#FBF7F2"/>${T(200,379,9,s.l,{serif:1})}${T(200,391,5,"REED DIFFUSER · 200ML",{ls:1.2,fill:"#7A6A70"})}
${spec(134,330,9,80,.7)}${spec(262,340,4,64,.35)}<ellipse cx="226" cy="424" rx="40" ry="4" fill="${lt(s.b,.2)}" opacity=".35" filter="url(#gpB3)"/>`},

  mug:(u,s)=>{const clay="#D9C4AE";const r=rnd(11);
    const m=(x,y,w,h,glaze,id)=>{const sp=[...Array(26)].map(()=>`<circle cx="${(x+4+r()*(w-8)).toFixed(1)}" cy="${(y+6+r()*(h-10)).toFixed(1)}" r="${(.6+r()*.9).toFixed(1)}" fill="#5A4636" opacity=".35"/>`).join("");
      const drip=`M${x} ${y+h*.55}`+[...Array(6)].map((_,i)=>{const xx=x+(i+1)*w/6;return ` Q${(xx-w/12).toFixed(1)} ${(y+h*.55+(i%2?14:4)).toFixed(1)} ${xx.toFixed(1)} ${(y+h*.55+(i%2?2:8)).toFixed(1)}`}).join("")+` V${y} H${x}Z`;
      return `<defs>${cyl(id+"c",clay)}${cyl(id+"g",glaze)}<clipPath id="${id}k"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14"/></clipPath></defs>
<path d="M${x+w-2} ${y+h*.22}C${x+w+44} ${y+h*.22} ${x+w+44} ${y+h*.72} ${x+w-2} ${y+h*.72}" fill="none" stroke="${dk(glaze,.12)}" stroke-width="14" stroke-linecap="round"/>
<g clip-path="url(#${id}k)"><rect x="${x}" y="${y}" width="${w}" height="${h}" fill="url(#${id}c)"/><path d="${drip}" fill="url(#${id}g)"/>${sp}</g>
<ellipse cx="${x+w/2}" cy="${y+3}" rx="${w/2}" ry="9" fill="${lt(glaze,.1)}"/><ellipse cx="${x+w/2}" cy="${y+4}" rx="${w/2-6}" ry="6.5" fill="${dk(glaze,.35)}"/>${spec(x+12,y+14,8,h-30,.4)}`;};
    return `${sh(236,62,404,.8)}${m(178,246,116,158,s.b,u+"b")}${sh(166,62,420)}${m(108,270,116,150,s.a,u+"a")}<g filter="url(#gpB3)" stroke="#fff" stroke-width="3.5" fill="none" opacity=".6" stroke-linecap="round"><path d="M158 254C146 238 170 230 158 210"/><path d="M180 256C170 242 190 236 180 220"/></g>`}
};
const optVals = p => (p.opt ? p.opt.values : []).map(v => typeof v === "string" ? {name:v} : v);
function artSpec(p,opt){
  const s = {...p.art}; const v = optVals(p).find(x=>x.name===opt) || optVals(p)[0];
  if(v){ if(v.a) s.a=v.a; if(v.b) s.b=v.b; if(p.opt.onArt){ s.l = v.l ?? v.name; if(v.e) s.e = v.e; } }
  return s;
}
function art(p,o={}){ const u="a"+(UID++), s=artSpec(p,o.opt); return scene(u, s.bg, ART[s.kind](u,s), o.vb||"0 0 400 500", p.name+(o.label?" "+o.label:"")); }
function wrapShot(p,opt){
  const s=artSpec(p,opt), u="w"+(UID++), rose="#AE3650";
  const body=`<defs>${sheet(u+"f",rose)}${sheet(u+"l",dk(rose,.12))}</defs>${sh(200,112)}
<rect x="96" y="300" width="208" height="120" fill="url(#${u}f)"/><rect x="84" y="270" width="232" height="40" rx="3" fill="url(#${u}l)"/><rect x="84" y="306" width="232" height="5" fill="#000" opacity=".12"/>
<rect x="190" y="270" width="20" height="150" fill="#F3E1D6"/><rect x="190" y="270" width="20" height="150" fill="url(#gpSpec)" opacity=".25"/>
<path d="M200 270C170 228 140 236 150 260 156 274 184 274 200 270Z" fill="#F3E1D6"/><path d="M200 270C230 228 260 236 250 260 244 274 216 274 200 270Z" fill="#EEDACD"/>
<path d="M200 270L184 318 194 312 197 324Z" fill="#E6CDBE"/><path d="M200 270L216 318 206 312 203 324Z" fill="#E6CDBE"/><circle cx="200" cy="270" r="9" fill="#E6CDBE"/>
<g stroke="#9C8264" stroke-width="1.6" stroke-linecap="round"><path d="M214 268L262 214M226 256L250 222"/></g>${[[254,222],[246,232],[238,242]].map(([x,y],i)=>`<ellipse cx="${x}" cy="${y}" rx="6" ry="2.6" transform="rotate(${i%2?30:-50} ${x} ${y})" fill="#BFA685"/>`).join("")}<circle cx="262" cy="214" r="4" fill="${rose}"/>
<path d="M232 300C250 314 262 336 266 352" stroke="#C9B09C" stroke-width="1.2" fill="none"/>
<g transform="rotate(-8 290 372)"><rect x="232" y="350" width="120" height="50" rx="4" fill="#FBF7F2"/><circle cx="244" cy="375" r="3.5" fill="none" stroke="#C9B09C" stroke-width="1.2"/>${T(298,371,12,"for you",{serif:1,fill:"#8C2A3E"})}${T(298,388,6.5,esc(p.name),{fill:"#6E5F65"})}</g>`;
  return scene(u, s.bg, body, "0 0 400 500", p.name+" 선물 포장 모습");
}
/* 추가 상품 그림 */
Object.assign(ART, {
  wine:(u,s)=>{const glass=(cx,y0,wine,id)=>{const bowl=`M${cx-38} ${y0}C${cx-41} ${y0+62} ${cx-30} ${y0+100} ${cx} ${y0+104}C${cx+30} ${y0+100} ${cx+41} ${y0+62} ${cx+38} ${y0}Z`;const fy=y0+104,base=420-(cx>200?14:0);
    return `<defs><clipPath id="${id}"><path d="${bowl}"/></clipPath><linearGradient id="${id}w" x1="0" x2="1"><stop offset="0" stop-color="${dk(s.a,.35)}"/><stop offset=".4" stop-color="${lt(s.a,.15)}"/><stop offset="1" stop-color="${dk(s.a,.45)}"/></linearGradient></defs>${sh(cx,36,base,.6)}
<ellipse cx="${cx}" cy="${base-2}" rx="34" ry="6" fill="#fff" fill-opacity=".35" stroke="#fff" stroke-opacity=".8"/><rect x="${cx-2.5}" y="${fy}" width="5" height="${base-fy-2}" fill="#fff" fill-opacity=".45" stroke="#fff" stroke-opacity=".6" stroke-width=".6"/>
<path d="${bowl}" fill="#fff" fill-opacity=".22" stroke="#fff" stroke-opacity=".85" stroke-width="1.2"/>${wine?`<rect x="${cx-45}" y="${y0+58}" width="90" height="60" fill="url(#${id}w)" clip-path="url(#${id})"/><ellipse cx="${cx}" cy="${y0+58}" rx="36" ry="4" fill="${lt(s.a,.25)}" clip-path="url(#${id})"/>`:""}
${spec(cx-30,y0+8,6,74,.8)}${spec(cx+22,y0+14,3,50,.5)}<ellipse cx="${cx}" cy="${y0}" rx="38" ry="4.5" fill="none" stroke="#fff" stroke-opacity=".9"/>`};
    return glass(248,186,0,u+"b")+glass(160,206,1,u+"a")+`<ellipse cx="150" cy="424" rx="34" ry="4" fill="${s.a}" opacity=".18" filter="url(#gpB3)"/>`;},

  jewel:(u,s)=>{return `<defs>${sheet(u+"v",s.a)}<radialGradient id="${u}ag" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="#FAFAFB"/><stop offset=".6" stop-color="${s.b}"/><stop offset="1" stop-color="#7E8188"/></radialGradient></defs>${sh(200,100)}
<rect x="110" y="206" width="180" height="124" rx="10" fill="url(#${u}v)"/><rect x="122" y="218" width="156" height="100" rx="4" fill="#F4ECE6"/>${T(200,262,8,"GIFT PICK",{ls:4,fill:"url(#gpGoldH)",w:500})}${T(200,276,5.5,"STERLING SILVER 925",{ls:1.6,fill:"#A8979D"})}
<rect x="104" y="322" width="192" height="98" rx="8" fill="url(#${u}v)"/><rect x="104" y="322" width="192" height="6" fill="#000" opacity=".2"/><rect x="118" y="330" width="164" height="40" rx="18" fill="${lt(s.a,.15)}"/><rect x="118" y="330" width="164" height="14" rx="7" fill="#fff" opacity=".08"/>
<path d="M150 300Q200 392 250 300" fill="none" stroke="url(#${u}ag)" stroke-width="1.6"/><path d="M150 300Q200 392 250 300" fill="none" stroke="#fff" stroke-width=".5" stroke-dasharray="1 2" opacity=".8"/>
<circle cx="200" cy="354" r="13" fill="url(#${u}ag)"/><circle cx="200" cy="354" r="13" fill="none" stroke="#fff" stroke-opacity=".6"/>${T(200,358.5,11,s.l,{serif:1,fill:"#6A6D74"})}<circle cx="200" cy="339" r="2.6" fill="none" stroke="url(#${u}ag)" stroke-width="1.4"/>`},

  macaron:(u,s)=>{const mac=(cx,cy,c,id)=>`<defs>${cyl(id,c)}</defs><rect x="${cx-28}" y="${cy+4}" width="56" height="12" rx="6" fill="url(#${id})"/><rect x="${cx-29}" y="${cy+1}" width="58" height="4" rx="2" fill="${lt(c,.2)}"/><rect x="${cx-26}" y="${cy-4}" width="52" height="7" rx="3" fill="${lt(c,.55)}"/><path d="M${cx-28} ${cy-3}Q${cx-28} ${cy-24} ${cx} ${cy-25}Q${cx+28} ${cy-24} ${cx+28} ${cy-3}Z" fill="url(#${id})"/><rect x="${cx-29}" y="${cy-6}" width="58" height="4" rx="2" fill="${lt(c,.2)}"/><ellipse cx="${cx-9}" cy="${cy-17}" rx="9" ry="3" fill="#fff" opacity=".3"/>`;
    const cs=[s.a,s.b,"#B9C7A8","#C9A27E","#E6C9D9","#F1E6D4"];
    return `<defs>${sheet(u+"bx","#FBF7F2")}</defs>${sh(200,130,418,.6)}<rect x="96" y="250" width="208" height="110" rx="4" fill="url(#${u}bx)"/><rect x="190" y="250" width="20" height="110" fill="${s.a}"/>${T(150,312,7,"GIFT PICK",{ls:3,fill:"#8A7A80"})}${T(150,324,5.5,"MACARON 12",{ls:2,fill:"#A8979D"})}
${sh(150,30,420,.8)}${mac(150,402,cs[0],u+"1")}${mac(150,376,cs[1],u+"2")}${mac(150,350,cs[2],u+"3")}${sh(248,30,420,.8)}${mac(248,402,cs[3],u+"4")}${mac(248,376,cs[4],u+"5")}<g transform="rotate(-14 312 404)">${mac(312,410,cs[5],u+"6")}</g>`},

  choco:(u,s)=>{const ball=(cx,cy,r,c,id,dr)=>`<defs><radialGradient id="${id}" cx=".35" cy=".3" r=".75"><stop offset="0" stop-color="${lt(c,.35)}"/><stop offset=".6" stop-color="${c}"/><stop offset="1" stop-color="${dk(c,.45)}"/></radialGradient></defs><ellipse cx="${cx}" cy="${cy+r*.85}" rx="${r}" ry="${r*.25}" fill="#000" opacity=".35" filter="url(#gpB3)"/><circle cx="${cx}" cy="${cy}" r="${r}" fill="url(#${id})"/>${dr==1?`<path d="M${cx-r*.7} ${cy-r*.2}q${r*.35} -${r*.3} ${r*.7} 0t${r*.7} 0" stroke="${lt(c,.5)}" stroke-width="1.4" fill="none"/>`:dr==2?`<circle cx="${cx+r*.2}" cy="${cy-r*.45}" r="${r*.2}" fill="url(#gpGold)"/>`:`${[...Array(5)].map((_,i)=>`<circle cx="${cx-r*.5+i*r*.25}" cy="${cy-r*.3+(i%2)*3}" r="1.1" fill="${lt(c,.6)}"/>`).join("")}`}`;
    const cs=[s.b,s.a,"#C99A6B"];let out="";
    [[300,16],[332,18],[364,20]].forEach(([y,r],row)=>{[148,200,252].forEach((x,i)=>{out+=ball(x,y,r,cs[(i+row)%3],u+"b"+row+i,(i+row)%3)})});
    return `<defs>${sheet(u+"bx","#3A2A26")}${sheet(u+"ld",s.a)}</defs>${sh(200,112)}<g transform="rotate(-4 200 250)"><rect x="104" y="170" width="192" height="120" rx="4" fill="url(#${u}ld)"/>${T(200,224,13,"Truffle",{serif:1,fill:"#fff",op:.9})}${T(200,240,6,"GIFT PICK CHOCOLATIER · 9",{ls:2,fill:"#fff",op:.75})}</g>
<rect x="96" y="290" width="208" height="130" rx="4" fill="url(#${u}bx)"/><rect x="104" y="284" width="192" height="104" rx="3" fill="${dk("#3A2A26",.25)}"/>${out}<rect x="96" y="388" width="208" height="32" rx="3" fill="url(#${u}bx)"/>${T(200,408,6,"HANDMADE IN SEOUL",{ls:2.4,fill:"url(#gpGoldH)"})}`},

  book:(u,s)=>{const r=rnd(5);return `<defs>${sheet(u+"c",s.a)}</defs>${sh(208,96,420)}
<rect x="282" y="214" width="14" height="204" rx="2" fill="#F4EEE4"/>${[...Array(12)].map((_,i)=>`<line x1="283" y1="${218+i*16}" x2="295" y2="${218+i*16}" stroke="#D8CFC3" stroke-width=".6"/>`).join("")}
<rect x="118" y="208" width="170" height="212" rx="6" fill="url(#${u}c)"/>${[...Array(40)].map(()=>`<line x1="118" y1="${(210+r()*208).toFixed(1)}" x2="288" y2="${(210+r()*208).toFixed(1)}" stroke="#fff" stroke-opacity=".05"/>`).join("")}
<rect x="118" y="208" width="14" height="212" rx="4" fill="${dk(s.a,.18)}"/><rect x="262" y="208" width="9" height="212" fill="${dk(s.a,.5)}"/>
<text x="196" y="274" text-anchor="middle" font-family="Gowun Batang,serif" font-size="26" fill="url(#gpGoldH)">${s.l||"2027"}</text><text x="196" y="292" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="6.5" letter-spacing="3" fill="url(#gpGoldH)">${s.e||"GIFT PICK DIARY"}</text>
<path d="M210 420v28l7-6 7 6v-28" fill="${s.b}"/><ellipse cx="170" cy="250" rx="50" ry="30" fill="#fff" opacity=".08" filter="url(#gpB8)"/>
<g transform="rotate(-62 320 404)"><rect x="262" y="400" width="110" height="8" rx="2" fill="#E9C46A"/><path d="M262 400L248 404L262 408Z" fill="#E7D3B5"/><path d="M252 403L248 404L252 405Z" fill="#333"/><rect x="364" y="400" width="10" height="8" fill="#C9C9CF"/></g>`},

  plant:(u,s)=>{const r=rnd(19);const leaves=[...Array(70)].map(()=>{const a=r()*Math.PI*2,d=Math.sqrt(r())*72,x=(200+Math.cos(a)*d*1.15).toFixed(1),y=(222+Math.sin(a)*d*.8).toFixed(1),rot=Math.round(r()*180),c=r()>.5?s.a:lt(s.a,.25);return `<ellipse cx="${x}" cy="${y}" rx="11" ry="3.2" transform="rotate(${rot} ${x} ${y})" fill="${r()>.8?dk(s.a,.2):c}"/>`}).join("");
    return `<defs>${cyl(u+"p",s.b)}</defs><g transform="translate(18 -4)" filter="url(#gpB16)" opacity=".14"><ellipse cx="200" cy="222" rx="84" ry="62" fill="#2A1218"/></g>${sh(200,52)}
<path d="M196 330C194 300 200 290 192 262M198 312C210 294 220 280 232 262M194 290C180 276 172 262 160 248" stroke="#6E5A44" stroke-width="5" fill="none" stroke-linecap="round"/>${leaves}
<path d="M146 326H254L242 418Q241 420 238 420H162Q159 420 158 418Z" fill="url(#${u}p)"/><rect x="142" y="320" width="116" height="14" rx="3" fill="${lt(s.b,.2)}"/><ellipse cx="200" cy="322" rx="54" ry="4" fill="#5A4636" opacity=".8"/>${T(200,376,6,"GIFT PICK GREEN",{ls:2.4,fill:"#9A8B80"})}${spec(158,336,7,74,.4)}`},

  lamp:(u,s)=>`<defs>${cyl(u+"b",s.b)}<radialGradient id="${u}g"><stop offset="0" stop-color="#FFE2B8" stop-opacity=".9"/><stop offset="1" stop-color="#FFE2B8" stop-opacity="0"/></radialGradient><radialGradient id="${u}s" cx=".5" cy=".75" r=".75"><stop offset="0" stop-color="#FFF6E8"/><stop offset=".6" stop-color="${s.a}"/><stop offset="1" stop-color="${dk(s.a,.15)}"/></radialGradient></defs>
<circle cx="200" cy="250" r="150" fill="url(#${u}g)"/><ellipse cx="200" cy="420" rx="150" ry="22" fill="#FFE6C4" opacity=".45" filter="url(#gpB16)"/>${sh(200,46,420,.7)}
<path d="M182 300H218L224 412Q224 420 216 420H184Q176 420 176 412Z" fill="url(#${u}b)"/><ellipse cx="200" cy="300" rx="18" ry="4" fill="${dk(s.b,.2)}"/>
<path d="M118 300C118 234 156 196 200 196C244 196 282 234 282 300Q200 314 118 300Z" fill="url(#${u}s)"/><path d="M118 300Q200 314 282 300" fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="1.5"/>
<ellipse cx="166" cy="232" rx="26" ry="12" fill="#fff" opacity=".35" filter="url(#gpB3)"/>${T(200,376,5.5,"GIFT PICK",{ls:2.4,fill:dk(s.b,.4)})}`,

  towel:(u,s)=>{const t=(y,c,h,id)=>`<defs>${cylV(id,c)}</defs><rect x="104" y="${y}" width="196" height="${h}" rx="${h/2}" fill="url(#${id})"/><rect x="112" y="${y+3}" width="180" height="${h-6}" rx="${(h-6)/2}" fill="none" stroke="${dk(c,.12)}" stroke-dasharray="1 2.4" stroke-width="2.2" opacity=".55"/><rect x="104" y="${y+h-9}" width="196" height="4" fill="${dk(c,.08)}" opacity=".6"/>`;
    return `${sh(202,104)}${t(372,"#F6F2EC",48,u+"1")}${t(326,s.a,48,u+"2")}${t(280,s.b,48,u+"3")}${t(236,"#F6F2EC",46,u+"4")}
<rect x="176" y="232" width="52" height="190" fill="#D9C2A2"/><rect x="176" y="232" width="52" height="190" fill="url(#gpSpec)" opacity=".15"/>${T(202,326,6,"HOTEL",{ls:3,fill:"#5A4636",w:500})}${T(202,336,5,"TOWEL · 3",{ls:2,fill:"#6E5F55"})}${T(202,350,4.5,"GIFT PICK",{ls:1.6,fill:"#8A7A70"})}
<g stroke="#7D8A62" stroke-width="2" stroke-linecap="round"><path d="M210 232L268 198"/></g>${[[226,224],[238,216],[250,208],[262,202],[232,214],[256,198]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="6" fill="#9DAA8C"/>`).join("")}`},

  mask:(u,s)=>{const m="M110 300C110 250 190 245 200 272C210 245 290 250 290 300C290 346 226 352 200 330C174 352 110 346 110 300Z";
    return `<defs>${sheet(u+"m",s.a)}${sheet(u+"p",s.b)}<linearGradient id="${u}sh" x1="0" y1="0" x2="1" y2=".6"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".45" stop-color="#fff" stop-opacity=".35"/><stop offset=".6" stop-color="#fff" stop-opacity="0"/></linearGradient></defs>
${sh(244,62,360,.6)}<g transform="rotate(4 244 300)"><rect x="186" y="214" width="118" height="146" rx="10" fill="url(#${u}p)"/><path d="M196 230Q245 244 294 230" stroke="${dk(s.b,.2)}" stroke-width="1.4" fill="none"/><circle cx="210" cy="234" r="3" fill="${dk(s.b,.3)}"/><circle cx="280" cy="234" r="3" fill="${dk(s.b,.3)}"/>${T(245,300,7,"SILK SLEEP",{ls:2.6,fill:dk(s.b,.45)})}${T(245,312,5,"GIFT PICK",{ls:1.8,fill:dk(s.b,.35)})}</g>
<g transform="translate(0 194) scale(1 .62)"><path d="M114 296C86 238 128 214 200 216C272 214 314 238 286 296" fill="none" stroke="${dk(s.a,.25)}" stroke-width="4.5"/><path d="${m}" fill="#2A1218" opacity=".35" filter="url(#gpB8)" transform="translate(6 22)"/><path d="${m}" fill="url(#${u}m)"/><path d="${m}" fill="url(#${u}sh)"/><path d="${m}" fill="none" stroke="${lt(s.a,.35)}" stroke-width="3"/></g>`},

  blanket:(u,s)=>{const r=rnd(23);return `<defs>${cylV(u+"b",s.a)}<radialGradient id="${u}e" cx=".5" cy=".5" r=".55"><stop offset="0" stop-color="${dk(s.a,.25)}"/><stop offset="1" stop-color="${s.a}"/></radialGradient></defs>${sh(210,120)}
<rect x="108" y="298" width="210" height="122" rx="20" fill="url(#${u}b)"/>${[...Array(8)].map((_,i)=>`<path d="M120 ${310+i*14}${[...Array(12)].map(()=>"q8 -5 16 0").join("")}" fill="none" stroke="${dk(s.a,.12)}" stroke-width="1.2" opacity=".7"/>`).join("")}
<ellipse cx="114" cy="359" rx="30" ry="61" fill="url(#${u}e)"/>${[44,32,20,9].map(rr=>`<ellipse cx="114" cy="359" rx="${rr*.5}" ry="${rr}" fill="none" stroke="${lt(s.a,.18)}" stroke-width="2"/>`).join("")}
<rect x="246" y="294" width="20" height="130" rx="3" fill="${s.b}"/><rect x="246" y="294" width="20" height="130" fill="url(#gpSpec)" opacity=".2"/><rect x="242" y="350" width="28" height="22" rx="3" fill="none" stroke="url(#gpGold)" stroke-width="3"/>
${[...Array(9)].map((_,i)=>`<line x1="${318+r()*2}" y1="${306+i*13}" x2="${330+r()*6}" y2="${308+i*13}" stroke="${s.a}" stroke-width="3" stroke-linecap="round"/>`).join("")}<rect x="130" y="300" width="100" height="12" rx="6" fill="#fff" opacity=".1"/>`},

  lip:(u,s)=>`<defs>${cyl(u+"g","#C9A45C")}${cyl(u+"t",dk(s.a,.15))}${cyl(u+"c",s.b)}<linearGradient id="${u}o" x1="0" x2="1"><stop offset="0" stop-color="${dk(s.a,.2)}" stop-opacity=".9"/><stop offset=".3" stop-color="${lt(s.a,.35)}" stop-opacity=".85"/><stop offset="1" stop-color="${dk(s.a,.3)}" stop-opacity=".9"/></linearGradient></defs>
${sh(150,24)}<rect x="132" y="300" width="36" height="120" rx="3" fill="url(#${u}t)"/><rect x="134" y="276" width="32" height="26" fill="url(#${u}g)"/><path d="M138 276V246L162 232V276Z" fill="${s.a}"/><path d="M140 274V248L150 242V274Z" fill="#fff" opacity=".2"/>${T(150,380,5,"GIFT PICK",{ls:1.4,fill:"#F1E4E0",tr:"rotate(-90 150 376)"})}
${sh(222,24,420,.8)}<rect x="206" y="268" width="32" height="152" rx="6" fill="url(#${u}o)"/><rect x="211" y="234" width="22" height="38" rx="4" fill="url(#${u}g)"/><rect x="206" y="330" width="32" height="40" fill="#FBF7F2" opacity=".9"/>${T(222,348,5.5,"LIP OIL",{ls:1.4})}${T(222,358,4.5,"ROSE · 5ml",{fill:"#8A7A80"})}${spec(210,276,5,136,.6)}
${sh(296,44,420,.8)}<ellipse cx="296" cy="420" rx="44" ry="10" fill="${dk(s.b,.2)}"/><rect x="252" y="398" width="88" height="22" fill="url(#${u}c)"/><ellipse cx="296" cy="398" rx="44" ry="10" fill="${lt(s.b,.2)}"/><ellipse cx="296" cy="398" rx="30" ry="6" fill="none" stroke="${dk(s.b,.25)}" stroke-width=".8"/>${T(296,400,6,"LIP BALM",{ls:1.6,fill:dk(s.b,.5),tr:"matrix(1 0 0 .45 0 220)"})}`,

  frame:(u,s)=>`<defs>${sheet(u+"f",s.a)}<linearGradient id="${u}sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F6C9B3"/><stop offset="1" stop-color="${s.b}"/></linearGradient></defs>${sh(206,100,420)}
<path d="M250 300L290 420" stroke="${dk(s.a,.2)}" stroke-width="8" stroke-linecap="round"/>
<g transform="rotate(-3 200 300)"><rect x="112" y="186" width="188" height="234" rx="4" fill="url(#${u}f)"/><rect x="128" y="202" width="156" height="202" fill="#FBF8F3"/><rect x="146" y="222" width="120" height="162" fill="url(#${u}sky)"/>
<circle cx="230" cy="276" r="16" fill="#FFF1DE" opacity=".9"/><path d="M146 330Q180 300 214 324T266 316V384H146Z" fill="#B57F72"/><path d="M146 350Q196 326 240 346T266 342V384H146Z" fill="#8C5D5B"/><path d="M146 368Q200 356 266 366V384H146Z" fill="#6A4448"/>
<rect x="112" y="186" width="188" height="234" rx="4" fill="none" stroke="${dk(s.a,.3)}" stroke-width="1.5"/><rect x="128" y="202" width="156" height="202" fill="none" stroke="#000" stroke-opacity=".08"/><ellipse cx="150" cy="210" rx="50" ry="14" fill="#fff" opacity=".12" filter="url(#gpB8)"/></g>`,

  sachet:(u,s)=>{const bag=(cx,c,id,sc=1)=>`<g transform="translate(${cx} 420) scale(${sc}) translate(${-cx} -420)"><defs>${cyl(id,c)}</defs>${sh(cx,40,420,.8)}<path d="M${cx-34} 318Q${cx-42} 412 ${cx} 418Q${cx+42} 412 ${cx+34} 318Q${cx} 330 ${cx-34} 318Z" fill="url(#${id})"/><path d="M${cx-30} 300Q${cx-34} 318 ${cx-26} 324H${cx+26}Q${cx+34} 318 ${cx+30} 300Q${cx} 292 ${cx-30} 300Z" fill="${lt(c,.12)}"/>${[...Array(6)].map((_,i)=>`<line x1="${cx-20+i*8}" y1="302" x2="${cx-22+i*8.6}" y2="322" stroke="${dk(c,.15)}" stroke-width=".8"/>`).join("")}<path d="M${cx-30} 322Q${cx} 330 ${cx+30} 322" stroke="${s.b}" stroke-width="3" fill="none"/><path d="M${cx+4} 326q12 12 4 26M${cx+4} 326q-4 16 -14 22" stroke="${s.b}" stroke-width="2.4" fill="none"/><rect x="${cx-16}" y="356" width="32" height="20" fill="#FBF7F2" opacity=".9"/>${T(cx,368,4.6,"LAVENDER",{ls:1})}</g>`;
    return bag(140,"#D9CFC0",u+"a",.9)+bag(262,lt(s.b,.45),u+"b",.9)+bag(200,s.a,u+"c")+`<g stroke="#8E8466" stroke-width="1.4"><path d="M286 424L344 394"/></g>${[...Array(7)].map((_,i)=>`<ellipse cx="${300+i*6.6}" cy="${416-i*3.5}" rx="4" ry="2" transform="rotate(-30 ${300+i*6.6} ${416-i*3.5})" fill="${s.b}"/>`).join("")}`},

  honey:(u,s)=>{const sticks=[...Array(10)].map((_,i)=>{const x=150+i*10.5,rot=(i-4.5)*2.4;return `<g transform="rotate(${rot} ${x} 420)"><rect x="${x-4.5}" y="196" width="9" height="220" rx="4.5" fill="${s.a}" opacity=".88"/><rect x="${x-2.5}" y="200" width="2" height="210" fill="#fff" opacity=".45"/><rect x="${x-4.5}" y="196" width="9" height="10" rx="2" fill="${lt(s.a,.4)}"/></g>`}).join("");
    return `<defs>${cyl(u+"k","#D9C2A2")}${cyl(u+"d",s.b)}</defs>${sh(200,72)}<ellipse cx="200" cy="300" rx="60" ry="80" fill="${s.a}" opacity=".18" filter="url(#gpB16)"/>${sticks}<rect x="138" y="322" width="124" height="66" fill="url(#${u}k)"/>${T(200,346,6,"GIFT PICK APIARY",{ls:2.2,fill:"#5A4636"})}${T(200,364,13,s.l||"꿀 스틱",{serif:1,fill:"#3B2A30"})}${T(200,378,5.5,s.e||"ACACIA · 12g × 10",{ls:1.4,fill:"#6E5F55"})}
${sh(300,50,420,.6)}<g transform="rotate(-18 300 410)"><rect x="252" y="404" width="64" height="8" rx="4" fill="url(#${u}d)"/>${[0,1,2,3].map(i=>`<ellipse cx="${326+i*7}" cy="408" rx="4" ry="9" fill="${dk(s.b,.1)}"/>`).join("")}<ellipse cx="350" cy="408" rx="5" ry="7" fill="${dk(s.b,.15)}"/></g><ellipse cx="342" cy="420" rx="10" ry="3" fill="${s.a}" opacity=".7"/>`},

  socks:(u,s)=>{const sock=(x,y,c,str,id,rot)=>{const p=`M${x} ${y}H${x+44}V${y+108}Q${x+44} ${y+124} ${x+60} ${y+124}H${x+98}Q${x+114} ${y+124} ${x+114} ${y+142}Q${x+114} ${y+160} ${x+96} ${y+160}H${x+30}Q${x} ${y+160} ${x} ${y+130}Z`;
      return `<g transform="rotate(${rot} ${x+50} ${y+80})"><defs>${sheet(id,c)}<clipPath id="${id}k"><path d="${p}"/></clipPath></defs><path d="${p}" fill="#2A1218" opacity=".25" filter="url(#gpB8)" transform="translate(4 8)"/><path d="${p}" fill="url(#${id})"/><g clip-path="url(#${id}k)">${[...Array(9)].map((_,i)=>`<line x1="${x+4+i*4.6}" y1="${y}" x2="${x+4+i*4.6}" y2="${y+24}" stroke="${dk(c,.15)}" stroke-width="1.2"/>`).join("")}<rect x="${x}" y="${y+34}" width="44" height="8" fill="${str}"/><rect x="${x}" y="${y+48}" width="44" height="5" fill="${str}"/><path d="M${x+86} ${y+124}H${x+120}V${y+170}H${x+86}Z" fill="${str}"/><path d="M${x} ${y+110}Q${x+20} ${y+108} ${x+28} ${y+130}Q${x+26} ${y+160} ${x} ${y+160}Z" fill="${str}" opacity=".9"/></g></g>`};
    return sh(206,118,410,.7)+sock(108,226,"#E9DFD2",s.a,u+"a",-10)+sock(150,236,s.a,s.b,u+"b",-2)+sock(190,244,"#3F4650",s.b,u+"c",6)+`<rect x="186" y="258" width="34" height="176" fill="#FBF7F2" transform="rotate(4 203 340)"/>${T(203,334,5.5,"WOOL SOCKS",{ls:1.6,tr:"rotate(4 203 340)"})}${T(203,344,4.5,"3 PAIRS · GIFT PICK",{ls:1,fill:"#8A7A80",tr:"rotate(4 203 340)"})}`},

  keyring:(u,s)=>`<defs>${sheet(u+"l",s.a)}</defs>${sh(206,96,420,.7)}
<g transform="rotate(-18 200 330)"><path d="M150 300H300Q316 300 316 316V344Q316 360 300 360H150Z" fill="#2A1218" opacity=".3" filter="url(#gpB8)" transform="translate(6 12)"/><path d="M150 300H300Q316 300 316 316V344Q316 360 300 360H150Z" fill="url(#${u}l)"/><path d="M156 306H298Q308 306 308 316V344Q308 354 298 354H156" fill="none" stroke="${lt(s.a,.35)}" stroke-dasharray="4 3" stroke-width="1.2"/>
${T(255.8,337.8,20,s.l,{serif:1,fill:"#fff",op:.16})}${T(255,337,20,s.l,{serif:1,fill:dk(s.a,.42),op:.8})}<circle cx="168" cy="330" r="6" fill="url(#gpGold)"/><circle cx="168" cy="330" r="2.4" fill="${dk(s.b,.4)}"/>
<circle cx="126" cy="330" r="28" fill="none" stroke="url(#gpGoldH)" stroke-width="5"/><path d="M146 318Q152 330 146 342" stroke="url(#gpGoldH)" stroke-width="5" fill="none"/></g>
<g transform="rotate(32 120 400)"><circle cx="96" cy="390" r="16" fill="none" stroke="url(#gpGoldH)" stroke-width="7"/><rect x="110" y="386" width="64" height="9" rx="2" fill="url(#gpGold)"/><path d="M152 395h6v8h5v-8h5v10h6v-10" fill="url(#gpGold)"/></g>`
});
function heroArt(){
  return `<svg viewBox="0 0 520 560" role="img" aria-label="리본을 묶은 선물 상자와 메시지 태그, 드라이플라워 화병" preserveAspectRatio="xMidYMid slice">
  <defs><linearGradient id="hbg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F6EBE8"/><stop offset="1" stop-color="#ECD9D5"/></linearGradient>
  <linearGradient id="hbox" x1="0" x2="1"><stop offset="0" stop-color="#B83B55"/><stop offset="1" stop-color="#8C2A3E"/></linearGradient>
  <radialGradient id="hl" cx=".3" cy=".2" r=".8"><stop offset="0" stop-color="#fff" stop-opacity=".7"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient></defs>
  <rect width="520" height="560" fill="url(#hbg)"/>
  <path d="M110 472V212A150 150 0 0 1 410 212V472Z" fill="#fff" opacity=".5"/>
  <rect width="520" height="560" fill="url(#hl)"/>
  <rect y="472" width="520" height="88" fill="#E3CBC6"/>
  <ellipse cx="262" cy="476" rx="190" ry="14" fill="#5A2A35" opacity=".14"/>
  <g stroke="#9C8264" stroke-width="2.2" fill="none" stroke-linecap="round"><path d="M372 312C366 260 344 214 322 172M372 312C378 250 384 196 378 138M372 312C390 268 410 236 432 206"/></g>
  ${[[330,186],[340,206],[350,230],[380,156],[378,186],[382,216],[420,218],[404,240]].map(([x,y],i)=>`<ellipse cx="${x}" cy="${y}" rx="9" ry="4" transform="rotate(${i%2?35:-35} ${x} ${y})" fill="#BFA685"/>`).join("")}
  <circle cx="322" cy="170" r="5" fill="#AE3650"/><circle cx="378" cy="136" r="5" fill="#C9707F"/><circle cx="432" cy="204" r="5" fill="#AE3650"/>
  <path d="M360 472C348 472 342 462 342 448V362C342 346 352 338 360 332V304H384V332C392 338 402 346 402 362V448C402 462 396 472 384 472Z" fill="#F7F0EA"/>
  <rect x="350" y="350" width="8" height="100" rx="4" fill="#fff" opacity=".7"/>
  <rect x="150" y="326" width="196" height="146" fill="url(#hbox)"/>
  <rect x="136" y="300" width="224" height="42" rx="4" fill="#9A2F44"/>
  <rect x="136" y="338" width="224" height="6" fill="#000" opacity=".08"/>
  <rect x="238" y="300" width="20" height="172" fill="#F3E1D6"/>
  <rect x="158" y="352" width="8" height="108" rx="4" fill="#fff" opacity=".12"/>
  <path d="M248 300C218 258 190 268 200 292 206 306 232 304 248 300Z" fill="#F3E1D6"/>
  <path d="M248 300C278 258 306 268 296 292 290 306 264 304 248 300Z" fill="#F3E1D6"/>
  <path d="M248 300C230 286 214 282 210 290M248 300C266 286 282 282 286 290" stroke="#DCC3B4" stroke-width="2" fill="none"/>
  <path d="M248 300L230 344 240 339 243 350Z" fill="#E6CDBE"/><path d="M248 300L266 344 256 339 253 350Z" fill="#E6CDBE"/>
  <circle cx="248" cy="300" r="9" fill="#E6CDBE"/>
  <path d="M296 296C312 312 318 338 324 362" stroke="#C9B09C" stroke-width="1.5" fill="none"/>
  <g transform="rotate(-12 340 384)"><rect x="300" y="362" width="84" height="46" rx="4" fill="#FBF7F2"/><circle cx="312" cy="385" r="4" fill="none" stroke="#C9B09C" stroke-width="1.5"/><text x="350" y="391" text-anchor="middle" font-family="Gowun Batang,serif" font-size="15" fill="#8C2A3E">for you</text></g>
  <g transform="rotate(-8 108 452)"><rect x="56" y="432" width="104" height="40" rx="3" fill="#FBF7F2"/><path d="M56 434 108 456 160 434" fill="none" stroke="#D9C8C0" stroke-width="1.5"/><circle cx="108" cy="456" r="6" fill="#AE3650"/></g>
  </svg>`;
}

/* ---------------- 공통 ---------------- */
const $ = s => document.querySelector(s);
const won = n => n.toLocaleString("ko-KR") + "원";
const byId = id => PRODUCTS.find(p => p.id === id);
const ssUrl = p => p.ss ? CONFIG.smartstore.replace(/\/$/,"") + "/products/" + p.ss : CONFIG.smartstore;
const esc = s => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
let toastT;
function toast(msg){const t=$("#toast");t.textContent=msg;t.classList.add("show");clearTimeout(toastT);toastT=setTimeout(()=>t.classList.remove("show"),2200);}
async function copyText(text, el){
  try{ await navigator.clipboard.writeText(text); toast("복사했어요"); }
  catch(e){ if(el){const r=document.createRange();r.selectNodeContents(el);const s=getSelection();s.removeAllRanges();s.addRange(r);} toast("선택된 글자를 길게 눌러 복사하세요"); }
}

/* ---------------- 장바구니 ---------------- */
let cart = {};
try{ cart = JSON.parse(localStorage.getItem("gp-cart")||"{}") || {}; }catch(e){ cart = {}; }
Object.keys(cart).forEach(k=>{ if(!byId(k.split("::")[0])) delete cart[k]; });
function saveCart(){ try{ localStorage.setItem("gp-cart", JSON.stringify(cart)); }catch(e){} }
const cartItems = () => Object.entries(cart).map(([k,q])=>{ const [id,opt="",eng=""]=k.split("::"); return {k,p:byId(id),q,opt,eng}; }).filter(x=>x.p&&x.q>0);
const itemOpt = x => [x.opt, x.eng ? `각인 “${x.eng}”` : ""].filter(Boolean).join(" · ");
const cartQty = () => cartItems().reduce((s,x)=>s+x.q,0);
const subtotal = () => cartItems().reduce((s,x)=>s+x.p.price*x.q,0);
function addToCart(id, q=1, opt, eng=""){ if(opt===undefined){ const v=optVals(byId(id)); opt = v[0] ? v[0].name : ""; } const k=[id,opt,eng].join("::"); cart[k]=(cart[k]||0)+q; saveCart(); updateBadge(); toast(`‘${byId(id).name}’을 장바구니에 담았어요`); if($("#cartDlg").open) renderCart(); }
function setQty(id,q){ if(q<=0) delete cart[id]; else cart[id]=Math.min(q,20); saveCart(); updateBadge(); renderCart(); }
function updateBadge(){ const n=cartQty(); $("#cartCount").textContent = n; $("#cartCount2").textContent = n; }
function renderCart(){
  const items = cartItems(), body=$("#cartBody"), foot=$("#cartFoot");
  if(!items.length){
    body.innerHTML = `<div class="cart-empty"><p class="serif" style="font-size:20px;color:var(--ink);margin:0 0 8px">아직 담은 선물이 없어요</p><p style="margin:0 0 20px">질문 네 개면 그 사람과 궁합 좋은 선물이 나와요.</p><a class="btn btn-primary" href="#app" data-close>선물 궁합 보러 가기</a></div>`;
    foot.innerHTML = ""; foot.hidden = true; return;
  }
  foot.hidden = false;
  body.innerHTML = items.map(x=>{const {p,q}=x, k=esc(x.k), o=itemOpt(x); return `<div class="c-item"><div class="thumb">${art(p,{opt:x.opt})}</div><div style="min-width:0"><h4>${p.name}</h4>${o?`<div class="hint">${esc(o)}</div>`:""}<div class="price" style="font-size:14px">${won(p.price*q)}</div><div class="qty"><button type="button" data-q="${k}" data-d="-1" aria-label="${p.name} 수량 줄이기">−</button><span>${q}</span><button type="button" data-q="${k}" data-d="1" aria-label="${p.name} 수량 늘리기">+</button></div></div><button class="rm" type="button" data-rm="${k}">삭제</button></div>`}).join("");
  const sub = subtotal(), left = Math.max(0, CONFIG.freeFrom - sub);
  foot.innerHTML = `<div class="ship-bar">${left? `<b style="color:var(--ink)">${won(left)}</b> 더 담으면 무료배송이에요` : `무료배송 조건을 채웠어요`}<div class="bar"><i style="width:${Math.min(100, sub/CONFIG.freeFrom*100)}%"></i></div></div><div class="tot"><span>상품 금액</span><b>${won(sub)}</b></div><button class="btn btn-rose btn-block" type="button" id="goCheckout">주문하기</button>`;
}
$("#cartBody").addEventListener("click", e=>{
  const q=e.target.closest("[data-q]"); if(q){ setQty(q.dataset.q, (cart[q.dataset.q]||0)+Number(q.dataset.d)); return; }
  const r=e.target.closest("[data-rm]"); if(r) setQty(r.dataset.rm,0);
});
$("#cartFoot").addEventListener("click", e=>{ if(e.target.closest("#goCheckout")){ $("#cartDlg").close(); openCheckout(); } });
$("#openCart").addEventListener("click", ()=>{ renderCart(); $("#cartDlg").showModal(); });
$("#mbarCart").addEventListener("click", ()=>{ renderCart(); $("#cartDlg").showModal(); });

/* 다이얼로그 공통 닫기 */
document.querySelectorAll("dialog").forEach(d=>{
  d.addEventListener("click", e=>{ if(e.target===d || e.target.closest("[data-close]")) d.close(); });
});

/* ---------------- 상품 그리드 ---------------- */
const FILTERS = ["전체","생일","기념일","졸업","집들이","감사","그냥"];
let filter = "전체";
function cardHTML(p){
  const tag = p.isNew ? "NEW" : p.price < 10000 ? "1만 원 이하" : p.occ.includes("졸업") && p.occ.length===1 ? "졸업 선물" : p.occ[0]+" 선물";
  const n = optVals(p).length;
  const btn = (p.eng || n>1) ? `<button class="add" type="button" data-open="${p.id}">옵션 선택</button>` : `<button class="add" type="button" data-add="${p.id}">담기</button>`;
  return `<article class="card"><button class="pic" type="button" data-open="${p.id}" aria-label="${p.name} 자세히 보기">${art(p)}<span class="tag">${tag}</span><span class="el" style="--c:${E[EL[p.id]].c}" title="${E[EL[p.id]].name} 기운">${EL[p.id]}</span></button><div><p class="mk">${p.maker.split(" · ")[0]}</p><h3>${p.name}</h3><p class="sub">${p.sub}${n>1?` · ${p.opt.label} ${n}종`:""}</p></div><div class="row"><span class="price">${won(p.price)}</span>${btn}</div></article>`;
}
let shown = 16;
function renderGrid(){
  $("#filters").innerHTML = FILTERS.map(f=>`<button class="chip" type="button" data-f="${f}" aria-pressed="${f===filter}">${f==="그냥"?"이유 없이":f}</button>`).join("");
  const cat=$("#fCat").value, rel=$("#fRel").value, bud=Number($("#fBud").value), sort=$("#fSort").value;
  let list = PRODUCTS.filter(p => p.id!=="luckybox" && (filter==="전체" || p.occ.includes(filter)) && (cat==="전체" || p.cat===cat) && (rel==="전체" || p.rel.includes(rel)) && (!bud || p.price<=bud));
  if(sort==="new") list = [...list].sort((a,b)=>(b.isNew?1:0)-(a.isNew?1:0));
  if(sort==="low") list = [...list].sort((a,b)=>a.price-b.price);
  if(sort==="high") list = [...list].sort((a,b)=>b.price-a.price);
  $("#fCount").textContent = `${list.length}개의 선물`;
  $("#grid").innerHTML = list.length ? list.slice(0,shown).map(cardHTML).join("") : `<p class="empty" style="grid-column:1/-1">조건에 맞는 선물이 없어요. 예산이나 종류를 바꿔보세요.</p>`;
  const left = list.length - shown;
  $("#moreBtn").hidden = left <= 0;
  $("#moreBtn").textContent = `더 보기 (${Math.max(0,left)}개 더)`;
}
const resetGrid = () => { shown = 16; renderGrid(); };
["#fCat","#fRel","#fBud","#fSort"].forEach(id=>$(id).addEventListener("change", resetGrid));
$("#moreBtn").addEventListener("click", ()=>{ shown += 16; renderGrid(); });
$("#filters").addEventListener("click", e=>{ const b=e.target.closest("[data-f]"); if(!b) return; filter=b.dataset.f; shown=16; renderGrid(); });
document.addEventListener("click", e=>{
  const a=e.target.closest("[data-add]"); if(a){ addToCart(a.dataset.add); return; }
  const o=e.target.closest("[data-open]"); if(o){ openProduct(o.dataset.open); }
});

/* ---------------- 상품 상세 ---------------- */
let pdState = {id:null, opt:"", qty:1, shot:0};
const shotList = (p,opt) => [
  {label:"대표 사진", f:()=>art(p,{opt})},
  {label:"선물 포장", f:()=>wrapShot(p,opt)},
  {label:"디테일", f:()=>art(p,{opt, vb:p.zoom||"100 200 200 250", label:"디테일"})}
];
function renderPdGallery(){
  const p=byId(pdState.id), list=shotList(p,pdState.opt);
  $("#pdMain").innerHTML = list[pdState.shot].f();
  $("#pdThumbs").innerHTML = list.map((s,i)=>`<button class="pd-th" type="button" data-shot="${i}" aria-pressed="${i===pdState.shot}" aria-label="${s.label} 보기">${s.f()}</button>`).join("");
}
function updPd(){ $("#pdQty").textContent = pdState.qty; $("#pdTotal").textContent = won(byId(pdState.id).price*pdState.qty); }
function openProduct(id){
  const p=byId(id), vals=optVals(p);
  pdState = {id, opt: vals[0] ? vals[0].name : "", qty:1, shot:0};
  const rows = [["품명",p.name],["용량 · 크기",p.spec.size],["소재 · 성분",p.spec.material],["제조국",p.spec.origin],["제조 · 공급",p.maker],["주의사항",p.spec.note||"상세 설명 참고"],["품질보증기준","관련 법 및 소비자분쟁해결기준에 따름"],["A/S 책임자",`GIFT PICK 고객센터 · 카카오톡 ${CONFIG.kakao}`]];
  $("#pdBody").innerHTML = `<div class="pd">
   <div class="pd-gal"><div class="pd-art" id="pdMain"></div><div class="pd-thumbs" id="pdThumbs"></div></div>
   <div class="pd-info">
    <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:12px"><div class="eyebrow">${esc(p.maker.split(" · ")[0])}</div><button class="x" type="button" data-close aria-label="닫기" style="margin:-10px -12px 0 0"><svg viewBox="0 0 18 18" aria-hidden="true"><path d="M3 3l12 12M15 3 3 15" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></button></div>
    <div><h2>${p.name}</h2><p class="hint" style="margin:6px 0 0">상품번호 ${p.code} · ${p.sub}</p></div>
    <span class="price">${won(p.price)}</span>
    <p style="margin:0;color:var(--mute)">${p.desc}</p>
    ${vals.length>1 ? `<div class="f"><label for="pdOpt">${p.opt.label}</label><select id="pdOpt">${vals.map(v=>`<option>${v.name}</option>`).join("")}</select></div>` : ""}
    ${p.eng ? `<div class="f"><label for="pdEng">각인 문구 · ${p.eng.hint}</label><input id="pdEng" maxlength="${p.eng.max}" placeholder="${p.eng.ph}"></div>` : ""}
    <div class="pd-buy"><div class="qty" style="margin:0"><button type="button" id="pdMinus" aria-label="수량 줄이기">−</button><span id="pdQty">1</span><button type="button" id="pdPlus" aria-label="수량 늘리기">+</button></div><span class="price" id="pdTotal">${won(p.price)}</span></div>
    <div class="pd-actions">
      <button class="btn btn-primary btn-block" type="button" id="pdAdd">장바구니 담기</button>
      <a class="btn btn-nv btn-block" href="${ssUrl(p)}" target="_blank" rel="noopener"><span class="nv-mark" aria-hidden="true"><svg viewBox="0 0 10 10"><path d="M1 1h2.6l3 4.3V1H9v8H6.4l-3-4.3V9H1z" fill="#fff"/></svg></span>스마트스토어에서 바로 구매</a>
    </div>
    <dl><dt>추천 대상</dt><dd>${p.rel.join(", ")}</dd><dt>어울리는 날</dt><dd>${p.occ.filter(o=>o!=="그냥").join(", ")}</dd><dt>배송</dt><dd>공방 직배송 · 결제 확인 후 1~2일 내 출고</dd></dl>
    <details class="pd-spec"><summary>상품정보 제공고시</summary><table><tbody>${rows.map(([k,v])=>`<tr><th scope="row">${k}</th><td>${esc(v)}</td></tr>`).join("")}</tbody></table></details>
   </div></div>`;
  renderPdGallery();
  if(!$("#pdDlg").open) $("#pdDlg").showModal();
}
$("#pdBody").addEventListener("click", e=>{
  const t=e.target.closest("[data-shot]"); if(t){ pdState.shot=Number(t.dataset.shot); renderPdGallery(); return; }
  if(e.target.closest("#pdMinus")){ pdState.qty=Math.max(1,pdState.qty-1); updPd(); }
  if(e.target.closest("#pdPlus")){ pdState.qty=Math.min(20,pdState.qty+1); updPd(); }
  if(e.target.closest("#pdAdd")){
    const p=byId(pdState.id), inp=$("#pdEng"), eng = inp ? inp.value.trim().replace(/:/g,"") : "";
    if(p.eng && !eng){ $("#pdEng").focus(); toast("각인 문구를 적어주세요. 각인 없이 받으려면 ‘없음’이라고 적어주세요."); return; }
    addToCart(pdState.id, pdState.qty, pdState.opt, eng);
  }
});
$("#pdBody").addEventListener("change", e=>{ if(e.target.id==="pdOpt"){ pdState.opt=e.target.value; renderPdGallery(); } });

/* ---------------- 운세 데이터 ---------------- */
const ZODIAC = [["쥐","子","눈치 백단 재주꾼"],["소","丑","묵묵한 성실왕"],["호랑이","寅","카리스마 대장"],["토끼","卯","다정한 평화주의자"],["용","辰","꿈이 큰 주인공"],["뱀","巳","신비로운 전략가"],["말","午","자유로운 질주 본능"],["양","未","온화한 감성파"],["원숭이","申","재치 만점 아이디어뱅크"],["닭","酉","부지런한 완벽주의자"],["개","戌","의리 있는 찐친"],["돼지","亥","복을 부르는 행복 요정"]];
const STEM="갑을병정무기경신임계", BRANCH="자축인묘진사오미신유술해", STEM_EL="木木火火土土金金水水";
const GEN={木:"火",火:"土",土:"金",金:"水",水:"木"}, GEN_NAME={木:"목생화",火:"화생토",土:"토생금",金:"금생수",水:"수생목"};
const E = {
  木:{name:"나무",kw:"성장",need:"새로 시작할 힘",lucky:"초록",c:"#3F7D52"},
  火:{name:"불",kw:"온기",need:"마음을 데워줄 온기",lucky:"빨강·주황",c:"#C23B26"},
  土:{name:"흙",kw:"안정",need:"기댈 수 있는 안정감",lucky:"노랑·베이지",c:"#8E6420"},
  金:{name:"쇠",kw:"자신감",need:"반짝이는 자신감",lucky:"흰색·은색",c:"#6C737D"},
  水:{name:"물",kw:"휴식",need:"깊은 휴식",lucky:"파랑·검정",c:"#2D5B94"},
  "✦":{name:"행운",c:"#D2335C"}
};
const EL = {candle:"火",lamp:"火",choco:"火",wine:"火",macaron:"火",perfume:"水",hand:"水",lip:"水",eyemask:"水",scarf:"水",tea:"水",sachet:"木",letter:"木",diary:"木",olive:"木",bouquet:"木",diffuser:"木",mug:"土",honey:"土",coffee:"土",towel:"土",blanket:"土",frame:"土",socks:"土",necklace:"金",pen:"金",wallet:"金",keyring:"金",luckybox:"✦"};
const TRAIT = {candle:"IF",hand:"ST",perfume:"EF",wallet:"TJ",tea:"IS",scarf:"SF",pen:"NJ",coffee:"ETJ",bouquet:"EF",letter:"INF",diffuser:"IN",mug:"ES",wine:"EF",necklace:"NF",macaron:"EP",choco:"FP",diary:"NJ",olive:"IN",lamp:"INP",towel:"STJ",eyemask:"IP",blanket:"IS",lip:"SP",frame:"F",sachet:"IJ",honey:"ST",socks:"ST",keyring:"EP",luckybox:"NP"};
const L = {E:"사람들과 함께 즐길 수 있는",I:"혼자 충전하는 시간을 채워줄",S:"매일 손이 가는 실용적인",N:"상상력을 자극하는 감성적인",T:"쓸모를 따지는 T도 인정할",F:"의미를 소중히 여기는 F 취향의",J:"계획형 일상을 정돈해 줄",P:"즉흥적으로 기분을 띄워 줄"};
const NICK = {ISTJ:"원칙의 수호자",ISFJ:"다정한 살림꾼",INFJ:"속 깊은 예언가",INTJ:"큰 그림 설계자",ISTP:"만능 손재주꾼",ISFP:"감성 예술가",INFP:"몽글몽글 낭만가",INTP:"호기심 연구원",ESTP:"직진 모험가",ESFP:"파티의 주인공",ENFP:"에너지 요정",ENTP:"아이디어 폭죽",ESTJ:"든든한 반장",ESFJ:"모두의 다정왕",ENFJ:"다정한 리더",ENTJ:"카리스마 사령관"};
const TYPE_LINE = {
  ISTJ:"약속은 지키고 물건은 오래 쓰는 타입. 튼튼하고 쓸모 있는 게 최고예요.",
  ISFJ:"남 챙기느라 바쁜 사람. 이번엔 본인을 위한 휴식을 선물하세요.",
  INFJ:"말하지 않아도 의미를 읽는 사람. 이야기가 담긴 선물에 약해요.",
  INTJ:"취향이 확실한 사람. 대충 고른 건 바로 티 나요.",
  ISTP:"손에 착 감기는 도구를 좋아해요. 군더더기 없는 디자인이 정답.",
  ISFP:"감성 충전이 필요한 예술가. 예쁜 게 곧 쓸모예요.",
  INFP:"몽글몽글한 마음을 알아주는 선물이면 하루 종일 행복해해요.",
  INTP:"흥미로운 물건이면 사용법까지 연구해요. 신기한 게 좋아요.",
  ESTP:"지금 바로 써먹을 수 있는 선물. 경험을 주면 더 좋아해요.",
  ESFP:"받는 순간 리액션이 터지는 화려한 선물이 잘 어울려요.",
  ENFP:"새롭고 귀여운 것에 약해요. 깜짝 요소가 있으면 대성공.",
  ENTP:"뻔한 선물은 금방 질려요. 이야깃거리가 되는 걸로 골라요.",
  ESTJ:"실용성 끝판왕. 매일 쓰는 물건의 고급 버전을 좋아해요.",
  ESFJ:"함께 나눌 수 있는 선물이면 두 배로 기뻐해요.",
  ENFJ:"주변을 챙기는 리더. 고마움을 담은 편지가 제일 큰 선물.",
  ENTJ:"성과를 내는 사람. 일과 일상을 업그레이드할 아이템이 좋아요."
};
const LUCK = ["작은 선물이 큰 웃음으로 돌아오는 날","망설이던 연락, 선물 핑계로 해보세요","뜻밖의 칭찬을 듣게 될 운이에요","지갑보다 마음이 먼저 열리는 날","오래된 친구에게서 반가운 소식이 와요","고마운 사람이 떠오르면 바로 표현하세요","달달한 걸 나누면 운이 두 배","향기로운 것이 행운을 불러와요","오늘의 키워드는 ‘깜짝’","미뤄둔 약속을 잡기 좋은 날","손으로 쓴 몇 줄이 큰 힘이 돼요","반짝이는 물건이 기분을 올려줘요","집에 머무는 시간이 행운의 시간","새로운 시작을 응원받는 날","따뜻한 차 한 잔이 인연을 이어줘요","작은 사치가 허락된 날","웃음 많은 사람 옆에 복이 와요","정리정돈이 행운의 문을 열어요","오늘 받은 친절은 꼭 돌려주세요","계획에 없던 즉흥 선물이 대길"];
const hash = s => { let h=5381; for(const ch of String(s)) h=(((h<<5)+h)+ch.codePointAt(0))>>>0; return h; };
const yearInfo = y => { const zi=((y-4)%12+12)%12, st=((y-4)%10+10)%10; return {zi, el:STEM_EL[st], ganji:STEM[st]+BRANCH[zi]}; };

/* 한정 드롭 — 운영자가 실제 남은 수량으로 직접 고쳐요 */
const DROP = [{id:"luckybox", limit:50, left:17},{id:"necklace", limit:30, left:9},{id:"blanket", limit:20, left:6}];

/* 운세 럭키박스 (드롭 전용 상품) */
Object.assign(ART, {
  lucky:(u,s)=>{const star=(x,y,r,f)=>{const pts=[...Array(10)].map((_,i)=>{const a=-Math.PI/2+i*Math.PI/5,rr=i%2?r*.45:r;return `${(x+rr*Math.cos(a)).toFixed(1)},${(y+rr*Math.sin(a)).toFixed(1)}`}).join(" ");return `<polygon points="${pts}" fill="${f}" stroke="#221A1F" stroke-width="1.5" stroke-linejoin="round"/>`;};
    return `<defs>${sheet(u+"b",s.a)}${sheet(u+"l",dk(s.a,.15))}</defs>${sh(200,104)}
<rect x="104" y="272" width="192" height="148" fill="url(#${u}b)"/><rect x="92" y="242" width="216" height="40" rx="3" fill="url(#${u}l)"/><rect x="92" y="278" width="216" height="5" fill="#000" opacity=".15"/>
<rect x="188" y="242" width="24" height="178" fill="${s.b}"/>
<path d="M200 242C170 200 140 208 150 232 156 246 184 246 200 242Z" fill="${s.b}"/><path d="M200 242C230 200 260 208 250 232 244 246 216 246 200 242Z" fill="${lt(s.b,.15)}"/><circle cx="200" cy="242" r="10" fill="${dk(s.b,.1)}"/>
<text x="146" y="378" text-anchor="middle" font-family="Jua,Noto Sans KR,sans-serif" font-size="70" fill="#fff">?</text><text x="254" y="378" text-anchor="middle" font-family="Jua,Noto Sans KR,sans-serif" font-size="70" fill="#fff" opacity=".85">?</text>
${T(200,404,6.5,"GIFT PICK LUCKY BOX",{ls:2.6,fill:"#fff",op:.85})}
${star(112,196,16,s.b)}${star(300,180,12,"#fff")}${star(318,236,8,s.b)}${star(86,262,7,"#fff")}`}
});
PRODUCTS.push({id:"luckybox", name:"운세 럭키박스", sub:"3만 5천 원 이상 구성 · 띠 맞춤 랜덤", price:29000, ss:"", rel:["친구","연인","부모님","동료"], occ:["생일","기념일","졸업","집들이","감사","그냥"], maker:"GIFT PICK 큐레이션", code:"GP-X000", zoom:"100 220 200 250", desc:"받는 분의 띠와 오행에 맞춰 GIFT PICK이 직접 골라 담는 랜덤 박스. 정가 합계 3만 5천 원 이상을 넣어요. 무엇이 들었는지는 열어봐야 알아요.", art:{kind:"lucky",a:"#D2335C",b:"#FFD45C",bg:"#FBE6EA"}, opt:{label:"받는 분 띠", values:ZODIAC.map(z=>z[0]+"띠")}, spec:{size:"상자 25 × 20 × 12cm", material:"구성품에 따라 달라요 (상품 2~4개)", origin:"대한민국", note:"랜덤 구성이라 단순 변심 교환·환불이 어려워요"}});

/* ---------------- 상품 확장 (새 그림 12종 + 변형 26종) ---------------- */
Object.assign(ART, {
  soap:(u,s)=>{const bar=(y,c,id,w)=>`<defs>${sheet(id,c)}</defs><rect x="${200-w/2}" y="${y}" width="${w}" height="44" rx="10" fill="url(#${id})"/><rect x="${200-w/2+6}" y="${y+3}" width="${w-12}" height="10" rx="5" fill="#fff" opacity=".22"/>`;
    return `${sh(200,84)}${bar(376,s.b,u+"1",160)}${bar(334,s.a,u+"2",150)}${bar(292,"#F3EDE4",u+"3",140)}${T(200.6,320.6,9,"GIFT PICK",{ls:3,fill:"#fff",op:.6})}${T(200,320,9,"GIFT PICK",{ls:3,fill:"#B9AEA3"})}<path d="M200 292V420" stroke="#C9A97F" stroke-width="2.4"/><path d="M200 300q-14-16-26-8q8 14 26 8q14-16 26-8q-8 14-26 8" fill="none" stroke="#C9A97F" stroke-width="2"/>${[[146,412],[262,410],[284,418]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="6" fill="#fff" opacity=".7" stroke="${s.a}"/>`).join("")}`},
  bath:(u,s)=>{const ball=(cx,cy,r,c,id)=>`<defs><radialGradient id="${id}" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="${lt(c,.45)}"/><stop offset=".7" stop-color="${c}"/><stop offset="1" stop-color="${dk(c,.25)}"/></radialGradient></defs><circle cx="${cx}" cy="${cy}" r="${r}" fill="url(#${id})"/><path d="M${cx-r} ${cy}q${r} -8 ${2*r} 0" stroke="${dk(c,.15)}" fill="none" opacity=".5"/>${[0,1,2,3].map(i=>{const x=cx-r*.4+i*r*.25,y=cy-r*.45+(i%2)*6;return `<ellipse cx="${x}" cy="${y}" rx="3" ry="1.6" fill="${s.b}" transform="rotate(${i*40} ${x} ${y})"/>`}).join("")}`;
    return `<defs>${sheet(u+"t","#D9C2A2")}</defs>${sh(200,120)}<rect x="88" y="356" width="224" height="64" rx="6" fill="url(#${u}t)"/>${ball(140,350,40,s.a,u+"a")}${ball(260,350,40,"#F4EEE6",u+"c")}${ball(200,342,44,s.b,u+"b")}<rect x="88" y="380" width="224" height="40" rx="6" fill="url(#${u}t)"/>${T(200,404,6.5,"BATH BOMB · 3",{ls:2.6,fill:"#5A4636"})}`},
  cushion:(u,s)=>{const P="M98 236Q200 252 302 236Q290 330 306 420Q200 404 94 420Q110 330 98 236Z";return `<defs><radialGradient id="${u}c" cx=".4" cy=".35" r=".75"><stop offset="0" stop-color="${lt(s.a,.25)}"/><stop offset=".75" stop-color="${s.a}"/><stop offset="1" stop-color="${dk(s.a,.25)}"/></radialGradient></defs>${sh(206,120,418)}<path d="${P}" fill="url(#${u}c)"/><path d="${P}" fill="none" stroke="${dk(s.a,.2)}" stroke-width="2"/>${[0,1,2,3,4].map(i=>`<path d="M${120+i*40} 254q8 70 0 150" stroke="${dk(s.a,.1)}" stroke-width="3" fill="none" opacity=".5"/>`).join("")}<circle cx="200" cy="328" r="34" fill="${s.b}" stroke="${dk(s.b,.25)}" stroke-width="2" stroke-dasharray="3 3"/>${(s.l||"").length>2 ? T(200,334,15,s.l,{fill:dk(s.b,.6),w:700,ls:1}) : T(200,341,34,s.l||"✦",{serif:1,fill:dk(s.b,.6)})}`},
  cap:(u,s)=>`<defs><radialGradient id="${u}c" cx=".4" cy=".3" r=".8"><stop offset="0" stop-color="${lt(s.a,.25)}"/><stop offset="1" stop-color="${dk(s.a,.2)}"/></radialGradient></defs>${sh(212,120,418)}<path d="M196 384Q300 376 336 400Q300 424 200 412Z" fill="${dk(s.a,.2)}"/><path d="M110 382C108 300 150 250 210 250C268 250 300 300 296 386Q200 400 110 382Z" fill="url(#${u}c)"/><path d="M210 252C190 300 186 350 190 394M210 252C236 300 246 350 244 392" stroke="${dk(s.a,.22)}" fill="none"/><circle cx="210" cy="252" r="7" fill="${dk(s.a,.15)}"/><path d="M110 382Q200 400 296 386" stroke="${dk(s.a,.3)}" stroke-width="3" fill="none"/>${T(152,338,15,s.l||"GP",{fill:s.b,w:700,ls:1})}<ellipse cx="170" cy="286" rx="34" ry="14" fill="#fff" opacity=".15" filter="url(#gpB8)"/>`,
  tumbler:(u,s)=>`<defs>${cyl(u+"b",s.a)}${cyl(u+"l",s.b)}</defs>${sh(200,50)}<rect x="152" y="206" width="96" height="214" rx="10" fill="url(#${u}b)"/><rect x="148" y="176" width="104" height="36" rx="8" fill="url(#${u}l)"/><rect x="186" y="164" width="28" height="14" rx="4" fill="url(#${u}l)"/><rect x="152" y="300" width="96" height="40" fill="#FBF7F2" opacity=".92"/>${T(200,318,7,s.l||"TUMBLER",{ls:2})}${T(200,331,5,"GIFT PICK · 473ml",{ls:1.4,fill:"#8A7A80"})}${spec(160,214,8,196,.5)}`,
  clock:(u,s)=>`<defs>${cyl(u+"r",s.a)}<radialGradient id="${u}f" cx=".4" cy=".35" r=".8"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#EFE8E0"/></radialGradient></defs>${sh(200,90)}<circle cx="164" cy="206" r="18" fill="url(#${u}r)"/><circle cx="236" cy="206" r="18" fill="url(#${u}r)"/><path d="M150 380L132 420M250 380L268 420" stroke="${dk(s.a,.2)}" stroke-width="8" stroke-linecap="round"/><circle cx="200" cy="300" r="96" fill="url(#${u}r)"/><circle cx="200" cy="300" r="80" fill="url(#${u}f)"/>${[...Array(12)].map((_,i)=>{const a=i*Math.PI/6,o=i%3?64:58;return `<line x1="${(200+70*Math.sin(a)).toFixed(1)}" y1="${(300-70*Math.cos(a)).toFixed(1)}" x2="${(200+o*Math.sin(a)).toFixed(1)}" y2="${(300-o*Math.cos(a)).toFixed(1)}" stroke="#221A1F" stroke-width="${i%3?1.5:3}"/>`}).join("")}<line x1="200" y1="300" x2="200" y2="252" stroke="#221A1F" stroke-width="4" stroke-linecap="round"/><line x1="200" y1="300" x2="236" y2="318" stroke="#221A1F" stroke-width="3" stroke-linecap="round"/><line x1="200" y1="300" x2="176" y2="246" stroke="${s.b}" stroke-width="1.5"/><circle cx="200" cy="300" r="5" fill="${s.b}"/>${T(200,342,6,"GIFT PICK",{ls:2.4,fill:"#8A7A80"})}<ellipse cx="166" cy="250" rx="40" ry="16" fill="#fff" opacity=".35" filter="url(#gpB8)"/>`,
  cookie:(u,s)=>{const r=rnd(29);const ck=(x,y,rr,c)=>`<circle cx="${x}" cy="${y}" r="${rr}" fill="${c}" stroke="${dk(c,.2)}"/>${[0,1,2,3].map(()=>`<circle cx="${(x-rr*.5+r()*rr).toFixed(1)}" cy="${(y-rr*.5+r()*rr).toFixed(1)}" r="2.6" fill="#4A2E22"/>`).join("")}`;
    return `<defs>${cyl(u+"t",s.a)}</defs>${sh(200,116)}<g transform="rotate(-8 272 262)"><ellipse cx="272" cy="268" rx="96" ry="18" fill="${dk(s.a,.2)}"/><ellipse cx="272" cy="263" rx="96" ry="18" fill="${s.a}"/>${T(272,267,8,"BUTTER COOKIE",{ls:2,fill:"#fff"})}</g><ellipse cx="200" cy="404" rx="112" ry="20" fill="${dk(s.a,.25)}"/><rect x="88" y="344" width="224" height="60" fill="url(#${u}t)"/><ellipse cx="200" cy="344" rx="112" ry="22" fill="${lt(s.a,.2)}"/><ellipse cx="200" cy="344" rx="100" ry="18" fill="#F6EDE0"/>${ck(160,338,20,"#D9A86C")}${ck(205,332,22,"#E7C08C")}${ck(246,342,19,"#C99360")}${ck(184,350,16,"#E9C9A0")}${T(200,384,6,"GIFT PICK BAKERY",{ls:2.4,fill:"#fff",op:.85})}`},
  beanie:(u,s)=>`<defs>${sheet(u+"b",s.a)}</defs>${sh(200,98)}<circle cx="200" cy="208" r="30" fill="${s.b}" filter="url(#gpB3)"/><circle cx="200" cy="208" r="25" fill="${lt(s.b,.2)}"/><path d="M112 360C110 280 150 228 200 228C250 228 290 280 288 360Z" fill="url(#${u}b)"/>${[...Array(9)].map((_,i)=>`<path d="M${128+i*18} 354C${130+i*18} 300 ${160+i*5} 252 200 234" stroke="${dk(s.a,.12)}" fill="none" stroke-width="2"/>`).join("")}<rect x="104" y="350" width="192" height="64" rx="14" fill="${dk(s.a,.08)}"/>${[...Array(16)].map((_,i)=>`<line x1="${112+i*11.5}" y1="356" x2="${112+i*11.5}" y2="408" stroke="${dk(s.a,.2)}" stroke-width="2"/>`).join("")}<rect x="178" y="370" width="44" height="22" rx="2" fill="#FBF7F2"/>${T(200,384,5.5,"GIFT PICK",{ls:1.4})}`,
  tarot:(u,s)=>{const card=(rot,c)=>`<g transform="rotate(${rot} 200 420)"><rect x="160" y="226" width="80" height="128" rx="6" fill="${c}" stroke="#221A1F" stroke-width="1.5"/><rect x="166" y="232" width="68" height="116" rx="4" fill="none" stroke="${s.b}"/><circle cx="200" cy="290" r="16" fill="none" stroke="${s.b}"/><path d="M200 276l3 9h9l-7 6 3 9-8-6-8 6 3-9-7-6h9z" fill="${s.b}"/></g>`;
    return `<defs>${sheet(u+"bx",s.a)}</defs>${sh(200,110)}${[-30,-15,0,15,30].map((r,i)=>card(r,i%2?dk(s.a,.15):s.a)).join("")}<rect x="120" y="352" width="160" height="68" rx="4" fill="url(#${u}bx)"/><rect x="120" y="352" width="160" height="6" fill="#000" opacity=".2"/><text x="200" y="385" text-anchor="middle" font-family="Gowun Batang,serif" font-size="15" fill="url(#gpGoldH)">GIFT TAROT</text>${T(200,402,5.5,"78 CARDS · 한국어 해설서",{ls:1.2,fill:"#F3E2B5",op:.85})}`},
  incense:(u,s)=>`<defs>${cyl(u+"d",s.a)}</defs>${sh(200,110)}<rect x="262" y="246" width="52" height="154" rx="3" fill="${s.b}"/>${T(288,322,6,"INCENSE",{ls:1.6,fill:"#fff",tr:"rotate(-90 288 322)"})}${T(301,322,5,s.l||"HINOKI",{ls:1.6,fill:"#fff",op:.8,tr:"rotate(-90 301 322)"})}<ellipse cx="200" cy="414" rx="110" ry="12" fill="${dk(s.a,.2)}"/><rect x="90" y="396" width="220" height="18" fill="url(#${u}d)"/><ellipse cx="200" cy="396" rx="110" ry="12" fill="${lt(s.a,.2)}"/><circle cx="186" cy="392" r="7" fill="${dk(s.a,.3)}"/><line x1="186" y1="392" x2="212" y2="232" stroke="#6E4A30" stroke-width="3"/><line x1="207" y1="262" x2="212" y2="232" stroke="#3A2A20" stroke-width="3.2"/><circle cx="212" cy="231" r="2.4" fill="#F28B4E"/><g filter="url(#gpB3)" fill="none" stroke="#fff" stroke-width="3" opacity=".75"><path d="M212 228C202 202 226 188 212 162C202 142 224 130 216 106"/></g>`,
  bracelet:(u,s)=>{const beads=[...Array(18)].map((_,i)=>{const a=i/18*Math.PI*2;return {x:200+Math.cos(a)*86,y:360+Math.sin(a)*34,r:12+Math.sin(a)*2.5};}).sort((a,b)=>a.y-b.y);
    return `<defs><radialGradient id="${u}g" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="${lt(s.a,.55)}"/><stop offset=".6" stop-color="${s.a}"/><stop offset="1" stop-color="${dk(s.a,.4)}"/></radialGradient></defs><g transform="rotate(-4 200 255)"><rect x="132" y="214" width="136" height="72" rx="4" fill="#FBF7F2"/>${T(200,246,13,s.e||"오행 원석",{serif:1})}${T(200,266,5.5,"GIFT PICK STONE",{ls:2,fill:"#8A7A80"})}</g>${sh(200,104,410)}${beads.map(b=>`<circle cx="${b.x.toFixed(1)}" cy="${b.y.toFixed(1)}" r="${b.r.toFixed(1)}" fill="url(#${u}g)"/>`).join("")}<circle cx="200" cy="400" r="5" fill="url(#gpGold)"/><circle cx="200" cy="416" r="12" fill="url(#gpGold)"/>${T(200,420.5,11,s.l||"✦",{serif:1,fill:"#5A4012"})}`},
  pouch:(u,s)=>`<defs>${sheet(u+"p",s.a)}</defs>${sh(200,112)}<path d="M92 290Q200 278 308 290L312 404Q312 420 296 420H104Q88 420 88 404Z" fill="url(#${u}p)"/><path d="M92 300Q200 288 308 300" stroke="${dk(s.a,.35)}" stroke-width="5" fill="none"/><path d="M92 300Q200 288 308 300" stroke="#C9A45C" stroke-width="1.6" stroke-dasharray="2 2" fill="none"/><rect x="292" y="292" width="10" height="26" rx="3" fill="url(#gpGold)"/><circle cx="297" cy="321" r="5" fill="none" stroke="url(#gpGold)" stroke-width="2"/><rect x="160" y="342" width="80" height="34" rx="3" fill="${s.b}"/>${T(200,364,12,s.l||"GP",{ls:3,fill:"#fff",w:700})}<ellipse cx="150" cy="320" rx="50" ry="16" fill="#fff" opacity=".12" filter="url(#gpB8)"/>`
});
const sp = (size, material, note, origin="대한민국") => ({size, material, origin, note});
const FRIEND=["친구","동료"];
const NEW_KIND = [
  {id:"soap", name:"수제 비누 3종 세트", sub:"100g × 3 · 4주 숙성", price:18000, rel:["친구","동료","부모님"], occ:["집들이","감사","그냥"], maker:"제휴 비누 공방", desc:"4주 동안 숙성한 저자극 콜드프로세스 비누. 장미, 쑥, 오트밀 세 가지예요.", art:{kind:"soap",a:"#E7B9B0",b:"#C9D3C3",bg:"#F2E8E4"}, spec:sp("100g × 3개","올리브오일, 코코넛오일, 시어버터 외","개봉 후 12개월 · 통풍 잘 되는 곳에 두세요"), el:"水", tr:"IS"},
  {id:"bath", name:"장미 입욕제 3구", sub:"120g × 3 · 꽃잎 토핑", price:21000, rel:["연인","친구"], occ:["생일","기념일","그냥"], maker:"제휴 바디케어 브랜드", desc:"욕조에 넣으면 보글보글 녹으면서 장미 꽃잎이 떠올라요. 하루를 끝내는 작은 의식이에요.", art:{kind:"bath",a:"#E9A6B4",b:"#B7A3D9",bg:"#F3E7EC"}, spec:sp("120g × 3개","탄산수소나트륨, 구연산, 장미 꽃잎 외","욕조 세척 후 사용 · 사용기한 12개월"), el:"水", tr:"IF"},
  {id:"cushion", name:"12띠 자수 쿠션", sub:"45 × 45cm · 띠 한자 자수", price:42000, rel:["부모님","연인","친구"], occ:["집들이","생일","기념일"], maker:"제휴 패브릭 공방", desc:"받는 분 띠의 한자를 가운데에 수놓은 쿠션. 거실 소파에 두면 볼 때마다 웃음이 나요.", art:{kind:"cushion",a:"#F0C9B8",b:"#FFD45C",bg:"#F4E9E2",l:"卯"}, opt:{label:"띠", onArt:true, values:ZODIAC.map(z=>({name:z[0]+"띠",l:z[1]}))}, spec:sp("45 × 45cm · 솜 포함","면 100% 커버, 마이크로화이바 솜","커버만 분리 세탁 · 자수 상품이라 제작 후 교환 불가"), el:"土", tr:"ISF"},
  {id:"cap", name:"이니셜 자수 볼캡", sub:"코튼 · 프리사이즈", price:32000, rel:["친구","연인"], occ:["생일","졸업","그냥"], maker:"제휴 패브릭 공방", desc:"앞판에 이니셜 세 글자를 수놓아 드려요. 매일 쓰는 모자라 오래 기억되는 선물이에요.", art:{kind:"cap",a:"#2E3A5C",b:"#FFD45C",bg:"#E9E8EE",l:"GP"}, opt:{label:"색상", values:[{name:"네이비",a:"#2E3A5C"},{name:"크림",a:"#EDE3D3",b:"#D2335C"},{name:"버건디",a:"#6B2233"}]}, eng:{max:3, hint:"자수 영문 3자", ph:"예) MJK"}, spec:sp("머리둘레 56~60cm 조절","면 100%","자수 후 교환·환불 불가"), el:"水", tr:"EP"},
  {id:"tumbler", name:"이름 각인 텀블러", sub:"473ml · 보온보냉", price:28000, rel:["동료","친구"], occ:["졸업","감사","그냥"], maker:"제휴 리빙 브랜드", desc:"출근길 커피를 따뜻하게 지켜주는 텀블러. 몸체에 이름을 각인해 드려요.", art:{kind:"tumbler",a:"#B9C7A8",b:"#3A3436",bg:"#E8ECE4"}, opt:{label:"색상", values:[{name:"세이지",a:"#B9C7A8"},{name:"버터",a:"#F2D785"},{name:"블랙",a:"#3A3436",b:"#B9AEA3"}]}, eng:{max:10, hint:"이름 10자까지", ph:"예) Minji"}, spec:sp("지름 7.5 × 높이 20cm · 473ml","스테인리스 304, PP 뚜껑","보온 6시간 · 각인 후 교환·환불 불가"), el:"金", tr:"STJ"},
  {id:"clock", name:"레트로 탁상시계", sub:"무소음 · 지름 14cm", price:38000, rel:["동료","부모님","친구"], occ:["집들이","졸업"], maker:"제휴 리빙 브랜드", desc:"째깍 소리 없는 무소음 무브먼트. 책상이나 침대 맡에 두기 좋은 동그란 시계예요.", art:{kind:"clock",a:"#D2335C",b:"#FFD45C",bg:"#F4E6E4"}, opt:{label:"색상", values:[{name:"체리 레드",a:"#D2335C"},{name:"민트",a:"#8FCBB5"},{name:"크림",a:"#EDE3D3"}]}, spec:sp("지름 14cm","금속 바디, 유리","AA 건전지 1개 별도"), el:"金", tr:"SJ"},
  {id:"cookie", name:"버터 쿠키 틴", sub:"쿠키 24개 · 3가지 맛", price:19000, rel:["동료","부모님","친구"], occ:["감사","집들이","그냥"], maker:"제휴 디저트 공방", desc:"버터를 듬뿍 넣어 매일 굽는 쿠키. 틴 케이스는 다 먹고 나서 소품함으로 써요.", art:{kind:"cookie",a:"#2E5B8A",b:"#F2D785",bg:"#E6EAF0"}, spec:sp("쿠키 24개 · 약 360g","밀가루, 버터, 설탕, 초콜릿칩 (알레르기: 밀, 우유, 달걀, 대두)","받은 날로부터 14일"), el:"土", tr:"ES"},
  {id:"beanie", name:"울 니트 비니", sub:"울 50% · 폼폼 장식", price:27000, rel:["친구","연인"], occ:["생일","그냥"], maker:"제휴 니트 공방", desc:"쓰는 순간 귀까지 따뜻해지는 니트 비니. 폼폼이 달려 있어서 사진이 귀엽게 나와요.", art:{kind:"beanie",a:"#C9707F",b:"#F3E5DD",bg:"#F2E6E4"}, opt:{label:"색상", values:[{name:"로즈",a:"#C9707F"},{name:"차콜",a:"#4A4448"},{name:"버터",a:"#F2D785",b:"#C9707F"}]}, spec:sp("프리사이즈","울 50%, 아크릴 50%","찬물 손세탁"), el:"水", tr:"SP"},
  {id:"tarot", name:"기프트 타로 카드 덱", sub:"78장 · 한국어 해설서", price:33000, rel:["친구","연인"], occ:["생일","그냥"], maker:"GIFT PICK 큐레이션", desc:"선물 궁합에 진심인 GIFT PICK이 만든 타로 덱. 처음 하는 사람도 해설서만 보고 바로 볼 수 있어요.", art:{kind:"tarot",a:"#3B2F6B",b:"#E9C46A",bg:"#ECE8F2"}, spec:sp("카드 7 × 12cm × 78장","코팅 아트지 350g, 하드 박스","재미로 즐겨주세요"), el:"水", tr:"NF"},
  {id:"incense", name:"인센스 스틱 세트", sub:"스틱 30개 + 도자기 홀더", price:23000, rel:["친구","동료"], occ:["집들이","감사","그냥"], maker:"제휴 캔들 공방 · 서울 성수", desc:"불을 붙이면 15분 동안 은은하게 타오르는 인센스. 도자기 홀더가 함께 들어 있어요.", art:{kind:"incense",a:"#E9E1D6",b:"#6F8A70",bg:"#ECEAE4",l:"HINOKI"}, opt:{label:"향", onArt:true, values:[{name:"히노끼",l:"HINOKI"},{name:"샌달우드",l:"SANDALWOOD",b:"#8A5A3A"},{name:"화이트 세이지",l:"WHITE SAGE",b:"#8E9AA8"}]}, spec:sp("스틱 30개 · 홀더 지름 12cm","천연 향료, 대나무 심, 도자기","환기 잘 되는 곳에서 사용 · 화기 주의"), el:"木", tr:"IN"},
  {id:"bracelet", name:"오행 원석 팔찌", sub:"천연석 8mm · 오행별 원석", price:39000, rel:["친구","연인","부모님"], occ:["생일","졸업","그냥"], maker:"제휴 주얼리 공방", desc:"받는 분에게 부족한 오행 기운을 채워줄 원석으로 엮은 팔찌. 선물 궁합 결과에 나온 오행을 골라보세요.", art:{kind:"bracelet",a:"#3F7D52",b:"#C9A45C",bg:"#ECEDE6"}, opt:{label:"오행", onArt:true, values:[{name:"木 · 그린 아벤추린",a:"#3F7D52",l:"木",e:"木 · 아벤추린"},{name:"火 · 카넬리안",a:"#C8502E",l:"火",e:"火 · 카넬리안"},{name:"土 · 타이거아이",a:"#9A6A2A",l:"土",e:"土 · 타이거아이"},{name:"金 · 문스톤",a:"#DCDAD2",l:"金",e:"金 · 문스톤"},{name:"水 · 라피스라줄리",a:"#2D4E94",l:"水",e:"水 · 라피스"}]}, spec:sp("손목 15~17cm (탄성 줄)","천연석 8mm, 925 실버 참","천연석이라 무늬와 색이 하나씩 달라요"), el:"✦", tr:"NF"},
  {id:"pouch", name:"이니셜 자수 파우치", sub:"22 × 14cm · 리넨", price:17000, rel:["친구","동료"], occ:["생일","감사","그냥"], maker:"제휴 패브릭 공방", desc:"화장품, 충전기, 필통 어디에나 쓰는 리넨 파우치. 가운데 패치에 이니셜을 수놓아요.", art:{kind:"pouch",a:"#D8C8B0",b:"#D2335C",bg:"#F1EAE2",l:"GP"}, opt:{label:"색상", values:[{name:"오트밀",a:"#D8C8B0"},{name:"로즈",a:"#E7B3B9",b:"#6B2233"},{name:"세이지",a:"#A9B9A0",b:"#3F5A44"}]}, eng:{max:3, hint:"자수 영문 3자", ph:"예) MJK"}, spec:sp("22 × 14 × 6cm","리넨 55%, 면 45%, YKK 지퍼","자수 후 교환·환불 불가"), el:"土", tr:"SJ"}
];
const VARIANTS = [
  ["candle",{id:"candle-yuzu", name:"제주 감귤 소이 캔들", sub:"220g · 약 45시간", price:24000, rel:["친구","동료"], occ:["감사","집들이"], desc:"갓 깐 감귤 껍질 같은 상큼한 향. 겨울 오후를 환하게 밝혀줘요.", art:{a:"#E89B4E",b:"#F6CFA0",bg:"#F6E7D8",l:"제주 감귤"}}],
  ["candle",{id:"candle-hinoki", name:"편백 숲 소이 캔들", sub:"220g · 약 45시간", price:24000, rel:["부모님","동료"], occ:["집들이","감사"], desc:"비 온 뒤 편백 숲을 걷는 것 같은 맑은 나무 향이에요.", art:{a:"#7C9A7A",b:"#C9D8C0",bg:"#E8EDE4",l:"편백 숲"}, el:"木"}],
  ["candle",{id:"candle-sakura", name:"밤 벚꽃 소이 캔들", sub:"220g · 약 45시간", price:26000, rel:["연인","친구"], occ:["기념일","생일"], desc:"봄밤의 벚꽃길처럼 부드럽고 달콤한 플로럴 향이에요.", art:{a:"#E3A3B5",b:"#F6D9E0",bg:"#F6E6EB",l:"밤 벚꽃"}}],
  ["perfume",{id:"perfume-rose", name:"오 드 퍼퓸 ‘장미 정원’", sub:"30ml · 다마스크 로즈, 피오니", price:58000, rel:["연인","부모님"], occ:["기념일","생일"], desc:"아침 이슬 맺힌 장미 정원의 향. 우아하고 오래가요.", art:{a:"#E9A9B4",b:"#C9A45C",bg:"#F3E4E6",l:"장미 정원",e:"ROSE GARDEN"}, el:"火"}],
  ["perfume",{id:"perfume-rain", name:"오 드 퍼퓸 ‘비 온 뒤 숲’", sub:"30ml · 이끼, 베티버", price:58000, rel:["연인","친구"], occ:["생일","그냥"], desc:"젖은 흙과 이끼 냄새가 나는 차분한 우디 향이에요.", art:{a:"#A9C2B0",b:"#2E2427",bg:"#E6ECE7",l:"비 온 뒤 숲",e:"AFTER RAIN"}, el:"木"}],
  ["diffuser",{id:"diffuser-cotton", name:"리드 디퓨저 ‘흰 빨래’", sub:"200ml · 약 2개월", price:29000, rel:["친구","부모님","동료"], occ:["집들이"], desc:"햇볕에 바싹 마른 빨래 같은 깨끗한 코튼 향이에요.", art:{a:"#C9D6E3",b:"#9FB4CC",bg:"#E6EAF0",l:"흰 빨래"}, el:"水"}],
  ["tea",{id:"tea-matcha", name:"제주 말차 라떼 키트", sub:"말차 30g + 휘스크 + 찻잔", price:26000, rel:["친구","동료"], occ:["감사","그냥"], desc:"제주 말차와 대나무 휘스크로 집에서 카페 말차 라떼를 만들어요.", art:{a:"#5E8A5A",b:"#D8C9A6",bg:"#E6EBDF",l:"말차 라떼"}, spec:sp("말차 30g, 휘스크, 찻잔 150ml","제주산 말차 100%, 대나무, 도자기","유통기한 12개월"), el:"木"}],
  ["tea",{id:"tea-sleep", name:"꿀잠 허브티 세트", sub:"티백 20개 + 찻잔", price:24000, rel:["부모님","동료","친구"], occ:["감사","그냥"], desc:"캐모마일, 라벤더, 레몬밤을 섞은 카페인 없는 허브티. 잠들기 전 한 잔이면 충분해요.", art:{a:"#8E7FB0",b:"#E2C9A0",bg:"#ECE8F2",l:"꿀잠 허브"}, spec:sp("티백 1.5g × 20개, 찻잔 150ml","캐모마일, 라벤더, 레몬밤","무카페인 · 유통기한 18개월")}],
  ["coffee",{id:"coffee-decaf", name:"디카페인 드립백 10입", sub:"카페인 97% 제거", price:11000, rel:["부모님","동료"], occ:["감사","그냥"], desc:"밤에도 마음 편히 마시는 디카페인 커피. 맛은 그대로예요.", art:{a:"#5B6E8C",b:"#2E2427",bg:"#E6E8EE"}, spec:sp("10g × 10입","디카페인 원두 100% (콜롬비아)","로스팅 후 3개월 안에 드시는 걸 권해요")}],
  ["mug",{id:"mug-espresso", name:"에스프레소 잔 페어", sub:"90ml × 2 · 소서 포함", price:26000, rel:["연인","친구"], occ:["집들이","기념일"], desc:"작고 도톰한 에스프레소 잔 두 개. 커피 좋아하는 커플에게 딱이에요.", art:{a:"#F2E6D6",b:"#2E5B8A",bg:"#E8ECF2"}, opt:null, spec:sp("90ml × 2 · 소서 포함","도자기 (수작업)","식기세척기 사용 가능")}],
  ["wallet",{id:"wallet-card", name:"가죽 명함 지갑", sub:"베지터블 레더 · 명함 30장", price:39000, rel:["동료"], occ:["졸업","감사"], desc:"첫 출근을 앞둔 사람에게 건네는 명함 지갑. 이니셜을 눌러 찍어 드려요.", art:{a:"#2F2A2B",b:"#C9A45C",bg:"#E9E4E2"}, keepEng:true, opt:null}],
  ["scarf",{id:"scarf-hanky", name:"실크 손수건", sub:"50 × 50cm · 실크 100%", price:29000, rel:["부모님","연인"], occ:["감사","기념일"], desc:"주머니에 꽂거나 가방에 묶는 작은 실크 손수건이에요.", art:{a:"#F3D9C8",b:"#B9546A",bg:"#F4ECE6"}, opt:null, spec:sp("50 × 50cm","실크 100% (트윌)","드라이클리닝 권장")}],
  ["bouquet",{id:"bouquet-hydrangea", name:"말린 수국 부케", sub:"높이 약 28cm", price:15000, rel:["연인","친구","부모님"], occ:["졸업","기념일","감사"], desc:"푸른빛이 은은하게 남아 있는 말린 수국 부케예요.", art:{a:"#9DB3D9",b:"#E9E3F2",bg:"#ECEDF4"}, opt:null}],
  ["letter",{id:"letter-newyear", name:"새해 연하장 세트", sub:"카드 4장 + 봉투", price:9000, rel:["부모님","동료","친구"], occ:["감사","그냥"], desc:"새해 인사를 손글씨로 전하는 레터프레스 카드. 띠 스티커가 함께 들어 있어요.", art:{a:"#F2D785",b:"#D2335C",bg:"#F6EFDC",l:"새해 복"}, opt:{label:"문구", onArt:true, values:["새해 복","늘 건강"]}}],
  ["choco",{id:"choco-matcha", name:"말차 생초콜릿 16구", sub:"제주 말차 · 생크림", price:25000, rel:["연인","친구","동료"], occ:["기념일","감사"], desc:"쌉싸름한 말차와 생크림이 입에서 사르르 녹아요.", art:{a:"#7DA06E",b:"#3E2A20",bg:"#E9EDE4"}}],
  ["macaron",{id:"macaron-fat", name:"뚱카롱 6구", sub:"필링 두 배 · 6가지 맛", price:19000, rel:["친구","연인"], occ:["생일","그냥"], desc:"필링을 두 배로 채운 통통한 마카롱. 한 입 크게 베어 물어야 해요.", art:{a:"#C9A0DC",b:"#F2D785",bg:"#F0E8F4"}}],
  ["socks",{id:"socks-sleep", name:"수면 양말 2켤레", sub:"극세사 · 미끄럼 방지", price:13000, rel:["부모님","연인","친구"], occ:["감사","그냥"], desc:"발이 찬 사람에게 꼭 필요한 보들보들 수면 양말이에요.", art:{a:"#E7B3B9",b:"#FFF3CC",bg:"#F6EAEA"}, spec:sp("230~260mm","폴리에스터 100% (극세사)","찬물 손세탁")}],
  ["lamp",{id:"lamp-moon", name:"미니 무드등 ‘달’", sub:"높이 15cm · 무선 충전식", price:32000, rel:["연인","친구"], occ:["생일","그냥"], desc:"보름달처럼 은은한 빛을 내는 작은 무드등이에요.", art:{a:"#F6EEDC",b:"#9AA0A8",bg:"#E8E8EC"}, opt:null, el:"金"}],
  ["olive",{id:"plant-yulma", name:"율마 미니 화분", sub:"높이 약 30cm · 토분", price:23000, rel:["친구","동료"], occ:["집들이","졸업"], desc:"만지면 상큼한 향이 나는 율마. 햇볕만 잘 들면 쑥쑥 자라요.", art:{a:"#B5CF6B",b:"#C27A5A",bg:"#EEF0E2"}, opt:null}],
  ["honey",{id:"honey-yuzu", name:"유자차 스틱 10입", sub:"고흥 유자 · 20g × 10", price:9800, rel:["동료","부모님"], occ:["감사","그냥"], desc:"따뜻한 물에 짜 넣기만 하면 되는 유자차. 감기 걸린 동료에게 건네보세요.", art:{a:"#F2B33D",b:"#C9A27E",bg:"#F6ECD8",l:"유자차",e:"YUZU · 20g × 10"}, spec:sp("20g × 10개","유자 50%, 설탕","유통기한 12개월"), el:"火"}],
  ["blanket",{id:"blanket-lap", name:"무릎 담요", sub:"70 × 100cm · 극세사", price:35000, rel:["동료","부모님","친구"], occ:["감사","그냥"], desc:"사무실 의자에 걸어두기 좋은 가벼운 무릎 담요예요.", art:{a:"#B9C7D9",b:"#7A5A44",bg:"#E9ECF1"}, opt:null, spec:sp("70 × 100cm","폴리에스터 100% (극세사)","세탁기 울코스")}],
  ["pen",{id:"pen-ball", name:"각인 볼펜 2자루", sub:"0.5mm · 리필 포함", price:22000, rel:["동료","친구"], occ:["졸업","감사"], desc:"매일 쓰는 볼펜에 이름을 새겨 선물하세요. 두 자루라 나눠 쓰기 좋아요.", art:{a:"#D2335C",b:"#C9B6A6",bg:"#F2E6E6",l:"0.5",e:"BALLPOINT · 0.5mm"}, opt:null, keepEng:true, spec:sp("길이 14cm × 2자루","알루미늄 바디, 유성 잉크","각인 후 교환·환불 불가")}],
  ["diary",{id:"diary-reading", name:"독서 기록장", sub:"A5 · 120권 기록", price:16000, rel:["친구","동료"], occ:["졸업","생일","그냥"], desc:"읽은 책과 밑줄 그은 문장을 남기는 기록장. 책 좋아하는 사람에게 딱이에요.", art:{a:"#C99A6B",b:"#C9A45C",bg:"#F2EADF",l:"READ",e:"READING LOG"}, opt:null, spec:sp("148 × 210mm · 192쪽","리넨 커버, 미색 모조지 100g","금박 후 교환·환불 불가")}],
  ["towel",{id:"towel-hand", name:"핸드타월 2장 세트", sub:"40수 코튼 · 34 × 40cm", price:19000, rel:["동료","친구"], occ:["집들이","감사"], desc:"주방이나 욕실에 걸어두는 작은 타월 두 장이에요.", art:{a:"#F2D785",b:"#BDEBD5",bg:"#F6F0DE"}, spec:sp("34 × 40cm × 2장","면 100% (40수)","첫 세탁 전 단독 세탁 권장")}],
  ["frame",{id:"frame-mini", name:"미니 액자 3종", sub:"3×5 사진용 · 자석 연결", price:24000, rel:["친구","연인","부모님"], occ:["졸업","기념일"], desc:"작은 액자 세 개를 이어 붙여 추억을 나란히 걸어요.", art:{a:"#E3D3BE",b:"#B8C9E6",bg:"#EEF0F4"}, opt:null}],
  ["necklace",{id:"necklace-gold", name:"골드 이니셜 목걸이", sub:"14K 도금 · 펜던트 각인", price:79000, rel:["연인","부모님"], occ:["기념일","생일"], desc:"따뜻한 골드 빛 펜던트에 이니셜을 새겨 드려요.", art:{a:"#2E3A5C",b:"#E3C77A",bg:"#E8EAF0",l:"M"}, keepEng:true, spec:sp("펜던트 지름 10mm · 체인 40/45/50cm","925 실버에 14K 금 도금","각인 후 교환·환불 불가 · 보증서 동봉")}]
];
let vn=200;
const MORE2 = [
  ...NEW_KIND.map((p,i)=>({ss:"", code:`GP-N${301+i}`, isNew:true, ...p})),
  ...VARIANTS.map(([base,o])=>{ const b=byId(base); const p={...b, ...o, art:{...b.art, ...(o.art||{})}, base, isNew:true, code:`GP-V${vn++}`}; if(!o.opt) delete p.opt; if(!o.keepEng) delete p.eng; return p; })
];
MORE2.forEach(p=>{ EL[p.id] = p.el || EL[p.base] || "土"; TRAIT[p.id] = p.tr || TRAIT[p.base] || ""; });
PRODUCTS.push(...MORE2);
const CAT_BY_KIND = {candle:"향기",diffuser:"향기",sachet:"향기",incense:"향기",perfume:"향기",tubes:"뷰티·바디",lip:"뷰티·바디",soap:"뷰티·바디",bath:"뷰티·바디",mug:"리빙",towel:"리빙",blanket:"리빙",lamp:"리빙",frame:"리빙",cushion:"리빙",clock:"리빙",wine:"리빙",tumbler:"리빙",tea:"푸드",coffee:"푸드",macaron:"푸드",choco:"푸드",honey:"푸드",cookie:"푸드",wallet:"패션·잡화",keyring:"패션·잡화",scarf:"패션·잡화",socks:"패션·잡화",mask:"패션·잡화",jewel:"패션·잡화",cap:"패션·잡화",beanie:"패션·잡화",pouch:"패션·잡화",bracelet:"패션·잡화",pen:"문구·취미",letter:"문구·취미",book:"문구·취미",tarot:"문구·취미",bouquet:"플라워·식물",plant:"플라워·식물",lucky:"럭키박스"};
PRODUCTS.forEach(p=>{ p.cat = CAT_BY_KIND[p.art.kind] || "기타"; });

/* ---------------- 상품 확장 2 (새 그림 11종 + 변형 36종) ---------------- */
Object.assign(ART, {
  gloves:(u,s)=>{const g=(dx,rot,c,id)=>`<g transform="translate(${dx} 0) rotate(${rot} 200 330)"><defs>${sheet(id,c)}</defs><g fill="url(#${id})" stroke="${dk(c,.32)}" stroke-width="1.2"><rect x="168" y="220" width="15" height="80" rx="7.5"/><rect x="184" y="206" width="15" height="92" rx="7.5"/><rect x="200" y="210" width="15" height="88" rx="7.5"/><rect x="216" y="224" width="14" height="74" rx="7"/><rect x="226" y="276" width="15" height="58" rx="7.5" transform="rotate(38 233 305)"/><rect x="166" y="280" width="66" height="112" rx="12"/></g><rect x="164" y="384" width="70" height="28" rx="4" fill="${dk(c,.16)}"/><path d="M168 390H230" stroke="${lt(c,.35)}" stroke-dasharray="3 3"/></g>`;return sh(206,104)+g(-36,-12,dk(s.a,.18),u+"b")+g(30,8,s.a,u+"a");},
  umbrella:(u,s)=>`<defs>${cyl(u+"c",s.a)}</defs>${sh(214,70,420,.7)}<g transform="rotate(-14 200 300)"><line x1="200" y1="146" x2="200" y2="176" stroke="#C9A45C" stroke-width="4"/><path d="M200 172C184 230 176 300 180 362H220C224 300 216 230 200 172Z" fill="url(#${u}c)"/><path d="M200 176C196 240 194 300 196 360M200 176C206 240 208 300 206 360" stroke="${dk(s.a,.25)}" fill="none"/><rect x="184" y="300" width="32" height="10" rx="3" fill="${s.b}"/><line x1="200" y1="362" x2="200" y2="400" stroke="#3A2A20" stroke-width="5"/><path d="M200 398Q200 424 222 424Q240 424 240 406" stroke="#7A5232" stroke-width="10" fill="none" stroke-linecap="round"/></g>`,
  speaker:(u,s)=>`<defs>${sheet(u+"b",s.a)}</defs>${sh(200,104)}<rect x="178" y="232" width="44" height="22" rx="11" fill="none" stroke="${s.b}" stroke-width="6"/><rect x="104" y="250" width="192" height="170" rx="26" fill="url(#${u}b)"/><rect x="118" y="264" width="164" height="118" rx="14" fill="${dk(s.a,.12)}"/>${[...Array(9)].map((_,i)=>[...Array(13)].map((_,j)=>`<circle cx="${128+j*12}" cy="${274+i*12}" r="2" fill="${dk(s.a,.35)}" opacity=".6"/>`).join("")).join("")}<rect x="118" y="392" width="164" height="16" rx="8" fill="${lt(s.a,.15)}"/><circle cx="268" cy="400" r="5" fill="${s.b}"/>${T(160,404,6,"GIFT PICK SOUND",{ls:1.6,fill:dk(s.a,.5)})}`,
  bottle:(u,s)=>`<defs>${cyl(u+"g",s.a,.95)}</defs>${sh(200,46)}<path d="M186 150H214V214C214 232 246 250 246 290V408Q246 420 234 420H166Q154 420 154 408V290C154 250 186 232 186 214Z" fill="url(#${u}g)"/><path d="M184 146H216V224C216 236 200 240 200 240S184 236 184 224Z" fill="url(#gpGoldH)"/><rect x="160" y="300" width="80" height="70" fill="#FBF7F2"/>${T(200,320,5.5,"NON-ALCOHOLIC",{ls:1.4,fill:"#8A7A80"})}${T(200,340,11,s.l||"스파클링",{serif:1})}${T(200,357,5.5,"GIFT PICK · 750ml",{ls:1.4,fill:"#8A7A80"})}${spec(164,250,8,150,.5)}`,
  cake:(u,s)=>`<defs>${cyl(u+"c",s.a)}</defs>${sh(200,112)}<ellipse cx="200" cy="412" rx="118" ry="14" fill="#F4EEE8" stroke="#E2D6CF"/><ellipse cx="200" cy="400" rx="92" ry="16" fill="${dk(s.a,.2)}"/><rect x="108" y="310" width="184" height="90" fill="url(#${u}c)"/><ellipse cx="200" cy="310" rx="92" ry="18" fill="${lt(s.a,.45)}"/>${[...Array(8)].map((_,i)=>`<path d="M${118+i*23} 314q6 18 12 0" fill="${lt(s.a,.45)}"/>`).join("")}${[[160,302],[200,298],[240,302]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="9" fill="${s.b}"/><circle cx="${x-3}" cy="${y-3}" r="3" fill="#fff" opacity=".5"/>`).join("")}<rect x="196" y="252" width="8" height="44" rx="2" fill="#F6EEDC" stroke="${s.b}"/><path d="M200 232C208 240 208 248 200 252 192 248 192 240 200 232Z" fill="#F6B95E"/>${T(200,368,7,"GIFT PICK BAKERY",{ls:2.4,fill:"#fff",op:.9})}`,
  kit:(u,s)=>`<defs>${sheet(u+"b",s.a)}</defs>${sh(200,120)}<polygon points="84,300 316,300 300,280 100,280" fill="${lt(s.a,.2)}"/><rect x="96" y="286" width="70" height="56" rx="4" fill="#F3E7D9"/><rect x="176" y="270" width="40" height="72" rx="6" fill="#fff" fill-opacity=".55" stroke="#fff"/><line x1="196" y1="270" x2="196" y2="252" stroke="#3A2A20" stroke-width="2"/>${[...Array(8)].map((_,i)=>{const x=232+(i%4)*16,y=292+Math.floor(i/4)*14;return `<rect x="${x}" y="${y}" width="10" height="8" rx="2" fill="${s.b}" transform="rotate(${i*17} ${x+5} ${y+4})"/>`}).join("")}<rect x="84" y="330" width="232" height="90" rx="3" fill="url(#${u}b)"/>${T(200,370,12,s.l||"캔들 만들기 키트",{serif:1,fill:"#fff"})}${T(200,390,6,"GIFT PICK DIY KIT",{ls:2.4,fill:"#fff",op:.85})}`,
  puzzle:(u,s)=>`<defs>${sheet(u+"b",s.a)}<linearGradient id="${u}sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${lt(s.b,.3)}"/><stop offset="1" stop-color="${s.b}"/></linearGradient></defs>${sh(200,120)}<g transform="rotate(-4 200 330)"><rect x="96" y="250" width="208" height="160" rx="4" fill="url(#${u}b)"/><rect x="110" y="264" width="180" height="104" fill="url(#${u}sky)"/><circle cx="250" cy="296" r="14" fill="#FFF1DE"/><path d="M110 340Q160 300 200 330T290 320V368H110Z" fill="${dk(s.b,.3)}"/>${T(200,392,9,s.l||"1000 PIECES",{ls:2.4,fill:"#fff",w:500})}</g><path d="M304 404h12a6 6 0 1 1 10 0h12v12a6 6 0 1 0 0 10v12h-34z" fill="${s.b}" stroke="${dk(s.b,.3)}" transform="rotate(20 320 420)"/>`,
  mochi:(u,s)=>`<defs><radialGradient id="${u}m" cx=".4" cy=".35" r=".75"><stop offset="0" stop-color="${lt(s.a,.5)}"/><stop offset=".8" stop-color="${s.a}"/><stop offset="1" stop-color="${dk(s.a,.15)}"/></radialGradient></defs>${sh(200,110,418)}<ellipse cx="146" cy="252" rx="22" ry="34" fill="url(#${u}m)" transform="rotate(-20 146 252)"/><ellipse cx="254" cy="252" rx="22" ry="34" fill="url(#${u}m)" transform="rotate(20 254 252)"/><path d="M90 400C80 320 130 258 200 258C270 258 320 320 310 400Q200 426 90 400Z" fill="url(#${u}m)"/><circle cx="168" cy="340" r="7" fill="#221A1F"/><circle cx="232" cy="340" r="7" fill="#221A1F"/><circle cx="170" cy="338" r="2" fill="#fff"/><circle cx="234" cy="338" r="2" fill="#fff"/><path d="M192 354q8 8 16 0" stroke="#221A1F" stroke-width="3" fill="none" stroke-linecap="round"/><ellipse cx="146" cy="362" rx="14" ry="8" fill="${s.b}" opacity=".7"/><ellipse cx="254" cy="362" rx="14" ry="8" fill="${s.b}" opacity=".7"/>`,
  slippers:(u,s)=>{const sl=(x,rot,id)=>`<g transform="rotate(${rot} ${x} 360)"><defs>${sheet(id,s.a)}</defs><ellipse cx="${x}" cy="362" rx="42" ry="72" fill="${dk(s.a,.22)}"/><ellipse cx="${x}" cy="358" rx="38" ry="68" fill="url(#${id})"/><path d="M${x-40} 332Q${x} 292 ${x+40} 332V374Q${x} 342 ${x-40} 374Z" fill="${s.b}"/><path d="M${x-40} 332Q${x} 292 ${x+40} 332" stroke="#fff" stroke-width="5" stroke-dasharray="1 5" stroke-linecap="round" fill="none" opacity=".85"/></g>`;return sh(200,110)+sl(150,-10,u+"a")+sl(252,10,u+"b");},
  vase:(u,s)=>`<defs>${cyl(u+"v",s.a)}</defs>${sh(200,56)}<g stroke="#7D8A62" stroke-width="2.4" stroke-linecap="round" fill="none"><path d="M200 272C196 222 186 192 170 162M204 272C210 222 226 188 240 172"/></g><circle cx="170" cy="160" r="14" fill="${s.b}"/><circle cx="240" cy="170" r="11" fill="${lt(s.b,.3)}"/><ellipse cx="186" cy="204" rx="10" ry="4" fill="#9DAA8C" transform="rotate(-40 186 204)"/><path d="M182 270H218V286C254 300 262 336 256 372C250 404 230 420 200 420C170 420 150 404 144 372C138 336 146 300 182 286Z" fill="url(#${u}v)"/><ellipse cx="200" cy="270" rx="18" ry="4" fill="${dk(s.a,.3)}"/>${spec(156,300,8,90,.4)}`,
  camera:(u,s)=>`<defs>${sheet(u+"b",s.a)}<radialGradient id="${u}l" cx=".4" cy=".35" r=".7"><stop offset="0" stop-color="#5A6A80"/><stop offset="1" stop-color="#0E1218"/></radialGradient></defs>${sh(200,110)}<rect x="270" y="280" width="22" height="12" rx="3" fill="#2A2A2E"/><rect x="90" y="290" width="220" height="130" rx="12" fill="url(#${u}b)"/><rect x="90" y="330" width="220" height="56" fill="${s.b}"/><rect x="110" y="300" width="40" height="22" rx="3" fill="#2A2A2E"/><rect x="250" y="300" width="44" height="14" rx="3" fill="#F2F0EA"/><circle cx="210" cy="360" r="44" fill="#2A2A2E"/><circle cx="210" cy="360" r="32" fill="url(#${u}l)"/><circle cx="198" cy="348" r="8" fill="#fff" opacity=".35"/>${T(140,410,6,"GIFT PICK FILM · 27",{ls:1.4,fill:"#fff",op:.85})}`
});
Object.assign(CAT_BY_KIND, {gloves:"패션·잡화",umbrella:"패션·잡화",slippers:"패션·잡화",speaker:"리빙",vase:"리빙",bottle:"푸드",cake:"푸드",kit:"문구·취미",puzzle:"문구·취미",mochi:"문구·취미",camera:"문구·취미"});
const MBTI16 = ["ENFP","ENFJ","ENTP","ENTJ","ESFP","ESFJ","ESTP","ESTJ","INFP","INFJ","INTP","INTJ","ISFP","ISFJ","ISTP","ISTJ"];
const NEW_KIND2 = [
  {id:"gloves", name:"가죽 터치 장갑", sub:"양가죽 · 스마트폰 터치", price:45000, rel:["연인","부모님","동료"], occ:["기념일","감사"], maker:"제휴 가죽 공방", desc:"장갑을 낀 채로 휴대폰을 쓸 수 있는 부드러운 양가죽 장갑. 출퇴근길이 따뜻해져요.", art:{kind:"gloves",a:"#6E4A3A",b:"#C9A45C",bg:"#EEE4DE"}, opt:{label:"색상", values:[{name:"브라운",a:"#6E4A3A"},{name:"블랙",a:"#2F2A2B"},{name:"버건디",a:"#6B2233"}]}, spec:sp("S / M / L","양가죽, 캐시미어 혼방 안감","가죽 전용 클리너로 관리"), el:"金", tr:"STJ"},
  {id:"umbrella", name:"자동 접이식 우산", sub:"원터치 · 경량 280g", price:29000, rel:["동료","친구","부모님"], occ:["감사","그냥"], maker:"제휴 리빙 브랜드", desc:"버튼 하나로 펴고 접는 가벼운 우산. 가방에 늘 넣어두는 실용 선물이에요.", art:{kind:"umbrella",a:"#2E3A5C",b:"#FFD45C",bg:"#E8EAF0"}, opt:{label:"색상", values:[{name:"네이비",a:"#2E3A5C"},{name:"버건디",a:"#6B2233"},{name:"세이지",a:"#7C9A7A"}]}, spec:sp("접었을 때 28cm · 280g","폴리에스터 방수 원단, 알루미늄 살","젖은 채로 오래 접어두지 마세요"), el:"水", tr:"SJ"},
  {id:"speaker", name:"미니 블루투스 스피커", sub:"방수 · 12시간 재생", price:49000, rel:["친구","연인"], occ:["생일","집들이"], maker:"제휴 사운드 브랜드", desc:"손바닥만 한데 소리가 꽉 찬 스피커. 캠핑, 욕실, 책상 어디든 들고 다녀요.", art:{kind:"speaker",a:"#E9DCCF",b:"#D2335C",bg:"#F1EAE4"}, opt:{label:"색상", values:[{name:"크림",a:"#E9DCCF"},{name:"차콜",a:"#3A3436",b:"#FFD45C"},{name:"민트",a:"#9ED1BC"}]}, spec:sp("10 × 8 × 5cm · 320g","패브릭 그릴, ABS 바디","KC 인증 · USB-C 충전"), el:"火", tr:"EP"},
  {id:"sparkling", name:"무알콜 스파클링 와인", sub:"750ml · 0.0% 알코올", price:24000, rel:["부모님","친구","동료"], occ:["집들이","기념일","감사"], maker:"제휴 음료 브랜드", desc:"술은 못 해도 건배는 하고 싶은 날을 위한 무알콜 스파클링. 축하 자리에 잘 어울려요.", art:{kind:"bottle",a:"#B9546A",b:"#C9A45C",bg:"#EEE6E8",l:"로제 스파클링"}, opt:{label:"맛", onArt:true, values:[{name:"로제",a:"#B9546A",l:"로제 스파클링"},{name:"화이트",a:"#8FA05A",l:"화이트 스파클링"}]}, spec:sp("750ml","포도 주스, 탄산 (알코올 0.0%)","유통기한 24개월 · 개봉 후 냉장"), el:"火", tr:"EF"},
  {id:"cake", name:"미니 레터링 케이크", sub:"지름 12cm · 1~2인용", price:32000, rel:["친구","연인"], occ:["생일","기념일"], maker:"제휴 디저트 공방", desc:"케이크 위에 원하는 문장을 써 드려요. 생일 당일 아침에 받는 게 제일 행복해요.", art:{kind:"cake",a:"#F3D3DC",b:"#D2335C",bg:"#F6EAEC"}, opt:{label:"맛", values:[{name:"딸기 생크림"},{name:"초코",a:"#7A5040",b:"#F2D785"},{name:"얼그레이",a:"#C9B6A6",b:"#6B2233"}]}, eng:{max:12, hint:"레터링 12자까지", ph:"예) 생일 축하해"}, spec:sp("지름 12 × 높이 8cm","생크림, 밀가루, 달걀, 설탕 (알레르기: 우유, 달걀, 밀)","서울·경기 당일 퀵 배송 · 받은 날 드세요"), el:"火", tr:"EF"},
  {id:"diykit", name:"DIY 만들기 키트", sub:"재료 + 도구 + 영상 가이드", price:27000, rel:["친구","연인"], occ:["생일","그냥"], maker:"제휴 캔들 공방 · 서울 성수", desc:"주말에 함께 만들며 노는 선물. 처음 해도 한 시간이면 완성해요.", art:{kind:"kit",a:"#C9707F",b:"#F2D785",bg:"#F4E8E8",l:"캔들 만들기 키트"}, opt:{label:"종류", onArt:true, values:[{name:"캔들 만들기",l:"캔들 만들기 키트"},{name:"비누 만들기",l:"비누 만들기 키트",a:"#7FA898"},{name:"석고 방향제 만들기",l:"석고 방향제 키트",a:"#9C8FC0"}]}, spec:sp("박스 25 × 18 × 9cm","왁스·비누 베이스, 향료, 용기, 도구","만 14세 이상 · 화기 주의"), el:"火", tr:"NP"},
  {id:"puzzle", name:"1000피스 직소 퍼즐", sub:"노을 풍경 · 완성 크기 75 × 50cm", price:22000, rel:["친구","부모님"], occ:["생일","그냥"], maker:"제휴 문구 편집숍", desc:"조용히 집중하는 시간을 선물하세요. 완성하면 액자에 걸어도 예뻐요.", art:{kind:"puzzle",a:"#2E3A5C",b:"#F1B9A0",bg:"#E8EAF0"}, spec:sp("1000피스 · 완성 75 × 50cm","재생 종이","작은 조각이 있어 어린이 손이 닿지 않게 보관"), el:"土", tr:"IN"},
  {id:"mochi", name:"말랑 모찌 인형", sub:"높이 20cm · 쫀득 촉감", price:25000, rel:["친구","연인"], occ:["생일","그냥"], maker:"제휴 패브릭 공방", desc:"꾹 누르면 천천히 돌아오는 쫀득한 인형. 책상 위 스트레스 해소 담당이에요.", art:{kind:"mochi",a:"#F6E3D0",b:"#F2A7B4",bg:"#F6EDE8"}, opt:{label:"맛", values:[{name:"우유",a:"#F6E3D0"},{name:"딸기",a:"#F7C6CF"},{name:"말차",a:"#C9DDB0"}]}, spec:sp("높이 20cm","폴리에스터, 스판 원단","KC 인증 · 손세탁"), el:"土", tr:"FP"},
  {id:"slippers", name:"양털 실내화", sub:"230~270mm · 미끄럼 방지", price:29000, rel:["부모님","연인","친구"], occ:["집들이","감사","그냥"], maker:"제휴 리빙 브랜드", desc:"발이 폭 감싸지는 양털 실내화. 겨울 집들이 선물로 많이 골라요.", art:{kind:"slippers",a:"#E9DCCF",b:"#C9A99A",bg:"#F2ECE6"}, opt:{label:"색상", values:[{name:"크림",a:"#E9DCCF"},{name:"그레이",a:"#B9B4B0"},{name:"핑크",a:"#F2C9CF"}]}, spec:sp("230~270mm (S/M/L)","인조 양털, TPR 밑창","손세탁 후 그늘 건조"), el:"土", tr:"IS"},
  {id:"vase", name:"도자기 미니 화병", sub:"높이 15cm · 유약 3종", price:26000, rel:["부모님","친구"], occ:["집들이","감사"], maker:"제휴 도자기 공방 · 경기 이천", desc:"꽃 한두 송이만 꽂아도 분위기가 사는 작은 화병이에요.", art:{kind:"vase",a:"#3F5A7A",b:"#F1B9A0",bg:"#E8ECF0"}, opt:{label:"유약", values:[{name:"코발트",a:"#3F5A7A"},{name:"화이트",a:"#EDE7DE"},{name:"셀라돈",a:"#9FBFAE"}]}, spec:sp("높이 15 × 지름 10cm","도자기 (수작업)","손으로 빚어 모양이 하나씩 달라요"), el:"土", tr:"IN"},
  {id:"camera", name:"일회용 필름 카메라", sub:"27컷 · 플래시 내장", price:18000, rel:["친구","연인"], occ:["생일","졸업","그냥"], maker:"제휴 문구 편집숍", desc:"찍고 나서 현상할 때까지 기다리는 설렘. 여행 가는 친구에게 딱이에요.", art:{kind:"camera",a:"#2E2A2B",b:"#D2335C",bg:"#ECE8E8"}, opt:{label:"색상", values:[{name:"블랙"},{name:"화이트",a:"#EDE7DE",b:"#2E5B8A"}]}, spec:sp("27컷 · ISO 400","플라스틱 바디, 컬러 필름","현상은 가까운 사진관에서"), el:"金", tr:"EP"}
];
const VARIANTS2 = [
  ["candle",{id:"candle-lavender", name:"라벤더 숙면 캔들", sub:"220g · 약 45시간", price:24000, rel:["부모님","동료","친구"], occ:["감사","그냥"], desc:"잠들기 30분 전에 켜두면 좋은 차분한 라벤더 향이에요.", art:{a:"#9C8FC0",b:"#E2DAF0",bg:"#ECE8F2",l:"라벤더 숙면"}, el:"水"}],
  ["candle",{id:"candle-vanilla", name:"바닐라 쿠키 캔들", sub:"220g · 약 45시간", price:24000, rel:["친구","연인"], occ:["생일","그냥"], desc:"갓 구운 쿠키 같은 달콤한 바닐라 향. 방 안이 베이커리가 돼요.", art:{a:"#D9B58A",b:"#F3E3CC",bg:"#F5ECE0",l:"바닐라 쿠키"}, el:"土"}],
  ["diffuser",{id:"diffuser-garden", name:"리드 디퓨저 ‘봄 정원’", sub:"200ml · 약 2개월", price:29000, rel:["연인","친구"], occ:["집들이","생일"], desc:"작약과 프리지아가 섞인 화사한 꽃 향이에요.", art:{a:"#F2C9D2",b:"#E3A3B5",bg:"#F6E8EC",l:"봄 정원"}, el:"木"}],
  ["perfume",{id:"perfume-sea", name:"오 드 퍼퓸 ‘여름 바다’", sub:"30ml · 시솔트, 화이트 머스크", price:58000, rel:["친구","연인"], occ:["생일","그냥"], desc:"바닷바람과 햇볕에 마른 셔츠 같은 시원한 향이에요.", art:{a:"#9FC4DE",b:"#2E2427",bg:"#E6EEF4",l:"여름 바다",e:"SUMMER SEA"}, el:"水"}],
  ["soap",{id:"soap-greentea", name:"녹차 비누 세트", sub:"100g × 3 · 제주 녹차", price:18000, rel:["부모님","동료"], occ:["감사","집들이"], desc:"제주 녹차 가루를 넣어 은은한 초록빛이 도는 비누예요.", art:{a:"#9DBB8A",b:"#E2E8D0",bg:"#ECF0E4"}, el:"木"}],
  ["bath",{id:"bath-lavender", name:"라벤더 입욕제 3구", sub:"120g × 3", price:21000, rel:["부모님","연인","동료"], occ:["감사","그냥"], desc:"긴 하루 끝에 라벤더 향 거품 목욕을 선물하세요.", art:{a:"#B7A3D9",b:"#E9E3F2",bg:"#EEEAF4"}}],
  ["hand",{id:"hand-winter", name:"핸드크림 겨울 에디션", sub:"30ml × 3 · 고보습", price:21000, rel:["동료","친구","부모님"], occ:["감사","그냥"], desc:"갈라지는 겨울 손을 위한 진한 보습 핸드크림 세 가지예요.", art:{a:"#8C2A3E",b:"#3F5A44",bg:"#EFE4E6"}}],
  ["lip",{id:"lip-coral", name:"틴티드 립밤 세트", sub:"코랄 · 로즈 · 레드", price:17000, rel:["친구","연인"], occ:["생일","그냥"], desc:"보습하면서 은은하게 색이 도는 립밤 세트예요.", art:{a:"#E86A5A",b:"#F6D9CC",bg:"#F6E8E4"}}],
  ["mug",{id:"mug-mono", name:"블랙 & 화이트 커플 머그", sub:"350ml × 2", price:32000, rel:["연인"], occ:["기념일","집들이"], desc:"하나는 블랙, 하나는 화이트. 나란히 두면 더 예쁜 커플 머그예요.", art:{a:"#F2EEE8",b:"#2E2A2B",bg:"#ECEAE8"}, opt:null}],
  ["wine",{id:"glass-champagne", name:"샴페인 글라스 페어", sub:"200ml × 2 · 크리스탈", price:44000, rel:["연인","부모님"], occ:["기념일","집들이"], desc:"축하할 일이 생기면 꺼내는 샴페인 잔 두 개예요.", art:{a:"#E9C46A",b:"#F6EEDC",bg:"#F5EFE2"}}],
  ["tea",{id:"tea-puer", name:"보이차 선물 세트", sub:"100g + 찻잔", price:42000, rel:["부모님","동료"], occ:["감사","기념일"], desc:"깊고 구수한 숙성 보이차. 어른들께 드리는 차 선물로 좋아요.", art:{a:"#5A3A2A",b:"#C9A45C",bg:"#EDE4DC",l:"보이차"}, spec:sp("100g, 찻잔 150ml","보이차 100% (운남)","유통기한 36개월")}],
  ["tea",{id:"tea-tangerine", name:"제주 감귤 홍차", sub:"티백 20개 + 찻잔", price:23000, rel:["친구","동료"], occ:["감사","그냥"], desc:"제주 감귤 껍질을 넣어 상큼하게 우러나는 홍차예요.", art:{a:"#E89B4E",b:"#3F5A44",bg:"#F6E9DC",l:"감귤 홍차"}, el:"火"}],
  ["coffee",{id:"coffee-season", name:"시즌 블렌드 드립백 20입", sub:"4가지 원두 × 5", price:19000, rel:["동료","친구"], occ:["감사","그냥"], desc:"한 달 내내 다른 커피를 맛보는 드립백 20개예요.", art:{a:"#C9707F",b:"#3F5A44",bg:"#F2E6E4"}}],
  ["macaron",{id:"macaron-matcha", name:"말차 마카롱 12구", sub:"말차 · 흑임자 · 쑥", price:28000, rel:["부모님","친구"], occ:["감사","생일"], desc:"달지 않고 고소한 한국식 마카롱이에요.", art:{a:"#9DBB8A",b:"#3A3436",bg:"#ECF0E4"}}],
  ["choco",{id:"choco-dark", name:"다크 초콜릿 25구", sub:"카카오 70% · 5가지 맛", price:35000, rel:["연인","동료"], occ:["기념일","감사"], desc:"카카오 향이 진한 다크 초콜릿 스물다섯 알이에요.", art:{a:"#7A4A3A",b:"#2E1E18",bg:"#ECE2DC"}}],
  ["cookie",{id:"cookie-choco", name:"초코칩 쿠키 틴", sub:"쿠키 24개", price:19000, rel:["친구","동료"], occ:["생일","그냥"], desc:"초코칩을 듬뿍 넣은 꾸덕한 쿠키가 빨간 틴에 담겨 있어요.", art:{a:"#B23A3A",b:"#F2D785",bg:"#F4E4E2"}, el:"火"}],
  ["cookie",{id:"cookie-matcha", name:"말차 쿠키 틴", sub:"쿠키 24개", price:21000, rel:["부모님","동료"], occ:["감사","집들이"], desc:"쌉싸름한 말차와 화이트 초콜릿이 어울리는 쿠키예요.", art:{a:"#5E8A5A",b:"#F2D785",bg:"#E8EDE4"}, el:"木"}],
  ["honey",{id:"honey-ginger", name:"생강차 스틱 10입", sub:"국산 생강 · 20g × 10", price:9900, rel:["부모님","동료"], occ:["감사","그냥"], desc:"목이 칼칼한 날 따뜻하게 타 마시는 생강차예요.", art:{a:"#C98A3A",b:"#C9A27E",bg:"#F2E8DA",l:"생강차",e:"GINGER · 20g × 10"}, el:"火"}],
  ["blanket",{id:"blanket-check", name:"체크 울 블랭킷", sub:"140 × 180cm", price:79000, rel:["부모님","연인"], occ:["집들이","기념일"], desc:"클래식한 체크무늬 울 블랭킷. 소파 위 분위기가 확 달라져요.", art:{a:"#8C2A3E",b:"#3F5A44",bg:"#EFE4E6"}, opt:null}],
  ["cushion",{id:"cushion-mbti", name:"MBTI 자수 쿠션", sub:"45 × 45cm · 16유형", price:42000, rel:["친구","연인"], occ:["생일","집들이"], desc:"받는 분 MBTI 네 글자를 가운데에 수놓은 쿠션이에요.", art:{a:"#D8C8FF",b:"#FFD45C",bg:"#F1EBFF",l:"ENFP"}, opt:{label:"MBTI", onArt:true, values:MBTI16}, el:"土", tr:"EF"}],
  ["cap",{id:"cap-mbti", name:"MBTI 자수 볼캡", sub:"코튼 · 프리사이즈", price:34000, rel:["친구","연인"], occ:["생일","그냥"], desc:"모자 앞에 MBTI 네 글자를 수놓아요. 모임에서 대화 시작용으로 최고예요.", art:{a:"#EDE3D3",b:"#D2335C",bg:"#F4EEE6",l:"ENFP"}, opt:{label:"MBTI", onArt:true, values:MBTI16}, tr:"EP"}],
  ["socks",{id:"socks-xmas", name:"홀리데이 양말 3켤레", sub:"울 70% · 크리스마스 에디션", price:17000, rel:["친구","동료","연인"], occ:["생일","그냥"], desc:"빨강, 초록, 크림 세 켤레로 연말 분위기를 신어요.", art:{a:"#B23A3A",b:"#3F7D52",bg:"#F4E6E4"}}],
  ["bouquet",{id:"bouquet-cotton", name:"목화 부케", sub:"높이 약 30cm", price:19000, rel:["부모님","친구"], occ:["감사","집들이","졸업"], desc:"포근한 목화송이를 모은 부케. 오래 두어도 그대로예요.", art:{a:"#F4EEE6",b:"#FFFFFF",bg:"#EEEAE6"}}],
  ["olive",{id:"plant-stuckyi", name:"스투키 화분", sub:"높이 약 30cm · 공기정화", price:21000, rel:["동료","부모님"], occ:["집들이","감사"], desc:"한 달에 한 번만 물 주면 되는 공기정화 식물이에요.", art:{a:"#5E7A5A",b:"#E9E1D6",bg:"#E8ECE4"}}],
  ["olive",{id:"plant-rosemary", name:"로즈마리 화분", sub:"높이 약 25cm · 허브", price:19000, rel:["친구","연인"], occ:["집들이","그냥"], desc:"잎을 쓸면 상쾌한 향이 나는 로즈마리. 요리에 써도 돼요.", art:{a:"#7C9A8A",b:"#C27A5A",bg:"#EAEEE8"}}],
  ["letter",{id:"letter-birthday", name:"생일 축하 카드 세트", sub:"카드 4장 + 봉투", price:8500, rel:["친구","동료"], occ:["생일"], desc:"두꺼운 코튼지에 눌러 찍은 생일 카드예요.", art:{a:"#BDEBD5",b:"#D2335C",bg:"#E9F4EE",l:"생일 축하해"}, opt:{label:"문구", onArt:true, values:["생일 축하해","HAPPY BIRTHDAY"]}}],
  ["diary",{id:"diary-sheep", name:"2027 정미년 다이어리", sub:"A5 · 양띠 해 에디션", price:28000, rel:["친구","동료","부모님"], occ:["생일","감사","그냥"], desc:"2027년은 붉은 양의 해, 정미년이에요. 양띠 금박이 들어간 새해 다이어리예요.", art:{a:"#C8502E",b:"#C9A45C",bg:"#F4E6DE",l:"未",e:"2027 · YEAR OF THE SHEEP"}, el:"火"}],
  ["tarot",{id:"tarot-daily", name:"오늘의 운세 카드 30장", sub:"하루 한 장 · 미니 카드", price:16000, rel:["친구","동료"], occ:["생일","그냥"], desc:"아침마다 한 장 뽑아보는 귀여운 운세 카드예요.", art:{a:"#C9707F",b:"#FFD45C",bg:"#F4E8EA"}, spec:sp("카드 6 × 9cm × 30장","코팅 아트지","재미로 즐겨주세요")}],
  ["necklace",{id:"necklace-birth", name:"탄생석 목걸이", sub:"925 실버 · 12개월 탄생석", price:59000, rel:["연인","친구"], occ:["생일"], desc:"태어난 달의 탄생석을 작게 박은 목걸이예요.", art:{a:"#3F7D72",b:"#C9CBD1",bg:"#E6EEEC",l:"✦"}, opt:{label:"태어난 달", values:["1월 가넷","2월 자수정","3월 아쿠아마린","4월 크리스털","5월 에메랄드","6월 문스톤","7월 루비","8월 페리도트","9월 사파이어","10월 오팔","11월 토파즈","12월 터키석"]}}],
  ["keyring",{id:"keyring-zodiac", name:"12띠 가죽 키링", sub:"띠 한자 각인", price:14000, rel:["친구","동료","연인"], occ:["생일","그냥"], desc:"받는 분 띠의 한자를 눌러 찍은 가죽 키링이에요.", art:{a:"#8C4A3A",b:"#C9A45C",bg:"#EEE3DC",l:"寅"}, opt:{label:"띠", onArt:true, values:ZODIAC.map(z=>({name:z[0]+"띠",l:z[1]}))}}],
  ["eyemask",{id:"eyepillow-lavender", name:"라벤더 아이 필로우", sub:"데우거나 차갑게", price:22000, rel:["부모님","동료"], occ:["감사","그냥"], desc:"전자레인지에 살짝 데워 눈 위에 올리면 피로가 풀려요.", art:{a:"#B7A3D9",b:"#EEEAF4",bg:"#EEEAF4"}, opt:null}],
  ["sachet",{id:"sachet-hinoki", name:"히노끼 향 주머니 3입", sub:"리넨 파우치", price:8900, rel:["동료","부모님"], occ:["감사","집들이"], desc:"편백 조각을 채운 향 주머니. 신발장이나 차 안에 두기 좋아요.", art:{a:"#E6DCCB",b:"#6F8A70",bg:"#ECEEE6"}}],
  ["lamp",{id:"lamp-spring", name:"무드등 ‘봄밤’", sub:"높이 22cm · 무선 충전식", price:54000, rel:["연인","친구"], occ:["생일","기념일"], desc:"벚꽃잎처럼 분홍빛이 도는 무드등이에요.", art:{a:"#F6C9D2",b:"#C9A27E",bg:"#F2E4E8"}, opt:null}],
  ["camera",{id:"camera-white", name:"필름 카메라 2개 세트", sub:"27컷 × 2", price:32000, rel:["연인","친구"], occ:["기념일","그냥"], desc:"둘이 하나씩 들고 여행 가는 커플 필름 카메라예요.", art:{a:"#EDE7DE",b:"#2E5B8A",bg:"#ECEEF2"}, opt:null}],
  ["umbrella",{id:"umbrella-long", name:"장우산 ‘노을’", sub:"16살 · 대형", price:39000, rel:["부모님","동료"], occ:["감사","그냥"], desc:"둘이 써도 넉넉한 큰 장우산이에요.", art:{a:"#C8502E",b:"#FFD45C",bg:"#F4E6DE"}, opt:null}],
  ["mochi",{id:"mochi-zodiac", name:"띠 모찌 인형", sub:"높이 20cm · 띠 자수 태그", price:27000, rel:["친구","연인","부모님"], occ:["생일","그냥"], desc:"받는 분 띠 이름을 태그에 수놓은 쫀득 인형이에요.", art:{a:"#F2D785",b:"#F2A7B4",bg:"#F6F0DE"}, opt:{label:"띠", values:ZODIAC.map(z=>z[0]+"띠")}}]
];
let vn2=300;
const NEW3 = NEW_KIND2.map((p,i)=>({ss:"", code:`GP-N${401+i}`, isNew:true, ...p}));
PRODUCTS.push(...NEW3);
const MORE3 = [
  ...VARIANTS2.map(([base,o])=>{ const b=byId(base); const p={...b, ...o, art:{...b.art, ...(o.art||{})}, base, isNew:true, code:`GP-V${vn2++}`}; if(!o.opt) delete p.opt; if(!o.keepEng) delete p.eng; return p; })
];
[...NEW3, ...MORE3].forEach(p=>{ EL[p.id] = p.el || EL[p.base] || "土"; TRAIT[p.id] = p.tr || TRAIT[p.base] || ""; });
PRODUCTS.push(...MORE3);
PRODUCTS.forEach(p=>{ p.cat = CAT_BY_KIND[p.art.kind] || "기타"; });

/* ---------------- 추천 점수 & 문장 생성 ---------------- */
const pickBy = (arr, seed) => arr[hash(seed) % arr.length];
const fill = (t, v) => t.replace(/\{(\w+)\}/g, (_,k)=>v[k] ?? "");
const BRANCH_EL = "水土木木土火火土金金土水";           // 띠(지지)의 오행
const GEN_BY = {火:"木",土:"火",金:"土",水:"金",木:"水"};  // 나를 살려주는 기운
const ZOD_CAT = [["문구·취미","푸드"],["리빙","푸드"],["패션·잡화","향기"],["플라워·식물","뷰티·바디"],["문구·취미","패션·잡화"],["향기","패션·잡화"],["패션·잡화","리빙"],["플라워·식물","향기"],["문구·취미","푸드"],["뷰티·바디","리빙"],["리빙","패션·잡화"],["푸드","리빙"]];
const WHY = {
  same:["같은 {el} 기운끼리 통하는 {kw} 선물","{el} 기운을 두 배로 채워줄 아이템","{el}의 {kw} 에너지를 그대로 닮은 선물","타고난 {el} 기운과 찰떡인 선택"],
  gen:["{gen}! {pe} 기운이 {el} 기운을 살려줘요","{pe} 기운이 {el} 기운을 북돋는 상생 조합","{el} 기운에 힘을 보태는 {pe} 계열 선물","부족한 기운을 {pe}이 채워줘요 ({gen})"],
  zod:["{z}띠는 {cat} 선물에 약하대요","{z}띠 취향 저격 {cat} 아이템","{z}띠가 받으면 오래 쓰는 {cat}","{z}띠의 숨은 로망, {cat}"],
  rel:{친구:["친구라서 부담 없이 주고받기 좋은","‘이거 완전 너다’ 소리 나오는","같이 쓰자고 말 걸기 좋은"],연인:["둘만의 추억이 하나 더 생기는","받자마자 인증샷 각인","은근히 오래 곁에 두는"],부모님:["말로 못 한 고마움을 대신 전하는","매일 쓰면서 자식 생각나는","‘뭘 이런 걸 사왔어’ 하면서 웃게 되는"],동료:["책상 위에 두고두고 보는","부담 없이 고마움 전하기 좋은","회의 끝나고 슬쩍 건네기 좋은"]}
};
const MBW = {E:["사람들과 나눠 쓸수록 즐거운","모임에 들고 가서 자랑하기 좋은","함께 즐길 때 빛나는"],I:["혼자 충전하는 시간을 채워줄","조용한 저녁을 더 아늑하게 만드는","방 안에서 오래 함께할"],S:["매일 손이 가는 실용적인","써보면 바로 좋은 걸 아는","생활에 딱 붙는"],N:["상상력을 자극하는 감성적인","이야깃거리가 생기는","어디서도 못 본 듯한"],T:["쓸모를 따지는 T도 인정할","합리적인 이유가 확실한","가성비와 품질 다 잡은"],F:["의미를 소중히 여기는 F 취향의","마음이 먼저 전해지는","받는 순간 뭉클해지는"],J:["계획형 일상을 정돈해 줄","루틴을 한 단계 올려줄","정리 좋아하는 사람이 반할"],P:["즉흥적으로 기분을 띄워 줄","언제 꺼내도 신나는","틀에 안 갇힌 자유로운"]};
function scoreP(p, st){
  const seed=(st.seed||"")+"|"+p.id, pe=EL[p.id]; let sc=0; const why=[];
  if(st.who && p.rel.includes(st.who)){ sc+=2; why.push({w:1, t:`${pickBy(WHY.rel[st.who], seed+"r")} ${p.cat==="푸드"?"먹거리":"선물"}`}); }
  if(st.el){
    if(pe==="✦"){ sc+=(hash(seed+"x")%3===0)?2.5:.8; why.push({w:3, t: p.id==="bracelet" ? `${st.el} 기운을 채워줄 ${st.el} 원석 팔찌` : `${st.el} 기운에 맞춰 골라 담는 랜덤 박스`}); }
    else if(pe===st.el){ sc+=3; why.push({w:3, t:fill(pickBy(WHY.same, seed+"s"), {el:st.el, kw:E[pe].kw})}); }
    else if(GEN[pe]===st.el){ sc+=2; why.push({w:2.5, t:fill(pickBy(WHY.gen, seed+"g"), {el:st.el, pe, gen:GEN_NAME[pe]})}); }
  }
  if(st.zi!=null && ZOD_CAT[st.zi].includes(p.cat)){ sc+=1.3; why.push({w:2.2, t:fill(pickBy(WHY.zod, seed+"z"), {z:ZODIAC[st.zi][0], cat:p.cat})}); }
  if(st.mbti){ const m=[...st.mbti].filter(c=>(TRAIT[p.id]||"").includes(c)); sc+=m.length*1.2; if(m.length){ const c=m[hash(seed+"m")%m.length]; why.push({w:1.6+m.length*.3, t:`${pickBy(MBW[c], seed+"mb")} 선물`}); } }
  if(st.budget && p.price>=st.budget*.4) sc+=.6;
  sc += (hash(seed+"j")%100)/80;   // 점수가 비슷하면 조합마다 다른 선물이 나오게
  if(!why.length) why.push({w:0, t:pickBy(["예산에 딱 맞는 선물","가격 대비 만족도가 높은 선물","누구에게나 실패 없는 선물"], seed+"d")});
  why.sort((a,b)=>b.w-a.w);
  const top=why.filter(x=>x.w>=why[0].w-.7);
  return {p, sc, why: top[hash(seed+"w")%top.length].t};
}
function pick3(st){
  const ranked=PRODUCTS.filter(p=>!st.budget || p.price<=st.budget).map(p=>scoreP(p,st)).sort((a,b)=>b.sc-a.sc);
  const out=[], cats=new Set(), kinds=new Set();
  for(const r of ranked){ if(out.length===3) break; if(cats.has(r.p.cat) || kinds.has(r.p.art.kind)) continue; out.push(r); cats.add(r.p.cat); kinds.add(r.p.art.kind); }
  for(const r of ranked){ if(out.length===3) break; if(!out.includes(r)) out.push(r); }
  return out;
}
const resCard = ({p,why}) => `<div class="res-card"><button class="thumb" type="button" data-open="${p.id}" aria-label="${p.name} 자세히 보기">${art(p)}</button><div style="min-width:0"><h4>${p.name}</h4><div class="why">${why}</div><div class="r-row"><span class="price" style="font-size:13.5px">${won(p.price)}</span>${(p.eng||optVals(p).length>1)?`<button class="mini-add" type="button" data-open="${p.id}">옵션</button>`:`<button class="mini-add" type="button" data-add="${p.id}">담기</button>`}</div></div></div>`;

/* 궁합 리포트 문장 재료 — 칸마다 다른 씨앗으로 골라서 조합마다 문장이 달라져요 */
const RPT = {
  need:{木:["새로 시작할 힘","쑥쑥 뻗어 나갈 용기","새 계획을 밀어줄 응원","초록빛 여유","한 뼘 더 자랄 기회","지치지 않는 회복력"],
        火:["마음을 데워줄 온기","다시 타오를 열정","반짝이는 설렘","주목받을 자신감","따뜻한 위로 한마디","신나는 이벤트 하나"],
        土:["기댈 수 있는 안정감","흔들리지 않는 루틴","편안한 쉼표","든든한 내 편","포근한 집밥 같은 위로","차곡차곡 쌓이는 행복"],
        金:["반짝이는 자신감","결단을 도와줄 확신","스스로를 위한 작은 사치","단단한 마무리","나만의 기준","빛나는 순간 하나"],
        水:["깊은 휴식","생각을 비울 시간","잔잔한 위로","새로운 영감","푹 자고 일어난 아침","마음을 적셔줄 감성"]},
  desc:{木:["새싹처럼 계속 자라는","늘 뭔가를 새로 시작하는","곧게 뻗은 나무 같은","주변을 푸르게 만드는"],火:["분위기를 확 띄우는","정이 많고 뜨거운","어디서든 빛나는","표현이 솔직한"],土:["한결같고 듬직한","누구든 편하게 품어주는","묵묵히 제 몫을 하는","믿음직한"],金:["취향이 또렷한","맺고 끊음이 확실한","반짝이는 걸 알아보는","원칙이 단단한"],水:["속이 깊은","생각이 깊은","유연하게 흘러가는","조용히 강한"]},
  item:{木:["초록 식물","나무 소품","새 노트","허브 향"],火:["캔들","따뜻한 조명","달콤한 디저트","붉은 리본"],土:["도자기","포근한 패브릭","따뜻한 차","베이지 소품"],金:["실버 액세서리","금속 소품","반짝이는 것","하얀 상자"],水:["향수","물결무늬 소품","푸른빛 아이템","입욕제"]},
  color:{木:["올리브 그린","민트","세이지"],火:["체리 레드","코랄","선셋 오렌지"],土:["버터 옐로","베이지","테라코타"],金:["실버","아이보리","샴페인 골드"],水:["딥 네이비","스카이 블루","블랙"]},
  wrap:{木:["크라프트 박스에 세이지 리본","말린 유칼립투스 한 줄기 장식","초록 체크 보자기"],火:["로즈 박스에 골드 리본","빨간 실링 왁스로 마무리","코랄 티슈에 폭 싸기"],土:["리넨 보자기 포장","베이지 박스에 노끈 리본","버터색 종이에 손글씨 태그"],金:["화이트 박스에 실버 리본","투명 박스로 반짝임 살리기","아이보리 리본 두 번 감기"],水:["네이비 박스에 화이트 리본","물결무늬 포장지","하늘색 오간자 리본"]},
  avoid:{木:["날카로운 금속 소품은 잠시 보류","너무 무거운 선물은 피하기","차갑기만 한 무채색은 다음에"],火:["물기 많은 선물은 타이밍 조심","차가운 블랙 일색은 피하기","너무 진지한 선물은 피하기"],土:["너무 화려한 것보다 실용적인 걸로","부피만 큰 선물은 피하기","유행만 타는 아이템은 피하기"],金:["장식만 많은 선물은 피하기","너무 요란한 색은 다음에","대충 고른 티 나는 건 금물"],水:["너무 건조한 실용템만은 피하기","흙빛 무거운 선물은 다음 기회에","급하게 고른 선물은 금방 들켜요"]},
  score:[[95,["천생연분급 선물 궁합!","이 조합, 사주가 미리 짜둔 듯해요","받는 순간 소리 지를 확률 높음"]],[90,["찰떡 궁합이에요","센스 있다는 말 백 번 들을 조합","망설일 필요 없는 궁합"]],[85,["기분 좋은 궁합이에요","포장만 잘하면 만점 궁합","무난한 듯 확실한 궁합"]],[0,["노력하면 대박 나는 궁합","카드 한 장이 점수를 올려줘요","정성이 운을 이기는 궁합"]]],
  timing:["오전 11시쯤 건네면 기분 좋게 받아요","저녁 식사 후 디저트처럼 꺼내 보세요","퇴근길에 카톡으로 먼저 귀띔하세요","주말 오후 산책길이 행운의 타이밍","만나자마자 바로! 망설이면 운이 달아나요","헤어지기 직전에 건네면 여운이 길어요","비 오는 날 건네면 두 배로 반가워요","점심 먹고 커피 마실 때가 딱이에요","택배로 깜짝 보내면 효과 만점","생일 전날 밤 12시 정각을 노리세요"],
  days:["월요일","화요일","수요일","목요일","금요일","토요일","일요일"]
};
const ZOD_LINE = [
  ["작고 알찬 선물에 크게 감동하는 타입이에요.","숨은 디테일을 귀신같이 알아봐요.","실속 있는 선물이면 두고두고 써요."],
  ["한번 마음에 든 물건은 10년도 써요.","화려함보다 튼튼함에 점수를 줘요.","말은 안 해도 속으로 엄청 좋아해요."],
  ["존재감 확실한 선물을 좋아해요.","남들과 겹치지 않는 게 중요해요.","받으면 바로 써보고 후기를 들려줘요."],
  ["포근하고 부드러운 것에 약해요.","예쁜 포장에 먼저 마음이 열려요.","작은 정성도 오래 기억해요."],
  ["스케일 큰 서프라이즈에 약해요.","특별한 이야기가 있는 선물을 좋아해요.","주인공처럼 대접받으면 행복해해요."],
  ["취향이 뚜렷하고 안목이 높아요.","은은하고 고급스러운 게 정답이에요.","의미를 한참 곱씹는 타입이에요."],
  ["활동적인 날에 쓰는 선물이 잘 맞아요.","가볍고 자유로운 아이템을 좋아해요.","지루한 건 금방 서랍행이에요."],
  ["감성 가득한 선물에 눈물 버튼이 있어요.","손편지 한 장이 제일 큰 선물일 수도.","포근한 분위기를 사랑해요."],
  ["재밌는 선물이면 일단 합격이에요.","신기한 물건을 보면 눈이 반짝여요.","받자마자 친구들한테 자랑해요."],
  ["깔끔하고 정돈된 걸 좋아해요.","디테일까지 완벽해야 만족해요.","유용한 선물을 더 오래 기억해요."],
  ["의리 있게 끝까지 아껴 쓰는 타입이에요.","함께한 추억이 담긴 선물에 약해요.","소박해도 진심이면 충분해요."],
  ["맛있는 거 앞에서 무장해제돼요.","편안하고 넉넉한 게 최고예요.","복 들어오는 물건이면 더 좋아해요."]
];
const MB_PAIR = {
  EF:["사람들과 나눌 수 있으면 기쁨이 두 배예요.","리액션 장인이라 주는 맛이 있어요."],
  ET:["쓸모가 분명하면 바로 애용해요.","트렌디하고 실용적인 걸 좋아해요."],
  IF:["혼자만의 시간을 채워줄 선물이 좋아요.","조용히 감동하고 오래 간직해요."],
  IT:["품질과 기능을 꼼꼼히 따져봐요.","군더더기 없는 디자인을 좋아해요."],
  SJ:["매일 쓰는 물건의 업그레이드 버전이 정답.","정리하기 좋은 선물을 반겨요."],
  SP:["지금 바로 쓸 수 있는 선물을 좋아해요.","감각적인 아이템에 끌려요."],
  NJ:["의미와 계획이 담긴 선물에 약해요.","오래 곁에 둘 물건을 좋아해요."],
  NP:["새롭고 엉뚱한 선물일수록 좋아해요.","예상 못 한 깜짝 요소가 필수예요."]
};
const REL_BUD = {
  친구:{10000:["만 원의 행복! 작아도 센스로 승부해요.","커피 한 잔 값으로 하루를 바꿔줘요."],30000:["친구 선물의 정석 같은 가격대예요.","부담은 덜고 감동은 꽉 채운 예산이에요."],50000:["이 정도면 찐친 인증 완료.","생일 단톡방에서 칭찬받을 가격대예요."],100000:["의리 끝판왕 예산이에요.","평생 기억할 선물 각이에요."]},
  연인:{10000:["작은 서프라이즈가 더 설레요.","편지 한 장 곁들이면 완벽해요."],30000:["데이트 전에 슬쩍 건네기 좋은 예산이에요.","부담 없이 자주 주고받기 좋아요."],50000:["기념일 분위기 내기 딱 좋은 예산이에요.","포장까지 힘주면 감동 두 배."],100000:["오래 쓰는 선물로 진심을 보여줄 때예요.","‘이거 비싼 거 아니야?’ 소리 나올 예산."]},
  부모님:{10000:["마음이 먼저예요. 카드 한 장 꼭 넣으세요.","작은 선물에도 자식 자랑하실 거예요."],30000:["매일 쓰실 실용템을 고를 예산이에요.","전화 한 통과 같이 보내면 완벽해요."],50000:["효도 점수 확실히 올라가는 예산이에요.","친구분들께 자랑하실 선물이에요."],100000:["두고두고 이야기하실 선물이에요.","한 해 고마움을 몰아서 전할 때예요."]},
  동료:{10000:["부담 없이 ‘고마워요’ 하기 딱 좋아요.","팀 전체에 돌려도 좋은 가격이에요."],30000:["송별·승진 선물로 적당한 예산이에요.","센스 있는 동료로 기억될 가격이에요."],50000:["특별히 고마운 동료에게 어울려요.","사수·멘토에게 감사 전하기 좋아요."],100000:["팀 단체 선물로도 충분한 예산이에요.","정말 큰 도움 받은 분께 드리기 좋아요."]}
};
const CARD = {
  친구:["올해는 {need} 가득하길! 늘 고마워.","너라서 고른 선물이야. {need}, 꼭 챙겨.","우리 오래오래 웃자. 항상 네 편이야.","이거 보자마자 네 생각났어 :)"],
  연인:["너에게 {need}이 되어주고 싶어.","오늘도, 내일도 제일 좋아해.","같이 쓰자고 고른 거야. 사랑해.","{need}, 내가 채워줄게."],
  부모님:["늘 고맙습니다. 올해는 {need} 가득하세요.","표현은 서툴러도 마음은 늘 같아요.","건강이 제일이에요. 사랑해요.","저 잘 지내요. 걱정 말고 {need} 누리세요."],
  동료:["덕분에 버틴 날이 많았어요. 고마워요!","올해도 {need} 가득한 한 해 되세요.","작지만 진심이에요. 늘 응원해요.","같이 일해서 즐거웠어요. 또 만나요!"]
};
function buildReport(){
  const mb=mbStr(), z=appS.zi!==null?ZODIAC[appS.zi]:null;
  const el=appS.el, ex=el || (appS.zi!==null ? BRANCH_EL[appS.zi] : "土");   // 태어난 해를 모르면 띠의 오행으로
  const seed=[appS.who, appS.year ?? ("z"+appS.zi), mb||"-", appS.budget].join("|"), h=hash(seed), P=k=>seed+"#"+k;
  const score=78+h%22, cmts=RPT.score.find(([min])=>score>=min)[1];
  const need=pickBy(RPT.need[ex], P("need")), giver=GEN_BY[ex];
  const nick = mb ? NICK[mb] : (z ? z[2] : "선물 받을 주인공");
  const title = `${pickBy(RPT.desc[ex], P("desc"))} ${z?z[0]+"띠 ":""}${nick}`;
  const lines = [ z ? pickBy(ZOD_LINE[appS.zi], P("zl")) : "", mb ? pickBy(MB_PAIR[mb[0]+mb[2]], P("m1")) : "", mb ? pickBy(MB_PAIR[mb[1]+mb[3]], P("m2")) : "" ].filter(Boolean);
  const card = fill(pickBy(CARD[appS.who], P("card")), {need});
  const res = pick3({who:appS.who, el:ex, zi:appS.zi, mbti:mb, budget:appS.budget, seed});
  return {mb, z, el, ex, score, cmt:pickBy(cmts, P("cmt")), need, giver, title, lines, card, res,
    rel: pickBy(REL_BUD[appS.who][appS.budget], P("rel")),
    color: pickBy(RPT.color[ex], P("col")), item: pickBy(RPT.item[ex], P("item")), num: (hash(P("num"))%9)+1,
    day: pickBy(RPT.days, P("day")), timing: pickBy(RPT.timing, P("tim")),
    wrap: pickBy(RPT.wrap[ex], P("wrap")), avoid: pickBy(RPT.avoid[ex], P("avoid"))};
}

/* ---------------- 선물 궁합 머신 (홈페이지 속 앱) ---------------- */
const WHO_OPTS=[["친구","오래 알고 지낸 사이"],["연인","특별한 한 사람"],["부모님","늘 고마운 분"],["동료","함께 일하는 사이"]];
const BUD=[[10000,"1만 원 이하"],[30000,"3만 원 이하"],[50000,"5만 원 이하"],[100000,"10만 원 이하"]];
const PAIRS=[["E","외향","I","내향"],["S","현실","N","직관"],["T","사고","F","감정"],["J","계획","P","즉흥"]];
const RM = matchMedia("(prefers-reduced-motion: reduce)").matches;
const appS={step:0, who:null, year:null, zi:null, el:null, ganji:null, zOnly:false, mb:[null,null,null,null], mbSkip:false, budget:null, calc:false, share:""};
const mbStr = () => (appS.mbSkip || appS.mb.includes(null)) ? null : appS.mb.join("");
function setYear(y){ const i=yearInfo(y); Object.assign(appS,{year:y, zi:i.zi, el:i.el, ganji:i.ganji}); }
function yPrev(){ const z=ZODIAC[appS.zi]; return `<b>${appS.year}년생</b>은 <b>${appS.ganji}년</b> · <b>${z[0]}띠</b> <span class="zh-s">${z[1]}</span> · <span class="elb" style="--c:${E[appS.el].c}">${appS.el}</span> <b>${E[appS.el].name}</b> 기운이에요.<small>${z[0]}띠는 ‘${z[2]}’. 음력 설 전에 태어났다면 ${appS.year-1}년 띠로 봐요.</small>`; }
function reportHTML(){
  const r=buildReport();
  appS.cardLine=r.card;
  appS.share=`[GIFT PICK 선물 궁합]\n${appS.who} · ${r.title}\n궁합 ${r.score}점 — ${r.cmt}\n올해 필요한 것: ${r.need}\n행운의 색 ${r.color} · 숫자 ${r.num} · ${r.day}\n추천 선물: ${r.res.map(x=>x.p.name).join(", ")}`;
  return `<div class="report"><div class="ready">YOUR GIFT IS READY!</div>
   <div class="report-top">${r.z?`<span class="seal">${r.z[1]}</span>`:""}<span class="elb big" style="--c:${E[r.ex].c}">${r.ex}</span>${r.mb?`<span class="mbb">${r.mb}</span>`:""}</div>
   <h3 class="q-title" style="margin:0">${r.title}</h3>
   <div class="r-score"><span class="score">${r.score}<small>점</small></span><span class="r-cmt">${r.cmt}</span></div>
   <p class="r-line">${r.lines.join(" ")}</p>
   <div class="r-box"><b>올해 이 ${appS.who}에게 필요한 건</b>${r.need}<small>${r.el?"":"띠 기준으로 본 기운이에요. "}${r.giver} 기운이 ${r.ex} 기운을 살려줘요(${GEN_NAME[r.giver]}). ${E[r.giver].name}의 기운이 담긴 선물도 좋아요.</small></div>
   <p class="r-line">${r.rel}</p>
   <div class="lucky-grid">
     <div><small>행운의 색</small><i class="swatch" style="background:${E[r.ex].c}"></i>${r.color}</div>
     <div><small>행운의 숫자 · 요일</small>${r.num} · ${r.day}</div>
     <div><small>행운의 아이템</small>${r.item}</div>
     <div><small>포장 추천</small>${r.wrap}</div>
   </div>
   <div class="r-box"><b>건네는 타이밍</b>${r.timing}</div>
   <div class="r-box"><b>카드엔 이 한 줄</b>“${r.card}”<button class="linkish" type="button" data-nav="usecard">이 문장을 메시지 카드에 넣기</button></div>
   <p class="r-avoid">피하면 좋은 선물 · ${r.avoid}</p>
   <button class="linkish" type="button" data-nav="share">결과 복사해서 공유하기</button></div>
   <div class="res">${r.res.map(resCard).join("")}</div><p class="hint" style="margin:12px 0 0;font-size:11.5px">재미로 보는 궁합이에요. 진짜 운명은 고르는 사람의 정성이 정해요.</p>`;
}
function renderApp(){
  const s=appS.step;
  document.querySelectorAll("#appProgress span").forEach((el,i)=>el.classList.toggle("on", i<=s));
  const body=$("#appBody"), foot=$("#appFoot"), back=`<button class="btn btn-ghost" type="button" data-nav="back">이전</button>`;
  if(s===0){
    body.innerHTML=`<div class="q-num">1 / 4 · WHO?</div><h3 class="q-title">누구의 선물 운을<br>볼까요?</h3><div class="opts">${WHO_OPTS.map(([v,t])=>`<button class="opt" type="button" data-k="who" data-v="${v}" aria-pressed="${appS.who===v}"><b>${v}</b><small>${t}</small></button>`).join("")}</div>`;
    foot.innerHTML=`<p class="hint" style="margin:0">하나를 고르면 다음 질문으로 넘어가요</p>`;
  } else if(s===1){
    if(appS.year===null && !appS.zOnly) setYear(1998);
    const years=[]; for(let y=2015;y>=1950;y--) years.push(y);
    body.innerHTML=`<div class="q-num">2 / 4 · 띠 · 오행</div><h3 class="q-title">그 사람은<br>몇 년생인가요?</h3>`+(appS.zOnly
      ? `<div class="opts z-opts">${ZODIAC.map(([n,hj],i)=>`<button class="opt z" type="button" data-k="zi" data-v="${i}" aria-pressed="${appS.zi===i}"><span class="zh">${hj}</span><b>${n}띠</b></button>`).join("")}</div><button class="linkish" type="button" data-nav="yearmode">태어난 해로 고를게요</button>`
      : `<div class="f"><label for="yearSel">태어난 해</label><select id="yearSel">${years.map(y=>`<option value="${y}"${y===appS.year?" selected":""}>${y}년생</option>`).join("")}</select></div><div class="ypreview" id="ypv">${yPrev()}</div><button class="linkish" type="button" data-nav="zonly">나이는 모르고 띠만 알아요</button>`);
    foot.innerHTML = back + (appS.zOnly ? "" : `<button class="btn btn-primary" type="button" data-nav="next" style="flex:1">이 띠로 계속</button>`);
  } else if(s===2){
    const ready=!appS.mb.includes(null);
    body.innerHTML=`<div class="q-num">3 / 4 · MBTI</div><h3 class="q-title">MBTI를<br>알고 있나요?</h3><div class="mbti-pick">${PAIRS.map(([a,an,b,bn],i)=>`<div class="pair">${[[a,an],[b,bn]].map(([l,n])=>`<button class="opt" type="button" data-k="mb" data-i="${i}" data-v="${l}" aria-pressed="${appS.mb[i]===l}"><b>${l}</b><small>${n}</small></button>`).join("")}</div>`).join("")}</div>`;
    foot.innerHTML = back + `<button class="btn btn-ghost" type="button" data-nav="skipmb">몰라요</button><button class="btn btn-primary" type="button" data-nav="next" style="flex:1"${ready?"":" disabled"}>${ready?appS.mb.join("")+" 확정":"4개 골라요"}</button>`;
  } else if(s===3){
    body.innerHTML=`<div class="q-num">4 / 4 · BUDGET?</div><h3 class="q-title">이번 선물<br>예산은요?</h3><div class="opts">${BUD.map(([v,t])=>`<button class="opt" type="button" data-k="budget" data-v="${v}" aria-pressed="${appS.budget===v}"><b>${t}</b></button>`).join("")}</div>`;
    foot.innerHTML = back;
  } else if(appS.calc){
    body.innerHTML=`<div class="calc"><div class="spin" id="spin">${ZODIAC[0][1]}</div><b>선물 궁합 계산 중…</b><small class="hint">띠 · 오행 · MBTI를 섞는 중이에요</small></div>`;
    foot.innerHTML="";
  } else {
    body.innerHTML=reportHTML();
    foot.innerHTML=`<button class="btn btn-ghost" type="button" data-nav="restart">다시 점치기</button><button class="btn btn-ghost" type="button" data-nav="back">예산 바꾸기</button><button class="btn btn-primary" type="button" data-nav="cart" style="flex:1">장바구니</button>`;
  }
}
let spinT;
function startCalc(){
  appS.calc=true; renderApp(); let i=0; clearInterval(spinT);
  if(!RM) spinT=setInterval(()=>{ const el=$("#spin"); if(el) el.textContent=ZODIAC[++i%12][1]; }, 90);
  setTimeout(()=>{ clearInterval(spinT); appS.calc=false; renderApp(); $("#appBody").scrollTop=0; }, RM?200:1300);
}
function goNext(){ appS.step++; if(appS.step===4) startCalc(); else renderApp(); $("#appBody").scrollTop=0; }
function appNav(n){
  if(n==="back"){ appS.step=Math.max(0,appS.step-1); if(appS.step===3) appS.calc=false; renderApp(); }
  if(n==="next"){ if(appS.step===1 && appS.zi===null) return; goNext(); }
  if(n==="zonly"){ Object.assign(appS,{zOnly:true, year:null, el:null, ganji:null}); renderApp(); }
  if(n==="yearmode"){ Object.assign(appS,{zOnly:false, year:null}); renderApp(); }
  if(n==="skipmb"){ Object.assign(appS,{mbSkip:true, mb:[null,null,null,null], step:3}); renderApp(); }
  if(n==="restart"){ Object.assign(appS,{step:0, who:null, year:null, zi:null, el:null, ganji:null, zOnly:false, mb:[null,null,null,null], mbSkip:false, budget:null, calc:false}); renderApp(); }
  if(n==="cart"){ renderCart(); $("#cartDlg").showModal(); }
  if(n==="share"){ copyText(appS.share, null); }
  if(n==="usecard"){ co.card=true; co.cardMsg=appS.cardLine||""; toast("메시지 카드에 넣어뒀어요. 주문서에서 고칠 수 있어요 (+1,500원)"); }
}
$("#appBody").addEventListener("click", e=>{
  const nav=e.target.closest("[data-nav]"); if(nav){ appNav(nav.dataset.nav); return; }
  const b=e.target.closest(".opt"); if(!b) return;
  const k=b.dataset.k;
  if(k==="who"){ appS.who=b.dataset.v; renderApp(); setTimeout(goNext,200); }
  if(k==="zi"){ Object.assign(appS,{zi:Number(b.dataset.v), el:null, year:null, ganji:null}); renderApp(); setTimeout(goNext,200); }
  if(k==="mb"){ appS.mb[Number(b.dataset.i)]=b.dataset.v; appS.mbSkip=false; renderApp(); }
  if(k==="budget"){ appS.budget=Number(b.dataset.v); renderApp(); setTimeout(goNext,200); }
});
$("#appBody").addEventListener("change", e=>{ if(e.target.id==="yearSel"){ setYear(Number(e.target.value)); $("#ypv").innerHTML=yPrev(); } });
$("#appFoot").addEventListener("click", e=>{ const n=e.target.closest("[data-nav]"); if(n) appNav(n.dataset.nav); });
$("#appRestart").addEventListener("click", ()=>appNav("restart"));
document.querySelectorAll(".store").forEach(b=>b.addEventListener("click",()=>toast(`${b.dataset.store} 앱은 준비 중이에요. 지금은 이 화면에서 바로 이용하세요.`)));

/* ---------------- 주문서 ---------------- */
const co = {pay:"bank", wrap:"basic", card:false, cardMsg:"", dmode:"known"};
function updatePreview(){
  const t=$("#cpText"); if(!t) return;
  const r=$("#rName").value.trim(), o=$("#oName").value.trim();
  t.innerHTML = co.cardMsg ? esc(co.cardMsg) : `<span class="ph-t">생일 축하해. 올해도 네가 좋아하는 것들로 가득하길.</span>`;
  $("#cpTo").textContent = "TO. " + (r || "받는 분");
  $("#cpFrom").textContent = "from. " + (o || "보내는 분");
}
function fees(){
  const sub=subtotal(), q=cartQty();
  const wrap = co.pay==="bank" && co.wrap==="premium" ? CONFIG.wrapPremium*q : 0;
  const card = co.pay==="bank" && co.card ? CONFIG.cardFee : 0;
  const ship = sub>=CONFIG.freeFrom ? 0 : CONFIG.shipping;
  return {sub, wrap, card, ship, total: sub+wrap+card+ship};
}
function sumHTML(){
  const f=fees();
  return `<div class="sum-items">${cartItems().map(x=>({p:x.p,q:x.q,o:itemOpt(x)})).map(({p,q,o})=>`<div><span>${p.name}${o?` <span class="hint">(${esc(o)})</span>`:""} × ${q}</span><span class="price" style="font-weight:500">${won(p.price*q)}</span></div>`).join("")}</div>
  ${co.pay==="bank" ? `<div class="sum-line"><span>상품 금액</span><span>${won(f.sub)}</span></div><div class="sum-line"><span>포장</span><span>${f.wrap?won(f.wrap):"기본 무료"}</span></div><div class="sum-line"><span>메시지 카드</span><span>${f.card?won(f.card):"—"}</span></div><div class="sum-line"><span>배송비</span><span>${f.ship?won(f.ship):"무료"}</span></div><div class="sum-total"><span>입금하실 금액</span><b>${won(f.total)}</b></div>`
  : `<p class="hint">포장·메시지 카드·배송비는 스마트스토어 상품 옵션에서 선택하고 결제돼요.</p><div class="sum-total"><span>상품 금액</span><b>${won(f.sub)}</b></div>`}`;
}
function openCheckout(){
  if(!cartItems().length){ toast("장바구니가 비어 있어요"); return; }
  $("#coTitle").textContent = "주문서";
  $("#coBody").innerHTML = `<form class="co" id="coForm" novalidate>
   <div class="co-form">
    <fieldset><legend>결제 방법</legend>
      <div class="radio-cards">
        <label class="rc"><input type="radio" name="pay" value="bank" ${co.pay==="bank"?"checked":""}><b>무통장 입금 · 계좌이체</b><small>주문서 작성 후 ${CONFIG.depositHours}시간 안에 입금</small></label>
        <label class="rc"><input type="radio" name="pay" value="smartstore" ${co.pay==="smartstore"?"checked":""}><b><span class="nv-mark" aria-hidden="true"><svg viewBox="0 0 10 10"><path d="M1 1h2.6l3 4.3V1H9v8H6.4l-3-4.3V9H1z" fill="#fff"/></svg></span>네이버 스마트스토어</b><small>카드 · 네이버페이 · 포인트 결제</small></label>
      </div>
    </fieldset>
    <fieldset id="fsSS" ${co.pay==="smartstore"?"":"disabled"}>
      <p class="hint">스마트스토어에서는 주문자·배송지 정보를 네이버에서 입력해요. 아래 ‘스마트스토어로 이동’을 누르면 담은 상품별 결제 링크가 나와요.</p>
    </fieldset>
    <fieldset id="fsBank" ${co.pay==="bank"?"":"disabled"}>
      <legend>주문하시는 분</legend>
      <div class="f-row"><div class="f"><label for="oName">이름</label><input id="oName" name="oName" required autocomplete="name"></div><div class="f"><label for="oPhone">휴대폰 번호</label><input id="oPhone" name="oPhone" required inputmode="tel" autocomplete="tel" placeholder="010-0000-0000" pattern="[0-9\\-\\s]{9,14}"></div></div>
      <legend style="margin-top:12px">받는 분</legend>
      <div class="radio-cards">
        <label class="rc"><input type="radio" name="dmode" value="known" ${co.dmode==="known"?"checked":""}><b>주소를 알아요</b><small>지금 배송지를 적을게요</small></label>
        <label class="rc"><input type="radio" name="dmode" value="ask" ${co.dmode==="ask"?"checked":""}><b>주소를 몰라요</b><small>받는 분이 직접 주소를 남겨요</small></label>
      </div>
      <label class="check"><input type="checkbox" id="same">주문하는 분과 같아요 (내가 받을게요)</label>
      <div class="f-row"><div class="f"><label for="rName">이름</label><input id="rName" name="rName" required></div><div class="f"><label for="rPhone">휴대폰 번호</label><input id="rPhone" name="rPhone" required inputmode="tel" placeholder="010-0000-0000" pattern="[0-9\\-\\s]{9,14}"></div></div>
      <p class="hint" id="askHint" ${co.dmode==="ask"?"":"hidden"}>입금이 확인되면 GIFT PICK이 받는 분께 문자로 선물 소식을 전하고 주소를 받아요. 선물 내용은 받는 분이 열어볼 때까지 비밀로 해드려요.</p>
      <fieldset id="fsAddr" ${co.dmode==="known"?"":"disabled"}>
        <div class="f"><label for="addr">주소</label><input id="addr" name="addr" required autocomplete="street-address" placeholder="도로명 주소와 우편번호"></div>
        <div class="f"><label for="addr2">상세 주소</label><input id="addr2" name="addr2" placeholder="동 · 호수"></div>
      </fieldset>
      <div class="f"><label for="memo">배송 메모 · 각인 문구</label><input id="memo" name="memo" placeholder="예) 문 앞에 놓아주세요 / 각인: J.H.K"></div>

      <legend style="margin-top:12px">선물 마무리</legend>
      <div class="radio-cards">
        <label class="rc"><input type="radio" name="wrap" value="basic" ${co.wrap==="basic"?"checked":""}><b>기본 포장</b><small>크라프트 박스 · 무료</small></label>
        <label class="rc"><input type="radio" name="wrap" value="premium" ${co.wrap==="premium"?"checked":""}><b>프리미엄 래핑</b><small>로즈 하드박스 + 리본 · 상품당 ${won(CONFIG.wrapPremium)}</small></label>
      </div>
      <label class="check"><input type="checkbox" id="cardOn" ${co.card?"checked":""}>메시지 카드 넣기 (+${won(CONFIG.cardFee)})</label>
      <div class="f" id="cardBox" ${co.card?"":"hidden"}><label for="cardMsg">카드에 적을 내용 (최대 120자)</label><textarea id="cardMsg" maxlength="120" placeholder="손글씨로 옮겨 적어 드려요">${esc(co.cardMsg)}</textarea><div class="card-preview" aria-label="메시지 카드 미리보기"><span class="to" id="cpTo">TO. 받는 분</span><span id="cpText"></span><span class="from" id="cpFrom">from. 보내는 분</span></div></div>

      <legend style="margin-top:12px">입금 정보</legend>
      <div class="acct"><div><div class="hint">${CONFIG.bank.name} · 예금주 ${CONFIG.bank.holder}</div><code>${CONFIG.bank.account}</code></div><button class="copy" type="button" data-copy="acct">계좌번호 복사</button></div>
      <div class="f"><label for="payer">입금자명</label><input id="payer" name="payer" required placeholder="통장에 찍히는 이름"></div>
    </fieldset>
    <label class="check"><input type="checkbox" id="agree" required>주문 내용과 교환·환불 규정을 확인했고, 배송을 위한 개인정보 수집·이용에 동의해요.</label>
   </div>
   <aside class="co-sum"><h3 style="margin:0;font-size:15px">주문 요약</h3><div id="sumBox">${sumHTML()}</div>
     <button class="btn btn-rose btn-block" type="submit" id="coSubmit">${co.pay==="bank"?"계좌이체로 주문하기":"스마트스토어로 이동"}</button>
     <p class="hint" id="coErr" role="alert" style="color:var(--rose)"></p>
   </aside>
  </form>`;
  if(!$("#coDlg").open) $("#coDlg").showModal();
  bindCheckout();
}
function bindCheckout(){
  const f=$("#coForm");
  f.addEventListener("change", e=>{
    const t=e.target;
    if(t.name==="pay"){ co.pay=t.value; $("#fsBank").disabled = co.pay!=="bank"; $("#fsSS").disabled = co.pay!=="smartstore"; $("#coSubmit").textContent = co.pay==="bank"?"계좌이체로 주문하기":"스마트스토어로 이동"; }
    if(t.name==="wrap") co.wrap=t.value;
    if(t.id==="cardOn"){ co.card=t.checked; $("#cardBox").hidden=!t.checked; }
    if(t.name==="dmode"){ co.dmode=t.value; $("#fsAddr").disabled = co.dmode!=="known"; $("#askHint").hidden = co.dmode!=="ask"; }
    if(t.id==="same" && t.checked){ $("#rName").value=$("#oName").value; $("#rPhone").value=$("#oPhone").value; updatePreview(); }
    $("#sumBox").innerHTML = sumHTML();
  });
  f.addEventListener("input", e=>{ if(e.target.id==="cardMsg") co.cardMsg=e.target.value; if(["cardMsg","rName","oName"].includes(e.target.id)) updatePreview(); });
  updatePreview();
  f.addEventListener("submit", e=>{
    e.preventDefault();
    if(!f.checkValidity()){ $("#coErr").textContent = $("#agree").checked ? "빈 칸이나 형식이 맞지 않는 칸을 확인해 주세요." : "주문 동의에 체크해 주세요."; f.reportValidity(); return; }
    $("#coErr").textContent="";
    co.pay==="bank" ? finishBank() : finishSS();
  });
}
function orderNo(){ const d=new Date(), p=n=>String(n).padStart(2,"0"); return `GP${String(d.getFullYear()).slice(2)}${p(d.getMonth()+1)}${p(d.getDate())}-${Math.floor(1000+Math.random()*9000)}`; }
function finishBank(){
  const f=fees(), no=orderNo(), v=id=>$("#"+id).value.trim();
  const dl=new Date(Date.now()+CONFIG.depositHours*3600e3);
  const dls=`${dl.getMonth()+1}월 ${dl.getDate()}일 ${String(dl.getHours()).padStart(2,"0")}:${String(dl.getMinutes()).padStart(2,"0")}`;
  const text = [`[GIFT PICK 주문]`,`주문번호: ${no}`,`상품: ${cartItems().map(x=>`${x.p.name}${itemOpt(x)?` (${itemOpt(x)})`:""} ×${x.q}`).join(", ")}`,`포장: ${co.wrap==="premium"?"프리미엄 래핑":"기본 포장"}`,`메시지 카드: ${co.card?(co.cardMsg||"(내용 미입력)"):"없음"}`,`주문자: ${v("oName")} / ${v("oPhone")}`,`받는 분: ${v("rName")} / ${v("rPhone")}`,co.dmode==="ask" ? `주소: 모름 — 받는 분께 주소 요청 필요` : `주소: ${v("addr")} ${v("addr2")}`,`메모: ${v("memo")||"-"}`,`입금자명: ${v("payer")}`,`입금 금액: ${won(f.total)}`].join("\n");
  const giftMsg = `${v("rName")}님, ${v("oName")}님이 GIFT PICK에서 선물을 준비했어요.\n곧 GIFT PICK(${CONFIG.kakao})에서 문자로 주소를 여쭤볼 거예요. 받을 주소만 남겨주시면 예쁘게 포장해서 보내드릴게요.`;
  $("#coTitle").textContent = "주문 접수";
  $("#coBody").innerHTML = `<div class="done">
    <div><div class="eyebrow">Order received</div><h2>입금하시면 주문이 확정돼요</h2><p class="ono">주문번호 ${no}</p></div>
    <div class="done-box">
      <div><div class="k">입금하실 금액</div><div class="v" style="font-size:24px;color:var(--rose)">${won(f.total)}</div></div>
      <div class="acct" style="background:var(--paper)"><div><div class="hint">${CONFIG.bank.name} · 예금주 ${CONFIG.bank.holder}</div><code>${CONFIG.bank.account}</code></div><button class="copy" type="button" data-copy="acct">계좌번호 복사</button></div>
      <div><div class="k">입금 기한</div><div class="v">${dls}까지 · 입금자명 ‘${esc(v("payer"))}’</div></div>
    </div>
    <div style="display:grid;gap:10px">
      <p style="margin:0">아래 주문 내용을 복사해 카카오톡 채널 <b>${CONFIG.kakao}</b>로 보내주세요. 입금을 확인하면 출고 일정을 알려드려요.</p>
      <pre id="orderText">${esc(text)}</pre>
      <button class="btn btn-primary" type="button" id="copyOrder">주문 내용 복사</button>
    </div>
    ${co.dmode==="ask" ? `<div style="display:grid;gap:10px;border-top:1px solid var(--line);padding-top:18px">
      <p style="margin:0"><b>받는 분께 미리 귀띔하고 싶다면</b> 아래 메시지를 카톡으로 보내보세요. 무엇인지는 비밀이에요.</p>
      <pre id="giftText">${esc(giftMsg)}</pre>
      <button class="btn btn-ghost" type="button" id="copyGift">받는 분께 보낼 메시지 복사</button>
    </div>` : ""}
  </div>`;
  $("#copyOrder").addEventListener("click", ()=>copyText(text, $("#orderText")));
  if(co.dmode==="ask") $("#copyGift").addEventListener("click", ()=>copyText(giftMsg, $("#giftText")));
  cart={}; saveCart(); updateBadge();
}
function finishSS(){
  $("#coTitle").textContent = "스마트스토어 결제";
  $("#coBody").innerHTML = `<div class="done"><div><div class="eyebrow">Naver Smart Store</div><h2>상품별로 결제를 이어가세요</h2><p class="ono">버튼을 누르면 새 창에서 스마트스토어 상품 페이지가 열려요. 포장·메시지 카드는 상품 옵션에서 고를 수 있어요.</p></div>
    <div class="ss-list">${cartItems().map(x=>{const {p,q}=x, o=itemOpt(x); return `<div class="ss-item"><div><b style="font-weight:500">${p.name}</b><div class="hint">${o?esc(o)+" · ":""}${q}개 · ${won(p.price*q)}</div></div><a class="btn btn-nv" style="padding:10px 16px;font-size:14px" href="${ssUrl(p)}" target="_blank" rel="noopener"><span class="nv-mark" aria-hidden="true"><svg viewBox="0 0 10 10"><path d="M1 1h2.6l3 4.3V1H9v8H6.4l-3-4.3V9H1z" fill="#fff"/></svg></span>결제하러 가기</a></div>`}).join("")}</div>
    <button class="btn btn-ghost" type="button" data-close>쇼핑 계속하기</button></div>`;
}

/* 복사 버튼 */
document.addEventListener("click", e=>{
  const c=e.target.closest("[data-copy]"); if(!c) return;
  if(c.dataset.copy==="acct") copyText(`${CONFIG.bank.name} ${CONFIG.bank.account} ${CONFIG.bank.holder}`, c.parentElement.querySelector("code"));
  if(c.dataset.copy==="email") copyText(CONFIG.bizEmail, $("#bizEmail"));
});
/* 다이얼로그 안의 앵커 링크(#app 등) 누르면 닫기 */
document.querySelectorAll("dialog").forEach(d=>d.addEventListener("click",e=>{ const a=e.target.closest('a[href^="#"]'); if(a) d.close(); }));

/* ---------------- 오늘의 띠별 운세 ---------------- */
function renderLuck(){
  const d=new Date(), key=`${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
  $("#luckDate").innerHTML=`<span class="sticker s-white">${d.getMonth()+1}월 ${d.getDate()}일 ${"일월화수목금토"[d.getDay()]}요일 운세</span>`;
  const pool=PRODUCTS.filter(p=>p.id!=="luckybox");
  $("#luckGrid").innerHTML=ZODIAC.map(([n,hj,t])=>{ const x=hash(key+n), p=pool[x%pool.length], st=3+(x>>>4)%3;
    return `<article class="lk"><div class="lk-top"><span class="seal">${hj}</span><div><b>${n}띠</b><small>${t}</small></div></div><span class="stars" role="img" aria-label="행운 지수 5점 중 ${st}점">${"★".repeat(st)}${"☆".repeat(5-st)}</span><p>${LUCK[(x>>>8)%LUCK.length]}</p><button class="lucky" type="button" data-open="${p.id}">행운의 선물 · <b>${p.name}</b></button></article>`; }).join("");
  const next=new Date(d); next.setHours(24,0,5,0); setTimeout(renderLuck, next-d);
}

/* ---------------- 이번 주 한정 드롭 ---------------- */
function weekEnd(){ const d=new Date(), e=new Date(d); e.setDate(d.getDate()+(7-d.getDay())%7); e.setHours(23,59,59,999); return e; }
function renderDrop(){
  const d=new Date(), first=new Date(d.getFullYear(), d.getMonth(), 1), wk=Math.ceil((d.getDate()+first.getDay())/7);
  $("#dropTitle").textContent=`${d.getMonth()+1}월 ${["첫째","둘째","셋째","넷째","다섯째","여섯째"][wk-1]} 주 한정 드롭`;
  $("#dropGrid").innerHTML=DROP.map(it=>{ const p=byId(it.id); if(!p) return ""; const pct=Math.round(it.left/it.limit*100);
    return `<article class="dc"><button class="pic" type="button" data-open="${p.id}" aria-label="${p.name} 자세히 보기">${art(p)}<span class="tag">${it.limit}개 한정</span></button><div class="dc-body"><p class="mk">${p.maker.split(" · ")[0]}</p><h3>${p.name}</h3><span class="price">${won(p.price)}</span><div class="left"><span>남은 수량</span><span>${it.left} / ${it.limit}</span></div><div class="meter" role="img" aria-label="${it.limit}개 중 ${it.left}개 남음"><i style="width:${pct}%"></i></div>${it.left>0?`<button class="btn btn-rose btn-block" type="button" data-open="${p.id}">${it.left<=10?"곧 품절! ":""}한정 수량 잡기</button>`:`<button class="btn btn-block" type="button" disabled>품절 · 다음 드롭을 기다려 주세요</button>`}</div></article>`; }).join("");
  tick();
}
function tick(){
  let ms=Math.max(0, weekEnd()-new Date());
  const dd=Math.floor(ms/864e5); ms-=dd*864e5; const hh=Math.floor(ms/36e5); ms-=hh*36e5; const mm=Math.floor(ms/6e4); const ss=Math.floor((ms-mm*6e4)/1e3);
  const p=n=>String(n).padStart(2,"0");
  $("#countdown").innerHTML=[[dd,"일"],[p(hh),"시간"],[p(mm),"분"],[p(ss),"초"]].map(([v,l])=>`<div class="cd"><b>${v}</b><small>${l}</small></div>`).join("");
}
setInterval(tick, 1000);

/* ---------------- MBTI 선물 사전 ---------------- */
const TYPES=["INTJ","INTP","ENTJ","ENTP","INFJ","INFP","ENFJ","ENFP","ISTJ","ISFJ","ESTJ","ESFJ","ISTP","ISFP","ESTP","ESFP"];
let mbSel="ENFP";
function renderMbti(){
  $("#mbtiGrid").innerHTML=TYPES.map(t=>`<button class="mb g-${t[1]==="N"?(t[2]==="T"?"nt":"nf"):(t[3]==="J"?"sj":"sp")}" type="button" data-mb="${t}" aria-pressed="${t===mbSel}"><b>${t}</b><small>${NICK[t]}</small></button>`).join("");
  $("#mbtiPanel").innerHTML=`<div class="mp-head"><span class="mbb big">${mbSel}</span><h3>${NICK[mbSel]}</h3><p>${TYPE_LINE[mbSel]}</p><a class="btn btn-ghost" href="#app">띠까지 넣고 궁합 보기</a></div><div class="res">${pick3({mbti:mbSel, budget:100000, seed:mbSel}).map(resCard).join("")}</div>`;
}
$("#mbtiGrid").addEventListener("click", e=>{ const b=e.target.closest("[data-mb]"); if(!b) return; mbSel=b.dataset.mb; renderMbti(); });

/* ---------------- 시작 ---------------- */
$("#heroMini").innerHTML = art(byId("lamp"));
$("#bankName").textContent = `${CONFIG.bank.name} · 예금주 ${CONFIG.bank.holder}`;
$("#bankAcct").textContent = CONFIG.bank.account;
$("#bizEmail").textContent = CONFIG.bizEmail;
$("#kakaoId").textContent = CONFIG.kakao;
$("#storeLink").href = CONFIG.smartstore;
$("#depositRule").textContent = `주문번호와 결제 금액이 나오면 ${CONFIG.depositHours}시간 안에 아래 계좌로 입금하세요.`;
renderGrid(); renderApp(); updateBadge(); renderLuck(); renderDrop(); renderMbti();
