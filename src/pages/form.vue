<template>
	<header-layout title='Bone Vue'>
		<header-dock align='left'>
			<a v-link="{ path: '/' }"><Icon type="back"></Icon></a>
		</header-dock>
		Form
		<header-dock align='right'>
			<a href="">Github</a>
		</header-dock>
	</header-layout>
	<layout-main>
		<layout-box>
			<tabs-horizon>
				<tabs-item-horizon current=true size=6>移动样式</tabs-item-horizon>
				<tabs-item-horizon size=6>传统样式</tabs-item-horizon>
			</tabs-horizon>
		</layout-box>
		<layout-box m="1000">
			<form-group type='blank'>		
				<form-input place-holder="请输入账号" label="账 号" size="lg"></form-input>
				<form-input place-holder="请输入密码" label="密 码" type="password" size="lg"></form-input>
			</form-group>
		</layout-box>	 
		<layout-box m='1000'>
			<form-group type='blank'>		
				<form-input place-holder="请输入账号" icon="people" size="lg"></form-input>
				<form-input place-holder="请输入密码" type="password" icon="lock" size="lg"></form-input>
			</form-group>
		</layout-box>	 	
	</layout-main>
</template>

<script>
import {HeaderLayout, HeaderDock} from '../components/header'
import {LayoutBox, LayoutMain} from '../components/layouts'
import {TabsHorizon, TabsItemHorizon, TabsVertical, TabsItemVertical} from '../components/tabs'
import {Btn} from '../components/buttons'
import {Icon} from '../components/common'
import {FormGroup, FormInput} from '../components/form'


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
		Btn,
		Icon,
		FormGroup,
		FormInput
	},
	methods: {
		test: function(e){
			alert('Click Me');
		}
	},
	data () {
		return {
			 
		}
	}
}
</script>
