<template>
  <div>
    <h1>Edit post</h1>

    <textarea 
    v-model="post.body" 
    placeholder="Edit your post here..."
    rows="10"
    cols="50"
    ></textarea>

    <br />

    <button @click="save" class="editPostButton">Save</button>
    <button @click="remove" class="editPostButton">Delete</button>
    <button @click="$router.push('/')" class="editPostButton">Cancel</button>
  </div>
</template>

<script>
export default {
  name: "PostPage",

  data() {
    return {
      post: {}
    };
  },

  async mounted() {
    const res = await fetch(
      `http://localhost:3000/api/posts/${this.$route.params.id}`,
      { credentials: "include" }
    );

    this.post = await res.json();
  },

  methods: {
    async save() {
      await fetch(
        `http://localhost:3000/api/posts/${this.post.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ body: this.post.body })
        }
      );

      this.$router.push("/");
    },

    async remove() {
      await fetch(
        `http://localhost:3000/api/posts/${this.post.id}`,
        {
          method: "DELETE",
          credentials: "include"
        }
      );

      this.$router.push("/");
    }
  }
};
</script>

<style>

  .editPostButton{
  font-size: 20px;
  padding: 5px 10px;
  border: none;
  border-radius: 8px;
  background-color: #ccc;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 10px;
  margin-right: 15px;
  }

.editPostButton:hover {
  background-color: #9b9b9b;
}

</style>
