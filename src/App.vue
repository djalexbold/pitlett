<template>
  <v-app id="inspire">
    <v-system-bar app>
      {{ currentTickerItem }}
    </v-system-bar>
    <v-navigation-drawer
        v-model="drawer"
        app
    >
      <v-sheet
          color="grey lighten-4"
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

        <div>{{ this.$el }}</div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
            v-for="[icon, text] in links"
            :key="icon"
            link
        >
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <v-row>
          <v-col
              v-for="n in 24"
              :key="n"
              cols="4"
          >
            <v-card height="128"></v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    currentTickerIndex: 0,
    intervalId: null,
    drawer: null,
    ticker: ['tst text1', 'text test 2', 'hgldfkhgdfkl 3', 'tytytytyty 4', 'sdfrrr_5'],
    cards: ['Сегодня', 'Вчера', 'на прошлой неделе' , ''],
    links: [
      ['mdi-inbox-arrow-down', 'Upload'],
      ['mdi-send', 'Send'],
      ['mdi-delete', 'Trash'],
      ['mdi-alert-octagon', 'Spam'],
    ],
  }),
  computed: {
    currentTickerItem() {
      return this.ticker.at(this.currentTickerIndex);
    }
  },

  /*  renderTracked(evt) {
      console.log("renderTracked: ",evt);
    },*/

  mounted() {
    this.startTickerTimer();
  },

  methods: {
    startTickerTimer() {
      this.stopTickerTimer();
      this.intervalId = setInterval(this.timerTick, 3000);
    },
    stopTickerTimer() {
      if (this.intervalId) clearInterval(this.intervalId);
      this.intervalId = null;
    },
    timerTick() {
      this.currentTickerIndex = Math.round(
          Math.random() * (this.ticker.length-1)
      );
    }
  }
};
</script>
