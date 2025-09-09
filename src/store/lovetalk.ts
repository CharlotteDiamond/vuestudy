//跟组件名差不多能看出来即可
import { defineStore } from "pinia";
import axios from "axios";
import { nanoid } from "nanoid";

// export const useTalkStore = defineStore('lovetalk',{
//     actions:{
//         async getlovetalk(){
//         let {data:{content:title}} = await axios.get('http://api.uomg.com/api/rand.qinghua?format=json')
//         let obj = {id:nanoid(),title}
//         this.talkList.unshift(obj)
//         }
//     },
//     state(){
//         return{
//             talkList:JSON.parse(localStorage.getItem('talkList') as string)||[]
//         // talklist:[
//         //     {id:'talk1',title:'sdfghjk'},
//         //     {id:'talk2',title:'hgfds'},
//         //     {id:'talk3',title:'1234567k'},
//         //     {id:'talk4',title:'9876543'}
//         //     ]
//         }
//     }
// })

//组合式
import { reactive} from "vue";
export const useTalkStore = defineStore('talk',()=>{
    const talklist = reactive(
        JSON.parse(localStorage.getItem('talkList') as string)||[]
    )
    async function getlovetalk(){
        let {data:{content:title}} = await axios.get('http://api.uomg.com/api/rand.qinghua?format=json')
        let obj = {id:nanoid(),title}
        talklist.unshift(obj)
    }
    return {talklist,getlovetalk}
})