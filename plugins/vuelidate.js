import Vue from 'vue'
import Vuelidate from 'vuelidate'
import VuelidateErrorExtractor from 'vuelidate-error-extractor'

Vue.use(Vuelidate)
Vue.use(VuelidateErrorExtractor, {
  attributes: {
    Nome: 'Nome',
    Email: 'Email',
    Messaggio: 'Messaggio',
    Privacy: 'Privacy'
  }
})
