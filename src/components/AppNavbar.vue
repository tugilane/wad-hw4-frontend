<template>
  <nav class="navbar">
    <div class="logo">
      <router-link to="/">MySite</router-link>
    </div>

    <ul class="links">
      <li>
        <router-link to="/signup">Login</router-link>
      </li>
    </ul>


  </nav>
</template>

<script>
export default {
  name: "AppNavbar",
};
</script>
