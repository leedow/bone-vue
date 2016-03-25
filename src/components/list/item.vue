<template>
	<li class="list-item">
		<slot :data="data"></slot>
	</li>
</template>

<script>
export default {
	props:{
		data: {
			default: 3
		}
	},
	data () {
		return {
			 
		}
	}
}
</script>
