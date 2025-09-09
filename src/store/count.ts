//count.ts命名跟组件名差不多能看出来即可
import { defineStore } from "pinia";

export const useCountStore = defineStore('count',{
    state(){
        return{
            sum:5,
            something:"随便写点什么",
            trysomething:"试一试"
        }
    },
    getters:{
        bigSum:state=>state.sum*10,//用this不能用箭头函数
        // bigSum(state){
        //     return state.sum*10
        // },
        upperSomething(state){
            return this.something.length
        }
    }
})