<template>
  <section class="section">
    <div class="cards container row">
      <TheCard
        v-for="(servizio, index) in servizi"
        :key="index"
        :title="servizio.title"
        :body="servizio.body"
        class="card"
      />
    </div>
  </section>
</template>

<script>
import TheCard from 'elements/TheCard'

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

.card {
  @include for-tablet {
    width: calc(50% - calc(#{$gutter} / 2));
  }

  @include for-desktop {
    width: calc(33% - calc(#{$gutter} / 2));
  }
}

.card + .card {
  margin-top: $gutter;

  &:nth-child(2) {
    @include for-tablet {
      margin-top: 0;
    }
  }

  &:nth-child(3) {
    @include for-desktop {
      margin-top: 0;
    }
  }
}
</style>
