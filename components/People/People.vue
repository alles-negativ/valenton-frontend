<template>
    <div class="container">
        <ul class="container__columns">
            <li v-for="article in articles" :key="article.id" class="content">
                <nuxt-img :src="article.images[0].url" :alt="article.images[0].alt" />
                <div class="content__info">
                    <h3 class="title">{{ article.title }}</h3>
                    <div class="text" v-html="article.contenttext"></div>
                    <a class="text mail" :href="`mailto:` + article.contactmail">{{ article.contactmail }}</a>
                </div>
            </li>
        </ul>
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
                "contactmail": true,
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