<template>
  <div>
    <AppNavbar />

    <main class="container">
      <router-view />
    </main>

    <AppFooter />
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  components: { AppNavbar, AppFooter }
}
</script>
