import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Hello from './components/Hello.vue'
import A from './components/A.vue'

import Index from './pages/index.vue'
import Tabs from './pages/tabs.vue'
import Buttons from './pages/buttons.vue'

Vue.use(VueRouter);
var router = new VueRouter()

router.map({
	'/': {
		component: Index
	},
    '/tabs': {
        component: 　Tabs 
    },
    '/buttons': {
    	component: Buttons
    }
})

router.start(App, '#app');

 