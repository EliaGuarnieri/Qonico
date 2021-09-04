<template>
  <svg viewBox="0 0 200 200">
    <defs>
      <radialGradient :id="`gradient${id}`">
        <stop
          v-for="(stop, index) in stops"
          :key="index"
          :offset="stop.offset"
          :stop-color="stop.color"
          :stop-opacity="stop.opacity"
        />
      </radialGradient>
    </defs>
    <path
      ref="path"
      d=""
      :fill="`url('#gradient${id}')`"
    />
  </svg>
</template>

<script>
import { spline } from '@georgedoescode/spline'
import SimplexNoise from 'simplex-noise'

export default {
  props: {
    id: {
      type: Number,
      required: true
    },
    stops: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    points: createPoints(),
    noiseStep: 0.001,
    d: '',
    idAnimation: null
  }),
  mounted () {
    this.startAnimation()
  },
  beforeDestroy () {
    this.stopAnimation()
  },
  methods: {
    startAnimation () {
      this.idAnimation = requestAnimationFrame(this.animate)
    },
    stopAnimation () {
      cancelAnimationFrame(this.idAnimation)
    },
    animate () {
      this.$refs.path.setAttribute('d', spline(this.points, 1, true))
      this.idAnimation = requestAnimationFrame(this.animate)

      for (let i = 0; i < this.points.length; i++) {
        const point = this.points[i]

        // return a pseudo random value between -1 / 1 based on this point's current x, y positions in "time"
        const nX = noise(point.noiseOffsetX, point.noiseOffsetX)
        const nY = noise(point.noiseOffsetY, point.noiseOffsetY)
        // map this noise value to a new value, somewhere between it's original location -20 and it's original location + 20
        const x = map(nX, -1, 1, point.originX - 20, point.originX + 20)
        const y = map(nY, -1, 1, point.originY - 20, point.originY + 20)

        // update the point's current coordinates
        point.x = x
        point.y = y

        // progress the point's x, y values through "time"
        point.noiseOffsetX += this.noiseStep
        point.noiseOffsetY += this.noiseStep
      }
    }
  }
}

const createPoints = () => {
  const points = []
  // how many points do we need
  const numPoints = 6
  // used to equally space each point around the circle
  const angleStep = (Math.PI * 2) / numPoints
  // the radius of the circle
  const rad = 75

  for (let i = 1; i <= numPoints; i++) {
    // x & y coordinates of the current point
    const theta = i * angleStep

    const x = 100 + Math.cos(theta) * rad
    const y = 100 + Math.sin(theta) * rad

    // store the point
    points.push({
      x,
      y,
      /* we need to keep a reference to the point's original {x, y} coordinates
      for when we modulate the values later */
      originX: x,
      originY: y,
      // more on this in a moment!
      noiseOffsetX: Math.random() * 1000,
      noiseOffsetY: Math.random() * 1000
    })
  }

  return points
}
const simplex = new SimplexNoise()
const noise = (x, y) => simplex.noise2D(x, y)
const map = (n, start1, end1, start2, end2) => ((n - start1) / (end1 - start1)) * (end2 - start2) + start2
</script>

<style lang="scss" scoped>
</style>
