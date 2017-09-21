<template>
  <div class="row">
    <i style="display: block; width: 30%; margin: 0px auto;" v-if="!shouldShow" class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
      <div v-if="shouldShow">
      <h1>TMinus</h1>
      <div v-for="launch in launches" :key="launch.id">
        <router-link :to="{ path: `/launch/${launch.id}` }" class="launch">
          <div class="columns small-12 large-6">
            <div class="callout">
              <h5>{{launch.name}}</h5>
              <p><small>{{launch.net}}</small></p>
            </div>
          </div>
        </router-link>
      </div>
      <router-link v-if="offset > 0" class="button float-left" :to="{ path: `${parseInt(offset) - 10}` }">
        <i class="fa fa-chevron-left"></i> Previous
      </router-link>
      <router-link class="button float-right" :to="{ path: `/${parseInt(offset) + 10}` }">
        Next <i class="fa fa-chevron-right"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'home',
  data () {
    return {
      offset: (this.$route.params.offset) ? this.$route.params.offset : 0,
      shouldShow: false
    }
  },
  computed: {
    ...mapGetters({
      launches: 'getNextLaunches'
    })
  },
  mounted () {
    this.$store.dispatch('setLaunches', {
      count: 10,
      offset: this.$route.params.offset
    })
  },
  watch: {
    '$route' (to, from) {
      this.shouldShow = false
      this.$store.dispatch('setLaunches', {
        count: 10,
        offset: to.params.offset
      })
      .then(result => {
        this.offset = to.params.offset
      })
    },
    launches () {
      this.shouldShow = true
    }
  }
}
</script>

<style scoped lang="scss">
  .callout {
    transition: all .3s ease;
    border: 0px !important;
    box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
    min-height: 121px;
    display: flex;
    justify-content: center;
    flex-direction: column;

    &:hover {
      transform: translateY(-3px);
    }
  }
</style>
