<template>
  <div>
    <div class="site__title">
        <h1 class="site__title--text">{{ page.title }}</h1>
    </div>
    <div class="wrapper">
      <h3>{{ page.content.contenttitle }}</h3>
      <div v-html="page.content.contacttext"></div>
      <a class="text text__big" href="mailto:hello@alles-negativ-fake.ch">{{ page.content.contactmail }}</a>
      <a class="text text__big" href="tel:+4733378901">{{ page.content.contacttel }}</a>
    </div>
  </div>
</template>

<script>
import metaTags from "../mixins/metaTags";

export default {
  layout: 'nofooter',
  mixins: [metaTags],
  
  async asyncData({ app, $kirby }) {
    const { json: page } = await $kirby.find({
      "query": "page('kontakt')"
    })
    return { page }
  }
}
</script>

<style lang="scss" scoped>
   @use "Sites"; 
</style>