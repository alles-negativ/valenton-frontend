<template>
    <div class="intro">
        <h2>{{ herohome.contenttitle }}</h2>
        <div class="intro__text" v-html="herohome.contenttext"></div>
        <div class="intro__hero" v-for="image in herohome.images" :key="image.key">
              <nuxt-img class="gallery_wrapper__image" :src="image.url" :alt="image.alt" />
        </div>
    </div>  
</template>

<script>
export default {
    name: 'Hero',

    data() {
        return {
            herohome: [],
        }
    },
    async fetch() {
        const { json: data } = await this.$kirby.find({
            "query": "page('home')",
            "select": {
                "contenttitle": true,
                "contenttext": true,
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
        this.herohome = data
    }
}
</script>

<style lang="scss" scoped>
    @use "Herohome";
</style>