<template>
    <div class="accordion__wrapper">
        <h3>{{ info.installationentitle }}</h3>
        <div v-for="element in data" :key="element.id">
            <Accordion>
             <template v-slot:title>
                <h3 class="title"> {{ element.title }} </h3>
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
</template>

<script>
export default {
    name: 'Installation',

    data() {
        return {
            data: [],
            info: []
        }
    },
    async fetch() {
        const { json: data } = await this.$kirby.find({
            "query": "page('installation').children",
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
            "query": "page('installation')",
            "select": {
                "installationentitle": true,
                "installationentext": true
            }
        })
        this.info = info
    },
}
</script>

<style lang="scss" scoped>
    @use "Installation";
</style>