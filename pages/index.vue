<template>
  <main>
    <TheHero>
      <h1 class="title display">
        L'iconico che ti meriti
      </h1>
      <p class="subtitle">
        Quos esse iste, eveniet recusandae nemo tenetur modi aut labore sint earum nam rem doloremque porro libero magnam enim nulla in optio.
      </p>
      <TheButton class="hero__cta">
        Chiamaci ora
      </TheButton>
    </TheHero>

    <TheSection>
      <SectionHeader
        title="I nostri servizi."
        description="Esprimi un desiderio e clicca per approfondire."
      />
      <Services :items="services" />
    </TheSection>

    <TheSection class="bg-lime">
      <SectionHeader
        title="Il nostro metodo."
        description="Chi siamo, cosa facciamo e come lo facciamo."
      />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo placeat, dicta numquam sint optio modi vero facere, odit laudantium ea expedita beatae possimus eveniet, cumque debitis deleniti iste sequi magnam?</p>
    </TheSection>

    <TheSection>
      <SectionHeader
        title="Progetti."
        description="Chi siamo, cosa facciamo e come lo facciamo."
      />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo placeat, dicta numquam sint optio modi vero facere, odit laudantium ea expedita beatae possimus eveniet, cumque debitis deleniti iste sequi magnam?</p>
    </TheSection>

    <TheSection>
      <SectionHeader
        title="Contattaci."
        description="Chi siamo, cosa facciamo e come lo facciamo."
      />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo placeat, dicta numquam sint optio modi vero facere, odit laudantium ea expedita beatae possimus eveniet, cumque debitis deleniti iste sequi magnam?</p>
    </TheSection>

    <TheSection>
      <SectionHeader
        title="Follow Us."
        description="Seguici su Istagram e Facebook."
      />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo placeat, dicta numquam sint optio modi vero facere, odit laudantium ea expedita beatae possimus eveniet, cumque debitis deleniti iste sequi magnam?</p>
    </TheSection>
  </main>
</template>

<script>
import TheHero from 'components/TheHero'
import TheButton from 'elements/TheButton'
import TheSection from 'components/TheSection'
import SectionHeader from 'elements/SectionHeader'
import Services from '~/components/Services'

export default {
  components: { TheHero, TheButton, TheSection, SectionHeader, Services },
  data: () => ({
    services: [
      {
        pre: 'monitor-mobbile',
        name: 'Web Design',
        anchor: '/servizi/web-design',
        description: 'Costruisci la tua presenza online',
        cta: 'scopri di più'
      },
      {
        pre: 'gallery-favorite',
        name: 'Brand Identity',
        anchor: '/servizi/brand-identity',
        description: 'Crea l\'immagine della tua identità',
        cta: 'scopri di più'
      },
      {
        pre: 'heart-add',
        name: 'Social Media',
        anchor: '/servizi/social-media',
        description: 'Gestisci la tua influenza sui Social',
        cta: 'scopri di più'
      },
      {
        pre: 'activity',
        name: 'Marketing',
        anchor: '/servizi/marketing',
        description: 'Raggiungi nuovi clienti interessati',
        cta: 'scopri di più'
      },
      {
        pre: 'frame',
        name: 'Content Creation',
        anchor: '/servizi/contet-creation',
        description: 'Racconta il tuo brand e i suoi valori',
        cta: 'scopri di più'
      },
      {
        pre: 'search-status',
        name: 'SEO e SEM',
        anchor: '/servizi/seo-sem',
        description: 'Fatti trovare dal tuo pubblico',
        cta: 'scopri di più'
      }
    ]
  }),
  head () {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
    }
  }
}
</script>

<style lang="scss" scoped>
.subtitle {
  max-width: 65ch;
}
.hero__cta {
  margin-top: $gutter;
}
</style>
