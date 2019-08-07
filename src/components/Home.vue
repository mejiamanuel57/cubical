<template>
  <v-container fluid grid-list-md text-center>
    <v-layout wrap>
      <v-flex xs12>
        <v-flex xs6 offset-xs3>
          <v-img contain max-height="250px" src="@/assets/cubicalLogo.png" alt="logo" />
          <h5 class="headline">
            Tailored Business Consulting
          </h5>
        </v-flex>
      </v-flex>
      <v-flex xs12>
        <v-parallax :src="require('@/assets/section.jpg')" height="580">
          <h3 class="display-2 white--text mb-3 text-xs-center">
            Our mission is to turn your information into strategy.
          </h3>
        </v-parallax>
      </v-flex>
        
      <v-flex xs12>
        <h4 class="display-1 text-xs-center accent--text">
          Services
        </h4>
      </v-flex>

      <v-flex xs12>
        <v-layout wrap>
          <v-flex xs12 md6>
            <v-card outlined min-height="170">
              <v-container>
                <v-icon x-large color="secondary">
                  mdi-cached
                </v-icon>
                <h5 class="headline text-xs-center primary--text">
                  Planning 360
                </h5> 
                <p>Budgeting and strategic planning tailored to your business’ needs. We care about understanding your business model, your industry, and your operative challenges, to deliver optimal resource planning. This includes defining goals from the ground up so leaders can easily make things happen.</p>
              </v-container>
            </v-card>
          </v-flex>
          <v-flex xs12 md6>
            <v-card outlined min-height="170">
              <v-container>
                <v-icon x-large color="secondary">
                  mdi-wrench
                </v-icon>
                <h5 class="headline text-xs-center primary--text">
                  Process optimization
                </h5> 
                <p>Get your processes optimized so your company runs as lean as possible without sacrificing the controls you need to operate robustly.</p>
              </v-container>
            </v-card>
          </v-flex>
          <v-flex xs12 md6>
            <v-card outlined min-height="200">
              <v-container>
                <v-icon x-large color="secondary">
                  mdi-magnify
                </v-icon>
                <h5 class="headline text-xs-center primary--text">
                  Data Analysis
                </h5> 
                <p>Let us analyze your numbers! We can help you interpret your financial statements, historical sales data, customer surveys, among other important sources of information to guide you to the best business decisions. Furthermore, we can define the key performance indicators to constantly follow up on your strategy.</p>
              </v-container>
            </v-card>
          </v-flex>
          <v-flex xs12 md6>
            <v-card outlined min-height="200">
              <v-container>
                <v-icon x-large color="secondary">
                  mdi-school
                </v-icon>
                <h5 class="headline text-xs-center primary--text">
                  Training
                </h5> 
                <p>We train your team to sustain your progress. Some of our courses include budgeting, operation control techniques, continuous improvement methodologies, among others.</p>
              </v-container>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>
