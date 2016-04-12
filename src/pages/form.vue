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
				<form-input place-holder="请输入密码" name="password" label="密 码" required=true type="password" size="lg"></form-input>
				<form-input place-holder="请输入手机号" name="phone" label="手机号" format='phone' size="lg"></form-input>
				<form-code 	name="code"
							label="验证码"
							place-holder="输入验证码"></form-code>
				<form-select id="fuck" v-ref:op :data="select"  name="se" label="下 拉" required=true type="password" size="lg"></form-select>
			</form-group>
		</layout-box>	 		  	
		<grid-row p='1111'>
			<Btn type="primary" size="lg" block=true @btn-click="submit" name="提 交"></Btn>
		</grid-row>
	</layout-main>
</template>

<script>
import {HeaderLayout, HeaderDock} from '../components/header'
import {LayoutBox, LayoutMain, GridRow, GridCol} from '../components/layouts'
import {TabsHorizon, TabsItemHorizon, TabsVertical, TabsItemVertical} from '../components/tabs'
import {Btn} from '../components/buttons'
import {Icon} from '../components/common'
import {FormGroup, FormInput, FormSelect, FormCode} from '../components/form'


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
		FormSelect,
		GridRow,
		GridCol,
		FormCode
	},
	ready: function(){
		var _this = this;
		var timer = setTimeout(function(){
			//_this.$refs.op.setSelectedById(2);
		}, 2000);
		 
	},
	methods:{
		submit: function(){
		 	//alert('submit')
			this.$broadcast('form-verify', '');
			if(this.$refs.myform.pass){
				console.log('sending data')
				console.log(this.$refs.myform.data)
			} else {
				this.$refs.myform.setNotice('账号密码不正确')
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
			  select: [{
			  		val: '1',
			  		text: '1111' 
			  },{
			  		val: '2',
			  		text: '22222',
			  		selected: 'selected' 
			  }]
		}
	}
}
</script>
