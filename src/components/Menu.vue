<template>
  <div v-show="isShow">
		<ul class="menu-ul">
			<router-link tag="li" v-for="item in arr" :to="item.path" :key="item.id">{{item.con}} <span>&gt;</span></router-link>
		</ul>
		<!--<div @click="show" class="mask" :isShow="isShow"></div>-->
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props:["isShow"],
  data () {
    return {
      arr:[
      	{id:1,name:"home",path:"/home",con:"首页"},
      	{id:2,name:"film",path:"/film",con:"影片"},
      	{id:3,name:"cinema",path:"/cinema",con:"影院"},
      	{id:4,name:"shop",path:"/shop",con:"商城"},
      	{id:5,name:"login",path:"/login",con:"我的"},
      	{id:6,name:"card",path:"/card",con:"卖座卡"},
      ]
    }
  },
  methods:{
  	show(){
  		console.log(this.isShow)
  		this.$emit("changeShow",this.isShow)
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.menu-ul{width: 265px;background: #282828;position: fixed;top: 50px;left: 0;right: 0; bottom: 0;border-top: 1px solid #666;color: #9a9a9a;z-index: 10;}
	.menu-ul li{height: 50px;line-height: 50px;text-indent: 1em;}
	.mask{width: 100%;height: 100%;background: #ccc;opacity: .7;position: fixed;top: 0;left: 0;right: 0;bottom: 0;}
</style>
