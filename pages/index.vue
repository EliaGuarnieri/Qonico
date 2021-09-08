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
      <div class="row">
        <div class="col">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo placeat, dicta numquam sint optio modi vero facere, odit laudantium ea expedita beatae possimus eveniet, cumque debitis deleniti iste sequi magnam?</p>
        </div>
        <div class="col">
          <Glass>
            <TextWithIcon pre="messages-3">
              Ascoltiamo le tue esigenze
            </TextWithIcon>
            <TextWithIcon pre="setting-4">
              Sviluppiamo soluzioni personalizzate
            </TextWithIcon>
            <TextWithIcon pre="clipboard-tick">
              Testiamo i prodotti
            </TextWithIcon>
            <TextWithIcon pre="presention-chart">
              Valutiamo i risultati
            </TextWithIcon>
          </Glass>
        </div>
      </div>
    </TheSection>

    <TheSection>
      <SectionHeader
        title="Progetti."
        description="Chi siamo, cosa facciamo e come lo facciamo."
      />
      <ProjectView :images="images" />
    </TheSection>

    <TheSection>
      <SectionHeader
        title="Contattaci."
        description="Chi siamo, cosa facciamo e come lo facciamo."
      />
      <SectionContatti />
    </TheSection>

    <TheSection>
      <SectionHeader
        title="Follow Us."
        description="Seguici su Istagram e Facebook."
      />
      <insta-feed
        fields="media_url,media_type,caption,permalink"
        container-class="image-container"
        :mediatypes="['IMAGE', 'CAROUSEL_ALBUM']"
      >
        <template #loading="props">
          <h1
            v-if="props.loading"
            class="fancy-loading"
          >
            Loading, please wait...
          </h1>
        </template>

        <template #feeds="props">
          <a
            :href="props.feed.permalink"
            rel="noopener"
            target="_blank"
          >
            <div class="instagram-image">
              <img
                :src="props.feed.media_url"
                alt="Instagram post"
              >
              <div :text="props.feed.caption" />
            </div>
          </a>
        </template>

        <template #error="props">
          <div class="fancy-alert">
            {{ props.error }}
          </div>
        </template>
      </insta-feed>
    </TheSection>
  </main>
</template>

<script>
import TheHero from 'components/TheHero'
import TheButton from 'elements/TheButton'
import TheSection from 'components/TheSection'
import SectionHeader from 'elements/SectionHeader'
import Services from 'components/Services'
import Glass from 'elements/Glass'
import TextWithIcon from 'components/TextWithIcon'
import ProjectView from 'components/ProjectView.vue'
import SectionContatti from 'components/SectionContatti.vue'
import InstaFeed from 'components/InstaFeed.vue'

export default {
  components: {
    TheHero,
    TheButton,
    TheSection,
    SectionHeader,
    Services,
    Glass,
    TextWithIcon,
    ProjectView,
    SectionContatti,
    InstaFeed
  },
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
    ],
    images: [
      { src: 'img/1280px-Never_Have_I_Ever_Title_Card.jpg', alt: 'testo alternativo', width: 366, height: 312 },
      { src: 'img/mae-mu-z8PEoNIlGlg-unsplash.jpg', alt: 'testo alternativo', width: 366, height: 312 },
      { src: 'img/monica-silva-1yQEs9ZumxU-unsplash.jpg', alt: 'testo alternativo', width: 366, height: 312 }
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
