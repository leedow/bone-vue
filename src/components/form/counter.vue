<template>
	<div class="bo-counter{{type}}">
		<button class="counter-btn plus" :class="[style.btn,style.btn2,style.lbtn]" @click="sub">
			<i class="icon iconfont icon-move"></i>
		</button>
		<input v-ref:myinput type="text" class="bo-input bo-input-sm counter-input" v-model="val" @blur="change" readonly>
		<button class="counter-btn sub" :class="[style.btn,style.btn2,style.rbtn]" @click="plus">
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
		},
		readonly: {
			default: false
		} 
	},
	created: function(){
		if(this.val < this.min){
			this.val = this.min;
			this.oldVal = this.val;
		} else if(this.val > this.max){
			this.val = this.max;
			this.oldVal = this.max;
		}
	 	this.setbtn();


		if(this.type == 2){
			this.style.btn = []
		}
	},
	ready: function(){
		if(this.readonly){
			//this.$refs.myinput.readonly
		}
	},
	methods: {
		setbtn: function(){
			this.style.lbtn = '';
			this.style.rbtn = '';
			if(this.val == this.min){
				this.style.lbtn= 'counter-btn-disable'
			}
			if(this.val == this.max){
				this.style.rbtn= 'counter-btn-disable';
			}
		},
		plus: function(){
			if(this.max != '' && this.val < parseInt(this.max)){
				this.oldVal = this.val;
				this.val++;
			} else if(this.max == ''){
				this.oldVal = this.val;
				this.val++;
			}
			this.setbtn();
			this.dispatch('counter-change');
		},
		sub: function(){
			if(this.val > this.min){
				this.oldVal = this.val;
				this.val--;	
			}
			this.setbtn();
			this.dispatch('counter-change');
		},
		change: function(){
			this.dispatch('counter-change');
			this.setbtn();
		},
		dispatch: function(type){
			switch(type){
				case 'counter-change':{
					this.$dispatch('counter-change', this);
				}
			}
		},
		rollback: function(){
			this.val = this.oldVal;
		}
	},
	events: {
		 
	},
	data () {
		return {
			style: {
				btn: 'bo-btn',
				btn2: 'bo-btn-sm',
				lbtn: '',
				rbtn: ''
			},
			oldVal: 0
		}
	}
}
</script>
