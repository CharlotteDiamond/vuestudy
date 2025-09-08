<template>
    <div class="count">
        <h2>Sum is :{{ sum }}</h2>
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

    let sum = ref(1)
    let choice = ref(1) //

    function add(){
        sum.value+=choice.value
    }
    function minus(){
        sum.value-=choice.value
    }
</script>

<script scoped>
</script>