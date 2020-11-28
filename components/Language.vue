<template>
  <div class="button--green">
    <nuxt-link v-if="$i18n.locale === 'fr'" :to="switchLocalePath('en')">
      English
    </nuxt-link>
    <nuxt-link v-else :to="switchLocalePath('fr')">Français</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Language',
}
</script>

<style scoped></style>
