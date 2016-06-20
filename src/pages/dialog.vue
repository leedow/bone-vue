<template>
	<header-layout title='Bone Vue'>
		<header-dock align='left'>
			<a v-link="{ path: '/' }"><Icon type="back"></Icon></a>
		</header-dock>
		List
		<header-dock align='right'>
			<a href="">Github</a>
		</header-dock>
	</header-layout>
	<layout-main>
		<div style="heigh:50px;"></div>
		<btn @btn-click="open" name="打开弹窗"></btn>
		 <dialog :show.sync="show" @dialog-ok="ok" @dialog-no="no"></dialog>
	</layout-main>
</template>

<script>
import {HeaderLayout, HeaderDock} from '../components/header'
import {LayoutBox, LayoutMain, LayoutSideMenu, GridRow, GridCol} from '../components/layouts'
import {TabsHorizon, TabsItemHorizon, TabsVertical, TabsItemVertical} from '../components/tabs'
import {Btn} from '../components/buttons'
import {Icon} from '../components/common'
import {FormGroup, FormInput} from '../components/form'
import {List, ListItem} from '../components/list'
import Dialog from '../components/assemble/dialog.vue'


export default {
	components:{
		HeaderLayout, 
		HeaderDock,
		LayoutMain,
		LayoutBox,
		LayoutSideMenu,
		TabsHorizon,
		TabsItemHorizon,
		TabsVertical,
		TabsItemVertical,
		Btn,
		Icon,
		FormGroup,
		FormInput,
		List,
		ListItem,
		Dialog
	},
	ready:function(){
	 
		//console.log(this.data)
	},
	methods:{
	 	open: function(){
	 		this.show = true;
	 	},
	 	ok: function(){
	 		this.show = true;
	 	},
	 	no: function(){
	 		this.show = false;
	 	}
	},
	events: {
		 
	},
	data () {
		return {
			data: [],
			show: false
		}
	}
}
</script>
