<template>
  <v-container
      class="py-6 px-4"
      fluid
  >
    <v-sheet
        class="pa-2 mx-auto"
        outlined
    >
      <h4 class="text-h5 font-weight-bold mb-4">Избранное</h4>

      <v-text-field
          v-model="search"
          density="compact"
          placeholder="Поиск"
          prepend-inner-icon="mdi-magnify"
          style="max-width: 300px;"
          variant="solo"
          dense
      ></v-text-field>

      <v-data-iterator
          :items-per-page="itemsPerPage"
          :loading="true"
          :items="documents"
          :search="search"
          :footer-props="footer_props"

      >
        <template v-slot:default="{ items }">
          <v-container class="pa-2" fluid>
            <v-row dense>
              <v-col
                  v-for="(item, i) in items"
                  :key="i"
                  cols="auto"
                  md="2"
              >
                <v-card class="pb-2" outlined>
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
                    <v-card-subtitle class="white--text">{{ item.category.slice(0, 30) }}</v-card-subtitle>
                  </v-img>
                  <v-card-text>
                    <strong>{{ item.type }}</strong>,&nbsp; размер: <strong>{{ item.size | toSize }} KB</strong>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn small text>
                      <v-icon dense> mdi-eye-outline</v-icon>
                    </v-btn>
                    <v-btn small text>
                      <v-icon dense> mdi-content-save-outline</v-icon>
                    </v-btn>
                    <v-btn small text>
                      <v-icon dense>mdi-star-off-outline</v-icon>
                    </v-btn>
                  </v-card-actions>

                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </template>
      </v-data-iterator>
    </v-sheet>
    <br>
    <v-sheet
        class="pa-2 mx-auto"
        outlined
    >
      <h4 class="text-h5 font-weight-bold mb-4">Мои файлы</h4>
      <v-text-field
          v-model="search2"
          density="compact"
          placeholder="Поиск"
          prepend-inner-icon="mdi-magnify"
          style="max-width: 300px;"
          variant="solo"
          dense
      ></v-text-field>
      <v-data-iterator
          :items="documents"
          :items-per-page="itemsPerPage"
          :search="search2"
          :footer-props="footer_props"
      >
        <template v-slot:default="{ items }">
          <v-container class="pa-2" fluid>
            <v-row dense>
              <v-col
                  v-for="(item, i) in items"
                  :key="i"
                  cols="auto"
                  md="2"
              >
                <v-card class="pb-2" outlined>
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
                    <v-card-subtitle class="white--text">{{ item.category.slice(0, 30) }}</v-card-subtitle>
                  </v-img>
                  <v-card-text>
                    <strong>{{ item.type }}</strong>,&nbsp; размер: <strong>{{ item.size | toSize }} KB</strong>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn small text>
                      <v-icon dense> mdi-eye-outline</v-icon>
                    </v-btn>
                    <v-btn small @click="other = !other" text>
                      <v-icon dense>mdi-file-edit-outline</v-icon>
                    </v-btn>
                    <v-btn small text>
                      <v-icon dense> mdi-content-save-outline</v-icon>
                    </v-btn>
                    <v-btn small text>
                      <v-icon dense> mdi-trash-can-outline</v-icon>
                    </v-btn>
                  </v-card-actions>

                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </template>
      </v-data-iterator>
    </v-sheet>

  </v-container>
</template>

<script>

export default {
  name: 'Home',

  computed: {},
  data: () => ({
    footer_props: {
      'items-per-page-options': [],
      'items-per-page-text': null,
      'disable-items-per-page': true
    },
    search: '',
    search2: '',
    itemsPerPage: 6,
    other: false,
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

    items: Array.from({length: 1000}, (k, v) => v + 1),
  }),

  components: {},
  filters: {
    toSize(size) {
      return size.toLocaleString()
    }
  }
}
</script>

<style>
.v-application--is-ltr .v-data-footer__pagination {
  margin-left: auto;
}
</style>
