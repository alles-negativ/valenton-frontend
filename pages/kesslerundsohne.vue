<template>
  <div>
    <Herokus />
    <div class="wrapper__ref">
      <div class="site__title" id="home">
          <h1 class="site__title--text">Kessler und Söhne</h1>
      </div>
      <div class="wrapper"> 
        <Kuspost />
      </div>
    </div>    
  </div>  
</template>


<script>
import metaTags from "../mixins/metaTags";

export default {
  layout: 'kus',
  mixins: [metaTags],
  
  async asyncData({ app, $kirby }) {
    const { json: page } = await $kirby.find({
      "query": "page('kesslerundsohne')"
    })
    return { page }
  },
}
</script>