<template>
  <div class="modalidades">
    <h2>Modalidades</h2>
    <ul>
      <li v-for="modalidade in modalidades" :key="modalidade.id">{{ modalidade.nome }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'UserModalities',
  data() {
    return {
      modalidades: []
    }
  },
  async created() {
    await this.fetchModalidades()
  },
  methods: {
    async fetchModalidades() {
      try {
        const response = await axios.get(`/aluno/${this.$route.params.userId}/modalidades`)
        this.modalidades = response.data.modalidades
      } catch (error) {
        console.error('Error fetching modalities:', error)
        const fallbackData = await fetch('/apiData.json')
        const data = await fallbackData.json()
        this.modalidades = data.modalidades
      }
    }
  }
}
</script>

<style>
.modalidades {
  background: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
