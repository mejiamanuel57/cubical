<template>
  <v-row no-gutters>
    <v-col cols="12">
      <v-container fluid>
        <v-row no-gutters justify="center">
          <v-col v-for="(service,index) in services" :key="index" cols="12" sm="8" class="mb-5">
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
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
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
