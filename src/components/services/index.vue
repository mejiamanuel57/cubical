<template>
  <div>
    <v-layout wrap>
      <v-flex xs12 class="mt-5 text-center">
        <h3 class="display-2 primary--text">
          Services
        </h3>
      </v-flex>
      <v-flex xs12>
        <v-container fluid grid-list-md>
          <v-layout wrap>
            <v-flex v-for="(service,index) in services" :key="index" xs12 md6 offset-md-3 mb-5>
              <v-card :id="service.name.replace(/ /g, '')" outlined min-height="250">
                <h4 class="display-1 text-xs-center primary white--text">
                  <v-icon x-large class="ml-2 white--text">
                    {{ service.icon }}
                  </v-icon>
                  {{ service.name }}
                </h4>
                <v-container>
                  <p>{{ service.description }}</p>
                  <ul>
                    <li v-for="(feature,index2) in service.features" :key="index2">
                      {{ feature.name }}
                      <v-tooltip right max-width="300px">
                        <template v-slot:activator="{ on }">
                          <v-icon small color="secondary" v-on="on">
                            mdi-information-outline
                          </v-icon>
                        </template>
                        <span>{{ feature.description }}</span>
                      </v-tooltip>
                    </li>
                  </ul>
                  <v-card-actions class="justify-center">
                    <v-btn color="secondary" to="/contact">
                      Schedule a Meeting
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
import data from '@/data/data.json'
export default {
  data () {
    return {
      services: data.services
    }
  }
}
</script>
