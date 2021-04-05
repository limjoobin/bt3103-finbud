<template> 
  <div id = "app">
	<router-view></router-view>
	<app-footer></app-footer>
  </div>
</template>

<script>
import Footer from './components/UI/Footer.vue';
export default {
	components:{ 
		'app-footer': Footer ,
	},
	data (){
		return{}
	},
}
</script>


<style>
    @font-face {
        font-family: Lustria;
        src: url('assets/Lustria-Regular.ttf');
    }
    @font-face {
        font-family: Lato;
        src: url('assets/Lato-Regular.ttf');
    }
    *{
        background-color: #a9d6ff;
        color:#0E4070;
        margin: 0px;
        padding: 0px;
    }
	

</style>