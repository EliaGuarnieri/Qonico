<template>
  <section class="section">
    <div class="cards container row">
      <TheCard
        v-for="(servizio, index) in servizi"
        :key="index"
        :index="index"
        :animation-file="servizio.animationFile"
        :title="servizio.title"
        :body="servizio.body"
        :play="servizio.play"
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
        animationFile: 'creazione-siti.json',
        title: 'Creazione siti web, E-Commerce e Landing Page',
        body: 'Creiamo siti web ed E-Commerce responsive e intuitivi. Realizziamo blog e landing page dinamiche e funzionali. Eseguiamo anche restyling, manutenzione e assistenza tecnica su siti web esistenti. Contattaci e parlaci della tua attività, ti proporremo le migliori soluzioni per realizzare il tuo sito web.',
        play: false
      },
      {
        animationFile: 'grafica.json',
        title: 'Branding e Grafica',
        body: 'Un\'immagine curata nei dettagli è il primo biglietto da visita per fare una buona impressione e conquistare i clienti. Realizziamo loghi, biglietti da visita, brochure, volantini, grafiche, illustrazioni e molto altro. Contattaci, ti aiuteremo a creare o a rinnovare l\'immagine, online o cartacea, del tuo brand o della tua attività.',
        play: false
      },
      {
        animationFile: 'social.json',
        title: 'Social Media Strategy',
        body: 'Essere presenti sui Social oggi non è solo una necessità, ma anche una grande opportunità. Curiamo la tua presenza sui Social Media in modo da ottenere il maggior coinvolgimento possibile dei tuoi follower, raggiungere nuovi clienti e generare conversioni. Gestiamo il tuo business sui Social attraverso attività di Management e Marketing. Ti aiuteremo a individuare i canali adatti alla tua attività e imposteremo la tua comunicazione in modo efficace. Contattaci per sapere qual è la soluzione più adatta a te.',
        play: false
      },
      {
        animationFile: 'marketing.json',
        title: 'Web Marketing e Comunicazione',
        body: 'Realizziamo campagne pubblicitarie mirate ed efficaci per diffondere i tuoi valori e far conoscere il tuo brand a nuovi potenziali clienti. Nell\'epoca iper-digitale nella quale viviamo, una buona comunicazione online è essenziale per distinguerti dalla concorrenza ed emergere. Contattaci e raccontaci quello che fai, ti aiuteremo a comunicarlo sul web.',
        play: false
      },
      {
        animationFile: 'content.json',
        title: 'Creazione di contenuti e Piani Editoriali',
        body: 'Un piano editoriale strategico è ciò che consente di comunicare con il proprio pubblico in modo accurato e coerente. Organizziamo la tua comunicazione online e creiamo contenuti accattivanti per i tuoi Social, il tuo blog o il tuo sito web. Foto professionali, contenuti grafici, illustrazioni, video, gif, articoli e post Social ti permetteranno di comunicare in modo strategico su tutti i tuoi canali. Contattaci e scopri il pacchetto più adatto alle tue esigenze.',
        play: false
      },
      {
        animationFile: 'glasses.json',
        title: 'Ottimizzazione SEO e SEM',
        body: 'Che si tratti di di un prodotto o di un servizio, un buon posizionamento sui motori di ricerca è essenziale per avere maggiore visibilità. Attraverso l\'ottimizzazione SEO, On Site e Off Site, del tuo sito web e l\'analisi delle Keyword, potrai raggiungere tutti quei clienti che ancora non ti conoscono. Contattaci per ampliare la tua presenza online.',
        play: false
      }
    ]
  }),
  mounted () {
    this.$nextTick(function () {
      window.addEventListener('scroll', this.isInViewport)
      this.isInViewport()
    })
  },
  methods: {
    isInViewport () {
      const cards = document.querySelectorAll('.card__media')

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect()
        const isInVieport =
          rect.top + rect.height >= 0 &&
          rect.bottom - rect.height <= (window.innerHeight || document.documentElement.clientHeight)

        this.servizi[index].play = isInVieport
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.cards {
  display: flex;
  flex-flow: wrap;
}
</style>
