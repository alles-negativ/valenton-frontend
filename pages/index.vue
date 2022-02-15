<template>
  <div>
    <div class="intro"> 
        <h2>{{ page.content.contenttitle }}</h2>
        <div class="text__home" v-html="page.content.contenttext"></div>
    </div> 
    <div class="site__title" id="home">
        <h1 class="site__title--text">Firma</h1>
    </div>
    <div class="wrapper"> 
      <People />
    </div>
  </div>  
</template>


<script>
import metaTags from "../mixins/metaTags";

export default {
  mixins: [metaTags],
  
  async asyncData({ app, $kirby }) {
    const { json: page } = await $kirby.find({
      "query": "page('home')"
    })
    return { page }
  } 
}
</script>

<style lang="scss" scoped>
   @use "Sites"; 
</style>