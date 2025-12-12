<template>
    <div class="reset-button-container">
        <button v-on:click="resetLikes" class="reset-button">
            Reset likes
        </button>
    </div>
</template>

<script>
export default {
    name: "ResetLikes",
    methods: {
        resetLikes(){
            this.$store.commit("resetLikes");
        }
    }
}
</script>