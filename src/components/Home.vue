<template>
  <div>
		<!-- Swiper -->
	  <div class="swiper-container">
	    <div class="swiper-wrapper">
	      <div v-for="item in arr" class="swiper-slide"><img src="item.imageUrl"/></div>
	    </div>
	  </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
export default {
  name: 'Home',
  data () {
    return {
      arr:[]
    }
  },
  components:{
  	
  },
  created(){
  	let bannerUrl = "http://localhost:8080/mz/v4/api/billboard/home";
  	this.$http.get(bannerUrl,{params:{__t:Date.now()}}).then(res=>{
  		console.log(res.data);
  		this.arr = res.data.data.billboards
  	})
  },
  updated(){
  	new Swiper (".swiper-container",{loop: true}); 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
