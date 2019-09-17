export default {
  mounted () {
    const calendlyScript = document.createElement('script')
    calendlyScript.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js')
    document.head.appendChild(calendlyScript)
  }
}
