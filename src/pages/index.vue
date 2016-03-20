<template>
	<header-layout title='Bone Vue'>
		<header-dock align='left'>
			<a v-link="{ path: '/' }"><Icon type="back"></Icon></a>
		</header-dock>
		Bone Vue
		<header-dock align='right'>
			<a href="">Menu</a>
		</header-dock>
	</header-layout>
	<layout-main>
		<layout-box>
			<tabs-vertical>
				<tabs-item-vertical arrow=true>
					<a v-link="{ path: '/tabs' }">菜 单</a>
				</tabs-item-vertical>
				<tabs-item-vertical arrow=true>
					<a v-link="{ path: '/buttons' }">按 钮</a>
				</tabs-item-vertical>
				<tabs-item-vertical arrow=true>
					<a v-link="{ path: '/form' }">表 单</a>
				</tabs-item-vertical>
				<tabs-item-vertical arrow=true>
					<a v-link="{ path: '/tabs' }">数字选择</a>
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
			test: 'test'
		}
	}
}
</script>
