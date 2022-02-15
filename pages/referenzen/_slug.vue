<template>
  <div>
    <div class="gallery_wrapper">
        <Flickity ref="flickity" :options="flickityOptions">
          <div v-for="(image, index) in page.images" :key="index">
              <nuxt-img class="gallery_wrapper__image" :src="image.url" :alt="image.alt" />
          </div>
        </Flickity>
    </div>    
      <h1>{{page.title}}</h1>
      <h1>{{page.contenttext}}</h1>
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