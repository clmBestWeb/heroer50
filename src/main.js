import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

// 导入全局的样式
// 导入bootstrap样式
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/index.css';

// 导入路由组件
import HeroList from './views/heroes/List.vue'
import EquipList from './views/equips/List.vue'
import WeaponList from './views/weapons/List.vue'

//Vue.use()注册VueRouter插件
Vue.use(VueRouter);

//创建路由对象
const router = new VueRouter({
    // 路由规则
    routes: [
        { path: '/heroes', component: HeroList },
        { path: '/equips', component: EquipList },
        { path: '/weapons', component: WeaponList }
    ]
})
new Vue({
    el: '#app',
    render: h => h(App),
    router
})