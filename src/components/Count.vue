<template>
    <div class="count">
        <h2>Sum is :{{countStore.sum}}</h2>
        <h3>看能出现什么：{{ countStore.something }},再试试{{ countStore.try }}</h3>
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

    const countStore = useCountStore()
    // console.log('@@@',countStore.sum)

    let sum = ref(1)
    let choice = ref(1) //

    function add(){
        // countStore.sum+=1
        countStore.$patch({
            sum:22,
            something:"??",
            try:"shshsh"
        })
        //sum.value+=choice.value
    }
    function minus(){
        countStore.sum-=1
        // sum.value-=choice.value
    }
</script>

<script scoped>
</script>