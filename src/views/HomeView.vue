<template>
  <v-container
      class="py-6 px-4"
      fluid
  >
    <v-data-iterator
        :items="documents"
        :items-per-page="6"
        :search="search"
    >
      <template v-slot:header>
        <v-toolbar class="pd-2" flat>
          <v-text-field
              v-model="search"
              density="comfortable"
              prepend-inner-icon="mdi-magnify"
              label="Поиск"
              style="max-width: 300px;"
              dense
              hide-details
              clearable
          ></v-text-field>
        </v-toolbar>
      </template>

      <template v-slot:default="{ items }">
        <v-container class="pa-2" fluid>
          <v-row dense>
            <v-col
                v-for="(item, i) in items"
                :key="i"
                cols="auto"
                md="2"
            >
              <v-card class="pb-2"   outlined>
                <v-img
                    height="120"
                    :src="item.images"
                    class="align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    cover
                >
                  <v-rating
                      v-model="item.rating"
                      active-color="yellow-accent-4"
                      color="red"
                      size="18"
                      half-increments
                      hover
                  ></v-rating>
                  <v-card-title class="white--text">{{ item.name }}</v-card-title>
                  <v-card-subtitle class="white--text">{{ item.type }}</v-card-subtitle>
                </v-img>
                <v-card-actions>
                  <v-btn text>
                    <v-icon color="black"> mdi-star-outline</v-icon>
                  </v-btn>
                  <v-btn text>
                    <v-icon color="black"> mdi-content-save-outline</v-icon>
                  </v-btn>
                </v-card-actions>

              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </template>

    </v-data-iterator>
  </v-container>
</template>

<script>

export default {
  name: 'Home',
  computed: {},
  data: () => ({
    search: '',
    documents: [
      {
        name: 'Frozen Yogurt',
        description: 'Editor’s Pick: With Mother’s Day less than a month away, I found this book to be a timely meditation on modern motherhood. ',
        category: 'Художественная литература',
        type: 'PDF',
        size: 4520,
        author: 'user123',
        rating: 4.5,
        images: require('@/assets/test_img.jpg'),
      },
      {
        name: 'Ice cream sandwich',
        description: 'Navigating the complexities of bringing another human into the world and exploring today’s medical advances with a pulse',
        category: 'Научная и научно-популярная литература',
        type: 'PDF',
        size: 386,
        author: 'user123',
        rating: 4.0,

      },
      {
        name: 'Eclair',
        description: 'I wish I knew how Caoilinn .',
        category: 'Справочная литература',
        type: 'PDF',
        size: 841,
        author: 'alexbold',
        rating: 1,
        images: require('@/assets/north-polus_09.jpg'),
      },
      {
        name: 'Cupcake',
        description: 'A nuanced, informative look at the history, development, and future of museums of anthropology and ethnology',
        category: 'Техническая литература',
        type: 'DOC',
        size: 6120,
        author: 'DeveLOP',
        rating: 3.5,
        images: require('@/assets/bg.png'),
      },
      {
        name: 'Bitter Water Opera',
        description: 'Exuberant and improbable, Bitter Water Opera is a wonder work of noticing.',
        category: 'Художественная литература',
        type: 'DjVu',
        size: 12869,
        author: 'DeveLOP',
        rating: 2,
        images: require('@/assets/photo-bg.jpg'),
      },
      {
        name: 'Bitter Water Opera',
        description: 'Exuberant and improbable',
        category: 'Художественная литература',
        type: 'DjVu',
        size: 12869,
        author: 'DeveLOP',
        rating: 2,

      },
      {
        name: 'Bitter Water Opera',
        description: 'Exuberant and improbable, Bitter Water Opera is a wonder work of noticing.',
        category: 'Художественная литература',
        type: 'DjVu',
        size: 12869,
        author: 'DeveLOP',
        rating: 2,

      },
    ],

    //items: Array.from({ length: 1000 }, (k, v) => v + 1),
  }),

  components: {},
}
</script>
