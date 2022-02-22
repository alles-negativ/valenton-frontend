<template>
    <div class="gallery_wrapper">
        <no-ssr>
            <Flickity ref="flickity" :options="flickityOptions">
                <div v-for="image in angebote.images" :key="image.key">
                    <nuxt-img class="gallery_wrapper__image" :src="image.url" :alt="image.alt" />
                </div>
            </Flickity>
        </no-ssr>
    </div>  
</template>

<script>
export default {
    name: 'Hero',

    data() {
        return {
            angebote: [],
            flickityOptions: {
                draggable: false,
                initialIndex: 0,
                prevNextButtons: false,
                arrowShape: {},
                pageDots: false,
                wrapAround: true,
                autoPlay: 3000,
                pauseAutoPlayOnHover: false,
                imagesLoaded: true,
                selectedAttraction: 0.01,
                setGallerySize: false,
            }
        }
    },
    async fetch() {
        const { json: data } = await this.$kirby.find({
            "query": "page('angebot')",
            "select": {
                "heroimages": true,
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
        this.angebote = data
    }
}
</script>

<style lang="scss" scoped>
    @use "Hero";
</style>