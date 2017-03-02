import Vue from 'vue/dist/vue.js'
import HomeComponent from './HomeComponent.vue'

const app = new Vue({
	el: '#app',
	template: '<HomeComponent />',
	components: {
		HomeComponent
	}
})