<template>
  <div>
    <v-layout wrap>
      <v-flex xs12 class="mt-5 text-center">
        <h3 class="display-2 primary--text">
          {{ $t('shared.scheduleAMeeting') }}
        </h3>
        <!-- Calendly inline widget begin -->
        <div class="calendly-inline-widget" data-url="https://calendly.com/cubical/30minfree?primary_color=15975a" style="min-width:320px;height:630px;" />
        <!-- Calendly inline widget end -->
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  mounted () {
    const calendlyScript = document.createElement('script')
    calendlyScript.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js')
    document.head.appendChild(calendlyScript)
  }
}
</script>
