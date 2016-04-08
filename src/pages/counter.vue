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
		<layout-box p='1111'>
			<form-group type='blank'>		
				<form-counter v-ref:mycounter max=5 min=2 val=3></form-counter>
				<btn type="primary" size="sm" name="回滚" @btn-click="rollback"></btn>
				<btn type="primary" size="sm" name="禁止＋" @btn-click="disabler"></btn>
				<btn type="primary" size="sm" name="禁止－" @btn-click="disablel"></btn>
			</form-group>
			<div class="bo-clear"></div>
		</layout-box>	
		<layout-box p='1111'>
			<form-group type='blank'>		
				<form-counter v-ref:mycounter type="2" max=5 min=2 val=3></form-counter>
				<btn type="primary" size="sm" name="回滚" @btn-click="rollback"></btn>
				<btn type="primary" size="sm" name="禁止＋" @btn-click="disabler"></btn>
				<btn type="primary" size="sm" name="禁止－" @btn-click="disablel"></btn>
			</form-group>
			<div class="bo-clear"></div>
		</layout-box>	 
	</layout-main>
</template>

<script>
import {HeaderLayout, HeaderDock} from '../components/header'
import {LayoutBox, LayoutMain, GridRow, GridCol} from '../components/layouts'
import {TabsHorizon, TabsItemHorizon, TabsVertical, TabsItemVertical} from '../components/tabs'
import {Btn} from '../components/buttons'
import {Icon} from '../components/common'
import {FormGroup, FormInput, FormSelect, FormCode, FormCounter} from '../components/form'


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
		FormCode,
		FormCounter
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
			
		},
		rollback: function(){
			this.$refs.mycounter.rollback();
		},
		disablel: function(){
			this.$refs.mycounter.setLbtn(false);
		},
		disabler: function(){
			this.$refs.mycounter.setRbtn(false);
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
			  		text: '1111',
			  		selected: 'selected'
			  },{
			  		val: '1',
			  		text: '22222'
			  }]
		}
	}
}
</script>
