<template>
    <div class="container"> 
        <div v-for="article in articles" :key="article.id" class="content">
            <h3 class="title">{{ article.title }}</h3>
            <nuxt-img :src="article.images[0].url" :alt="article.images[0].alt" />
            <div class="content__info">
                <div class="intro text__big" v-html="article.introtext"></div>
                <div class="text" v-html="article.contenttext"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'People',

    data() {
        return {
            articles: [],
        }
    },

    async fetch() {
        const { json: data } = await this.$kirby.find({
            "query": "page('home').children",
            "select": {
                "title": true,
                "date": true,
                "introtext": true,
                "contenttext": true,
                "contentimage": true,
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
        this.articles = data
    }
}
</script>

<style lang="scss" scoped>
    @use "People";
</style>