<template>
  <div class="register-view">
    <RegisterForm />
  </div>
</template>

<script>
import RegisterForm from '@/components/RegisterForm.vue'

export default {
  name: 'RegisterView',
  components: {
    RegisterForm
  }
}
</script>

<style scoped>
.register-view {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #003366;
}
</style>
