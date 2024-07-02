<template>
  <div class="comprovantes">
    <h2>Comprovantes de Pagamento</h2>
    <ul>
      <li v-for="comprovante in comprovantes" :key="comprovante.id">
        <a :href="comprovante.url" download>Download {{ comprovante.data_pagamento }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'PaymentReceipts',
  data() {
    return {
      comprovantes: []
    }
  },
  async created() {
    await this.fetchComprovantes()
  },
  methods: {
    async fetchComprovantes() {
      try {
        const response = await axios.get(`/aluno/${this.$route.params.userId}/comprovantes_pagamento`)
        this.comprovantes = response.data.comprovantes
      } catch (error) {
        console.error('Error fetching payment receipts:', error)
        const fallbackData = await fetch('/apiData.json')
        const data = await fallbackData.json()
        this.comprovantes = data.comprovantes
      }
    }
  }
}
</script>

<style>
.comprovantes {
  background: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
