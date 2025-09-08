//跟组件名差不多能看出来即可
import { defineStore } from "pinia";

export const useTalkStore = defineStore('lovetalk',{
    state(){
        return{
        talklist:[
            {id:'talk1',title:'sdfghjk'},
            {id:'talk2',title:'hgfds'},
            {id:'talk3',title:'1234567k'},
            {id:'talk4',title:'9876543'}
            ]
        }
    }
})