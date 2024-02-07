<template>
  <main class="login">
    <section class="forms">
      <form class="login" @submit.prevent="login">
        <h2>User Login</h2>
        <input
          type="email"
          placeholder="Email address"
          v-model="login_form.email"
        />
        <input
          type="password"
          placeholder="Password"
          v-model="login_form.password"
        />
        <p>
          Don't have an account?
          <b><router-link to="/register">Register</router-link></b>
        </p>
        <input type="submit" value="Login" />
      </form>
    </section>
  </main>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const login_form = ref({});
    const store = useStore();

    const login = () => {
      store.dispatch("login", login_form.value);
    };

    return {
      login_form,
      login,
    };
  },
};
</script>

<style>
.forms {
  display: flex;
  min-height: 100vh;
}

section.forms form {
  flex: 1 1 0%;
  padding: 8rem 1rem 1rem;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(64, 136, 127, 1) 14%,
    rgba(14, 37, 147, 1) 80%,
    rgba(0, 212, 255, 1) 100%
  );
}

h2 {
  font-size: 2rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
  color: #fff;
}

input {
  appearance: none;
  border: none;
  outline: none;
  background: none;

  display: block;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  padding: 0.5rem 0rem;
}

input:not([type="submit"]) {
  opacity: 0.8;
  transition: 0.4s;
}

input:focus:not([type="submit"]) {
  opacity: 1;
}

input::placeholder {
  color: inherit;
}

form.login input:not([type="submit"]) {
  color: #fff;
  border-bottom: 2px solid #fff;
}

form.login input[type="submit"] {
  background-color: #fff;
  color: rgb(245, 66, 101);
  font-weight: 700;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  text-transform: uppercase;
}
form.login p {
  margin-bottom: 10px;
  color: #fff;
}
form.login p b a {
  margin-bottom: 10px;
  cursor: pointer;
  color: white;
  text-decoration: none;
}
</style>
