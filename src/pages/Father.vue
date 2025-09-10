<template>
    <div class="father">
        <h3>Father Component</h3>
        <h4 v-show="toy">son gives {{ toy }} to father</h4>
        <Child @sendtoy ="savetoy"/>
    </div>
</template>

<script setup lang="ts" name = "Father">
    import Child from './Child.vue'
    import {ref} from 'vue';
    let toy=ref('')
    function savetoy(value:String){
        toy.value = value
    }
</script>

<style scoped>
</style>