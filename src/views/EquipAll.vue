<template>
  <div class="equip">
    <div class="equip-colum-1">
      <equip :attributes="equipStore.currEquip['shoulder']" @equip-change="equipStore.handleEquipChange"
             @film-change="equipStore.handleFilmChange"></equip>
      <equip :attributes="equipStore.currEquip['trousers']" @equip-change="equipStore.handleEquipChange"
             @film-change="equipStore.handleFilmChange"></equip>
      <equip :attributes="equipStore.currEquip['shoe']"></equip>
    </div>
    <div>
      <equip :attributes="equipStore.currEquip['jacket']" @equip-change="equipStore.handleEquipChange"
             @film-change="equipStore.handleFilmChange"></equip>
      <equip :attributes="equipStore.currEquip['waistband']" @equip-change="equipStore.handleEquipChange"></equip>
    </div>
    <div>
      <equip :attributes="equipStore.currEquip['weapon']"></equip>
      <equip :attributes="equipStore.currEquip['bracelet']"></equip>
      <equip :attributes="equipStore.currEquip['left']" @equip-change="equipStore.handleEquipChange"
             @film-change="equipStore.handleFilmChange"></equip>
      <equip :attributes="equipStore.currEquip['ear']" @equip-change="equipStore.handleEquipChange"></equip>
    </div>
    <div>
      <div style="width: 34px;height: 34px" v-show="true"></div>
      <equip :attributes="equipStore.currEquip['necklace']" @equip-change="equipStore.handleEquipChange"></equip>
      <equip :attributes="equipStore.currEquip['ring']" @equip-change="equipStore.handleEquipChange"></equip>
      <equip :attributes="equipStore.currEquip['right']" @equip-change="equipStore.handleEquipChange"></equip>
    </div>
    <div class="equip-speed flex">
      <div class="equip-speed">
        <equipSpeedShow :name="`护肩`" :speed="equipStore.currEquip['shoulder'].speed"></equipSpeedShow>
        <equipSpeedShow :name="`裤子`" :speed="equipStore.currEquip['trousers'].speed"></equipSpeedShow>
        <equipSpeedShow :name="`鞋子`" :speed="equipStore.currEquip['shoe'].speed"></equipSpeedShow>
      </div>
      <div class="equip-speed">
        <equipSpeedShow :name="`上衣`" :speed="equipStore.currEquip['jacket'].speed"></equipSpeedShow>
        <equipSpeedShow :name="`腰带`" :speed="equipStore.currEquip['waistband'].speed"></equipSpeedShow>
      </div>
      <div class="equip-speed">
        <equipSpeedShow :name="`武器`" :speed="equipStore.currEquip['weapon'].speed"></equipSpeedShow>
        <equipSpeedShow :name="`手镯`" :speed="equipStore.currEquip['bracelet'].speed"></equipSpeedShow>
        <equipSpeedShow :name="`左槽`" :speed="equipStore.currEquip['left'].speed"></equipSpeedShow>
        <equipSpeedShow :name="`耳环`" :speed="equipStore.currEquip['ear'].speed"></equipSpeedShow>
      </div>
      <div class="equip-speed">
        <equipSpeedShow :name="`项链`" :speed="equipStore.currEquip['necklace'].speed"></equipSpeedShow>
        <equipSpeedShow :name="`戒指`" :speed="equipStore.currEquip['ring'].speed"></equipSpeedShow>
        <equipSpeedShow :name="`右槽`" :speed="equipStore.currEquip['right'].speed"></equipSpeedShow>
      </div>
      <div class="equip-speed">
        <equipSpeedShow :name="`装备攻速总和`" :speed="equipStore.equipmentsSpeed"></equipSpeedShow>
      </div>
      <div class="equip-speed" style="margin-left: 30px">
        <div class="flex">
          <el-text class="others-label" type="primary">角色火抗(0-99)：</el-text>
          <el-input-number v-model="fireRes" :min="0" :max="99" @change="handleChangeFireRes"></el-input-number>
        </div>
        <div class="flex">
          <el-text class="others-label" type="primary">裤子增幅等级(0-12)：</el-text>
          <el-input-number v-model="trousersRed" :min="0" :max="12" @change="handleChangeTrousersRed"></el-input-number>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import {CodeToEquip} from "../utils/EquipCode.js";
import {reactive, computed, ref} from "vue";
import equip from '../components/equip.vue'
import equipSpeedShow from '../components/equipSpeedShow.vue'
import {useWeaponSpeedStore} from "../store/weaponSpeedStore.js";
import {useRoleStore} from "../store/roleStore.js";

const equipStore = useWeaponSpeedStore()
const rolesStore = useRoleStore()
let fireRes = ref(rolesStore.roleAttributes.fireResistance)
let trousersRed = ref(rolesStore.roleAttributes.trousersRed)

const handleChangeFireRes = (val) => {
  rolesStore.changeFireRes(val)
}
const handleChangeTrousersRed = (val) => {
  rolesStore.changeTrousersRed(val)
}
</script>

<style scoped>
.equip {
  display: flex;
  justify-content: flex-start;
}

.equip-speed {
  margin-left: 10px;
}

.others-label {
  width: 150px;
  text-align: justify;
  text-align-last: justify;
}
</style>