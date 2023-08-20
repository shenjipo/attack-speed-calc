<template>
  <div style="margin-top: 200px;justify-content: flex-start;margin-left: 500px">
    <div class="flex" style="align-items: center">
      <DressAll></DressAll>
      <Speed></Speed>
    </div>
    <div style="margin-top: 10px">
      <EquipAll></EquipAll>
    </div>
    <div>
      <Others></Others>
    </div>
  </div>


</template>

<script setup>
import Others from '../views/Others.vue'
import DressAll from './DressAll.vue'
import EquipAll from './EquipAll.vue'
import Speed from './Speed.vue'
</script>

<style scoped>

</style>