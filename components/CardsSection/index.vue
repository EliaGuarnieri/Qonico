<template>
  <section
    id="servizi"
    class="section"
  >
    <div class="cards container row">
      <TheCard
        v-for="(servizio, index) in servizi"
        :key="index"
        :title="servizio.title"
        :body="servizio.body"
      />
    </div>
  </section>
</template>

<script>
import TheCard from './TheCard'

export default {
  components: { TheCard },
  data: () => ({
    servizi: [
      {
        title: 'Titolo',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim.'
      },
      {
        title: 'Titolo',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim.'
      },
      {
        title: 'Titolo',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim.'
      },
      {
        title: 'Titolo',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim.'
      },
      {
        title: 'Titolo',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim.'
      },
      {
        title: 'Titolo',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim.'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
.cards {
  display: flex;
  flex-flow: wrap;
}
</style>
