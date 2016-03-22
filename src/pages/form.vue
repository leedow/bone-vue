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
			<form-group type='blank'>		
				<form-input place-holder="请输入账号" icon="people" size="lg"></form-input>
				<form-input place-holder="请输入密码" type="password" icon="lock" size="lg"></form-input>
			</form-group>
		</layout-box>	

		<layout-box m="1000">
			<form-group type='blank' v-ref:myform>		
				<form-input place-holder="请输入账号" name="account" label="账 号" size="lg" format='email'></form-input>
				<form-input place-holder="请输入密码" name="password" label="密 码" type="password" size="lg"></form-input>
			</form-group>
		</layout-box>	 
		  	
		<grid-row p='1111'>
			<Btn type="primary" size="lg" block=true @btn-click="submit">提 交</Btn>
		</grid-row>
		
	</layout-main>
</template>

<script>
import {HeaderLayout, HeaderDock} from '../components/header'
import {LayoutBox, LayoutMain, GridRow, GridCol} from '../components/layouts'
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
		FormInput,
		GridRow,
		GridCol
	},
	methods:{
		submit: function(){
		 	//alert('submit')
			this.$broadcast('form-verify', '');
			if(this.$refs.myform.pass){
				console.log('sending data')
				console.log(this.$refs.myform.data)
			} else {
				console.log('data wrong')
			}
			
		}
	},
	events: {
		'input-wrong': function(){
			//alert('cuowu')
		}
	},
	data () {
		return {
			  
		}
	}
}
</script>
