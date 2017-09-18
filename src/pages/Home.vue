<template>
  <div class="row">
    <h1>TMinus</h1>
    <hr />
    <div v-for="launch in launches" :key="launch.id">
      <router-link :to="{ path: `/launch/${launch.id}` }" class="launch">
        <div class="callout">
          {{launch.id}} - {{launch.name}} - {{launch.net}}
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  computed: {
    launches () {
      return this.$store.getters.getNextLaunches
    }
  },
  mounted () {
    this.$store.dispatch('setLaunches')
  }
}
</script>

<style scoped lang="scss">
</style>
