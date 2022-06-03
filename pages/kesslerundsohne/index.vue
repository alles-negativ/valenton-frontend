<template>
  <main id="content">
       <div>
        <Herokus />
            <div class="wrapper__ref">
            <div class="site__title" id="home">
                <h1 class="site__title--text">Kessler und Söhne</h1>
            </div>
                <Kuspost />
            </div>    
        </div>  
      <Kesslerundsohne />
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