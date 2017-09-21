<template>
  <div class="row">
    <i style="display: block; width: 30%; margin: 0px auto;" v-if="!shouldShow" class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
    <div v-if="shouldShow">
      <div class="float-left">
        <router-link to="/"><i class="fa fa-chevron-left"></i> Back</router-link>
      </div>
      <h2 class="text-center">{{activeLaunch.name}}</h2>
      <br>
      <h4><strong>Mission</strong></h4>
      <div v-for="missions in activeLaunch.missions" :key="missions.id">
        <p class="lead">{{missions.name}}</p>
        <p>
          {{missions.description}}
        </p>
      </div>
      <h4><strong>Rocket</strong></h4>
      <div>
        {{activeLaunch.rocket.name}}
      </div>
      <br>
      <h4><strong>Launch Site</strong></h4>
      <div v-for="site in activeLaunch.location.pads" :key="site.id">
        <p class="lead">{{site.name}}</p>
        <br />
        <iframe width="600" height="450" :src="'https://www.google.com/maps/embed/v1/view?key=AIzaSyBAr0cP-H7noJiTEE8ilwX1O70kWL9KEqE&center=' + site.latitude + ',' + site.longitude + '&zoom=15&maptype=satellite'"></iframe>
      </div>
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
  created () {
    this.$store.dispatch('setActiveLaunch', this.$route.params.id)
  },
  watch: {
    activeLaunch () {
      this.shouldShow = !this.shouldShow
    }
  }
}
</script>

<style scoped lang="scss">
</style>
