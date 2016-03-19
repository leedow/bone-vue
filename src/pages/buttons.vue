<template>
	<header-layout title='Bone Vue'>
		<header-dock align='left'>
			<a v-link="{ path: '/' }"><Btn type="back"></Btn></a>
		</header-dock>
		Buttons
		<header-dock align='right'>
			<a href="">Github</a>
		</header-dock>
	</header-layout>
	<layout-main>
		 
		<layout-box p="1111">
			 <Btn>Buttons</Btn>
			 <Btn icon="home">Buttons</Btn>
			 <Btn size="lg" type="primary" icon="settings">Buttons</Btn>
			 <Btn type="warm">Buttons</Btn>
			 <Btn type="warm" block=true size='lg'>Buttons</Btn>
		</layout-box>			
	</layout-main>
</template>

<script>
import {HeaderLayout, HeaderDock} from '../components/header'
import {LayoutBox, LayoutMain} from '../components/layouts'
import {TabsHorizon, TabsItemHorizon, TabsVertical, TabsItemVertical} from '../components/tabs'
import {Btn} from '../components/buttons'


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
		Btn
	},
	data () {
		return {
			 
		}
	}
}
</script>
