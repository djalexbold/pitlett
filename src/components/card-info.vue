<template>
    <v-card>
      <v-card-title>{{ document.name }}</v-card-title>
      <v-card-subtitle>{{ document.category }}</v-card-subtitle>
      <v-card-text>{{ document.description }}</v-card-text>
      <v-card-actions></v-card-actions>
    </v-card>
</template>

<script>
export default {
  name: "card-info",
  props: {
     addDocument: {
       type: Object,
       default: null,
     }
  },
  data() {
    return {
      document: this.addDocument
    }
  },
}
</script>

<style>

</style>
