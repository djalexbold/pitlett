<template>
  <v-app id="inspire">
    <v-system-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer" small text></v-app-bar-nav-icon>
      <v-btn x-small text stacked>
        <v-badge inline color="error" content="12">
          <v-icon>mdi-bell-outline</v-icon>
        </v-badge>
      </v-btn>
      <v-btn x-small text stacked>
        <v-badge inline color="error" content="3">
          <v-icon>mdi-email-outline</v-icon>
        </v-badge>
      </v-btn>
      <v-spacer></v-spacer>
      <span>{{ user.name }}</span>
      <v-icon @click="dialog = true" :disabled="dialog" class="ml-2" color="red">mdi-login</v-icon>
    </v-system-bar>

    <v-navigation-drawer
        v-if="$route.name !== 'login' && $route.name !== 'notFound'"
        v-model="drawer"
        app
    >
      <v-sheet class="pa-4 ma-0">
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
        <div class="text-overline">{{ user.name }}</div>
      </v-sheet>
      <v-divider></v-divider>
      <v-row class="align-center mx-lg-1" no-gutters>
        <v-col>
          <v-switch
              v-model="theme"
              :prepend-icon="theme ? 'mdi-weather-night' : 'mdi-weather-sunny'"
          ></v-switch>
        </v-col>
        <v-col>
          <v-btn @click="filterContent=0" text stacked>
            Reset
            <v-badge
                inline
                color="error"
                v-model="filter"
                :content="filterContent ? filter = filterContent : filter = false"
            >
              <v-icon>mdi-filter-off-outline</v-icon>
            </v-badge>
          </v-btn>
        </v-col>
      </v-row>

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
    filter: false,
    filterContent: 3,
    breadcrumbPath: [],
    theme: false,
    dialog: false,
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
    },
  },
  computed: {},

  mounted() {

  },

  methods: {
    breadcrumb(router) {
      router = this.$router.options.routes.filter(r => r.all)
      return router
    }
  }
};
</script>
<style>
span {
  padding: 0 2px 0 2px;
}
</style>
