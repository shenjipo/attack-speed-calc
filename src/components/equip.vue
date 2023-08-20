<template>
  <div class="equip">
    <el-image :fit="`fill`" :src="attributes.src" :title="attributes.name" @click="showDialog"></el-image>
    <img class="equip-film" :src="FilmCode[attributes.parent]" alt="err" style="object-fit: fill" v-if="showFilm">
    <el-dialog
        v-model="dialogVisible"
        :title="EquipMap[attributes.parent]+'装备选择'"
        width="50%"
    >
      <el-switch
          v-model="hasFilm"
          @change="$emit('filmChange',attributes.parent)"
          active-text="包含攻速贴膜"
          inactive-text="无攻速贴膜"
      />
      <el-table :data="Equipments" style="width: 100%" highlight-current-row
                @current-change="handleCurrentChange ">
        <el-table-column label="图标">
          <template #default="scope">
            <el-image :fit="`fill`" :src="scope.row.src"/>
          </template>
        </el-table-column>
        >
        <el-table-column prop="name" label="名称"/>
        <el-table-column prop="speed" label="攻速">
          <template #default="scope">
            <el-text v-if="scope.row.name!=='自定义'">{{ scope.row.speed }}</el-text>
            <el-input-number v-model="scope.row.speed" :min="0" :max="40" v-else/>
          </template>
        </el-table-column>
        >
        <el-table-column prop="tips" label="备注"></el-table-column>
        >
      </el-table>
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
import {ref, defineEmits, computed} from 'vue'
import {CodeToEquip} from "../utils/EquipCode.js";
import {FilmCode} from "../utils/FilmCode.js";

const emits = defineEmits(['equipChange'])
const {attributes} = defineProps(['attributes'])
const EquipMap = {
  'shoulder': '护肩',
  'jacket': '上衣',
  'trousers': '裤子',
  'waistband': '腰带',
  'necklace': '项链',
  'left': '左槽',
  'ring': '戒指',
  'ear': '耳环',
  'right': '右槽',
}
const Equipments = Object.values(CodeToEquip[attributes.parent])
let dialogVisible = ref(false)
const handleCurrentChange = (val) => {
  emits('equipChange', val)
}
const showFilm = computed(() => {
  let limits = ['jacket', 'shoulder', 'trousers', 'left']
  return limits.includes(attributes.parent) && attributes.film
})
const hasFilm = ref(attributes.film || false)
const showDialog = () => {
  let limits = ['shoulder', 'jacket', 'trousers', 'waistband', 'necklace', 'left', 'ring', 'right', 'ear']
  if (limits.includes(attributes.parent)) {
    dialogVisible.value = true
  }
}
</script>

<style scoped>
.equip-film {
  position: absolute;
  right: -6px;
  width: 22px;
  height: 22px;
  bottom: -6px;
  z-index: 1;
}

.equip {
  border-radius: 3px;
  cursor: pointer;
  width: 28px;
  height: 28px;
  position: relative;
  margin-right: 5px;
  margin-bottom: 5px;
}


</style>