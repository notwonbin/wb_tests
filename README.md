# Playroom — Fewer, better games.

잘 만든 작은 게임만 모은 미니멀 게임 갤러리입니다. GitHub + Vercel 배포 연습용으로 만든
순수 HTML / CSS / JavaScript 정적 사이트라 빌드 과정이 필요 없습니다.

## 게임 목록
| 게임 | 파일 | 조작 |
|---|---|---|
| 🐍 스네이크 | `games/snake.html` | 방향키 / WASD |
| 🧱 벽돌깨기 | `games/breakout.html` | 마우스 / 터치 / ← → |
| 🔨 두더지 잡기 | `games/mole.html` | 클릭 / 터치 |
| 🃏 카드 짝맞추기 | `games/memory.html` | 클릭 / 터치 |

최고 점수는 브라우저(localStorage)에 저장됩니다.

## 폴더 구조
```
.
├── index.html        # 메인(게임 목록)
├── css/style.css     # 공통 스타일
├── js/score.js       # 최고 점수 저장
└── games/            # 게임 페이지들
```

## 로컬에서 실행
`index.html`을 브라우저로 열면 됩니다. 또는:
```bash
npx serve .
```

## 1. GitHub에 올리기
```bash
git init
git add .
git commit -m "첫 커밋: Playroom"
git branch -M main
git remote add origin https://github.com/<내아이디>/pixel-arcade.git
git push -u origin main
```
(GitHub에서 먼저 빈 저장소 `pixel-arcade`를 만들어 두세요. README 체크 없이!)

## 2. Vercel로 배포하기
1. https://vercel.com 에 GitHub 계정으로 로그인
2. **Add New → Project** → `pixel-arcade` 저장소 **Import**
3. Framework Preset: **Other** (빌드 설정은 비워둔 그대로)
4. **Deploy** 클릭 → `https://pixel-arcade-xxxx.vercel.app` 주소 발급

## 3. 수정 → 자동 재배포 연습
```bash
# 예: index.html 의 "GAME START!" 문구 바꾸기
git add .
git commit -m "메인 문구 수정"
git push
```
push 하면 Vercel이 자동으로 다시 배포합니다.
브랜치를 따로 만들어 push 하면 **Preview 배포 URL**도 받아볼 수 있어요:
```bash
git checkout -b feature/new-game
# ...수정...
git push -u origin feature/new-game
```

## 연습 아이디어
- `games/` 에 새 게임 추가하고 `index.html` 에 카드 추가하기
- 브랜치 → Pull Request → merge 흐름 연습
- Vercel 대시보드에서 커스텀 도메인 연결해 보기
