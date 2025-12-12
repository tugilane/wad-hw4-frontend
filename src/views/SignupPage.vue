<template>
    <div>
      <div v-if="errors.length" id="error-block"> <!-- v-if only shows when there are errors-->
        <h3>
          Password requirements
        </h3>
        <ul> 
      <li v-for="(err, index) in errors" :key="index" class="error-message"> <!-- index on lihtsalt sellepärast et vuele meeldib kui on mingi key-->
        {{ err }}
      </li>
        </ul>
        </div>
      <h2>Create Account</h2>
  
      <form class="signup-form">
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" v-model="password" placeholder="Password" />
  
        <button type="button" @click="login">Sign Up</button>
      </form>
    </div>
  </template>

<script>
  export default {
    data() {
      return {
        password: '',
        errors: []
      }
    },
    methods: {
      login() {
        this.errors = [];
        console.log("pasword is: ", this.password)

        // iterate over password and check for lowercase letters
        let smallL = 0;
        this.password.split("").forEach(element => {
          if (element.toUpperCase() != element){
            smallL ++;
          } 

        })
        if (this.password.length < 8 || this.password.length > 15) {
          console.log("suurem kui 8 aga väiksem kui 15")
          this.errors.push("must include at least 8 chars, but less than 15 chars")
        }
        if (!/[A-Z]/.test(this.password)){
            this.errors.push("must include at least 1 uppercase letter");
          }
        if(smallL < 2){
          console.log("puudu 2 väikest tähte")
          this.errors.push("must include at least 2 lowercase letters")
        }
        if (!/\d/.test(this.password)){ // digit check
          console.log("peab sisaldama numbrit")
          this.errors.push("must include a numeric value")
        }
        if (this.password == "" || !/[A-Z]/.test(this.password[0])){
            console.log("peab algama suure tähega")
            this.errors.push("must begin with uppercase letter")
          }
        if (!/_/.test(this.password)){
          console.log("peab olema alakriips")
          this.errors.push("must include char \"_\" ")
        }
      }
    }
  }
</script>

<style>

#error-block {
  width:50%; 
  margin-right:auto; 
  margin-left:auto;
  background-color:white;
  border-radius:5%;
  padding:5%;
}

.error-message {
  color: red;
}

</style>
  