import {defineStore} from "pinia";
import {reactive, computed} from "vue";
import {ElMessage} from 'element-plus'

export const useOtherSpeedStore = defineStore('other', () => {
  let otherSpeed = reactive({
    title: 3, pet: 5, medal: 3, jade: 0, gad: 0, nameCard: 0, petEquip: 4, badges: []
  })
  const addBadge = () => {
    if (otherSpeed.badges.length < 10) {
      otherSpeed.badges.push({
        id: Date.now(), value: 1.5
      })
    } else {
      ElMessage.error('徽章数量不能超过10个')
    }
  }
  const removeBadge = (id) => {
    otherSpeed.badges.forEach((item, index) => {
      if (item.id === id) {
        otherSpeed.badges.splice(index, 1)
      }
    })
  }
  const otherAllSpeed = computed(() => {
    let badgesSpeed = otherSpeed.badges.reduce((pre, cur) => {
      return pre + cur.value
    }, 0)
    return badgesSpeed + otherSpeed.title + otherSpeed.pet + otherSpeed.medal + otherSpeed.jade + otherSpeed.gad + otherSpeed.nameCard + otherSpeed.petEquip
  })
  return {
    otherSpeed, addBadge, removeBadge, otherAllSpeed
  }
})