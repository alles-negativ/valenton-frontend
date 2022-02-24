<template>
  <main id="content">
      <Referenzen />
  </main>
</template>


<script>
import metaTags from "../../mixins/metaTags";

export default {
  mixins: [metaTags],
  scrollToTop: true,
  
  async asyncData({ app, $kirby }) {
    const { json: page } = await $kirby.find({
      "query": "page('referenzen')"
    })
    return { page }
  } 
}
</script>