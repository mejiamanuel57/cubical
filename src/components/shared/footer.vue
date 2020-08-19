<template>
  <v-footer color="accent" dark>
    <v-container fluid text-center>
      <v-row no-gutters>
        <v-col cols="12">
          <h4 class="display-1 text-xs-center">
            Contact us
          </h4>
        </v-col>
        <v-col cols="12">
          <v-row justify="center" align="center">
            <v-col cols="12">
              <v-icon>mdi-phone</v-icon> CA: 647-554-6883 | DO: 809-968-9410
            </v-col>
            <v-col cols="12">
              <v-icon>mdi-email</v-icon> info@cubicalconsulting.com
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" class="mt-10 text-center">
          &copy;  {{ new Date().getFullYear() }}  <strong>cubicalconsulting.com</strong>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>
