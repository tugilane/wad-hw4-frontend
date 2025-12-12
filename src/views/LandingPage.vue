<template>
  <div>
    <PostCard
      v-for="(p, i) in posts"
      :key="i"
      :post="p"
      :index = "i"
    />
    <ResetLikes/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import PostCard from '../components/PostCard.vue'
import ResetLikes from '../components/ResetLikes.vue'; 

export default {
  name: 'LandingPage',
  components: {
    PostCard,
    ResetLikes
  },
  computed: {
    ...mapState(['posts'])
  }
}
</script>
