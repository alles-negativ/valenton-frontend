<template>
    <div class="container">
        <ul class="container__columns">
            <li v-for="reference in references" :key="reference.id" class="content">
                <nuxt-link :to="$route.path + '/' + reference.slug">
                    <nuxt-img :src="reference.images[0].url" :alt="reference.images[0].alt" />
                    <h3>{{ reference.title }}</h3>
                    <div class="text__big" v-html="reference.introtext"></div>
                    <div class="text" v-html="reference.contenttext"></div>
                </nuxt-link>
            </li>
        </ul>
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
            "query": "page('referenzen').children",
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
    @use "Referenzen";
</style>