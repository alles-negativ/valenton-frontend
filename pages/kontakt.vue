<template>
  <div>
    <div class="wrapper__ref">
      <div class="site__title">
          <h1 class="site__title--text">{{ page.title }}</h1>
      </div>
      <div class="wrapper"> 
        <Map />
      </div>  
    </div>
  </div>  
</template>

<script>
import metaTags from "../mixins/metaTags";

export default {
  layout: 'nofooter',
  mixins: [metaTags],
  
  async asyncData({ app, $kirby }) {
    const { json: page } = await $kirby.find({
      "query": "page('kontakt')"
    })
    return { page }
  }
}
</script>

<style lang="scss" scoped>
   @use "Sites"; 
</style>