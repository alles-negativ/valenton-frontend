<template>
    <div>
        <div class="wrapper"> 
            <div class="container">
                <div v-for="reference in references" :key="reference.id">
                    <nuxt-link class="content" :to="$route.path + '/' + reference.slug">
                        <div class="content__info">
                            <div class="content__info--text">
                                <h3>{{ reference.title }}</h3>
                            </div> 
                        </div>
                        <nuxt-img class="content__image" :src="reference.images[0].url" :alt="reference.images[0].alt" />
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
    name: 'Referenzen',

    data() {
        return {
            references: []
        }
    },
    async fetch() {
        const { json: data } = await this.$kirby.find({
            "query": "page('kesslerundsohne').children",
            "select": {
                "title": true,
                "introtext": true,
                "contenttext": true,
                "slug": true,
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
        this.references = data
    }
}
</script>

<style lang="scss" scoped>
    @use "Kuspost";
</style>