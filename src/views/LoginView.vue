<template>
  <v-card max-width="600" class="mx-auto pa-3 mt-10" :loading="loading.login">
    <v-form v-model="loginForm.valid" @submit.prevent="authRequest">
      <v-card-title>Вход</v-card-title>
      <v-card-text>
        <v-text-field name="login" label="Логин" :rules="[r.required()]"/>
        <v-text-field name="password" label="Пароль" type="password" :rules="[r.required()]"/>
      </v-card-text>
      <v-card-actions>
        <v-spacer/>
        <v-btn type="submit" :disabled="!loginForm.valid" depressed class="primary px-4">Войти</v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
import {required} from "@/utils/rules";

export default {
  name: "LoginView",
  data() {
    return {
      r: {required},
      loginForm: {
        valid: false,
      },
      loading: {
        login: false
      }
    }
  },
  methods: {

  },
  authRequest(e) {
    this.loading.login = true;

    const formData = new FormData(e.target);

    this.login(formData)
        .then(() => {
          this.$router.push("/")
        })
        .finally(() => {
          this.loading.login = false
        })
  },
}
</script>

<style scoped>

</style>
