<template>
  <div class="login-card card">
    <div class="card-body">
      <img src="@/assets/logo.png" alt="Logo da Academia" class="logo mb-4"/>
      <form @submit.prevent="login">
        <div class="mb-3">
          <label for="email" class="form-label">E-mail</label>
          <input type="email" id="email" class="form-control" v-model="email" required/>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Senha</label>
          <input type="password" id="password" class="form-control" v-model="password" required/>
        </div>
        <button type="submit" class="btn btn-success w-100">Login</button>
        <a href="#" class="d-block text-center mt-3 text-secondary">Esqueceu a senha?</a>
      </form>
      <div class="text-center mt-3">
        <router-link to="/register" class="btn btn-link">Registrar</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'LoginForm',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('/login', {
          email: this.email,
          senha: this.password
        });
        console.log('Login successful', response.data);
      } catch (error) {
        console.error('Error logging in', error);
      }
    }
  }
};
</script>

<style scoped>
.login-card {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.logo {
  width: 100px;
}
</style>
