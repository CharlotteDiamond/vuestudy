import {createRouter,createWebHistory} from 'vue-router'

import HelloWorld from "../pages/HelloWorld.vue";
import Person from '../pages/Person.vue'

const router = createRouter({
    history:createWebHistory(),// router work mode
    routes:[
        {
            path:'/home',
            component:HelloWorld
        },
        {
            path:'/person',
            component:Person
        }
    ]
})

export default router