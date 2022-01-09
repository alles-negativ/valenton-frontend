<template>
    <div>
      <flickity ref="flickity" :options="flickityOptions">
        <div v-for="image in page.images" :key="image.id">
            <nuxt-img class="carousel__image" :src="image.url" :alt="image.alt" />
        </div>
      </flickity>
      <!-- <div class="carousel">
        <div v-for="image in page.images" :key="image.id">
            <nuxt-img class="carousel__image" :src="image.url" :alt="image.alt" />
        </div>
      </div>   -->
      <h1>{{page.title}}</h1>
      <h1>{{page.contenttext}}</h1>
    </div>
</template>

<script>
  export default {

    data() {
        return {
          flickityOptions: {
          initialIndex: 3,
          prevNextButtons: false,
          pageDots: false,
          wrapAround: true,
          autoPlay: 2000,
          pauseAutoPlayOnHover: false,
          selectedAttraction: 0.01
          
          // any options from Flickity can be used
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