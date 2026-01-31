# Vercel 배포 안내

Vercel CLI가 설치되었고 프로젝트가 준비되었습니다!

## 🚀 배포 방법

### 옵션 1: 대화형 배포 (권장)

터미널에서 다음 명령어를 실행하세요:

```bash
vercel
```

질문에 다음과 같이 답변하세요:
- **Set up and deploy?** → `Y`
- **Which scope?** → 본인 계정 선택
- **Link to existing project?** → `N`
- **Project name?** → 원하는 이름 입력 (기본값: `fe`)
- **In which directory is your code located?** → `./` (엔터)

배포가 완료되면 URL이 제공됩니다!

### 옵션 2: GitHub 연동 자동 배포

1. GitHub에 코드 푸시:
```bash
git push origin main
```

2. [Vercel 대시보드](https://vercel.com/dashboard) 접속
3. "Add New..." → "Project" 클릭
4. GitHub 저장소 선택 및 Import
5. 환경 변수 설정 (아래 참조)
6. Deploy 클릭

## 🔐 환경 변수 설정 (중요!)

배포 후 반드시 환경 변수를 설정해야 합니다:

### CLI로 설정:
```bash
vercel env add VITE_SUPABASE_URL
# 값 입력: https://your-project.supabase.co

vercel env add VITE_SUPABASE_ANON_KEY
# 값 입력: your-anon-key
```

### 대시보드에서 설정:
1. Vercel 프로젝트 페이지 → Settings → Environment Variables
2. 다음 변수 추가:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

## 📝 Supabase 프로젝트 생성

아직 Supabase 프로젝트가 없다면:

1. [Supabase](https://app.supabase.com) 접속
2. "New Project" 클릭
3. 프로젝트 정보 입력:
   - Name: 원하는 이름
   - Database Password: 안전한 비밀번호
   - Region: Northeast Asia (Seoul) 권장
4. "Create new project" 클릭
5. Settings → API에서 URL과 anon key 복사
6. `.env` 파일 및 Vercel 환경 변수 업데이트

## ✅ 다음 단계

1. ✅ Vercel CLI 설치 완료
2. ✅ Git 커밋 완료
3. ⏳ `vercel` 명령어 실행 (위 참조)
4. ⏳ Supabase 프로젝트 생성
5. ⏳ 환경 변수 설정
6. ⏳ `vercel --prod` 명령어로 프로덕션 배포

자세한 내용은 [DEPLOYMENT.md](file:///c:/Users/sooin/OneDrive%20-%20서울여자대학교/바탕%20화면/헬스케어%20X%20IT%20해커톤/FE/DEPLOYMENT.md)를 참조하세요.
