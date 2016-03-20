<template>
	 <div :class="[type]">
	 	<slot></slot>
	 </div>
</template>

<script>
export default {
	props: {
		type: {
			coerce (val) {//sm|lg
				return val?'bo-form-'+val:'bo-form';
			}
		} 
	},
	data () {
		return {
		}
	}
}
</script>
