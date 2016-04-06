<template>
	<div class="product">
		<div class="pic">
			<img src="http://7xj0kd.com2.z0.glb.qiniucdn.com/{{data.image}}?imageView2/1/w/60/h/60" alt="">
		</div>
		<h3 class="name">{{data.name}}</h3>
		<p class="intro">{{data.description}}</p>
	</div>
	<div class="product-dock">
		<div class="price">
			￥<span>{{data.price}}</span> /{{data.unit}} 
		</div>
		<div class="mount">
			<form-counter type='2' :val="data.amount"></form-counter>
		</div>		
	</div>
	<div class="bo-clear"></div>
</template>

<script>
import {FormGroup, FormInput, FormSelect, FormCode, FormCounter} from '../components/form'

export default {
	components:{
		FormCounter
	},
	props:{
		data: {
			default: {}
		}
	},
	data () {
		return {
			 
		}
	}
}
</script>
