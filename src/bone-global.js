import Vue from 'vue'
import {HeaderLayout, HeaderDock} from './components/header'
import {LayoutBox, LayoutMain, GridRow, GridCol} from './components/layouts'
import {TabsHorizon, TabsItemHorizon, TabsVertical, TabsItemVertical} from './components/tabs'
import {Btn} from './components/buttons'
import {Icon} from './components/common'
import {FormGroup, FormInput, FormSelect, FormCode} from './components/form'

window.Vue = Vue;

window.Bone = {
		HeaderLayout: HeaderLayout,
		HeaderDock: HeaderDock,
		LayoutBox: LayoutBox,
		LayoutMain:LayoutMain,
		GridRow:GridRow,
		GridCol:GridCol,
		TabsHorizon:TabsHorizon,
		TabsItemHorizon:TabsItemHorizon,
		TabsVertical:TabsVertical,
		TabsItemVertical:TabsItemVertical,
		Btn:Btn,
		Icon:Icon,
		FormGroup:FormGroup,
		FormInput:FormInput,
		FormSelect:FormSelect,
		FormCode:FormCode

};

