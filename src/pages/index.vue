<template>
	<header-layout title='Bone Vue'>
		<header-dock align='left'>
			<a href="">Menu</a>
		</header-dock>
		Bone Vue
		<header-dock align='right'>
			<a href="">Menu</a>
		</header-dock>
	</header-layout>
	<layout-main>
		<layout-box>
			<tabs-vertical>
				<tabs-item-vertical arrow=true iconcss=true icon='home'>
					<a v-link="{ path: '/tabs' }">菜 单</a>
				</tabs-item-vertical>
				<tabs-item-vertical arrow=true iconcss=true icon='home'>
					<a v-link="{ path: '/tabs' }">按 钮</a>
				</tabs-item-vertical>
				<tabs-item-vertical arrow=true iconcss=true icon='home'>
					<a v-link="{ path: '/tabs' }">表 单</a>
				</tabs-item-vertical>
				<tabs-item-vertical arrow=true iconcss=true icon='home'>
					<a v-link="{ path: '/tabs' }">数字选择</a>
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
			test: 'test'
		}
	}
}
</script>
