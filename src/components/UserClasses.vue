<template>
  <div class="turmas">
    <h2>Turmas</h2>
    <ul>
      <li v-for="turma in turmas" :key="turma.id">{{ turma.nome }} - {{ turma.horario }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'UserClasses',
  data() {
    return {
      turmas: []
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
    }
  }
}
</script>

<style>
.turmas {
  background: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
