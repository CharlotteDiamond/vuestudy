<template>
    <div class="child">
        <h3>Child Component</h3>
        <h4>toy:{{ toy }}</h4>
        <button @click="emit('sendtoy',toy)">test</button>
    </div>
</template>

<script setup lang="ts" name = "Child">
    import {ref,onMounted} from 'vue';

    let toy = ref('bus')
    const emit = defineEmits(['sendtoy'])

    // onMounted(()=>{
    //     setTimeout{()=>{
    //         emit('sendtoy')
    //     },2000}
    // }

    function sendtoy() {
        emit('sendtoy', toy.value)
    }
</script>

<style scoped>
</style>