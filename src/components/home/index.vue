<template>
  <div>
    <v-layout wrap text-center>
      <v-flex xs12>
        <v-parallax :src="require('@/assets/section.jpg')" height="580">
          <v-container>
            <h2 class="display-3 mb-3">
              <b>
                {{ $t('home.heading') }}
              </b>
            </h2>
            <h3 class="display-1 mb-3">
              {{ $t('home.subheading') }}
            </h3>
            <v-btn color="secondary" large to="/contact">
              {{ $t('shared.scheduleAMeeting') }}
            </v-btn>
          </v-container>
        </v-parallax>
      </v-flex>
      <v-flex xs12 class="mt-5">
        <h4 class="display-1 text-xs-center accent--text">
          {{ $t('shared.servicesTitle') }}
        </h4>
      </v-flex>
      <v-flex xs12>
        <v-container fluid grid-list-md text-center>
          <v-layout wrap>
            <v-flex v-for="(service,index) in services" :key="index" xs12 md6>
              <v-card outlined min-height="280">
                <v-container>
                  <v-icon x-large color="secondary">
                    {{ $t(`shared.services[${index}].icon`) }}
                  </v-icon>
                  <h5 class="headline text-xs-center primary--text">
                    {{ $t(`shared.services[${index}].name`) }}
                  </h5>
                  <p>{{ $t(`shared.services[${index}].description`) }}</p>
                  <v-btn color="secondary" large text :to="`/services#${service.name.replace(/ /g, '')}`">
                    {{ $t('shared.readMode') }}
                  </v-btn>
                </v-container>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data () {
    return {
      services: this.$t('shared.services')
    }
  }
}
</script>

<style>
.juicer-feed h1.referral a {
  visibility: hidden;
}
</style>
