<template>
	 <div class="product2">	 	 		
 		<div class="pic"><img src="http://7xj0kd.com2.z0.glb.qiniucdn.com/product/pic/20160418112535_39389.jpg?imageView2/1" alt=""></div>
 		<div class="name">豪华套餐</div>
 		<div class="intro">很好吃的套餐</div>
 		<div class="price">
 			<span class="num">￥22</span>
		<span class="oldprice">￥22</span>
 		</div>
 		<div class="dock">
 		<div class="dock-left">
 			<form-counter size="tiny" v-ref:mycountera  max=5 min=2 val=3></form-counter>
		</div>
		<div class="dock-right">
			<form-check @check-click="buyEvent" :checked.sync="checked" v-ref:check></form-check>
	 	</div>
	 	</div>
 	</div>
</template>

<script>
import {FormCheck, FormCounter} from '../components/form'


export default {
	components:{
		FormCheck,
		FormCounter
	},
	props:{
		data: {
			default: {}
		},
		max: {
			default: 9999
		},
		checked: {
			default: false
		} 
	},
	created: function(){
		if(this.data.amount > 0){
			this.checked = true;
		}
	},
	events: {
		'product-unbuy': function(){
			this.checked = false;
			this.$refs.check.setChecked(false);
		}
	},
	methods: {
		buyEvent: function(check){
			 
			 
		},
		introEvent: function(){
			 
		}
	},
	data () {
		return {
			 
		}
	}
}
</script>
