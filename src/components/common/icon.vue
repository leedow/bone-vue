<template>
	<i class="icon iconfont icon-{{icon}}"></i>
</template>

<script>
export default {
	props: {
		type: {
			coerce (val) {//
				return val?val:'';
			}
		}
	},
	data () {
		return {
			
		}
	}
}
</script>
