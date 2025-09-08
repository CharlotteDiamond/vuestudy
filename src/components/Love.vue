<template>
    <div class="talk">
        <h2>Get a love talk</h2>
        <button @click="getlovetalk">get a love talk</button>
        <ul>
            <li v-for="talk in talkStore.talklist":key = "talk.id">{{ talk.title }}</li>
        </ul>
    </div>
    <Count/>
</template>

<script setup lang="ts" name = "lovetalk">
    import { reactive } from 'vue';
    import axios from 'axios';
    import { nanoid } from 'nanoid';
    import {useTalkStore} from '../store/lovetalk'

    const talkStore = useTalkStore()

    let talklist = reactive([
        {id:'talk1',title:'sdfghjk'},
        {id:'talk2',title:'hgfds'},
        {id:'talk3',title:'1234567k'},
        {id:'talk4',title:'9876543'}
    ])

    async function getlovetalk(){
        let {data:{content:title}} = await axios.get('http://api.uomg.com/api/rand.qinghua?format=json')
        let obj = {id:nanoid(),title}
        talklist.unshift(obj)
    }
</script>

<style scoped>
</style>