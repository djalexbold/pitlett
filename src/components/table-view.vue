<template>
  <v-container>
    <v-text-field
        v-model="p.quicksearch"
        label="Поиск"
        append-outer-icon="mdi-magnify"
        clearable dense hide-details
    />
    <v-data-table
        :headers="headers"
        :items="documents"
    ></v-data-table>
  </v-container>
</template>

<script>
export default {
  name: 'tableView',

  data: () => ({
    p: {
      start: 0,
      step: 0,
      limit: 5,
    },
    page: 1,
    totalCount: 0,
    quicksearch: undefined,
    order: undefined,
    headers: [
      {text: 'Название', value: 'name'},
      {text: 'Описание', value: 'description'},
      {text: 'Категория', value: 'category'},
      {text: 'Тип', value: 'type'},
      {text: 'Рейтинг', value: 'rating'},
      {text: 'Размер(KB)', value: 'size'},
      {text: 'Автор', value: 'author'},
    ],
    documents: [
      {
        name: 'Frozen Yogurt',
        description: 'Editor’s Pick: With Mother’s Day less than a month away, I found this book to be a timely meditation on modern motherhood. ',
        category: 'Художественная литература',
        type: 'PDF',
        size: 4520,
        author: 'user123',
        rating: 4.5
      },
      {
        name: 'Ice cream sandwich',
        description: 'Navigating the complexities of bringing another human into the world and exploring today’s medical advances with a pulse',
        category: 'Научная и научно-популярная литература',
        type: 'PDF',
        size: 386,
        author: 'user123',
        rating: 4.0
      },
      {
        name: 'Eclair',
        description: 'I wish I knew how Caoilinn Hughes has managed to write a book of such depth and gravity that is also so gripping and relentlessly funny.',
        category: 'Справочная литература',
        type: 'PDF',
        size: 841,
        author: 'alexbold',
        rating: 1
      },
      {
        name: 'Cupcake',
        description: 'A nuanced, informative look at the history, development, and future of museums of anthropology and ethnology',
        category: 'Техническая литература',
        type: 'DOC',
        size: 6120,
        author: 'DeveLOP',
        rating: 3.5
      },
      {
        name: 'Bitter Water Opera',
        description: 'Exuberant and improbable, Bitter Water Opera is a wonder work of noticing.',
        category: 'Художественная литература',
        type: 'DjVu',
        size: 12869,
        author: 'DeveLOP',
        rating: 2
      },
    ],
  }),
  methods: {},
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
}
</script>

<style scoped>

</style>
