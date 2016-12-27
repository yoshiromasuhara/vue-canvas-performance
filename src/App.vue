<template>
  <div id="app">
    <h1>Canvas measurement in Vue.js</h1>
    <section>
      <OperationView>
      </OperationView>
    </section>
    <section>
      <CanvasView
        v-for="n in canvasnum"
        :num = n
        track-by="id">
      </CanvasView>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import OperationView from './components/OperationView'
import CanvasView from './components/CanvasView'

export default {
  name: 'app',

  computed: mapState([
    'canvasnum', 'circlenum'
  ]),

  components: {
    OperationView,
    CanvasView
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  h1{
    display: block;
    margin-left: 10px;
  }
}

</style>
