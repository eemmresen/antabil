<template>

  <div id="app">
          

<router-link to="/anaokulu"></router-link>
<router-link to="/ilkogretim"></router-link>
<router-link to="/lise"></router-link>

<router-link to="/siniflar"></router-link>
	<router-link to="/bilim-alanlari"></router-link>
	<router-link to="/psikolojik-danisma"></router-link>
	<router-link to="/spor-alanlari"></router-link>
	<router-link to="/yemekhane"></router-link>
	<router-link to="/guvenlik"></router-link>
	<router-link to="/bahce"></router-link>

	<router-link to="/galeri"></router-link>

	<router-link to="/iletisim"></router-link>
	

<router-link to="/sartlar"></router-link>








<Header/>

<router-view ></router-view>

<Footer/>


  </div>
</template>

 
<script>


//import { $ } from "jquery.min.js"

import './js/jquery.magnific-popup'
import './js/bootstrap.min'
import './js/jquery.min'
import './js/popper.min'
import './js/swiper.min'



import Footer from './components/Footer'

import Header from './components/Header'


import {mapState} from 'vuex'

export default {
  name: 'App',
  components: {
   Footer,Header
   
  },
  computed:{
    ...mapState([
      'message',
      'username',
    ]),
    
  },
  mounted(){
        this.Detayfilms()
    },
    methods:{
        
        Detayfilms(){
       
            
         console.log(this.$route.name)
           
            
            }
           
            
          
            
        },
        

}

//console.log($route.params.id)
/*


*/
</script>


<style>

@import 'css/bootstrap.css';
@import 'css/fontawesome-all.css';
@import 'css/swiper.css';
@import 'css/magnific-popup.css';
@import 'css/styles.css';





</style>
