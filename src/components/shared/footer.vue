<template>
  <v-footer color="accent" dark>
    <v-container fluid grid-list-md text-center>
      <v-layout wrap>
        <v-flex xs12>
          <h4 class="display-1 text-xs-center">
            Contact us
          </h4>
        </v-flex>
        <v-flex xs12>
          <v-layout wrap>
            <v-flex xs12 md2 offset-md3>
              <v-icon>mdi-phone</v-icon> 647-554-6883
            </v-flex>
            <v-flex xs12 md2>
              <v-icon>mdi-email</v-icon> info@cubicalconsulting.com
            </v-flex>
            <v-flex xs12 md2>
              <v-icon>mdi-map-marker</v-icon> Toronto,ON
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>

    <v-flex xs12 class="mt-10 text-center">
      &copy;  {{ new Date().getFullYear() }}  <strong>cubicalconsulting.com</strong>
    </v-flex>
  </v-footer>
</template>
