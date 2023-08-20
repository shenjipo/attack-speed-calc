<template>
  <div class="dress" v-show="attributes.parent!=='PiFu'">
    <el-image :fit="`fill`" :src="attributes.src" :title="attributes.name" @click="showDialog"></el-image>
    <el-dialog
        v-model="dialogVisible"
        :title="attributes.name+'装扮选择'"
        width="30%"
    >
      <el-radio-group v-model="radio" @change="$emit('dressChange',attributes.parent,radio)">
        <el-radio label="pink" size="large">神器</el-radio>
        <el-radio label="purple" size="large">稀有</el-radio>
        <el-radio label="blue" size="large">高级</el-radio>
      </el-radio-group>

      <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          确认
        </el-button>
      </span>
      </template>
    </el-dialog>

  </div>
</template>

<script setup>
import {ref} from 'vue'


const {attributes} = defineProps(['attributes'])

let dialogVisible = ref(false)
let radio = ref(attributes.level)
const showDialog = () => {
  dialogVisible.value = true
}

</script>

<style scoped>
.dress {
  border-radius: 3px;
  cursor: pointer;
}

.el-image {
  width: 100%;
  height: 100%
}
</style>