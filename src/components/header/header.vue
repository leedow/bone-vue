<template>
	<header class="bo-layout-header bo-layout-full">
		<div class="bo-header">
			<slot></slot>
		</div>
	</header>
</template>

<script>
export default {

	data () {
		return {
			test: 'test'
		}
	}
}
</script>
