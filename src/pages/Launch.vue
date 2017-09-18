<template>
  <div class="row">
    <i v-if="!shouldShow" class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
    <div v-if="shouldShow">
      <div class="float-left">
        <router-link to="/"><i class="fa fa-chevron-left"></i> Back</router-link>
      </div>
      <h2>Launch</h2>
      <br>
      {{activeLaunch}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      shouldShow: false
    }
  },
  computed: {
    activeLaunch () {
      return this.$store.getters.getActiveLaunch
    }
  },
  mounted () {
    this.$store.dispatch('setActiveLaunch', this.$route.params.id)

    setTimeout(() => {
      this.shouldShow = !this.shouldShow
    }, 500)
  }
}
</script>

<style scoped lang="scss">
</style>
