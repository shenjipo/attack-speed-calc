import {defineStore} from 'pinia'
import {reactive, computed} from "vue";
import {DressCode} from "../utils/DressCode.js";

export const useDressSpeedStore = defineStore('dress', () => {
  // 其他配置...
  let currDress = reactive({
    'Weapon': DressCode['Weapon']['purple'],
    'TouBu': DressCode["TouBu"]['pink'],
    'MaoZi': DressCode["MaoZi"]['pink'],
    'LianBu': DressCode["LianBu"]['pink'],
    'XiongBu': DressCode["XiongBu"]['pink'],
    'ShangYi': DressCode['ShangYi']['pink'],
    'PiFu': DressCode["PiFu"]['blue'],
    'YaoBu': DressCode["YaoBu"]['pink'],
    'XiaZhuang': DressCode["XiaZhuang"]['pink'],
    'Xie': DressCode["Xie"]['pink'],
  })
  const suitsSpeed = computed(() => {
    let [blue_count, purple_count, pink_count, speed] = [0, 0, 0, 0]
    for (let key in currDress) {
      if (currDress[key].level === 'pink' && key !== 'PiFu' && key !== 'Weapon') {
        pink_count++
      } else if (currDress[key].level === 'purple' && key !== 'PiFu' && key !== 'Weapon') {
        purple_count++
      } else if (key !== 'PiFu') {
        blue_count++
      }
    }
    let temp = purple_count + pink_count
    if (blue_count === 8) {
      speed += 1
    }
    if (pink_count === 8) {
      speed += 6
    } else if (pink_count >= 3 && pink_count < 8) {
      speed += 3
      if (temp === 8) {
        speed += 2
      }
    } else if (pink_count < 3) {
      if (temp === 8) {
        speed += 4
      } else if (temp >= 3) {
        speed += 2
      }
    }

    return speed
  })
  const allDressSpeed = computed(() => {
    return suitsSpeed.value + currDress['LianBu'].speed + currDress['XiongBu'].speed + currDress['Weapon'].speed
  })

  function dressChange(name, level) {
    currDress[name] = DressCode[name][level]
  }

  function dressChangeColor(color) {
    Object.keys(currDress).forEach(item => {
      if (item !== 'Weapon' && item !== 'PiFu') {
        currDress[item] = DressCode[item][color]
      }
    })
  }

  return {
    currDress,
    suitsSpeed,
    allDressSpeed,
    dressChange,
    dressChangeColor
  }
})