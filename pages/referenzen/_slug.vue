<template>
    <div>
      <h1>{{page.title}}</h1>
      <h1>{{page.contenttext}}</h1>
      <div v-for="image in page.images" :key="image.id">
          <nuxt-img class="img" :src="image.url" :alt="image.alt" />
      </div>
    </div>
</template>

<script>
  export default {
    async asyncData({ route, $kirby }) {
      const { json: page } = await $kirby.find({
        "query": "page('"+ route.path +"')",
          "select": {
            "title": true,
            "contenttext": true,
            "referenceimages": true,
            "images": {
              "query": 'page.files',
              "select": {
                  "name": true,
                  "url": true,
                  "alt": true
              }
            }
          }
      })
      return { page }
    } 
  }
</script>

<style lang="scss" scoped>
    @use "Refslug";
</style>