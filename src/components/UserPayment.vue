<template>
  <div class="pagamento">
    <h2>Pagamento</h2>
    <div v-if="step === 1">
      <h3>Selecione a Turma</h3>
      <ul>
        <li v-for="turma in turmas" :key="turma.id">
          <button @click="selectTurma(turma)" class="btn btn-link">{{ turma.nome }} - {{ turma.horario }}</button>
        </li>
      </ul>
    </div>
    <div v-if="step === 2">
      <h3>Selecione o Professor</h3>
      <ul>
        <li v-for="professor in selectedTurma.professores" :key="professor.id">
          <button @click="selectProfessor(professor)" class="btn btn-link">{{ professor.nome }}</button>
        </li>
      </ul>
    </div>
    <div v-if="step === 3">
      <h3>Finalizar Pagamento</h3>
      <p>Professor: {{ selectedProfessor.nome }}</p>
      <div class="qr-code">
        <img :src="qrCodeUrl" alt="QR Code">
        <button @click="copyQRCode" class="btn btn-success mt-3">Copiar Código QR</button>
      </div>
      <p>Código QR: {{ qrCodeString }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'UserPayment',
  data() {
    return {
      step: 1,
      turmas: [],
      selectedTurma: null,
      selectedProfessor: null,
      qrCodeUrl: '', // URL do QR code
      qrCodeString: '' // String do QR code
    }
  },
  async created() {
    await this.fetchTurmas()
  },
  methods: {
    async fetchTurmas() {
      try {
        const response = await axios.get(`/aluno/${this.$route.params.userId}/turmas`)
        this.turmas = response.data.turmas
      } catch (error) {
        console.error('Error fetching classes:', error)
        const fallbackData = await fetch('/apiData.json')
        const data = await fallbackData.json()
        this.turmas = data.turmas
      }
    },
    selectTurma(turma) {
      this.selectedTurma = turma
      this.step = 2
    },
    async selectProfessor(professor) {
      this.selectedProfessor = professor
      try {
        const response = await axios.post(`/aluno/${this.$route.params.userId}/pay_mensalidade`, {
          turma_id: this.selectedTurma.id
        })
        this.qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(response.data.qr_code_pix)}`
        this.qrCodeString = response.data.qr_code_pix
        this.step = 3
      } catch (error) {
        console.error('Error processing payment:', error)
        // Utilize dados fictícios em caso de erro
        this.qrCodeUrl = 'https://api.qrserver.com/v1/create-qr-code/?data=exampleQRCode'
        this.qrCodeString = 'exampleQRCode'
        this.step = 3
      }
    },
    copyQRCode() {
      navigator.clipboard.writeText(this.qrCodeString).then(() => {
        alert('Código QR copiado!')
      })
    }
  }
}
</script>

<style scoped>
.pagamento {
  background: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.pagamento button {
  background: #28A745;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.qr-code {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.qr-code img {
  max-width: 100%;
  height: auto;
}
</style>
