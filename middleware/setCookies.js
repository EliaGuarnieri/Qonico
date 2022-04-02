export default ({ app }) => {
  console.log(app.context.env.BRANCH)
  const consent = app.$cookies.get('consent')
  const analytics = app.$cookies.get('analitycs')

  if (!consent && !analytics) {
    app.$cookies.setAll([
      { name: 'consent', value: false, opts: { maxAges: 31556952 } },
      { name: 'analytics', value: false, opts: { maxAges: 31556952 } }
    ])
  }
}
