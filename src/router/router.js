import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// import App from '../App.vue'
import login from '../page/login.vue'//登录
import home from '../page/home.vue'//首页
import register from '../page/register.vue'//注册
import forgetpwd from '../page/forgetpwd.vue'//忘记密码
import roles from '../page/roles.vue'//角色选择

const routes = [
	{
		path: "/",
		component: home
	},{
	    path: '/login',
	    component: login
	},{
	    path: '/register',
	    component: register
	},{
	    path: '/forgetpwd',
	    component: forgetpwd
	}
];

const router = new VueRouter({
    routes: routes
});

export default router;
