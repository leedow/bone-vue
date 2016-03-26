<template>
	 <div :class="[type]">
	 	<slot></slot>
	 	<p class="form-notice" v-if="notice.show">{{notice.text}}</p>
	 </div>
</template>

<script>
/*
 * On events: form-verify->input-verify|input-pass|input-wrong
 * Broadcast events: input-verify
 */
export default {
	props: {
		type: {
			coerce (val) {//sm|lg
				return val?'bo-form-'+val:'bo-form';
			}
		} 
	},
	methods: {
		verify: function(){
			this.pass = true;
			this.$broadcast('input-verify', '');
			console.log(this.pass)
		},
		addData: function(key, val){
			this.data[key] = val;
		},
		removeData: function(key){
			this.pass = false;
			delete this.data[key];
		},
		setNotice: function(msg){
			this.notice = {
				show: true,
				text: msg
			}
		}
	},
	events: {
		'form-verify': function(){
			this.verify();
		},
		'input-pass': function(msg){
			this.addData(msg.name, msg.val);
		},
		'input-wrong': function(msg){
			this.removeData(msg.name);
		}
	},
	data () {
		return {
			data: {},
			pass: true,
			notice: {
				show: false,
				text: ''
			}
		}
	}
}
</script>
