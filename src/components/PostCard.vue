<template>
  <article class="post-card">
    <div class="post-header">
      <span class="post-author">{{ post.name }}</span>
      <span class="post-date">{{ post.date }}</span>
    </div>

    <h2>{{ post.title }}</h2>
    <p>{{ post.text }}</p>

    <img v-if="post.image" :src="post.image" alt="Post image" />

    <div class="post-reactions">
      <button class="like-button" @click = "likePost">
        <img src="@/assets/like.svg" class="like-icon">
      </button>
      <span v-if="post.likes > 1" class="like-count">
        {{ post.likes }} likes
      </span>

      <span v-else-if="post.likes == 1" class="like-count">
        {{ post.likes }} like
      </span>

        <span v-else class="like-count">
          No likes
      </span>
    </div>
  </article>
</template>

<script>
export default {
  name: 'PostCard',
  props: {
    post: Object,
    index: Number
  },
  methods: {
    likePost(){
      this.$store.commit("increaseLike", this.index)
    }
  }
}
</script>
