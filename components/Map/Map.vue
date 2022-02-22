<template>
    <div class="wrapper">
      <div class="address">
        <a class="text text__big" href="mailto:hello@alles-negativ-fake.ch"><h3>{{ contact.contactmail }}</h3></a>
        <a class="text text__big" href="tel:+4733378901"><h3>{{ contact.contacttel }}</h3></a>
        <div v-html="contact.contacttext"></div>
      </div>
      <div class="map" v-html="contact.mapframe"></div>
    </div>
</template>

<script>
export default {
    name: 'Map',

    data() {
        return {
            contact: []
        }
    },
    async fetch() {
        const { json: data } = await this.$kirby.find({
            "query": "page('kontakt')"
        }, 'de')
        this.contact = data.content
    }
}
</script>

<style lang="scss" scoped>
  @use "Map";
</style>