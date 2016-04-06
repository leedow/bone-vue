<template>
	<div class="shp-dock">
		<div id="total">
			总计 <span>{{total}}</span> 元
		</div>
		<div id="buy">
			<btn type="warm" size="sm" name="去结算" icon="cart"></btn>
		</div>
	</div>
</template>

<script>
import {Btn} from '../components/buttons'
import {Icon} from '../components/common'

export default {
	components:{
		 Btn,
		 Icon
	},
	props:{
		 total: {
		 	default: 0
		 }
	},
	data () {
		return {
			 
		}
	}
}
</script>
