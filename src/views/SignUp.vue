<template>
  <b-container>
    <b-card fluid body-class="text-center" bg-variant="dark">
      <div>
          <b-avatar variant="primary" text="BV"></b-avatar>
        </div>
      <form>
        <div class="spacer">
          <under-line-input
            v-model="firstname"
            input-placeholder="First name"
          />
        </div>
        <div class="spacer">
          <under-line-input v-model="lastname" input-placeholder="Last name" />
        </div>
        <div class="spacer">
          <under-line-input
            v-model="email"
            input-placeholder="Email"
            type="email"
          />
          <p class="err" v-if="msg.email">
            {{ msg.email }}
          </p>
        </div>
        <div class="spacer">
          <under-line-input
            v-model="password"
            input-placeholder="Password"
            type="password"
          />
          <p class="err" v-if="msg.password">
            {{ msg.password }}
          </p>
        </div>
        <div class="spacer">
          <b-button
            :disabled="validateSignUpForm"
            variant="success"
            @click="signUpSubmit"
            >Sign-Up
          </b-button>
        </div>
      </form>
    </b-card>
  </b-container>
</template>

<script>
import UnderLineInput from "@/components/UnderLineInput.vue";
import { BAvatar } from 'bootstrap-vue'

export default {
  name: "SignUp",
  components: { UnderLineInput, BAvatar },
  data: function () {
    return { firstname: "", lastname: "", email: "", password: "", msg: {} };
  },
  computed: {
    validateSignUpForm: function () {
      return this.firstname &&
        this.lastname &&
        this.validateEmail(this.email) &&
        this.validatePassword(this.password)
        ? false
        : true;
    },
  },
  methods: {
    signUpSubmit: function () {
      //everything is verified up until this function is called 
      console.log ("Signing Up")
    },
    validateEmail: function (email) {
      if (
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(email) ||
        email.length === 0
      ) {
        this.msg.email = "";
        return email.length === 0 ? false : true;
      } else {
        this.msg.email = "Invalid Email Address";
        return false;
      }
    },
    validatePassword: function (password) {
      if (password.length === 0 || password.length > 5) {
        this.msg.password = "";
        return password.length === 0 ? false : true;
      } else {
        this.msg.password = "Password must be greater then 5 characters ";
        return false;
      }
    },
  },
  watch: {
    email: function (newEmail) {
      this.email = newEmail;
      this.validateEmail(newEmail);
    },
    password: function (newPassword) {
      this.password = newPassword;
      this.validatePassword(newPassword);
    },
  },
};
</script>

<style scoped>
p {
  color: red;
  font-size: 20px;
}
.spacer {
  padding: 10px;
}

h1 {
  color: white;
}
</style>
