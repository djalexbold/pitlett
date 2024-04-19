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
<!--   table   -->
      <v-container>
        <v-data-table
            :headers="headers"
            :items="desserts"
        ></v-data-table>
      </v-container>

<!--   card   -->
      <v-container
          class="py-8 px-6"
          fluid
      >
        <v-row>
          <v-col
              v-for="(dessert, key) in desserts"
              :key="key"
              cols="4"
          >
            <v-card
                class="mx-auto"
                height="226"
            >
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title class="text-h5">
                    {{ dessert.name }}
                  </v-card-title>

                  <v-card-subtitle>{{ dessert.description }}</v-card-subtitle>

                  <v-card-actions>
                    <v-btn small>open</v-btn>
                  </v-card-actions>
                </div>

                <v-avatar
                    class="ma-4"
                    rounded="0"
                    size="192"
                >
                  <v-img src="./assets/test_img.jpg"></v-img>
                </v-avatar>
              </div>
            </v-card>
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
    ticker: ['tst text1', 'text test 2', 'hgldfkhgdfkl 3', 'tytytytyty 4', 'With Mother’s Day less than a month away, I found this book to be a timely meditation on modern motherhood. Navigating the complexities of bringing another human into the world and exploring today’s medical advances with a pulse on the mothers and myths that have come before her, Emily C.'],
    links: [
      ['mdi-inbox-arrow-down', 'Upload'],
      ['mdi-send', 'Send'],
      ['mdi-delete', 'Trash'],
      ['mdi-alert-octagon', 'Spam'],
    ],
    headers: [
      { text: 'Название', value: 'name' },
      { text: 'Описание', value: 'description' },
      { text: 'Категория', value: 'category' },
      { text: 'Тип', value: 'type' },
      { text: 'Размер(KB)', value: 'size' },
      { text: 'Автор', value: 'author' },
    ],
    desserts: [
      {
        name: 'Frozen Yogurt',
        description: 'Editor’s Pick: With Mother’s Day less than a month away, I found this book to be a timely meditation on modern motherhood. ',
        category: 'Художественная литература',
        type: 'PDF',
        size: 4520,
        author: 'user123',
      },
      {
        name: 'Ice cream sandwich',
        description: 'Navigating the complexities of bringing another human into the world and exploring today’s medical advances with a pulse',
        category: 'Научная и научно-популярная литература',
        type: 'PDF',
        size: 386,
        author: 'user123',
      },
      {
        name: 'Eclair',
        description:'I wish I knew how Caoilinn Hughes has managed to write a book of such depth and gravity that is also so gripping and relentlessly funny.',
        category: 'Справочная литература',
        type: 'PDF',
        size: 841,
        author: 'alexbold',
      },
      {
        name: 'Cupcake',
        description: 'A nuanced, informative look at the history, development, and future of museums of anthropology and ethnology',
        category: 'Техническая литература',
        type: 'DOC',
        size: 6120,
        author: 'DeveLOP',
      },
      {
        name: 'Bitter Water Opera',
        description: 'Exuberant and improbable, Bitter Water Opera is a wonder work of noticing.',
        category: 'Художественная литература',
        type: 'DjVu',
        size: 12869,
        author: 'DeveLOP',
      },
      {
        name: 'Jelly bean',
        description: 'sdfhsdjkfsdkjf sdhkfjkdshfkjsd sdjkfhsdjkh',
        category: 'Другое',
        type: 'PDF',
        size: 0.0,
        author: 0,
      },
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
          Math.random() * (this.ticker.length - 1)
      );
    }
  }
};
</script>
