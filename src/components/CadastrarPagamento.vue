<template>
  <div class="cadastrar-pagamento card">
    <div class="card-body">
      <h2>Cadastrar Pagamento</h2>
      <form @submit.prevent="cadastrarPagamento">
        <div class="mb-3">
          <label for="valor" class="form-label">Valor</label>
          <input type="number" id="valor" class="form-control" v-model="valor" required/>
        </div>
        <div class="mb-3">
          <label for="data-vencimento" class="form-label">Data de Vencimento</label>
          <input type="date" id="data-vencimento" class="form-control" v-model="dataVencimento" required/>
        </div>
        <div class="mb-3">
          <label for="cidade" class="form-label">Cidade</label>
          <input type="text" id="cidade" class="form-control" v-model="cidade" required/>
        </div>
        <div class="mb-3">
          <label for="chave-pix" class="form-label">Chave Pix</label>
          <input type="text" id="chave-pix" class="form-control" v-model="chavePix" required/>
        </div>
        <button type="submit" class="btn btn-success w-100">Cadastrar</button>
      </form>
      <p v-if="message" class="text-success mt-3">{{ message }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CadastrarPagamento',
  data() {
    return {
      valor: 100.00,
      dataVencimento: '2024-07-10',
      cidade: 'São Paulo',
      chavePix: '12345678900',
      message: ''
    }
  },
  methods: {
    async cadastrarPagamento() {
      try {
        const response = await axios.post(`/professor/${this.$route.params.userId}/create_payment`, {
          valor: this.valor,
          data_vencimento: this.dataVencimento,
          cidade: this.cidade,
          chave_pix: this.chavePix
        })
        this.message = response.data.message
      } catch (error) {
        this.message = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.cadastrar-pagamento {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
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
