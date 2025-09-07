import {createRouter,createWebHistory} from 'vue-router'

import HelloWorld from "../pages/HelloWorld.vue";
import Person from '../pages/Person.vue'
import Children from '../pages/Children.vue';

const router = createRouter({
    history:createWebHistory(),// router work mode
    routes:[
        {
            name:'front-page', //name the router
            path:'/home',
            component:HelloWorld
        },
        {
            path:'/person',
            component:Person,
            children:[
                {
                name:'haizi',
                path:'child',
                component:Children
                }
            ]
        },
        {
            path:'/haveatry',
            redirect:'/home'
        }
    ]
})

export default router