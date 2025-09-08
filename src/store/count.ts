//跟组件名差不多能看出来即可
import { defineStore } from "pinia";

export const useCountStore = defineStore('count',{
    state(){
        return{
            sum:5
        }
    }
})