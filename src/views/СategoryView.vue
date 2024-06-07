<template>
  <v-container>

    <v-breadcrumbs :items="breadcrumb">
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item :href="item.id" @click="">
          {{ item.name }}
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>

    <v-card :loading="false" outlined>

      <v-tabs v-model="currentItem">
        <v-tab
            v-for="item in items"
            :key="item.id"
        >{{ item.title }}
        </v-tab>
      </v-tabs>

      <v-tabs-items
          v-model="currentItem"
          class="text-cols"
      >
        <v-tab-item
            v-for="subItem in subItems"
            :key="subItem.id"
            :value="subItem.sub_id - 1"
        >
          <div class="mx-lg-2">
            <v-checkbox
                dense
                v-model="selectedCheckbox"
                :label="subItem.name"
                :value="subItem.id"
            />
          </div>
        </v-tab-item>
      </v-tabs-items>

    </v-card>

  </v-container>
</template>

<script>

export default {
  name: 'CategoryView',
  components: {},
  data: () => ({
    selectedCheckbox: [],
    breadcrumb: [
      {name: '111'},
      {name: '222'},
      {name: '333sub'}
    ],
    currentItem: undefined,
    items: [
      {id: 1, title: 'Художественная'},
      {id: 2, title: 'Научная'},
      {id: 3, title: 'Справочная'},
      {id: 4, title: 'Техническая'},
      {id: 5, title: 'Учебная'},
    ],
    subItems: [
      {id: 1, sub_id: 1, name: 'Детективы, триллеры'},
      {id: 2, sub_id: 1, name: 'Сатира, юмор'},
      {id: 3, sub_id: 1, name: 'Ужасы, мистика'},
      {id: 4, sub_id: 1, name: 'Фантастика, фэнтези'},
      {id: 5, sub_id: 2, name: 'Самообразование'},
      {id: 6, sub_id: 2, name: 'Программирование'},
      {id: 7, sub_id: 3, name: 'Энциклопедии'},
      {id: 8, sub_id: 4, name: 'Автомобили, наземный транспорт'},
      {id: 9, sub_id: 5, name: 'Физика, астрономия'},
    ],
  }),
  methods: {
    addItem(item) {
      console.log(item.name)
    },
  },
}
</script>
<style>

.text-cols {
  column-count: 4;
  column-width: auto;
}

</style>
