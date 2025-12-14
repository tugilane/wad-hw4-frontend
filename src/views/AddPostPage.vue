<template>
  <div>
    <h1>Add a new post</h1>

    <textarea
      v-model="body"
      placeholder="Write your post here..."
      rows="10"
      cols="50"
    ></textarea>

    <br />

    <button @click="submitPost" class="sumbitPostButton">Submit Post</button>

    <p v-if="errorMessage" style="color: red;">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script>
export default {
  name: "AddPostPage",
  data() {
    return {
      body: "",
      errorMessage: null
    };
  },
  methods: {
    async submitPost() {
      if (!this.body.trim()) {
        this.errorMessage = "Post body cannot be empty.";
        return;
      }

      try {
        await fetch("http://localhost:3000/api/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          credentials: "include",
          body: JSON.stringify({ body: this.body })
        });

        this.body = "";
        this.$router.push("/");
      } catch (err) {
        this.errorMessage = "Error submitting post. Please try again.";
        console.error(err);
      }
    }
  }
};
</script>

<style>

  textarea{
    resize: none;
    border: none;
    border-radius: 5px;
  }

  .sumbitPostButton{
  font-size: 20px;
  padding: 5px 10px;
  border: none;
  border-radius: 8px;
  background-color: #ccc;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 10px;
  }

.sumbitPostButton:hover {
  background-color: #9b9b9b;
}

</style>