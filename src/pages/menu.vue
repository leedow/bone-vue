<template>
	<header-layout title='Bone Vue'>
		<header-dock align='left'>
			<a v-link="{ path: '/' }"><Icon type="back"></Icon></a>
		</header-dock>
		Tabs side
		<header-dock align='right'>
			<a href="">Github</a>
		</header-dock>
	</header-layout>
	<layout-side-menu>
		<tabs-side>
			<tabs-item-side>
					星期一
			</tabs-item-side>
			<tabs-item-side current=true>
					星期二
			</tabs-item-side>
		</tabs-side>
	</layout-side-menu>
	<layout-main class="bo-side-p">
		<list v-ref:mylist @list-scroll="loading">
			<list-item v-for="item in data" >
				<layout-box p="1111">
					<product :data="pro"></product>	
				</layout-box>
			</list-item>		 
		</list> 	
	</layout-main>
</template>

<script>
import {HeaderLayout, HeaderDock} from '../components/header'
import {LayoutBox, LayoutMain, LayoutSideMenu, GridRow, GridCol} from '../components/layouts'
import {TabsHorizon, TabsItemHorizon, TabsVertical, TabsItemVertical, TabsSide, TabsItemSide} from '../components/tabs'
import {Btn} from '../components/buttons'
import {Icon} from '../components/common'
import {FormGroup, FormInput} from '../components/form'
import {List, ListItem} from '../components/list'
import {Product} from '../jishibao'


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
		TabsSide,
		TabsItemSide,
		Btn,
		Icon,
		FormGroup,
		FormInput,
		List,
		ListItem,
		Product
	},
	ready:function(){
		this.loading();
		//console.log(this.data)
	},
	methods:{
		loading: function(){
			var mylist = this.$refs.mylist;
			var _this = this;
			$.ajax({
				url: '/dist/data.json',
				type: 'get',
				success: function(data){
					console.log('ajaxing success')
					mylist.addData(data, 'name');
					console.log('Data size:' + mylist.getTotal());
					console.log('Page size:' + mylist.pageSize);
					console.log('Pages:' + mylist.getPages())
					_this.data = mylist.getData();
				}
			})
		}
	},
	events: {
		 
	},
	data () {
		return {
			data: [],
			pro: {
				name:'test',
				description: 'description',
				amount: 1
			}
		}
	}
}
</script>
