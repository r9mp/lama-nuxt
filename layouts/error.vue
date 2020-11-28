<template>
  <div>ERROR !</div>
</template>

<script>
export default {
  layout: 'default',
  props: {
    error: {
      type: Object,
      default() {
        return { statusCode: 500, message: 'An error occurred...' }
      },
    },
  },
}
</script>
