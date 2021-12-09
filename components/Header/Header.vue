<template>
<div class="header__wrapper">
  <div class="header">
    <nuxt-link :to="('/')">
        <h1>LOGO</h1>
    </nuxt-link>  
  </div>
</div>
</template>

<script>
import linkClickRouting from "../../mixins/linkClickRouting";

export default {
  name: 'Header',

  mixins: [linkClickRouting],

  data() {
    return {
      header: [],
    }
  },
  async fetch() {
    const { json: data } = await this.$kirby.find({
        "query": "page('" + this.slug + "')",
          "select": {
              "title": true
            }
    })
    this.header = data
  },
  computed: {
    slug() {
      const path = this.$route.name
      if (path.slice(0, path.length - 5) == "index") {
        return "home"
      } else {
        return path.slice(0, path.length - 5)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
    @use "Header";
</style>