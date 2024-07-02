<template>
  <div class="login-container">
    <div class="login-card">
      <img src="@/assets/logo.png" alt="Logo" class="logo"/>
      <form @submit.prevent="login">
        <div class="input-group">
          <label for="email" class="form-label">E-mail</label>
          <input type="email" id="email" class="form-control" v-model="email" required/>
        </div>
        <div class="input-group">
          <label for="password" class="form-label">Senha</label>
          <input type="password" id="password" class="form-control" v-model="password" required/>
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
        <router-link to="/register" class="btn btn-secondary">Registrar</router-link>
      </form>
      <p v-if="message" class="error-message">{{ message }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      email: '',
      password: '',
      message: ''
    }
  },
  methods: {
    async login() {
  try {
    const response = await axios.post('/login', {
      email: this.email,
      senha: this.password
    })
    const userId = response.data.user.id
    // Remova esta linha
    // const userType = response.data.user.tipo_usuario
    this.$router.push({ name: 'UserDashboard', params: { userId } })
  } catch (error) {
    this.message = error.response.data.message
  }
}
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f4f4f9;
}

.login-card {
  background-color: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
  width: 100%;
}

.logo {
  width: 100px;
  margin-bottom: 20px;
}

.input-group {
  margin-bottom: 20px;
  text-align: left;
}

.form-label {
  display: block;
  margin-bottom: 5px;
  color: #333;
}

.form-control {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

.btn {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 16px;
}

.btn-primary {
  background-color: #007bff;
  color: #fff;
  margin-bottom: 10px;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.btn-secondary {
  background-color: #6c757d;
  color: #fff;
}

.btn-secondary:hover {
  background-color: #5a6268;
}

.error-message {
  color: #d9534f;
  margin-top: 20px;
}
</style>
