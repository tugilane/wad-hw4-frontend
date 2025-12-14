<template>
  <div class="topButtons">
    <button @click="Logout" class="homePageButton">Logout</button>
  </div>

  <div>
    <div
      v-for="p in posts"
      :key="p.id"
      class="click-post"
      @click="goToPost(p.id)"
    >
      <PostCard :post="p" />
    </div>
  </div>

  <div class="bottomButtons">
    <button @click="$router.push('/posts/new')" class="homePageButton">Add post</button>

    <button @click="deleteAll" class="homePageButton">Delete all</button>
  </div>
</template>

<script>
import PostCard from "../components/PostCard.vue";

export default {
  name: "LandingPage",
  components: { PostCard },
  data() {
    return {
      posts: []
    };
  },
  methods: {
    async loadPosts() {
      const res = await fetch("http://localhost:3000/api/posts", {
        credentials: "include"
      });
      this.posts = await res.json();
    },
    goToPost(id) {
      this.$router.push(`/posts/${id}`);
    },
    async deleteAll() {
      await fetch("http://localhost:3000/api/posts", {
        method: "DELETE",
        credentials: "include"
      });
      await this.loadPosts();
    },
    async Logout() {
      await fetch("http://localhost:3000/auth/logout", {
        credentials: "include"
      });
      this.$router.push("/login");
    }
  },
  mounted() {
    this.loadPosts();
  }
};
</script>

<style>
.topButtons {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.homePageButton{
  font-size: 20px;
  padding: 5px 10px;
  border: none;
  border-radius: 8px;
  background-color: #ccc;
  cursor: pointer;
  transition: all 0.2s;
}

.homePageButton:hover{
  background-color: #9b9b9b;
}

.click-post {
  cursor: pointer;
}

.bottomButtons{
  display: flex;
  justify-content: space-evenly;
}
</style>