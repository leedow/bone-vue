<template>
	<section class="bo-layout-main bo-layout-full{{addon}}{{class}}">
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
		},
		addon: {
			coerce (val){
				return val?' bo-layout-main-addon':'';
			}
		}		
	},
	data () {
		return {
			 
		}
	}
}
</script>
