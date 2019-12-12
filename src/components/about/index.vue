<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="8">
        <v-card>
          <h4 class="display-1 pa-2 text-center primary white--text">
            Why Cubical?
          </h4>
          <v-row no-gutters align="center" justify="center">
            <v-col cols="12" class="pa-4">
              <p>
                We have found ways to make small and medium size companies as well-planned and robust as big
                corporations. We are an experienced team passionate about making businesses more profitable,
                while ensuring the boss can take vacations with peace of mind.
              </p>
              <p>
                Our areas of expertise are <b> Business Planning &amp; Analysis, Operations, and Supply Chain
                  Management</b>.
              </p>
              <p>
                We work with a broad variety of clients from different industries with one or more of these factors
                in common:
              </p>
              <ol>
                <li>
                  <b>GROWTH.</b> We help companies by studying the feasibility and expected returns of their
                  initiatives to grow revenue. Cubical offers agile action plans, dashboards and contingency
                  plans in case the competitive scenario changes along the way.
                </li>
                <li>
                  <b>WORKING CAPITAL INTENSIVE.</b> Companies managing inventory, account receivables, and
                  relevant debt levels, go to Cubical to ensure having a healthy cash flow. We help them
                  optimize their supply chain and maintain their forecasts up to date.
                </li>
                <li>
                  <b>DESIRE OF LEANER PROCESSES.</b> Cubical is the perfect partner for companies facing the
                  challenge of innovating to be faster and more robust without shifting the focus from their
                  core expertise. We cut the wastes hidden in their processes, and successfully implement
                  changes without affecting their operations.
                </li>
              </ol>
              <br>
              <p>
                You can rely on us because:
              </p>
              <p>✔ Each member of our team is specialized in a business area to ensure the best recommendations are given</p>
              <p>✔ Our implementations are agile, adapting the action plan to the clients’ structure and pace</p>
              <p>✔ Our payment plans are designed around milestones achieved, not crazy hourly rates</p>
              <p>✔ We provide excellent personalized customer service</p>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="12" md="8">
        <v-card>
          <h4 class="display-1 pa-2 text-center primary white--text">
            Case Studies
          </h4>
          <v-row>
            <v-col cols="12">
              <v-expansion-panels>
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    <v-row>
                      <v-col cols="12" md="4">
                        <v-img
                          :src="require('@/assets/cubical-success.jpg')"
                          max-width="450"
                        />
                      </v-col>
                      <v-col cols="12" md="8">
                        <h4 class="title">
                          INVENTORY - THE SIMPLER, THE BETTER
                        </h4>
                        <p class="body-1">
                          Your inventory can either be your most strategic asset or your biggest nightmare. If
                          your company is a retailer, wholesaler, and/or manufacturer, your sales depend on
                          how well managed is your inventory. Having a lot of inventory is risky and
                          expensive, while not having enough can handicap your growth.We helped a
                          wholesaler overcome the tragedy of overstock, out of stocks, accounts payables,
                          and constant complaints from clients.
                        </p>
                      </v-col>
                    </v-row>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <p>
                      Seymeh, an importer and wholesaler of electrical supplies for
                      construction, was struggling with constant complaints from the
                      sales team. This company was growing exponentially year after year
                      to the point of not meeting the demand. To make it worst, the
                      accounts payables and the procurement teams were challenged
                      with not enough cash and weak relationships with suppliers.
                    </p>
                    <p>
                      The objective of this project was to reduce the amount of sales
                      loses due to out of stock, and decrease the level of inventory kept of
                      slow-moving items. Our approach was to work from the roots up;
                      starting with a deep understanding of the demand, all the way to
                      the liquidation of slow movers and the presentation of proposals to
                      negotiate with suppliers. The actions taken were:
                    </p>
                    <ul>
                      <li>
                        Create of a forecasting model that fitted the demand
                        behavior better than simple averages to decrease the errors
                        on estimations. External parameters were researched and
                        included into the model to make sure it was robust.
                      </li>
                      <li>
                        Gather data of missed sales due to out of stock to integrate it
                        into the forecasting model.
                      </li>
                      <li>
                        Estimate the hidden cost associated with storage of all items.
                      </li>
                      <li>
                        Construct a purchasing model to recommend order
                        quantities based on the items’ profitability, lead time, and
                        demand.
                      </li>
                      <li>
                        Simplify the portfolio of products offered, taking out items
                        that were not profitable enough, did not meet the
                        requirements of clients, or could be easily replaced by others
                        with better performance
                      </li>
                      <li>
                        Reduce the number of suppliers per category of products to
                        increase the volume of orders and therefore the bargaining
                        power of the company
                      </li>
                      <li>
                        Project the company’s cash flow considering all the changes
                        previously described and make new payment agreements
                        with suppliers to strengthen the position of the company
                      </li>
                    </ul>
                    <p>
                      After weeks of arduous work, we helped this company increase 11%
                      profitability thanks to a simpler catalog of products and stronger
                      alliances. We also collaborated with the reduce of their cash
                      conversion cycle by 60%. All this, without dropping the sales
                      number.
                    </p>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
