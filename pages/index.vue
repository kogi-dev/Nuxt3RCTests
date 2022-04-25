<template>
  <div class="flex flex-col w-full justify-evenly">
    <div>Hello, {{ hello || 'pending' }}</div>
  </div>
</template>

<script lang="ts">
export default {
  async setup() {
    const { data: hello } = await useAsyncData('hello', () =>
      $fetch('/api/hello', {
        params: { name: 'Gregor' }
      })
    )

    return {
      hello
    }
  }
}
</script>

<style lang="postcss" scoped>
.flex.child > * {
  @apply w-1/2;
}
</style>




