<template>
    <div class="accordion__wrapper">
        <h3>{{ data.raumtitel }}</h3>
        <div v-html="data.raumtext"></div>
        <div v-if="data.raumimage" class="image">
            <nuxt-img class="image image__img" :src="data.images[0].url" :alt="data.images[0].alt" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'Rooms',

    data() {
        return {
            data: []
        }
    },
    async fetch() {
        const { json: data } = await this.$kirby.find({
            "query": "page('home')",
            "select": {
                "raumtitel": true,
                "raumtext": true,
                "raumimage": true,
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
    },
}
</script>

<style lang="scss" scoped>
    @use "Rooms";
</style>