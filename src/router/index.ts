import {createRouter,createWebHistory} from 'vue-router'

import HelloWorld from "../pages/HelloWorld.vue";
import Person from '../pages/Person.vue'
import Children from '../pages/Children.vue';
import Father from '../pages/Father.vue';

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
        },
        {
            path:'/event',
            component:Father
        }
    ]
})

export default router