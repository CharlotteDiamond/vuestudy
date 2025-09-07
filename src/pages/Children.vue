<template>
    <div class = "Child">
        <h2>This is Person's child.</h2>
        <h3>name:{{name}}</h3>
        <button @click="changeChildName">Change Child's Name</button>
    </div>
</template>

<script setup name = "Child" lang="ts">
    import {ref} from 'vue'
    let name = ref("Baby")
    function changeChildName(){
        name.value = "Baby is Person's Child."
    }
</script>

<style lang="css" scoped>
    .Child {
        border: 1px solid black;
        padding: 10px;
    }
</style>