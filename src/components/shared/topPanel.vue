<template>
  <div>
    <v-app-bar>
      <v-toolbar-title>
        <router-link to="/">
          <img class="imglogo" :src="require('@/assets/CubicalLogoHorizontal.png')">
        </router-link>
      </v-toolbar-title>
      <div class="flex-grow-1" />
      <div class="hidden-sm-and-down">
        <v-btn v-for="(route,index) in routes" :key="index" text :to="route.path">
          {{ $t(`shared.topPanel.nav.${route.name}`) }}
        </v-btn>
      </div>
      <v-app-bar-nav-icon class="hidden-md-and-up" @click.native.stop="drawer = !drawer" />
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" fixed right temporary>
      <v-list dense nav>
        <v-list-item v-for="(route,index) in routes" :key="index" link :to="route.path">
          <v-list-item-content>
            <v-list-item-title>{{ $t(`shared.topPanel.nav.${route.name}`) }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      routes: [
        { name: 'home', path: '/' },
        { name: 'about', path: '/about' },
        { name: 'services', path: '/services' },
        { name: 'blog', path: '/blog' },
        { name: 'contact', path: '/contact' }
      ]
    }
  }
}
</script>

<style>
.imglogo {
  margin-top: 15px;
  width: 170px;
}
</style>
