<template>
  <div>
    <v-layout wrap>
      <v-flex xs12 class="mt-5 text-center">
        <h3 class="display-2 primary--text">
          {{ $t('shared.servicesTitle') }}
        </h3>
      </v-flex>
      <v-flex xs12>
        <v-container fluid grid-list-md>
          <v-layout wrap>
            <v-flex v-for="(service,index) in services" :key="index" xs12 md6 offset-md-3 mb-5>
              <v-card :id="service.name.replace(/ /g, '')" outlined min-height="250">
                <h4 class="display-1 text-xs-center primary white--text">
                  <v-icon x-large class="ml-2 white--text">
                    {{ $t(`shared.services[${index}].icon`) }}
                  </v-icon>
                  {{ $t(`shared.services[${index}].name`) }}
                </h4>
                <v-container>
                  <p>{{ $t(`shared.services[${index}].description`) }}</p>
                  <ul>
                    <li v-for="(feature,index2) in service.features" :key="index2">
                      {{ $t(`shared.services[${index}].features[${index2}].name`) }}
                      <v-tooltip right max-width="300px">
                        <template v-slot:activator="{ on }">
                          <v-icon small color="secondary" v-on="on">
                            mdi-information-outline
                          </v-icon>
                        </template>
                        <span>{{ $t(`shared.services[${index}].features[${index2}].description`) }}</span>
                      </v-tooltip>
                    </li>
                  </ul>
                  <v-card-actions class="justify-center">
                    <v-btn color="secondary" to="/contact">
                      {{ $t('shared.scheduleAMeeting') }}
                    </v-btn>
                  </v-card-actions>
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
