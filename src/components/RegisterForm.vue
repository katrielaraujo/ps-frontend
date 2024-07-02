<template>
  <div class="register-container">
    <div class="register-card">
      <img src="@/assets/logo.png" alt="Logo" class="logo"/>
      <form @submit.prevent="register">
        <div class="input-group">
          <label for="name" class="form-label">Nome Completo</label>
          <input type="text" id="name" class="form-control" v-model="name" required/>
        </div>
        <div class="input-group">
          <label for="email" class="form-label">E-mail</label>
          <input type="email" id="email" class="form-control" v-model="email" required/>
        </div>
        <div class="input-group">
          <label for="data-nascimento" class="form-label">Data de Nascimento</label>
          <input type="date" id="data-nascimento" class="form-control" v-model="dataNascimento" required/>
        </div>
        <div class="input-group">
          <label for="contato" class="form-label">Contato</label>
          <input type="text" id="contato" class="form-control" v-model="contato" required/>
        </div>
        <div class="input-group">
          <label for="tipo-usuario" class="form-label">Tipo de Usuário</label>
          <select id="tipo-usuario" class="form-control" v-model="tipoUsuario" required>
            <option value="ALUNO">Aluno</option>
            <option value="PROFESSOR">Professor</option>
          </select>
        </div>
        <div class="input-group">
          <label for="password" class="form-label">Senha</label>
          <input type="password" id="password" class="form-control" v-model="password" required/>
        </div>
        <div class="input-group">
          <label for="confirm-password" class="form-label">Confirmar Senha</label>
          <input type="password" id="confirm-password" class="form-control" v-model="confirmPassword" required/>
        </div>
        <button type="submit" class="btn btn-primary">Registrar</button>
      </form>
      <router-link to="/" class="btn btn-secondary">Voltar para Login</router-link>
      <p v-if="message" class="error-message">{{ message }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      name: '',
      email: '',
      dataNascimento: '',
      contato: '',
      tipoUsuario: 'ALUNO',
      password: '',
      confirmPassword: '',
      message: ''
    }
  },
  methods: {
    async register() {
      try {
        const formattedDataNascimento = this.dataNascimento.split('-').reverse().join('-'); 

        const response = await axios.post('/register', {
          nome: this.name,
          contato: this.contato,
          data_nascimento: formattedDataNascimento,
          email: this.email,
          senha: this.password,
          tipo_usuario: this.tipoUsuario
        })
        this.message = response.data.message
        this.$router.push({ name: 'Login' })
      } catch (error) {
        this.message = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f4f4f9;
}

.register-card {
  background-color: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 600px;
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
