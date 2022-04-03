export default ({ app }) => {
  const { consent, analytics } = app.$cookies.getAll()

  if (!consent && !analytics) {
    app.$cookies.setAll([
      { name: 'consent', value: false, opts: { maxAges: 31556952 } },
      { name: 'analytics', value: false, opts: { maxAges: 31556952 } }
    ])
  }
}
