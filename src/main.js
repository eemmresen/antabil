import Vue from 'vue'

import store from './store'
import VueRouter from 'vue-router'



import jQuery from 'jquery'

global.jQuery = jQuery




Vue.use(VueRouter)

import App from './App.vue'
import anasayfa from './components/anasayfa.vue'

import anaokulu from './components/anaokulu.vue'
import ilkogretim from './components/ilkogretim.vue'
import lise from './components/lise.vue'

import siniflar from './components/siniflar.vue'
import bilimalanlari from './components/bilim-alanlari.vue'
import psikolojikdanisma from './components/psikolojik-danisma.vue'
import sporalanlari from './components/spor-alanlari.vue'
import yemekhane from './components/yemekhane.vue'
import guvenlik from './components/guvenlik.vue'
import bahce from './components/bahce.vue'

import galeri from './components/galeri.vue'


import iletisim from './components/iletisim.vue'

import sartlar from './components/sartlar.vue'

import NotFound from './components/NotFound.vue'




Vue.config.productionTip = false

global.jQuery = require('jquery');


const router =new VueRouter({

  routes:[
   
    { path: '/',name :'Anasayfa', component:anasayfa},
    { path: '/anasayfa',name :'Anasayfa', component:anasayfa},
    { path: '/anaokulu',name :'Anaokulu',component:anaokulu},
    { path: '/ilkogretim',name :'İlkogretim',component:ilkogretim},
    { path: '/lise',name :'Lise',component:lise},


    { path: '/siniflar',name :'Siniflar',component:siniflar},
    { path: '/bilim-alanlari',name :'Bilim Alanlari',component:bilimalanlari},
    { path: '/psikolojik-danisma',name :'Psikolojik Danisma',component:psikolojikdanisma},
    { path: '/spor-alanlari',name :'Spor Alanlari',component:sporalanlari},
    { path: '/yemekhane',name :'Yemekhane',component:yemekhane},
    { path: '/guvenlik',name :'Güvenlik',component:guvenlik},
    { path: '/bahce',name :'Bahce',component:bahce},
    
    

    { path: '/galeri',name :'Galeri',component:galeri},

    { path: '/iletisim',name :'İletisim',component:iletisim},

    { path: '/sartlar',name :'Sartlar',component:sartlar},
    
    
    { path: '*',name :'Böyle bir sayfa yoktur', component:NotFound},
   
   
    
   
  ],
  
  mode:'history',
  if () {
    
  }
 
})

Vue.config.productionTip = false


new Vue({
  render: h => h(App),store,router
}).$mount('#app')
