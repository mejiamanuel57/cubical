<template>
  <v-footer color="accent" dark>
    <v-container fluid grid-list-md text-center>
      <v-row no-gutters>
        <v-col cols="12">
          <h4 class="display-1 text-xs-center">
            Contact us
          </h4>
        </v-col>
        <v-col cols="12">
          <v-row no-gutters>
            <v-flex xs12 md2 offset-md3>
              <v-icon>mdi-phone</v-icon> 647-554-6883
            </v-flex>
            <v-flex xs12 md2>
              <v-icon>mdi-email</v-icon> info@cubicalconsulting.com
            </v-flex>
            <v-flex xs12 md2>
              <v-icon>mdi-map-marker</v-icon> Toronto,ON
            </v-flex>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <v-col cols="12" class="mt-10 text-center">
      &copy;  {{ new Date().getFullYear() }}  <strong>cubicalconsulting.com</strong>
    </v-col>
  </v-footer>
</template>
