<template>
  <div>
    <v-layout wrap text-center>
      <v-flex xs12>
        <v-parallax :src="require('@/assets/section.jpg')" height="580">
          <v-container>
            <h2 class="display-3 mb-3">
              <b>
                Tailored Business Consulting
              </b>
            </h2>
            <h3 class="display-1 mb-3">
              Our mission is to turn your information into strategy
            </h3>
            <v-btn color="secondary" large onclick="Calendly.initPopupWidget({url: 'https://calendly.com/cubical/30minfree?primary_color=15975a'});return false;">
              Schedule a Meeting
            </v-btn>
          </v-container>
        </v-parallax>
      </v-flex>

      <v-flex xs12 class="mt-5">
        <h4 class="display-1 text-xs-center accent--text">
          Services
        </h4>
      </v-flex>

      <v-flex xs12>
        <v-container fluid grid-list-md text-center>
          <v-layout wrap>
            <v-flex v-for="(service,index) in services" :key="index" xs12 md6>
              <v-card outlined min-height="280">
                <v-container>
                  <v-icon x-large color="secondary">
                    {{ service.icon }}
                  </v-icon>
                  <h5 class="headline text-xs-center primary--text">
                    {{ service.name }}
                  </h5>
                  <p>{{ service.description }}</p>
                  <v-btn color="secondary" large text :to="`/services#${service.name.replace(/ /g, '')}`">
                    Read More
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
import data from '@/data/data.json'
import calendlyMixin from '@/mixins/calendlyMixin.js'
export default {
  mixins: [calendlyMixin],
  data () {
    return {
      services: data.services
    }
  }
}
</script>
