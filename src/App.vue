<template>
  <div id="app">
  <mz-header :isShow="isShow" @changeShow="fn"></mz-header>
  <mz-menu v-show="isShow" @changeShow="fn"></mz-menu>
    <router-view/>
  </div>
</template>

<script>
	import Header from "@/components/Header";
	import Menu from "@/components/Menu";
	export default {
	  name: 'App',
	  data(){
	  	return {
	  		isShow:false
	  	}
	  },
	  components:{
	  	"mz-header":Header,
	  	"mz-menu":Menu
	  },
	  methods:{
	  	fn(data){
	  		this.isShow = !data;
	  	}
	  }
	}
</script>

<style>
#app {}
html,body,ul,li,ol,dl,dd,dt,p,h1,h2,h3,h4,h5,h6,form,fieldset,legend,img,input,figure{margin:0;padding:0}
body{font-family: '微软雅黑';}
h1,h2,h3,h4,h5,h6{font-weight:normal;font-size:16px;}
b,strong{font-weight:normal;}
em,i{font-style:normal;}
a,u{text-decoration:none;}
img{border:0;display:block;}
ul,ol,li{list-style:none;}
input{outline:none;}
.clear-fix:after{content:".";clear:both;display:block;height:0;overflow: hidden;visibility: hidden;}
.fl{float: left;}
.fr{float: right;}
</style>
