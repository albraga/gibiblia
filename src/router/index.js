import Vue from 'vue'
import VueRouter from 'vue-router'
//import About from '../components/About.vue'
import Home from '../components/Home.vue'
//import Contact from '../components/Contact.vue'
//import Dthree from '../components/Dthree.vue'
//import Threejs from '../components/Threejs.vue'
//import Jqueryuijs from '../components/Jqueryuijs.vue'
//import Jspdfjs from '../components/Jspdfjs.vue'

Vue.use(VueRouter)

export default new VueRouter({
	routes: [
		{
			path: '/',
			component: Home
		}
		// {
		// 	path: '/about',
		// 	component: About
		// },
		// {
		// 	path: '/contact',
		// 	component: Contact
		// },
		// {
		// 	path: '/dthree',
		// 	component: Dthree
		// },
		// {
		// 	path: '/threejs',
		// 	component: Threejs
		// },
		// {
		// 	path: '/jqueryuijs',
		// 	component: Jqueryuijs
		// },
		// {
		// 	path: '/jspdfjs',
		// 	component: Jspdfjs
		// }
	]
})