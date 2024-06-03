<template>
  <v-container
      class="py-8 px-6"
      fluid
  >
    <v-row dense>
      <v-col
          v-for="(dessert, key) in desserts"
          :key="key"
          cols="12"
          md="4"
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

              <v-rating
                  v-model="dessert.rating"
                  active-color="yellow-accent-4"
                  color="red"
                  size="18"
                  half-increments
                  hover
              ></v-rating>
            </div>

            <v-avatar
                v-if="dessert.images.length !== 0"
                class="ma-2"
                rounded="0"
                size="200"
            >
              <v-carousel
                  v-if=""
                  :continuous="false"
                  hide-delimiters
                  height="200">
                <v-carousel-item
                    v-for="(item, i) in dessert.images"
                    :key="i"
                    :src="item.src"
                    cover
                >
                </v-carousel-item>
              </v-carousel>

            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'cardView',

  data: () => ({
    desserts: [
      {
        name: 'Frozen Yogurt',
        description: 'Editor’s Pick: With Mother’s Day less than a month away, I found this book to be a timely meditation on modern motherhood. ',
        category: 'Художественная литература',
        type: 'PDF',
        size: 4520,
        author: 'user123',
        rating: 4.5,
        images: [
          {src: require('@/assets/test_img.jpg')},
          {src: require('@/assets/north-polus_09.jpg')}
        ]
      },
      {
        name: 'Ice cream sandwich',
        description: 'Navigating the complexities of bringing another human into the world and exploring today’s medical advances with a pulse',
        category: 'Научная и научно-популярная литература',
        type: 'PDF',
        size: 386,
        author: 'user123',
        rating: 4.0,
        images: []
      },
      {
        name: 'Eclair',
        description: 'I wish I knew how Caoilinn Hughes has managed to write a book of such depth and gravity that is also so gripping and relentlessly funny.',
        category: 'Справочная литература',
        type: 'PDF',
        size: 841,
        author: 'alexbold',
        rating: 1,
        images: [
          {src: require('@/assets/test_img.jpg')},
        ]
      },
      {
        name: 'Cupcake',
        description: 'A nuanced, informative look at the history, development, and future of museums of anthropology and ethnology',
        category: 'Техническая литература',
        type: 'DOC',
        size: 6120,
        author: 'DeveLOP',
        rating: 3.5,
        images: []
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
  methods: {},
  computed: {}
}


</script>


<style scoped>

</style>
