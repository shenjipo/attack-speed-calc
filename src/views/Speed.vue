<template>
  <div class="speed">
    <div>
      <el-text type="danger">当前攻速和: </el-text>
      <el-text type="info">{{ speedStore.allSpeed }}</el-text>
    </div>
    <div>
      <el-text type="primary" v-if="speedStore.allSpeed<140">还差 {{
          (140 - speedStore.allSpeed).toFixed(1)
        }} 攻速触发30技工:
      </el-text>
      <el-text type="primary" v-else>触发30技工</el-text>
    </div>
  </div>

</template>

<script setup>
import {useSpeedStore} from "../store/speedStore.js";

const speedStore = useSpeedStore()


</script>

<style scoped>
.speed {
  margin-left: 150px;
}
</style>