# Vercel과 Supabase 배포 가이드

이 문서는 Vue 프로젝트를 Vercel에 배포하고 Supabase와 연동하는 방법을 안내합니다.

## 📋 사전 준비사항

1. **Vercel 계정** - [vercel.com](https://vercel.com)에서 가입
2. **Supabase 프로젝트** - [supabase.com](https://supabase.com)에서 프로젝트 생성
3. **Node.js 및 npm** 설치

## 🔧 로컬 환경 설정

### 1. 패키지 설치

```bash
npm install
```

### 2. 환경 변수 설정

`.env.example` 파일을 복사하여 `.env` 파일을 생성합니다:

```bash
cp .env.example .env
```

`.env` 파일을 열고 Supabase 프로젝트 정보를 입력합니다:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

> **Supabase URL과 API Key 찾기:**
> 1. [Supabase 대시보드](https://app.supabase.com) 접속
> 2. 프로젝트 선택
> 3. Settings → API 메뉴에서 확인
>    - `Project URL` → `VITE_SUPABASE_URL`
>    - `anon public` 키 → `VITE_SUPABASE_ANON_KEY`

### 3. 로컬 개발 서버 실행

```bash
npm run dev
```

## 🚀 Vercel 배포

### 방법 1: Vercel CLI 사용 (권장)

1. **Vercel CLI 설치**

```bash
npm install -g vercel
```

2. **로그인**

```bash
vercel login
```

3. **배포**

```bash
vercel
```

처음 배포 시 프로젝트 설정을 확인하는 질문이 나옵니다:
- Set up and deploy? → **Y**
- Which scope? → 본인 계정 선택
- Link to existing project? → **N**
- Project name? → 원하는 이름 입력 (기본값 사용 가능)
- In which directory is your code located? → **./** (엔터)
- Build Command → `npm run build` (자동 감지됨)
- Output Directory → `dist` (자동 감지됨)

4. **환경 변수 설정**

Vercel 대시보드에서 환경 변수를 설정하거나 CLI로 설정:

```bash
vercel env add VITE_SUPABASE_URL
vercel env add VITE_SUPABASE_ANON_KEY
```

각 명령어 실행 후 값을 입력하고, 모든 환경(Production, Preview, Development)에 적용합니다.

5. **프로덕션 배포**

```bash
vercel --prod
```

### 방법 2: GitHub 연동 (자동 배포)

1. **GitHub에 코드 푸시**

```bash
git add .
git commit -m "Add Vercel and Supabase configuration"
git push origin main
```

2. **Vercel에서 프로젝트 Import**

- [Vercel 대시보드](https://vercel.com/dashboard) 접속
- "Add New..." → "Project" 클릭
- GitHub 저장소 선택
- "Import" 클릭

3. **환경 변수 설정**

- "Environment Variables" 섹션에서 추가:
  - `VITE_SUPABASE_URL`: Supabase 프로젝트 URL
  - `VITE_SUPABASE_ANON_KEY`: Supabase Anon Key

4. **Deploy 클릭**

이후 `main` 브랜치에 푸시할 때마다 자동으로 배포됩니다.

## 📦 Supabase 사용 예시

프로젝트에서 Supabase를 사용하려면:

```javascript
import { supabase } from '@/lib/supabase'

// 데이터 조회 예시
const { data, error } = await supabase
  .from('your_table')
  .select('*')

// 데이터 삽입 예시
const { data, error } = await supabase
  .from('your_table')
  .insert([
    { column1: 'value1', column2: 'value2' }
  ])
```

## 🔍 문제 해결

### 빌드 오류 발생 시
- `npm run build`를 로컬에서 실행하여 오류 확인
- `node_modules` 삭제 후 `npm install` 재실행

### 환경 변수가 로드되지 않을 때
- Vercel 대시보드에서 환경 변수가 올바르게 설정되었는지 확인
- 변수명이 `VITE_` 접두사로 시작하는지 확인 (Vite 필수)
- 환경 변수 변경 후 재배포 필요

### 404 오류 발생 시
- `vercel.json`의 rewrites 설정 확인
- SPA 라우팅이 올바르게 설정되었는지 확인

## 📚 추가 리소스

- [Vercel 문서](https://vercel.com/docs)
- [Supabase 문서](https://supabase.com/docs)
- [Vite 환경 변수 가이드](https://vitejs.dev/guide/env-and-mode.html)
