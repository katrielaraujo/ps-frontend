<template>
  <div class="register-card card">
    <div class="card-body">
      <img src="@/assets/logo.png" alt="Logo da Academia" class="logo mb-4"/>
      <form @submit.prevent="register">
        <div class="row mb-3">
          <div class="col-md-6">
            <label for="name" class="form-label">Nome Completo</label>
            <input type="text" id="name" class="form-control" v-model="name" required/>
          </div>
          <div class="col-md-6">
            <label for="email" class="form-label">E-mail</label>
            <input type="email" id="email" class="form-control" v-model="email" required/>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-md-6">
            <label for="cpf" class="form-label">CPF</label>
            <input type="text" id="cpf" class="form-control" v-model="cpf" required/>
          </div>
          <div class="col-md-6">
            <label for="data-nascimento" class="form-label">Data de Nascimento</label>
            <input type="date" id="data-nascimento" class="form-control" v-model="dataNascimento" required/>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-md-6">
            <label for="contato" class="form-label">Contato</label>
            <input type="text" id="contato" class="form-control" v-model="contato" required/>
          </div>
          <div class="col-md-6">
            <label for="tipo-usuario" class="form-label">Tipo de Usuário</label>
            <select id="tipo-usuario" class="form-select" v-model="tipoUsuario" required>
              <option value="aluno">Aluno</option>
              <option value="professor">Professor</option>
            </select>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-md-6">
            <label for="password" class="form-label">Senha</label>
            <input type="password" id="password" class="form-control" v-model="password" required/>
          </div>
          <div class="col-md-6">
            <label for="confirm-password" class="form-label">Confirmar Senha</label>
            <input type="password" id="confirm-password" class="form-control" v-model="confirmPassword" required/>
          </div>
        </div>
        <button type="submit" class="btn btn-success w-100">Registrar</button>
      </form>
      <div class="text-center mt-3">
        <router-link to="/" class="btn btn-link">Voltar para Login</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'RegisterForm',
  data() {
    return {
      name: '',
      email: '',
      cpf: '',
      dataNascimento: '',
      contato: '',
      tipoUsuario: 'aluno',
      password: '',
      confirmPassword: ''
    };
  },
  methods: {
    async register() {
      try {
        const response = await axios.post('/register', {
          nome: this.name,
          email: this.email,
          cpf: this.cpf,
          data_nascimento: this.dataNascimento,
          contato: this.contato,
          senha: this.password,
          tipo_usuario: this.tipoUsuario
        });
        console.log('Registration successful', response.data);
      } catch (error) {
        console.error('Error registering', error);
      }
    }
  }
};
</script>

<style scoped>
.register-card {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
}

.logo {
  width: 100px;
  display: block;
  margin: 0 auto 20px auto;
}

body {
  background-color: #003366;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-body {
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
}
</style>
