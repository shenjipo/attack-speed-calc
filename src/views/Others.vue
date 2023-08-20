<template>
  <div class="flex">
    <div>
      <div class="flex">
        <el-text class="others-label" type="primary">称号：</el-text>
        <el-input-number v-model="otherStore.otherSpeed.title" :min="0" :max="4" :disabled="!isTitleInput"/>
        <el-select v-model="otherStore.otherSpeed.title" placeholder="Select" v-if="!isTitleInput">
          <el-option
              v-for="item in titleOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
          />
        </el-select>
        <el-switch v-model="isTitleInput" active-text="手动输入" inactive-text="手动选择"/>
      </div>
      <div class="flex">
        <el-text class="others-label" type="primary">宠物：</el-text>
        <el-input-number v-model="otherStore.otherSpeed.pet" :min="0" :max="5" :disabled="!isPetInput"/>
        <el-select v-model="otherStore.otherSpeed.pet" placeholder="Select" v-if="!isPetInput">
          <el-option
              v-for="item in petOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
          />
        </el-select>
        <el-switch v-model="isPetInput" active-text="手动输入" inactive-text="手动选择"/>
      </div>
      <div class="flex">
        <el-text class="others-label" type="primary">宠物装备：</el-text>
        <el-input-number v-model="otherStore.otherSpeed.petEquip" :disabled="false" :min="0" :max="4"/>
      </div>
      <div class="flex">
        <el-text class="others-label" type="primary">勋章守护珠：</el-text>
        <el-input-number v-model="otherStore.otherSpeed.medal" :disabled="true"/>
        <el-select v-model="otherStore.otherSpeed.medal" placeholder="Select">
          <el-option
              v-for="item in medalOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
          />
        </el-select>
      </div>
      <div class="flex">
        <el-text class="others-label" type="primary">辟邪玉：</el-text>
        <el-input-number v-model="otherStore.otherSpeed.jade" :disabled="false" :min="0" :max="20"/>
      </div>
      <div class="flex">
        <el-text class="others-label" type="primary">纹章：</el-text>
        <el-input-number v-model="otherStore.otherSpeed.gad" :disabled="false" :min="0" :max="8"/>
      </div>
      <div class="flex" style="align-items: center">
        <el-text class="others-label" type="primary">名称装饰卡：</el-text>
        <el-input-number v-model="otherStore.otherSpeed.nameCard" :disabled="false" :min="0" :max="1"/>
        <div style="margin-left: 100px">
          <el-text class="others-label" type="danger">其它部分攻速和：</el-text>
          <el-text class="others-label" type="info">{{ otherStore.otherAllSpeed }}</el-text>
        </div>
      </div>

    </div>
    <div style="margin-left: 50px">
      <div>
        <el-text type="primary">徽章设置：点击按钮添加徽章(最多10个)</el-text>
        <el-button type="primary" size="small" @click="otherStore.addBadge">添加徽章(默认灿烂)</el-button>
      </div>
      <div v-for="item in otherStore.otherSpeed.badges" class="flex" :key="item.id"
           style="align-items: center;margin-top: 5px">
        <el-text class="badge-text" type="primary">攻速：{{ item.value }}</el-text>
        <el-select v-model="item.value" placeholder="Select">
          <el-option
              v-for="item in badgeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
          />
        </el-select>
        <el-button type="primary" size="small" @click="otherStore.removeBadge(item.id)">删除徽章</el-button>
      </div>
    </div>
  </div>


</template>

<script setup>

import {reactive, ref} from 'vue'
import {useOtherSpeedStore} from "../store/otherSpeedStore.js";

const otherStore = useOtherSpeedStore()

let isTitleInput = ref(false)
let isPetInput = ref(false)

const titleOptions = [
  {
    value: 4,
    label: '23年至尊称号',
  },
  {
    value: 3,
    label: '23年普通称号',
  },
]
const petOptions = [
  {
    value: 4,
    label: '22年普通宠物',
  },
  {
    value: 5,
    label: '23年普通宠物',
  },
]
const medalOptions = [
  {
    value: 3,
    label: '玲珑（粉色）',
  },
  {
    value: 2.4,
    label: '耀眼（紫色）',
  },
]
const badgeOptions = [
  {
    value: 2,
    label: '玲珑攻速',
  },
  {
    value: 1.5,
    label: '灿烂攻速',
  },
  {
    value: 1.1,
    label: '华丽攻速',
  },
]
</script>

<style scoped>
.others-label {
  width: 100px;
  text-align: justify;
  text-align-last: justify;
}

.badge-text {
  width: 70px;
  text-align: justify;
  text-align-last: justify;
}
</style>