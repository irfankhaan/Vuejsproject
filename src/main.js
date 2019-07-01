import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import './registerServiceWorker'
import DateFilter from './filters/date'
import AlertCmp from './components/Shared/Alert.vue'

Vue.config.productionTip = false

Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertCmp)

new Vue({
  router,
  store,
  render: h => h(App),
  created () {
  	firebase.initializeApp({
  		apiKey: 'AIzaSyBgXKI9zxSZs3pzHX75ACriAmUOuTiJ0EI',
  		authDomain: 'devmeetup.firebaseapp.com',
  		databaseURL: 'https://devmeetup-4703f.firebaseio.com',
  		projectId: 'devmeetup',
  		storageBucket: 'gs://devmeetup-4703f.appspot.com'
  	})
  	firebase.auth().onAuthStateChanged((user) => {
  		if (user) {
  			this.$store.dispatch('autoSignIn', user)
  		}
  	})

  	this.$store.dispatch('loadMeetups')
  }
}).$mount('#app')


