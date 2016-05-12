<template>
	<nav class="bo-tab-horizon">
		<slot></slot>
	</nav>
</template>

<script>
export default {
	events: {
		'tab-item-click': function(msg){
			this.$broadcast('tab-item-click', msg);
			return true;
		}
	},
	data () {
		return {
			 
		}
	}
}
</script>
