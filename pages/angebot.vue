<template>
  <main>
    <div class="image__hero">
        <div v-for="image in page.heroimages" :key="image">
              <nuxt-img class="gallery_wrapper__image" :src="image.url" />
        </div>
    </div>
    <div class="site__title">
        <h1 class="site__title--text">{{ page.title }}</h1>
    </div>
    <div class="wrapper"> 
      <Planung />
      <Installation />
    </div>
  </main>
</template>


<script>
import metaTags from "../mixins/metaTags";

export default {
  mixins: [metaTags],
  
  async asyncData({ app, $kirby }) {
    const { json: page } = await $kirby.find({
      "query": "page('angebot')"
    })
    return { page }
  } 
}
</script>

<style lang="scss" scoped>
   @use "Sites"; 
</style>
