<template>
  <div class="flex equip-text">
    <el-text type="primary">{{name}}: </el-text>
    <el-text type="info">{{speed}}</el-text>
  </div>
</template>

<script setup>
const {name,speed} = defineProps(['name','speed'])
</script>

<style scoped>

</style>