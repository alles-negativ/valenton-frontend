<template>
  <footer>
    <div class="container">
      <div class="contact">
          <div class="text__small" v-html="footer.contacttext"></div>
          <a :href="'mailto:' + footer.contactmail" class="text__small">{{ footer.contactmail }}</a>
          <p class="text__small">{{ footer.contacttel }}</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
    name: 'Footer',

    data() {
        return {
            footer: []
        }
    },
    async fetch() {
        const { json: data } = await this.$kirby.find({
            "query": "page('kontakt')",
            "select": {
                "contacttext": true,
                "contactmail": true,
                "contacttel": true,
            }
        })
        this.footer = data
    }
}
</script>

<style lang="scss" scoped>
  @use "Footer";
</style>