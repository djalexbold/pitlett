<template>
  <v-app id="inspire">
    <v-system-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <span>выход</span>
      <v-icon @click="dialog = true" :disabled="dialog" class="ml-2" color="red">mdi-login</v-icon>
    </v-system-bar>
    <v-navigation-drawer
        v-if="$route.name !== 'login' && $route.name !== 'notFound'"
        v-model="drawer"
        app
    >
      <v-sheet
          class="pa-4"
      >
        <v-avatar
            class="mb-4"
            color="grey darken-1"
            size="64"
        >
          <v-img
              alt="not image"
              src="./assets/avatar.jpg"
          ></v-img>
        </v-avatar>

        <div>{{ user.name }}</div>

      </v-sheet>
      <v-divider></v-divider>
        <v-switch
            v-model="theme"
            :prepend-icon="theme ? 'mdi-weather-night' : 'mdi-weather-sunny'"
        ></v-switch>
      <v-divider></v-divider>
      <v-list>
        <v-list-item
            v-for="(route, key) in $router.options.routes.filter(r => r.all)"
            :key="key"
            :prepend-icon="route.icon"
            :to="route.path"
            link
        >
          <v-list-item-content class="ml-4">
            <v-list-item-title>
              <v-icon>{{ route.icon }}</v-icon>
              {{ route.label }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view/>
    </v-main>

    <v-dialog
        v-model="dialog"
        width="600"
    >
      <login-view/>
    </v-dialog>

    <v-footer app class="bg-grey-lighten-1 justify-center">
      {{ new Date().getFullYear() }} — <strong> Pitlett </strong>
    </v-footer>
  </v-app>
</template>

<script>
import LoginView from "@/views/LoginView.vue";

export default {
  name: 'App',
  components: {LoginView},

  data: () => ({
    theme: false,
    dialog: false,
    switch1: false,
    currentTickerIndex: 0,
    intervalId: null,
    drawer: null,
    user: {
      name: 'Alex Bold',
    },
  }),
  watch: {
    theme(val) {
      this.$vuetify.theme.dark = val
    }
  },
  computed: {},

  mounted() {

  },

  methods: {}
};
</script>
