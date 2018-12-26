<template>
  <div>
    <v-content>
      <section>
        <v-layout align-center justify-center class="white black--text">
          <div class="head">
            <img class="logo" src="@/assets/cubicalLogo.png" alt="Vuetify.js">
            <h1 class="slogan">Consultoría de negocios especializada</h1>
          </div>
          <canvas id="canvas"></canvas>
        </v-layout>
      </section>
      <hr class="pink darken-4">
      <section>
        <v-layout column wrap class="my-5 align-center">
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="display-1">Servicios</h2>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap>
                <v-flex xs12 md6>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="pink--text text--darken-4">360</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Planificación financiera 360</div>
                    </v-card-title>
                    <v-card-text>Planificación integral y personalizada a las necesidades de tu empresa. En Cubical estudiamos tu modelo de negocios para entender los indicadores que impactan el crecimiento y asegurar una planificación certera pero retadora. También diseñamos procesos de seguimiento a metas y procuramos el envolvimiento de todas las áreas de la empresa para garantizar los resultados financieros proyectados.</v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md6>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="pink--text text--darken-4">build</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Optimización de procesos y controles financieros</div>
                    </v-card-title>
                    <v-card-text>Levantamiento y optimización de los procesos administrativos de tu empresa procurando que existan todos los controles necesarios para que pueda operar de forma robusta sin seguimiento excesivo de la gerencia.</v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md6>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="pink--text text--darken-4">search</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Análisis de estados e indicadores financieros</div>
                    </v-card-title>
                    <v-card-text>Interpretación de resultados, flujo de efectivo, balance general e indicadores financieros de forma sencilla. resaltando posibles riesgos futuros y acompañando al equipo de dirección en la toma de decisiones estratégicas que usualmente se derivan de los análisis financieros holísticos.</v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md6>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="pink--text text--darken-4">create</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div
                        class="headline"
                      >Diseño de tableros de seguimiento (definición y seguimiento de KPIs)</div>
                    </v-card-title>
                    <v-card-text>Confección de herramientas de control que permitan a la gerencia la toma de decisiones acertadas y oportunas usando indicadores de desempeño.</v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md6>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="pink--text text--darken-4">school</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Entrenamientos</div>
                    </v-card-title>
                    <v-card-text>Entrenamientos especializados para asegurar el apego a las políticas de la empresa. Algunos entrenamientos son: control de activos fijos, medidas de seguridad antifraude y planificación.</v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-parallax :src="require('@/assets/section.jpg')" height="380">
          <v-layout column align-center justify-center>
            <div
              class="display-1 white--text mb-3 text-xs-center"
            >Nuestra misión es convertir tu información en decisiones estratégicas de negocio.</div>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-layout class="my-5">
          <v-flex xs12>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center mb-4">
                <h2 class="display-1">Contacto</h2>
              </v-card-title>

              <v-card-text>
                <v-layout row wrap class="text-xs-center">
                  <v-flex xs12 md2 offset-md3>
                    <v-icon class="pink--text text--darken-4">phone</v-icon> (849)-220-6883
                  </v-flex>
                  <v-flex xs12 md2>
                    <v-icon class="pink--text text--darken-4">email</v-icon> info@cubicalconsulting.com
                  </v-flex>
                  <v-flex xs12 md2>
                    <v-icon class="pink--text text--darken-4">place</v-icon> Santo Domingo, D.R.
                  </v-flex>
                </v-layout>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </section>

      <v-footer class="pink darken-4">
        <v-layout row wrap align-center>
          <v-flex xs12>
            <div class="white--text ml-3">
              <div>© {{year}} cubicalconsulting.com</div>
            </div>
          </v-flex>
        </v-layout>
      </v-footer>
    </v-content>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      year: (new Date()).getFullYear()
    }
  },
  mounted () {
    let canvas = document.getElementById('canvas')
    let ctx = canvas.getContext('2d')

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let stars = [] // Array that contains the stars
    let FPS = 25 // Frames per second
    let width = window.innerWidth
    let x = width < 600 ? 50 : 150 // Number of stars based on screen width

    let mouse = {
      x: 0,
      y: 0
    } // mouse location

    // Push stars to array

    for (let i = 0; i < x; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1 + 1,
        vx: Math.floor(Math.random() * 50) - 25,
        vy: Math.floor(Math.random() * 50) - 25
      })
    }

    // Draw the scene

    function draw () {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      ctx.globalCompositeOperation = 'lighter'

      for (let i = 0, x = stars.length; i < x; i++) {
        let s = stars[i]

        ctx.fillStyle = '#880E4F'
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI)
        ctx.fill()
        ctx.fillStyle = '#880E4F'
        ctx.stroke()
      }

      ctx.beginPath()
      for (let i = 0, x = stars.length; i < x; i++) {
        let starI = stars[i]
        ctx.moveTo(starI.x, starI.y)
        if (distance(mouse, starI) < 150) ctx.lineTo(mouse.x, mouse.y)
        for (let j = 0, x = stars.length; j < x; j++) {
          let starII = stars[j]
          if (distance(starI, starII) < 150) {
            // ctx.globalAlpha = (1 / 150 * distance(starI, starII).toFixed(1));
            ctx.lineTo(starII.x, starII.y)
          }
        }
      }
      ctx.lineWidth = 0.08
      ctx.strokeStyle = '#880E4F'
      ctx.stroke()
    }

    function distance (point1, point2) {
      let xs = 0
      let ys = 0

      xs = point2.x - point1.x
      xs = xs * xs

      ys = point2.y - point1.y
      ys = ys * ys

      return Math.sqrt(xs + ys)
    }

    // Update star locations

    function update () {
      for (let i = 0, x = stars.length; i < x; i++) {
        let s = stars[i]

        s.x += s.vx / FPS
        s.y += s.vy / FPS

        if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx
        if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy
      }
    }

    canvas.addEventListener('mousemove', function (e) {
      mouse.x = e.clientX
      mouse.y = e.clientY
    })

    // Update and draw

    function tick () {
      draw()
      update()
      requestAnimationFrame(tick)
    }

    tick()
  }
}
</script>

<style scoped>
.logo {
  height: 250px;
}
canvas {
  background: white;
  height: 600px !important;
  width: 100%;
}
.head {
  position: absolute;
  text-align: center;
  top: 100px;
}
.slogan {
  font-size: 44px;
  color: gray;
}
@media only screen and (max-width: 600px) {
  canvas {
    height: 400px !important;
  }
  .head {
    top: 80px;
  }
  .logo {
    height: 150px;
  }
  .slogan {
    font-size: 20px;
  }
}
</style>
