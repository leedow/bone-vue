<template>
	 <div :class="[size.divsize]">
	 	<label class="bo-label" v-if="label.text" for="">{{label.text}}</label>
	 	<div :class="[icon.css]">
	 		<input :class="[size.inputsize, formControl, label.css]" type="{{type}}" placeholder="{{placeHolder}}">
	 		<i v-if="icon.text" class="icon iconfont" :class="[icon.text]"></i>
	 	</div>
	 </div>
</template>

<script>
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
			coerce (val){
				return val?val:'text';
			}
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
			coerce (val){
				return val?val:''
			}
		} 
	},
	data () {
		return {
			test: 'test'
		}
	}
}
</script>
