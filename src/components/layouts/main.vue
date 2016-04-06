<template>
	<section class="bo-layout-main bo-layout-full{{class}}">
		<slot></slot>
	</section>
</template>

<script>
export default {
	props:{
		class: {
			coerce (val){
				return val?' '+val:'';
			}
		}		
	},
	data () {
		return {
			 
		}
	}
}
</script>
