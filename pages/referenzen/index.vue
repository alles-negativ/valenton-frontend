<template>
  <main id="content">
    <div class="grid">
      <Referenzen />
    </div>
  </main>
</template>


<script>
import metaTags from "../../mixins/metaTags";

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