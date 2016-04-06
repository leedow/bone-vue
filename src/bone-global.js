import Vue from 'vue'
import {HeaderLayout, HeaderDock} from './components/header'
import {LayoutBox, LayoutMain,LayoutSideMenu, GridRow, GridCol} from './components/layouts'
import {TabsHorizon, TabsItemHorizon, TabsVertical, TabsItemVertical, TabsSide, TabsItemSide} from './components/tabs'
import {Btn} from './components/buttons'
import {Icon} from './components/common'
import {FormGroup, FormInput, FormSelect, FormCode, FormCounter} from './components/form'
import {Product, ShoppingDock} from './jishibao'
import {List, ListItem} from './components/list'

window.Vue = Vue;

window.Bone = {
		HeaderLayout: HeaderLayout,
		HeaderDock: HeaderDock,
		LayoutBox: LayoutBox,
		LayoutMain:LayoutMain,
		LayoutSideMenu: LayoutSideMenu,
		GridRow:GridRow,
		GridCol:GridCol,
		TabsHorizon:TabsHorizon,
		TabsItemHorizon:TabsItemHorizon,
		TabsVertical:TabsVertical,
		TabsItemVertical:TabsItemVertical,
		TabsSide:TabsSide,
		TabsItemSide:TabsItemSide,
		Btn:Btn,
		Icon:Icon,
		FormGroup:FormGroup,
		FormInput:FormInput,
		FormSelect:FormSelect,
		FormCode:FormCode,
		FormCounter:FormCounter,
		Product:Product,
		ShoppingDock:ShoppingDock,
		List:List,
		ListItem:ListItem

};

