<template>
    <div v-if="data != null">
        <div class="container" v-for="element in JSON.parse(data.content.inhalt)" :key="element.id">
            <h1 class="acc__title" v-if="element.type == 'heading'"> {{ element.content.text }}</h1>
            <Accordion v-if="element.type == 'accordion'">
                <template v-slot:title>
                    <p class="text"> {{ element.content.title }} </p>
                </template>
                <template v-slot:body>
                    <div class="text" slot="contenttext" v-html="element.content.text"></div>
                </template>
            </Accordion>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: null,
        }
    },
    async fetch() {
        const { json: data } = await this.$kirby.find({
            "query": "page('angebot')",
        }, 'de')
        this.data = data
    }
}
</script>

<style lang="scss" scoped>
    @use "Anlistung";
</style>