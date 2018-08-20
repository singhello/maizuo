<template>
  <div class="header">
    <div @click="show" class="fl">
    	<span class="menu">菜单</span>
    	<span>卖座电影</span>
    </div>
    <div class="fr">
    	<router-link tag="span" to="/city">青岛^</router-link>
    	<router-link tag="span" to="/login">登录</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props:["isShow"],
  data () {
    return {
      
    }
  },
  methods:{
  	show(){
  		this.$emit("changeShow",this.isShow);
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	*{margin: 0;padding: 0;}
	.header{width: 100%;height: 50px;background: #282828;color: #999;}
	.header div{line-height: 50px;}
	.header div span{padding: 0 1em;float: left;}
	.menu{border-right: 1px solid #666;}
</style>
