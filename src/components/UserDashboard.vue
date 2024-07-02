<template>
  <div class="dashboard">
    <aside class="sidebar">
      <ul>
        <li><router-link :to="{ name: 'UserProfile', params: { userId: $route.params.userId } }">Perfil</router-link></li>
        <li><router-link :to="{ name: 'UserModalities', params: { userId: $route.params.userId } }">Modalidades</router-link></li>
        <li><router-link :to="{ name: 'UserClasses', params: { userId: $route.params.userId } }">Turmas</router-link></li>
        <li><router-link :to="{ name: 'UserPayment', params: { userId: $route.params.userId } }">Pagamento</router-link></li>
        <li><router-link :to="{ name: 'PaymentReceipts', params: { userId: $route.params.userId } }">Comprovantes</router-link></li>
      </ul>
    </aside>
    <main class="main-content">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'UserDashboard',
  data() {
    return {
      isAluno: true, // Ou false, dependendo do tipo de usuário
      isProfessor: false // Ou true, dependendo do tipo de usuário
    }
  }
}
</script>

<style>
.dashboard {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 250px;
  background-color: #003366;
  color: #ffffff;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
}

.sidebar li {
  margin: 20px 0;
}

.sidebar a {
  color: #ffffff;
  text-decoration: none;
}

.main-content {
  flex: 1;
  background-color: #F2F2F2;
  padding: 20px;
  overflow-y: auto;
}
</style>
