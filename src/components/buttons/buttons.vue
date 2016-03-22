<template>
	<button :class="[type+blank, size, block]" @click="clickEvent">
		<i v-if="icon" class="icon iconfont icon-{{icon}}"></i>
		<slot></slot>
	</button>
</template>

<script>
export default {
	props: {
		size: {
			coerce (val) {//sm|lg
				return val?'bo-btn-'+val:'';
			}
		},
		type: {
			coerce (val) {//primary|warm
				return val?'bo-btn-'+val:'bo-btn';
			}
		},
		blank: {
			coerce (val) {
				return val?'-blank':'';
			}
		},
		icon: {
			coerce (val) {
				return val?val:'';
			}
		},
		block: {
			coerce (val){
				return val?'bo-btn-block':'';
			}
		}
	},
	methods: {
		clickEvent: function(){
			//alert('fsd')
			this.$dispatch('btn-click', '');
		}
	},
	data () {
		return {
			
		}
	}
}
</script>
