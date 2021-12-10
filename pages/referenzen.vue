<template>
  <main id="content">
    <div class="grid">
      <h1>{{ page.content.contenttitle }}</h1>
      <div v-html="page.content.contenttext"></div>
      <Referenzen />
    </div>
  </main>
</template>


<script>
import metaTags from "../mixins/metaTags";

export default {
  mixins: [metaTags],
  
  async asyncData({ app, $kirby }) {
    const { json: page } = await $kirby.find({
      "query": "page('referenzen')"
    })
    return { page }
  } 
}
</script>
