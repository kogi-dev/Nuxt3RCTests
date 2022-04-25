<script lang="ts" setup>
import Datepicker from 'vue3-datepicker/src/datepicker/Datepicker.vue'
import { ref } from 'vue'
import { add } from 'date-fns'
const predicate = (target: Date) =>
  !(target.getDay() > 0 && target.getDay() < 6)
</script>

<template>
  <datepicker :disabledDates="{ predicate }" />
</template>