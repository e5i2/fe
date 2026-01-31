<template>
  <div class="connection-test">
    <h1>🔌 Supabase 연동 테스트</h1>
    
    <div class="test-section">
      <h2>환경 변수 확인</h2>
      <div class="status-card">
        <div class="status-item">
          <span class="label">Supabase URL:</span>
          <span :class="['value', urlStatus]">{{ supabaseUrl || '❌ 설정되지 않음' }}</span>
        </div>
        <div class="status-item">
          <span class="label">Supabase Key:</span>
          <span :class="['value', keyStatus]">
            {{ supabaseKey ? '✅ 설정됨 (' + supabaseKey.substring(0, 20) + '...)' : '❌ 설정되지 않음' }}
          </span>
        </div>
      </div>
    </div>

    <div class="test-section">
      <h2>연결 테스트</h2>
      <button @click="testConnection" :disabled="testing" class="test-button">
        {{ testing ? '테스트 중...' : '연결 테스트 실행' }}
      </button>
      
      <div v-if="testResult" class="result-card" :class="testResult.success ? 'success' : 'error'">
        <h3>{{ testResult.success ? '✅ 연결 성공!' : '❌ 연결 실패' }}</h3>
        <p>{{ testResult.message }}</p>
        <pre v-if="testResult.details">{{ JSON.stringify(testResult.details, null, 2) }}</pre>
      </div>
    </div>

    <div class="test-section">
      <h2>📝 설정 방법</h2>
      <div class="info-card">
        <ol>
          <li>
            <a href="https://app.supabase.com" target="_blank">Supabase 대시보드</a>에 접속하여 프로젝트 생성
          </li>
          <li>Settings → API 메뉴에서 다음 정보 복사:
            <ul>
              <li><strong>Project URL</strong> → <code>VITE_SUPABASE_URL</code></li>
              <li><strong>anon public key</strong> → <code>VITE_SUPABASE_ANON_KEY</code></li>
            </ul>
          </li>
          <li>
            로컬 개발: <code>.env</code> 파일에 값 입력
          </li>
          <li>
            Vercel 배포: 환경 변수 설정
            <pre class="code-block">vercel env add VITE_SUPABASE_URL
vercel env add VITE_SUPABASE_ANON_KEY</pre>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { supabase } from '@/lib/supabase'

const supabaseUrl = ref(import.meta.env.VITE_SUPABASE_URL)
const supabaseKey = ref(import.meta.env.VITE_SUPABASE_ANON_KEY)
const testing = ref(false)
const testResult = ref(null)

const urlStatus = computed(() => {
  if (!supabaseUrl.value || supabaseUrl.value.includes('your-project')) {
    return 'not-set'
  }
  return 'set'
})

const keyStatus = computed(() => {
  if (!supabaseKey.value || supabaseKey.value.includes('your-supabase')) {
    return 'not-set'
  }
  return 'set'
})

const testConnection = async () => {
  testing.value = true
  testResult.value = null

  try {
    // 환경 변수 확인
    if (!supabaseUrl.value || supabaseUrl.value.includes('your-project')) {
      testResult.value = {
        success: false,
        message: 'Supabase URL이 설정되지 않았습니다. .env 파일을 확인하세요.'
      }
      testing.value = false
      return
    }

    if (!supabaseKey.value || supabaseKey.value.includes('your-supabase')) {
      testResult.value = {
        success: false,
        message: 'Supabase API Key가 설정되지 않았습니다. .env 파일을 확인하세요.'
      }
      testing.value = false
      return
    }

    // Supabase 연결 테스트 - health check
    const { data, error } = await supabase
      .from('_test_connection')
      .select('*')
      .limit(1)

    if (error) {
      // 테이블이 없는 경우는 정상 (연결은 성공)
      if (error.code === 'PGRST116' || error.message.includes('does not exist')) {
        testResult.value = {
          success: true,
          message: 'Supabase 연결 성공! 데이터베이스에 정상적으로 연결되었습니다.',
          details: {
            url: supabaseUrl.value,
            status: 'Connected',
            note: '테스트 테이블이 없지만 연결은 정상입니다.'
          }
        }
      } else {
        testResult.value = {
          success: false,
          message: 'Supabase 연결 중 오류가 발생했습니다.',
          details: {
            error: error.message,
            code: error.code,
            hint: error.hint
          }
        }
      }
    } else {
      testResult.value = {
        success: true,
        message: 'Supabase 연결 성공!',
        details: {
          url: supabaseUrl.value,
          status: 'Connected',
          data: data
        }
      }
    }
  } catch (err) {
    testResult.value = {
      success: false,
      message: '연결 테스트 중 예외가 발생했습니다.',
      details: {
        error: err.message
      }
    }
  } finally {
    testing.value = false
  }
}

onMounted(() => {
  console.log('Environment Variables:')
  console.log('VITE_SUPABASE_URL:', supabaseUrl.value)
  console.log('VITE_SUPABASE_ANON_KEY:', supabaseKey.value ? 'Set' : 'Not set')
})
</script>

<style scoped>
.connection-test {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h1 {
  color: #2c3e50;
  margin-bottom: 2rem;
  text-align: center;
}

h2 {
  color: #34495e;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.test-section {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 8px;
}

.status-card, .info-card {
  background: white;
  padding: 1.5rem;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.status-item {
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-bottom: 1px solid #e9ecef;
}

.status-item:last-child {
  border-bottom: none;
}

.label {
  font-weight: 600;
  color: #495057;
}

.value {
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
}

.value.set {
  color: #28a745;
}

.value.not-set {
  color: #dc3545;
}

.test-button {
  background: #007bff;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s;
  margin-bottom: 1rem;
}

.test-button:hover:not(:disabled) {
  background: #0056b3;
}

.test-button:disabled {
  background: #6c757d;
  cursor: not-allowed;
}

.result-card {
  margin-top: 1rem;
  padding: 1.5rem;
  border-radius: 6px;
  border-left: 4px solid;
}

.result-card.success {
  background: #d4edda;
  border-color: #28a745;
  color: #155724;
}

.result-card.error {
  background: #f8d7da;
  border-color: #dc3545;
  color: #721c24;
}

.result-card h3 {
  margin-top: 0;
  margin-bottom: 0.5rem;
}

.result-card pre {
  background: rgba(0,0,0,0.05);
  padding: 1rem;
  border-radius: 4px;
  overflow-x: auto;
  font-size: 0.85rem;
  margin-top: 1rem;
}

.info-card ol {
  margin: 0;
  padding-left: 1.5rem;
}

.info-card li {
  margin-bottom: 1rem;
  line-height: 1.6;
}

.info-card ul {
  margin-top: 0.5rem;
}

.info-card a {
  color: #007bff;
  text-decoration: none;
}

.info-card a:hover {
  text-decoration: underline;
}

.code-block {
  background: #f4f4f4;
  padding: 0.75rem;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  margin-top: 0.5rem;
  overflow-x: auto;
}

code {
  background: #f4f4f4;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
}
</style>
