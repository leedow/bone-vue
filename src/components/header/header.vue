<template>
	<header class="bo-layout-header bo-layout-full">
		<div class="bo-header">
			<slot></slot>
		</div>
		<slot name="addon"></slot>
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
