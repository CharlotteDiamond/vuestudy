<template>
    <div class="count">
        <h2>Sum is :{{sum}},放大之后:{{ bigSum }}</h2>
        <h3>看能出现什么：{{ something }},再试试{{ trysomething }}</h3>
        <select v-model.number="choice">
            <option value="1">1</option>
            <option value="5">5</option>
            <option value="10">10</option>
        </select>
        <button @click="add">add</button>
        <button @click="minus">minus</button>
    </div>
</template>

<script setup name="count" lang="ts">
    import {ref} from 'vue'
    import {useCountStore} from '../store/count'
    import { storeToRefs,defineStore} from 'pinia';

    const countStore = useCountStore()
    // console.log('@@@',countStore.sum)
    const {sum,something,trysomething,bigSum} = storeToRefs(countStore)
    // let sum = ref(1)
    let choice = ref(1) //

    function add(){
        // countStore.$patch({
        //     sum:22,
        //     something:"??",
        //     try:"shshsh"
        // })
        countStore.sum+=choice.value
        // countStore.increment(choice.value)
    }
    function minus(){
        // countStore.decreatment
        countStore.sum-=choice.value
        // sum.value-=choice.value
    }
</script>

<script scoped>
</script>