<template>
	<header-layout title='Bone Vue'>
		<header-dock align='left'>
			<a v-link="{ path: '/' }">返回</a>
		</header-dock>
		Tabs
		<header-dock align='right'>
			<a href="">Github</a>
		</header-dock>
	</header-layout>
	<layout-main>
		<layout-box>
			<tabs-horizon>
				<tabs-item-horizon current=true size=3>Item1</tabs-item-horizon>
				<tabs-item-horizon size=3>Item2</tabs-item-horizon>
			</tabs-horizon>
		</layout-box>
		<layout-box m="1000">
			<tabs-vertical>
				<tabs-item-vertical arrow=true iconcss=true icon='home'>
					<a v-link="{ path: '/' }">tabs</a>
				</tabs-item-vertical>
			</tabs-vertical>
		</layout-box>			
	</layout-main>
</template>

<script>
import {HeaderLayout, HeaderDock} from '../components/header/header'
import {LayoutBox, LayoutMain} from '../components/layouts/layouts'
import {TabsHorizon, TabsItemHorizon, TabsVertical, TabsItemVertical} from '../components/tabs/tabs'

export default {
	components:{
		HeaderLayout, 
		HeaderDock,
		LayoutMain,
		LayoutBox,
		TabsHorizon,
		TabsItemHorizon,
		TabsVertical,
		TabsItemVertical
	},
	data () {
		return {
			 
		}
	}
}
</script>
