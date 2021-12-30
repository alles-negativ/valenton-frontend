<template>
  <main id="content">
    <div class="intro"> 
      <h2>{{ page.content.contenttitle }}</h2>
      <div class="text__home" v-html="page.content.contenttext"></div>
    </div>  
    <People />
    <Rooms />
  </main>
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
