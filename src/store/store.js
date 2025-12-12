import { createStore } from 'vuex'
import postsData from '../data/posts.json'   // JSON file

export default createStore({
  state: { // store your posts globally
    posts: postsData.map(post => ({...post, likes: 0}))  
  },

  getters: { // read computed values
    getPosts(state) {
      return state.posts
    }
  },

  mutations: { // track and commit state changes
    increaseLike(state, index){
      state.posts[index].likes++
    },
    resetLikes(state){
      state.posts.forEach(post => {
        post.likes = 0;
      });
    }
  }
})
