//配置路由信息
import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home'
import about from '../components/about'
import user from "../components/user"
const homeNews = () => import('../components/homeNews')
const homeMessage = () => import('../components/homeMessage')
// 2. 通过Vue.use(插件)，安装插件
Vue.use(Router)
//3. 创建 router路由对象
const routes = [
    //配置路由和组件之间的对应关系
    {
        path:'',
        redirect:'/home'
    },
    {
        path: '/home',//url
        component: home ,//组件名
        children:[
            {
                path:'news',
                component:homeNews
        },{
            path: 'message',
            component:homeMessage
            }
        ],
        meta: {title:'首页'}
    },
    {
        path: '/about',//url
        component: about,//组件名
        meta:{title:'关于'},
    },{
        path:'/user/:userId',
        component: user,
        meta:{title:'关于'},
    }
]
const router = new Router({
    //配置路由和组件之间的应用关系
    routes,
    mode:'history'
})
router.beforeEach((to,from,next)=>{
    document.title=to.matched[0].meta.title
    next()
})
//4.导出router实例
export default router