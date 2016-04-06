<template>
	<li class="bo-tab-item{{current}}{{size}}" data-id="{{id}}" @click="clickEvent">
		<slot></slot>
	</li>
</template>

<script>
export default {
	props: {
		current: {
			coerce (val){
				return val?' bo-tab-item-current':'';
			}
		},
		size: {
			coerce (val){
				return val?' bo-col-'+val:'';
			}
		},
		id: {
			default: ''
		}
	},
	events: {
		'tab-item-click': function(msg){ 
			this.setCurrent(false);
		}
	},
	methods: {
		clickEvent: function(){
			this.$dispatch('tab-item-click', this.id);
			this.setCurrent(true);
		},
		setCurrent: function(state){
			if(state){
				this.current = ' bo-tab-item-current';
			} else {
				this.current = '';
			}
		}
	},
	data () {
		return {
		}
	}
}
</script>
