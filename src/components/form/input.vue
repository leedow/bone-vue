<template>
	 <div :class="[size.divsize]">
	 	<label class="bo-label" v-if="label.text" for="">{{label.text}}</label>
	 	<div :class="[icon.css, state]">
	 		<input :class="[size.inputsize, formControl, label.css]" type="{{type}}" name="{{name}}" v-model="val" placeholder="{{placeHolder}}">
	 		<i v-if="icon.text" class="icon iconfont" :class="[icon.text]"></i>
	 	</div>
	 </div>
</template>

<script>
import Format from '../../addon/format'

/*
 * Dispatch events:input-wrong|input-pass
 * On events:input-verify
 */
export default {
	props: {
		size: {
			coerce (val) {//sm|lg
				if(val){
					return {
						divsize: 'bo-form-item-'+val,
						inputsize: 'bo-input-'+val
					}
				} else {
					return {
						divsize: 'bo-form-item',
						inputsize: 'bo-input'
					}
				}				 
			}
		},
		formControl: {
			coerce (val){
				return val?'bo-form-control':'';
			}
		},
		type: {
			default: 'text'
		},
		name: {
			default: ''
		},
		icon: {
			coerce (val){
				if(val){
					return {
						text: 'icon-'+val,
						css: 'bo-input-icon'
					}
				} else {
					return {
						text: false,
						css: ''
					}
				}
				
			}
		},
		label: {
			coerce (val) {
				if(val){
					return {
						text: val,
						css: ''
					} 
				} else {
					return {
						text: '',
						css: 'input-no-label'
					}
				}				 
			}
		},
		placeHolder: {
			default: ''
		},
		state: {//状态
			coerce (val) {
				return val?'bo-input-'+val:'';
			},
			default: ''
		},
		required: {//是否强制填写
			default: false
		},
		format: {//数据格式
			default: ''
		}
	},
	methods: {
		verify: function(){
			//console.log('verify input');
			var res = Format.do(this.required, this.format, this.val);
			var msg = {
				name: this.name,
				val: this.val,
				type: this.type
			}
			if(!res.state){
				this.changeState('wrong');
				this.$dispatch('input-wrong', msg);
			} else {
				this.changeState('');
				this.$dispatch('input-pass', msg);
			}
		},
		changeState: function(state){
			this.state = 'bo-input-'+state;
		}
	},
	events: {
		'input-verify': function(){//检查格式
			this.verify();
		} 
	},
	data () {
		return {
			val: ''
		}
	}
}
</script>
