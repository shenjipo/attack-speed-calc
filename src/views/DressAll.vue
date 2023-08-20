<template>
  <div class="flex" style="justify-content: flex-start">
    <div>
      <weaponDress :attributes="currDressStore.currDress['Weapon']"
                   @dress-change="currDressStore.dressChange"></weaponDress>
    </div>
    <div>
      <div class="flex row-1">
        <dress :attributes="currDressStore.currDress['TouBu']" @dress-change="currDressStore.dressChange"></dress>
        <dress :attributes="currDressStore.currDress['MaoZi']" @dress-change="currDressStore.dressChange"></dress>
        <dress :attributes="currDressStore.currDress['LianBu']" @dress-change="currDressStore.dressChange"></dress>
      </div>
      <div class="flex row-2">
        <dress :attributes="currDressStore.currDress['XiongBu']" @dress-change="currDressStore.dressChange"></dress>
        <dress :attributes="currDressStore.currDress['ShangYi']" @dress-change="currDressStore.dressChange"></dress>
        <dress :attributes="currDressStore.currDress['PiFu']"></dress>
      </div>
      <div class="flex row-3">
        <dress :attributes="currDressStore.currDress['YaoBu']" @dress-change="currDressStore.dressChange"></dress>
        <dress :attributes="currDressStore.currDress['XiaZhuang']" @dress-change="currDressStore.dressChange"></dress>
        <dress :attributes="currDressStore.currDress['Xie']" @dress-change="currDressStore.dressChange"></dress>
      </div>
    </div>
    <div class="dress-speed flex">
      <div class="dress-speed-row">
        <dressSpeedShow :name="'武器装扮'" :speed="currDressStore.currDress['Weapon'].speed"></dressSpeedShow>
      </div>
      <div class="dress-speed-row">
        <dressSpeedShow :name="'头部'" :speed="currDressStore.currDress['TouBu'].speed"></dressSpeedShow>
        <dressSpeedShow :name="'胸部'" :speed="currDressStore.currDress['XiongBu'].speed"></dressSpeedShow>
        <dressSpeedShow :name="'腰部'" :speed="currDressStore.currDress['YaoBu'].speed"></dressSpeedShow>
      </div>
      <div class="dress-speed-row">
        <dressSpeedShow :name="'帽子'" :speed="currDressStore.currDress['MaoZi'].speed"></dressSpeedShow>
        <dressSpeedShow :name="'上衣'" :speed="currDressStore.currDress['ShangYi'].speed"></dressSpeedShow>
        <dressSpeedShow :name="'下装'" :speed="currDressStore.currDress['XiaZhuang'].speed"></dressSpeedShow>

      </div>
      <div class="dress-speed-row">
        <dressSpeedShow :name="'脸部'" :speed="currDressStore.currDress['LianBu'].speed"></dressSpeedShow>
        <dressSpeedShow :name="'皮肤'" :speed="currDressStore.currDress['PiFu'].speed"></dressSpeedShow>
        <dressSpeedShow :name="'鞋'" :speed="currDressStore.currDress['Xie'].speed"></dressSpeedShow>
      </div>
      <div class="dress-speed-row">
        <dressSpeedShow :name="'套装攻速'" :speed="currDressStore.suitsSpeed"></dressSpeedShow>
        <dressSpeedShow :name="'装扮攻速总和'" :speed="currDressStore.allDressSpeed"></dressSpeedShow>
      </div>
      <div class="flex" style="flex-direction: column;margin-left: 20px">
        <el-button type="primary" size="small" @click="currDressStore.dressChangeColor('pink')">一键切换神器装扮
        </el-button>
        <el-button class="dress-button" type="primary" size="small" @click="currDressStore.dressChangeColor('purple')">
          一键切换稀有装扮
        </el-button>
        <el-button class="dress-button" type="primary" size="small" @click="currDressStore.dressChangeColor('blue')">
          一键切换高级装扮
        </el-button>
      </div>
    </div>
  </div>

</template>

<script setup>
import dress from '../components/dress.vue'
import dressSpeedShow from '../components/dressSpeedShow.vue'
import weaponDress from '../components/weaponDress.vue'
import {DressCode} from "../utils/DressCode.js";
import {reactive, computed} from "vue";
import {useDressSpeedStore} from "../store/dressSpeedStore.js";

const currDressStore = useDressSpeedStore()

</script>

<style scoped>
.dress-speed {
  margin-left: 40px;
}

.dress-speed-row {
  margin-left: 10px;
}

.dress-button {
  margin-left: 0;
  margin-top: 5px;
}
</style>