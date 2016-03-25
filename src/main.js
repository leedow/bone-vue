import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

 
import Index from './pages/index.vue'
import Tabs from './pages/tabs.vue'
import Buttons from './pages/buttons.vue'
import form from './pages/form.vue'
import list from './pages/list.vue'

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
    },
    '/form': {
    	component: form
    },
    '/list': {
        component: list
    }
})

router.start(App, '#app');

 