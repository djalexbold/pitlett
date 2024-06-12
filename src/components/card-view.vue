<template>
  <v-container
      class="py-6 px-4"
      fluid
  >
    <div class="d-flex">
      <v-row align="center">
        <v-col cols="2" class="pa-2 ma-2">
          <v-text-field
              v-model="search"
              :loading="loading"
              append-outer-icon="mdi-magnify"
              density="compact"
              label="поиск"
              dense
              @click:append-outer="onClick"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-combobox
              v-model="filterModel"
              :hide-no-data="false"
              label="фильтр"
              @change="onChange"
              item-text="label"
              item-value="id"
              :items="filterItems"
              style="max-width: 250px;"
              dense
          />
        </v-col>
      </v-row>
    </div>

    <v-row dense>
      <v-col
          v-for="(document, key) in documents"
          :key="key"
          cols="12"
          md="4"
      >
        <v-sheet outlined>
          <v-container fluid grid-list-xs>
            <v-layout row wrap>

              <v-flex d-flex xs12 sm6>
                <v-carousel
                    height="250"
                    :continuous="false"
                    hide-delimiters
                >
                  <v-carousel-item
                      v-if="document.images?.length"
                      :src="document.images"
                      cover
                  >
                    <v-rating
                        v-model="document.rating"
                        active-color="yellow-accent-4"
                        color="red"
                        size="18"
                        half-increments
                        hover
                    ></v-rating>
                  </v-carousel-item>
                  <v-carousel-item
                      v-else
                      cover
                      :src="require('@/assets/No_Image_Available.jpg')"
                  >
                    <v-rating
                        v-model="document.rating"
                        active-color="yellow-accent-4"
                        color="red"
                        size="18"
                        half-increments
                        hover
                    ></v-rating>
                  </v-carousel-item>
                </v-carousel>
              </v-flex>

              <v-flex d-flex xs12 md6>
                <v-layout row wrap>

                  <v-flex d-flex>
                    <v-card border flat>
                      <v-card-title>{{ document.name }}</v-card-title>
                      <v-card-subtitle class="primary--text">{{ document.category }}</v-card-subtitle>
                      <v-card-text>{{ document.description.slice(0, 165) }}</v-card-text>
                    </v-card>
                  </v-flex>

                  <v-flex d-flex align-self-end>
                    <div class="pl-4">
                      <v-btn small text>
                        <v-icon> mdi-star-outline</v-icon>
                      </v-btn>
                      <v-btn small text>
                        <v-icon> mdi-content-save-outline</v-icon>
                      </v-btn>
                      <v-btn small text>
                        <v-icon> mdi-book-open-outline</v-icon>
                      </v-btn>
                    </div>
                  </v-flex>

                </v-layout>
              </v-flex>

            </v-layout>
          </v-container>
        </v-sheet>
      </v-col>
    </v-row>
    <v-pagination v-model="page" :length="Math.ceil(totalCount/ p.limit)"/>
  </v-container>
</template>

<script>
export default {
  name: 'cardView',

  data: () => ({
    loaded: false,
    loading: false,
    search: '',
    filterItems: [
      {
        id: 1,
        name: 'relevance',
        label: 'по релевантности',
      },
      {
        id: 2,
        name: 'rating',
        label: 'по рейтингу',
      },
      {
        id: 3,
        name: 'size',
        label: 'по размеру',
      },
      {
        id: 4,
        name: 'name',
        label: 'по имени',
      },
      {
        id: 5,
        name: 'data',
        label: 'по дате',
      },
    ],
    filterModel: null,
    p: {
      start: 0,
      step: 0,
      limit: 5,
    },
    page: 1,
    totalCount: 0,
    quicksearch: undefined,
    order: undefined,
    documents: [
      {
        name: 'Frozen Yogurt',
        description: 'Editor’s Pick: With Mother’s Day less than a month away, I found this book to be a timely meditation on modern motherhood. Editor’s Pick: With Mother’s Day less than a month away, I found this book to be a timely meditation on modern motherhood.',
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
        images: null
      },
      {
        name: 'Bitter Water Opera',
        description: 'Exuberant and improbable, Bitter Water Opera is a wonder work of noticing.',
        category: 'Художественная литература',
        type: 'DjVu',
        size: 12869,
        author: 'DeveLOP',
        rating: 2,
        images: []
      },
    ],
  }),

  computed: {
    params() {
      const {order, quicksearch} = this.p
      return {
        ...this.p,
        start: this.p.limit * (this.page - 1),
        order: order ?? undefined,
        quicksearch: quicksearch ?? undefined,
        ...this.$route.query
      }
    }
  },
  methods: {
    onClick () {
      this.loading = true

      setTimeout(() => {
        this.loading = false
        this.loaded = true
      }, 2000)
    },
    onChange(entry) {
      //console.log(entry)
    },
  },
}


</script>


<style>
.text-color {
  color: #1976D2;
}
</style>
