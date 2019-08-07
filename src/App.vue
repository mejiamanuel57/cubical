<template>
  <v-app>
    <v-content>
      <Home />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Home from './components/Home';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Home,
    Footer
  },
  data: () => ({
    //
  }),
};
</script>
