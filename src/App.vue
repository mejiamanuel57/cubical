<template>
  <v-app>
    <TopPanel />
    <v-content>
      <router-view />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import TopPanel from './components/shared/topPanel'
import Footer from './components/shared/footer'

export default {
  name: 'App',
  components: {
    TopPanel,
    Footer
  },
  data: () => ({
    //
  })
}
</script>
