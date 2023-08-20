import {defineStore} from 'pinia'
import {reactive, computed} from "vue"
import {CodeToEquip} from "../utils/EquipCode.js";


export const useWeaponSpeedStore = defineStore('weapon', () => {
  let currEquip = reactive({
    shoulder: {...CodeToEquip['shoulder']['TianCai'], film: false},
    jacket: CodeToEquip['jacket']['TanXian'],
    weapon: CodeToEquip['weapon']['Others'],
    trousers: {...CodeToEquip['trousers']['JiXie'], film: true},
    waistband: CodeToEquip['waistband']['XingMie'],
    bracelet: CodeToEquip['bracelet']['ChuXue'],
    necklace: CodeToEquip['necklace']['YuanZiHe'],
    shoe: CodeToEquip['shoe']['JiXie'],
    left: CodeToEquip['left']['PinJi'],
    ring: CodeToEquip['ring']['NengLiang'],
    ear: CodeToEquip['ear']['YinNi'],
    right: CodeToEquip['right']['ZuZhou'],
  })
  const setEquipmentsSpeed = function (equipName, speed) {
    currEquip[equipName].speed = speed
  }
  const equipmentsSpeed = computed(() => {
    let currSpeed = 0
    Object.keys(currEquip).forEach(item => {
      currSpeed += currEquip[item].speed
    })

    if (currEquip['shoulder'].film) {
      currSpeed += 3
    }
    if (currEquip['jacket'].film) {
      currSpeed += 4
    }
    if (currEquip['trousers'].film) {
      currSpeed += 8
    }
    if (currEquip['left'].film) {
      currSpeed += 4
    }
    return currSpeed
  })
  const handleEquipChange = (val) => {
    currEquip[val.parent] = val
  }
  const handleFilmChange = (parent) => {
    currEquip[parent].film = !currEquip[parent].film
  }
  return {
    currEquip,
    equipmentsSpeed,
    handleEquipChange,
    handleFilmChange,
    setEquipmentsSpeed
  }
})