<template>
	<ul class="bo-list">
		<slot></slot>
	</ul>
</template>

<script>
export default {
	props:{
		pageSize: {
			default: 0
		}
	},
	ready: function(){
		var _this = this;
		window.onscroll = function(){
			var body = document.body;

			var h = document.body.scrollHeight;
			var s = document.documentElement.scrollTop + document.body.scrollTop;
			var ch = document.body.clientHeight;
			 
			if(s>= h-ch){
				console.log('loading')
				 _this.$dispatch('list-scroll', '');
			}
		}
	},
	methods: {
		setData: function(data, key){//data=[] , key=String
			this.data = [];
			for(var i =0; i<data.length; i++){
				var item = {
					key: data[i][key],
					obj: data[i]
				}
				this.data.push(item);
			}
		},
		addData: function(data, key){//data=[] , key=String
			//this.data = [];
			if(this.pageSize==0){
				this.pageSize = data.length;
			}
			for(var i =0; i<data.length; i++){
				var item = {
					key: data[i][key],
					obj: data[i]
				}
				this.data.push(item);
			}
		},
		addOneData: function(data, key){//data={} , key=String
			var item = {
				key: data[key],
				obj: data
			}
			this.data.push(item);
		},
		removeData: function(key){
			for(var i=0; i<=this.data.length; i++){
				if(this.data[i].key == key){
					delete this.data[i];
				}	
			}
		},
		getData: function(){
			return this.data;
		},
		getPages: function(){
			return Math.ceil(this.data.length/this.pageSize);
		}, 
		getTotal: function(){
			return this.data.length;
		}
	},
	data () {
		return {
			 data: []
		}
	}
}
</script>
