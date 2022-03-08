<template>
  <div>
    <div class="gallery_wrapper">
      <no-ssr>
        <Flickity ref="flickity" :options="flickityOptions">
          <div v-for="(image, index) in page.images" :key="index">
              <nuxt-img class="gallery_wrapper__image" :src="image.url" :alt="image.alt" />
          </div>
        </Flickity>
      </no-ssr>
    </div>
    <div class="wrapper__ref">
        <div class="site__title">
            <h1 class="site__title--text">Referenzen</h1>
        </div>  
      <div class="wrapper">
          <h1>{{page.title}}</h1>
          <div class="container"> 
            <div class="text__ref" v-html="page.contenttext"></div>
            <div class="container__info">
              <span>Kunde</span>
              <div class="text__big" v-html="page.clienttext"></div>
              <span>Jahr</span>
              <div class="text__big" v-html="page.yeartext"></div>
              <span>Kategorie</span>
              <div class="text__big" v-html="page.category"></div>
            </div>
        </div>
      </div>  
    </div>
  </div>
</template>

<script>
  export default {

    data() {
        return {
          flickityOptions: {
            initialIndex: 1,
            prevNextButtons: false,
            arrowShape: {},
            pageDots: false,
            wrapAround: true,
            autoPlay: 3000,
            pauseAutoPlayOnHover: false,
            imagesLoaded: true,
            selectedAttraction: 0.01,
          }
        }
    },

    async asyncData({ route, $kirby }) {
      const { json: page } = await $kirby.find({
        "query": "page('"+ route.path +"')",
          "select": {
            "title": true,
            "contenttext": true,
            "clienttext": true,
            "yeartext": true,
            "category": true,
            "referenceimages": true,
            "images": {
              "query": 'page.files',
              "select": {
                  "name": true,
                  "url": true,
                  "alt": true
              }
            }
          }
      })
      return { page }
    } 
  }
</script>

<style lang="scss" scoped>
    @use "Refslug";
</style>