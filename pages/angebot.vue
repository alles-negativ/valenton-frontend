<template>
  <main>
    <Hero />
    <div class="wrapper__ref">
      <div class="site__title">
          <h1 class="site__title--text">{{ page.title }}</h1>
      </div>  
      <div class="wrapper"> 
        <Anlistung />
      </div>
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
