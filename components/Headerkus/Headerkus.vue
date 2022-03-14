<template>
<div class="header__wrapper">
  <div class="header">
    <nuxt-link class="logo__link" to="/kesslerundsohne">
        <img class="header__links--logo" src="/kus_logo.svg" alt="Logo Kessler und Söhne">
    </nuxt-link>
    <nuxt-link class="logo__link" to="/">
        <img class="header__links--valenton" src="/logo.svg" alt="Logo Valenton">
    </nuxt-link>
  </div>
</div>
</template>

<script>

export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
    @use "Headerkus";
</style>