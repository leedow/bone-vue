<template>
	<div class="bo-tabmenu{{type}}{{size}}" @click="clickEvent">				
		<div class="tabmenu-pic" v-bind:style="css">
			<i class="icon iconfont icon-{{iconType}}"></i>
		</div>
		<div class="tabmenu-title">
			{{title}}
		</div>
		<div v-if="tip" class="tip">{{tip}}</div>
	</div>
</template>

<script>
export default {
	props: {
		type: {
			default: ''		
		},
		iconType: {
			default: ''
		},
		title: {
			default: ''
		},
		href: {
			default: ''
		},
		color: {
			default: ''
		},
		tip: {
			default: false
		},
		size: {
			coerce (val){
				return val?' bo-tabmenu-'+val:'';
			}
		}
	},
	ready: function(){
		var _this = this;
		 if(this.color != ''){
		 	this.css = {
		 		background: _this.color
		 	}
		 }
	},
	events: {

	},
	methods: {
		clickEvent: function(){
			if(this.href != ''){
				window.location.href = this.href;
			}
			this.$dispatch('menu-icon-click', this);
		} 
	},
	data () {
		return {
			 css : {}
		}
	}
}
</script>
