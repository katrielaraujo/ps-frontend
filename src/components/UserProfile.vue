<template>
  <div class="profile-container">
    <div class="profile-card">
      <h2>{{ userProfile.nome }}</h2>
      <p>Contato: {{ userProfile.contato }}</p>
      <p>Email: {{ userProfile.email }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      userProfile: {}
    }
  },
  async created() {
    await this.fetchUserProfile()
  },
  methods: {
    async fetchUserProfile() {
      try {
        const response = await axios.get(`/aluno/${this.$route.params.userId}/profile`)
        this.userProfile = response.data
      } catch (error) {
        console.error('Error fetching user profile:', error)
        const fallbackData = await fetch('/apiData.json')
        const data = await fallbackData.json()
        this.userProfile = data.profile
      }
    }
  }
}
</script>

<style scoped>
.profile-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f4f4f9;
}

.profile-card {
  background-color: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
  width: 100%;
}
</style>
