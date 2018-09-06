import Vue from 'vue';
import VueRouter from 'vue-router';
// 导入路由组件
import HeroList from '../views/heroes/List.vue'
import EquipList from '../views/equips/List.vue'
import WeaponList from '../views/weapons/List.vue'
import HeroAdd from '../views/heroes/Add.vue'
//Vue.use()注册VueRouter插件
Vue.use(VueRouter);

//创建路由对象
const router = new VueRouter({
    // 设置精确激活类样式
    linkExactActiveClass: 'active',
    // 路由规则
    routes: [
        { path: '/', redirect: '/heroes' },
        { path: '/heroes', component: HeroList },
        { path: '/equips', component: EquipList },
        { path: '/weapons', component: WeaponList },
        { path: '/heroes/add', component: HeroAdd },
    ]
})

// 导出对象
export default router;