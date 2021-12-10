<template>
<div class="header__wrapper">
  <div class="header">
    <nuxt-link to="/">
        <img class="header__links--logo" src="/logo.svg" alt="Logo Valenton">
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
    @use "Header";
</style>