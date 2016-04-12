<template>
	<header-layout title='Bone Vue'>
		<header-dock align='left'>
			<a v-link="{ path: '/' }"><Icon type="back"></Icon></a>
		</header-dock>
		Tabs
		<header-dock align='right'>
			<a href="">Github</a>
		</header-dock>
		<layout-box slot="addon">
			<tabs-horizon>
				<tabs-item-horizon current=true size=3>Item1</tabs-item-horizon>
				<tabs-item-horizon size=3>Item2</tabs-item-horizon>
			</tabs-horizon>
		</layout-box>
	</header-layout>
	<layout-main addon=true>
		<layout-box>
			<tabs-horizon>
				<tabs-item-horizon current=true size=3>Item1</tabs-item-horizon>
				<tabs-item-horizon size=3>Item2</tabs-item-horizon>
			</tabs-horizon>
		</layout-box>
		<layout-box m="1000">
			<tabs-vertical>
				<tabs-item-vertical arrow=true>
					<a v-link="{ path: '/' }">Tabs</a>
				</tabs-item-vertical>
				<tabs-item-vertical arrow=true iconcss=true icon='home'>
					<a v-link="{ path: '/' }">Tabs</a>
				</tabs-item-vertical>
			</tabs-vertical>
		</layout-box>			
	</layout-main>
</template>

<script>
import {HeaderLayout, HeaderDock} from '../components/header'
import {LayoutBox, LayoutMain} from '../components/layouts'
import {TabsHorizon, TabsItemHorizon, TabsVertical, TabsItemVertical} from '../components/tabs'
import {Icon} from '../components/common'
export default {
	components:{
		HeaderLayout, 
		HeaderDock,
		LayoutMain,
		LayoutBox,
		TabsHorizon,
		TabsItemHorizon,
		TabsVertical,
		TabsItemVertical,
		Icon
	},
	data () {
		return {
			 
		}
	}
}
</script>
