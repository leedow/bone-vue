<template>
	<section class="bo-layout-main">
		<slot></slot>
	</section>
</template>

<script>
export default {
	props:{
		m :{
			coerce (val) {
				if(val != undefined){
					return ' bo-m' + val;
				} else {
					return '';
				}
			}
		},
		p: {
			coerce (val) {
				if(val != undefined){
					return ' bo-p' + val;
				} else {
					return '';
				}
			}
		}
	},
	data () {
		return {
			 
		}
	}
}
</script>
