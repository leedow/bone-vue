<template>
	<div class="bo-counter{{type}}">
		<button class="counter-btn plus{{style.lbtn}}" :class="style.btn" @click="sub">
			<i class="icon iconfont icon-move"></i>
		</button>
		<input type="text" class="bo-input bo-input-sm counter-input" v-model="val">
		<button class="counter-btn sub{{style.rbtn}}" :class="style.btn" @click="plus">
			<i class="icon iconfont icon-add1"></i>
		</button>
		<div class="bo-clear"></div>
	</div>
</template>

<script>
/*
 * On events: form-verify->input-verify|input-pass|input-wrong
 * Broadcast events: input-verify
 */
export default {
	props: {
		val: {
			default: 0
		},
		max: {
			default: 99999
		},
		min: {
			default: 0
		},
		type: {
			default:''
		} 
	},
	created: function(){
		if(this.val < this.min){
			this.val = this.min;
		} else if(this.val > this.max){
			this.val = this.max;
		}
	 	this.setbtn();


		if(this.type == 2){
			this.style.btn = []
		}
	},
	methods: {
		setbtn: function(){
			this.style.lbtn = '';
			this.style.rbtn = '';
			if(this.val == this.min){
				this.style.lbtn= ' counter-btn-disable'
			}
			if(this.val == this.max){
				this.style.rbtn= ' counter-btn-disable';
			}
		},
		plus: function(){
			if(this.max != '' && this.val < parseInt(this.max)){
				this.val++;
			} else if(this.max == ''){
				this.val++;
			}
			this.setbtn();
		},
		sub: function(){
			if(this.val > this.min){
				this.val--;	
			}
			this.setbtn();
		}
	},
	events: {
		 
	},
	data () {
		return {
			style: {
				btn: ['bo-btn', 'bo-btn-sm' ],
				lbtn: '',
				rbtn: ''
			}
		}
	}
}
</script>
