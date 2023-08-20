import {defineStore} from "pinia";
import {useOtherSpeedStore} from "./otherSpeedStore.js";
import {useWeaponSpeedStore} from "./weaponSpeedStore.js";
import {useDressSpeedStore} from "./dressSpeedStore.js";
import {computed} from "vue";

export const useSpeedStore = defineStore('speed', () => {
  const otherStore = useOtherSpeedStore()
  const dressStore = useDressSpeedStore()
  const equipStore = useWeaponSpeedStore()
  const allSpeed = computed(() => {
    return otherStore.otherAllSpeed + dressStore.allDressSpeed + equipStore.equipmentsSpeed
  })
  return {
    allSpeed
  }
})