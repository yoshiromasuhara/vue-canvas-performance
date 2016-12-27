<template>
  <form class="form-inline" >
    <div class="form-group">
      <label for="canvasnum">Canvas Num</label>
      <select v-model="my_canvasnum">
        <option v-for="n in 30">{{n}}</option>
      </select>
    </div>

    <div class="form-group">
      <label for="circlenum">Circle Num</label>
      <select v-model="my_circlenum">
        <option v-for="n in 20">{{n*n*n}}</option>
      </select>
    </div>
    <button class="btn btn-primary" @click.prevent="changeState()" >change status</button>
    <button class="btn " v-bind:class="toggleClass()" @click.prevent="drawToggle()" >{{showToggleLabel()}}</button>
  </form>
</template>

<script>
import { mapState } from 'vuex'
export default {

  name: 'OperationView',

  data () {
    return {
      my_canvasnum: this.$store.state.canvasnum,
      my_circlenum: this.$store.state.circlenum
    }
  },

  computed: mapState([
    'canvasnum', 'circlenum', 'startdraw'
  ]),

  methods: {
    changeState (e) {
      this.$store.dispatch(
        'changeState', {
          canvas: this.$data.my_canvasnum,
          circle: this.$data.my_circlenum
        }
      )
    },
    toggleClass () {
      return (this.$store.state.startdraw) ? 'btn-danger' : 'btn-primary'
    },
    showToggleLabel () {
      return (this.$store.state.startdraw) ? 'Stop' : 'Start'
    },
    drawToggle (e) {
      this.$store.dispatch(
        'drawToggle', !(this.$store.state.startdraw)
      )
    }
  }
}
</script>

<style lang="scss">
form{
  margin-left: 10px;
}
</style>
