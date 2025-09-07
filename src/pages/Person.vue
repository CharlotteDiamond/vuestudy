<template>
    <div class="person">
        <h2>name:{{name}}</h2>
        <h2>age:{{age}}</h2>
        <button @click="changeName">change name</button>
        <button @click="changeAge">change age</button>
        <button @click="showTel">check tel</button>
        <router-view></router-view>
    </div>
</template>

<!-- <script lang = "ts">
    export default{
        name:'Person',
        // setup()中的this是undefined且setup不可读取data和method中的写法，但反过来可以
        // setup(){}
        // Optional API写法
        // data(){
        //     return {
        //         name:'john',
        //         age:17,
        //         tel:'128'
        //     }
        // },
        // methods:{
        //     showTel(){
        //         alert(this.tel)
        //     },
        //     changeName(){
        //         this.name = "ss"
        //     },
        //     changeAge(){
        //         this.age+=1
        //     }
        // }
    }
</script> -->

<!-- 组合式API -->
<script setup name = "Person" lang="ts">
    import {ref} from 'vue'
    let name = ref('alice') //非响应式
    let age = ref(12) //非响应式
    let tel = "154" //非响应式

    // const route = useRoute()
    // const router = useRouter()

    // console.log(route.query)
    // console.log(route.paramas)
    // console.log(router.push)
    // console.log(router.replace)

    function changeName(){
        name.value = 'ss'
    }
    function changeAge(){
        age.value+=1
    }
    function showTel(){
        alert(tel)
    }
    // return {name,age}
</script>

<style scoped>
    .person {
        background-color:skyblue;
    }
    button {
        margin:0 5px;
    }
</style>