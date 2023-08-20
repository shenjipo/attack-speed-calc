<template>
  <div class="flex">
    <el-text type="primary">{{name}}: </el-text>
    <el-text type="info">{{speed}}</el-text>
  </div>
</template>

<script setup>
import {ref} from 'vue'
const {name,speed} = defineProps(['name','speed'])


</script>

<style scoped>

</style>