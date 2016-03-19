<template>
	<a class="bo-tab-item{{current}}{{size}}">
		<slot></slot>
	</a>
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
		}
	},
	data () {
		return {
			 
		}
	}
}
</script>
