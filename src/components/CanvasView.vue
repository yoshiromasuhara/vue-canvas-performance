<template>
  <canvas v-bind:id="'cvs_'+_uid" class="cls"></canvas>
</template>

<script>
// import Vue from 'vue'
import { mapState } from 'vuex'
export default {
  name: 'CanvasView',

  mounted () {
    this.drawCanvas()
  },
  computed: mapState([
    'circlenum', 'startdraw'
  ]),

  watch: {
    startdraw () {
      this.drawCanvas()
    }
  },
  methods: {
    drawCanvas () {
      let maxWidth = document.documentElement.clientWidth
      let maxHeight = document.documentElement.clientHeight
      let cvs = document.getElementById('cvs_' + this._uid)
      cvs.width = maxWidth
      cvs.height = maxHeight
      let ctx = cvs.getContext('2d')
      let rgba = 'rgba(' + Math.floor(Math.random() * 200) + ', ' + Math.floor(Math.random() * 200) + ', ' + Math.floor(Math.random() * 200) + ', 0.9)'

      let animation = () => {
        ctx.clearRect(0, 0, maxWidth, maxHeight)

        for (var i = 0; i < this.$store.state.circlenum; i++) {
          let l = Math.floor(Math.random() * maxWidth)
          let t = Math.floor(Math.random() * maxHeight)
          ctx.beginPath()
          ctx.arc(l, t, 10, 0, 2 * Math.PI)
          ctx.fillStyle = rgba
          ctx.fill()
          ctx.closePath()
        }

        if (this.$store.state.startdraw) {
          window.requestAnimationFrame(animation)
        }
      }

      animation()
    }
  }

}
</script>

<style lang="scss">
.cls {
  z-index: -1;
  position: absolute;
  top: 0px;
  left: 0px;
}
</style>
