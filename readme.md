# Yakemon Backend

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-badge-id/deploy-status)](https://yakemon.netlify.app/)

## 🎮 프로젝트 소개 (Project Introduction)

Yakemon은 포켓몬 유사 게임의 백엔드 서버입니다. 이 프로젝트는 [Yakemon 웹사이트](https://yakemon.netlify.app/)의 데이터를 관리합니다.

Yakemon is the backend server for a Pokemon-like game. This project manages data for the [Yakemon website](https://yakemon.netlify.app/).

## 🛠 기술 스택 (Tech Stack)

- **Language**: JavaScript/TypeScript
- **Database**: MongoDB
- **Framework**: Express.js
- **Deployment**: Netlify

## ✨ 주요 기능 (Main Features)

1. **연승 기록 관리 (Win Streak Management)**

   - 유저의 연승 기록 업로드 및 관리
   - 실시간 연승 순위 업데이트

2. **플레이 기록 관리 (Play History Management)**

   - 유저의 게임 플레이 기록 저장
   - 상세한 게임 통계 제공

3. **리더보드 시스템 (Leaderboard System)**
   - 실시간 순위 업데이트
   - 다양한 카테고리별 랭킹 제공

## 🚀 시작하기 (Getting Started)

### 필수 조건 (Prerequisites)

- Node.js (v14 이상)
- MongoDB
- npm 또는 yarn

### 설치 방법 (Installation)

1. 저장소 클론

```bash
git clone https://github.com/your-username/Yakemon_BE.git
cd Yakemon_BE
```

2. 의존성 설치

```bash
npm install
# or
yarn install
```

3. 환경 변수 설정

```bash
cp .env.example .env
# .env 파일을 수정하여 필요한 환경 변수 설정
```

4. 서버 실행

```bash
npm run dev
# or
yarn dev
```

## 📝 API 문서 (API Documentation)

API 문서는 `/api-docs` 경로에서 확인할 수 있습니다.

API documentation is available at `/api-docs`.

## 🤝 기여하기 (Contributing)

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스 (License)

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

This project is licensed under the MIT License - see the `LICENSE` file for details.
