import {defineStore} from 'pinia'
import {reactive, computed} from "vue"
import {useWeaponSpeedStore} from "./weaponSpeedStore.js";

export const useRoleStore = defineStore('role', () => {
  let roleAttributes = reactive({
    fireResistance: 99,
    trousersRed: 12
  })
  const equipStore = useWeaponSpeedStore()

  function changeFireRes(val) {
    roleAttributes.fireResistance = val
    if (equipStore.currEquip['waistband'].name === '星灭光离腰带') {
      let curWaistSpeed = Math.round(roleAttributes.fireResistance / 11) * 5
      equipStore.setEquipmentsSpeed('waistband', curWaistSpeed)
    }
  }

  function changeTrousersRed(val) {
    roleAttributes.trousersRed = val
    if (equipStore.currEquip['trousers'].name === '机械装甲下装') {
      let curTrousersSpeed = roleAttributes.trousersRed * 2
      equipStore.setEquipmentsSpeed('trousers', curTrousersSpeed)
    }
  }

  return {
    roleAttributes,
    changeFireRes,
    changeTrousersRed
  }
})