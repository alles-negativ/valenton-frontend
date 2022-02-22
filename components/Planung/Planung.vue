<template>
    <div class="accordion__wrapper">
        <h3 class="main__title">{{ info.planungtitle }}</h3>
        <div class="accordion__grid">
            <div class="accordion__holder" v-for="element in data" :key="element.id">
                <Accordion>
                <template v-slot:title>
                    <p class="title text__big"> {{ element.title }} </p>
                </template>
                <template v-slot:body>
                    <div class="text__big" slot="introtext" v-html="element.introtext"></div>
                    <!-- <div class="text" slot="contenttext" v-html="element.contenttext"></div> -->
                    <!-- <div class="image" slot="image">
                        <nuxt-img class="image image__img" :src="element.images[0].url" :alt="element.images[0].alt" />
                    </div> -->
                </template>
            </Accordion>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Planung',

    data() {
        return {
            data: [],
            info: []
        }
    },
    async fetch() {
        const { json: data } = await this.$kirby.find({
            "query": "page('planung').children",
            "select": {
                "title": true,
                "introtext": true,
                "contenttext": true,
                "contentimage": true,
                "images": {
                    "query": "page.files",
                    "select": {
                        "name": true,
                        "url": true,
                        "alt": true
                    }
                }
            }
        })
        this.data = data

        const { json: info } = await this.$kirby.find({
            "query": "page('planung')",
            "select": {
                "planungtitle": true,
                "planungtext": true
            }
        })
        this.info = info
    },
}
</script>

<style lang="scss" scoped>
    @use "Planung";
</style>