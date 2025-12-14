<template>
  <article class="post-card">
    <div class="post-header">
      <span class="date">{{ formattedDate }}</span>
    </div>

    <p>{{ post.body }}</p>
  </article>
</template>

<script>
export default {
  name: "PostCard",
  props: {
    post: { type: Object, required: true }
  },
  computed: {
    formattedDate() {
      return new Date(this.post.created_at).toLocaleString();
    }
  }
};
</script>
