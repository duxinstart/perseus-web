<template>
  <div class="register">
    <div class="left-wrap">
      <div class="logo">
        <img src="@/assets/images/logo.png" alt="Logo" />
        <h1>Perseus Web</h1>
      </div>
      <div class="welcome">
        <h2>欢迎注册</h2>
        <p>创建您的账户，开始使用Perseus Web</p>
      </div>
    </div>
    <div class="right-wrap">
      <div class="form-container">
        <h3>注册账户</h3>
        <el-form ref="formRef" :model="formData" :rules="rules" label-position="top">
          <el-form-item prop="username" label="用户名">
            <el-input v-model="formData.username" placeholder="请输入用户名" />
          </el-form-item>
          <el-form-item prop="email" label="邮箱">
            <el-input v-model="formData.email" placeholder="请输入邮箱" />
          </el-form-item>
          <el-form-item prop="password" label="密码">
            <el-input v-model="formData.password" type="password" placeholder="请输入密码" show-password />
          </el-form-item>
          <el-form-item prop="confirmPassword" label="确认密码">
            <el-input v-model="formData.confirmPassword" type="password" placeholder="请再次输入密码" show-password />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="register-btn" @click="handleSubmit" :loading="loading">
              注册
            </el-button>
          </el-form-item>
        </el-form>
        <div class="login-link">
          已有账户？<router-link to="/login">立即登录</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

const router = useRouter()
const loading = ref(false)

// 表单数据
const formData = reactive({
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
})

// 表单校验规则
const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 20, message: '用户名长度应在3-20个字符之间', trigger: 'blur' }
  ],
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { type: 'email', message: '请输入正确的邮箱格式', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, message: '密码长度不能少于6个字符', trigger: 'blur' }
  ],
  confirmPassword: [
    { required: true, message: '请再次输入密码', trigger: 'blur' },
    {
      validator: (rule: any, value: string, callback: any) => {
        if (value !== formData.password) {
          callback(new Error('两次输入的密码不一致'))
        } else {
          callback()
        }
      },
      trigger: 'blur'
    }
  ]
}

// 表单引用
const formRef = ref()

// 提交注册
const handleSubmit = async () => {
  if (!formRef.value) return
  
  await formRef.value.validate(async (valid: boolean) => {
    if (valid) {
      loading.value = true
      
      try {
        // 这里应该调用实际的注册API
        // const res = await UserService.register(formData)
        
        // 模拟注册成功
        setTimeout(() => {
          loading.value = false
          ElMessage.success('注册成功，请登录')
          router.push('/login')
        }, 1500)
      } catch (error) {
        loading.value = false
        ElMessage.error('注册失败，请稍后再试')
      }
    }
  })
}
</script>

<style lang="scss" scoped>
.register {
  display: flex;
  height: 100vh;
  
  .left-wrap {
    flex: 1;
    background-color: var(--el-color-primary);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    
    .logo {
      margin-bottom: 2rem;
      text-align: center;
      
      img {
        width: 80px;
        height: 80px;
      }
      
      h1 {
        margin-top: 1rem;
        font-size: 2rem;
      }
    }
    
    .welcome {
      text-align: center;
      
      h2 {
        font-size: 1.8rem;
        margin-bottom: 1rem;
      }
      
      p {
        font-size: 1.1rem;
        opacity: 0.8;
      }
    }
  }
  
  .right-wrap {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--el-bg-color);
    
    .form-container {
      width: 80%;
      max-width: 400px;
      
      h3 {
        font-size: 1.5rem;
        margin-bottom: 2rem;
        text-align: center;
      }
      
      .register-btn {
        width: 100%;
        margin-top: 1rem;
      }
      
      .login-link {
        margin-top: 1rem;
        text-align: center;
        
        a {
          color: var(--el-color-primary);
          text-decoration: none;
          
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
}
</style>
