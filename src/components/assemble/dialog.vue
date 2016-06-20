<template>
	<div id="bo-dialog-layout" v-show="show" transition="layout" transition-mode="out-in">
		<div class="container bo-dialog" v-show="show" transition="dialog" transition-mode="out-in">
			<h3 class="dialog-title">{{config.title}}</h3>
			<div class="dialog-content">{{content}}</div>
			<div class="dialog-buttons" v-if="type=='confirm'">
				<button class="button-no" @click="no">{{config.buttonsName[1]}}</button>
				<button class="button-ok" @click="ok">{{config.buttonsName[0]}}</button>
			</div>

			<div class="dialog-buttons" v-if="type=='alert'">
				<button class="button" @click="no">{{config.buttonsName[0]}}</button>				 
			</div>
		</div>
	</div>
</template>
<style>
.layout-transition {   
    transition: all .3s ease;   
}
 
.layout-enter, .layout-leave {
    opacity: 0;
    
}
 
.dialog-transition {   
    transition: all .3s ease;   
}
 
.dialog-enter, .dialog-leave {
    opacity: 0;
    transform: translate3d(0,-40px, 0);
}

</style>
<script>
 

export default {
	props: {
		id: {
			default: new Date().getTime()
		},
		type: {
			default: 'alert' //alert || confirm
		},
		config: {
			default: {
				title: '提 醒',
				buttonsName: ['确 定', '取 消']
			}
		},
		content: {
			default: ''
		},
		show: {
			default: false
		}
	},
	created: function(){

	},
	ready: function(){
		 
	},
	methods: {
		 ok: function(){
		 	this.$dispatch('dialog-ok', this);
		 },
		 no: function(){
		 	this.$dispatch('dialog-no', this);
		 },
		 open: function(){
		 	this.show = true;
		 },
		 close: function(){
		 	this.show = false;
		 }
	},
	data () {
		return {
		 
		}
	}
}
</script>
