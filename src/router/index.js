import Vue from 'vue'
import Router from 'vue-router'
import ChartComponent from '../components/Charts.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Line_Charts',
      component: ChartComponent
    }
  ]
})
