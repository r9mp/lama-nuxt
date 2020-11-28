<template>
  <div>
    <div>
      <Logo />
      <h1 class="title">{{ $t('dashboard.title') }}</h1>
      <h2 class="subtitle">
        <NuxtLink :to="localePath('index')">Dashboard</NuxtLink>
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  middleware: ['auth'],
}
</script>
