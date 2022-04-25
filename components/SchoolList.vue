<template>
  <div>
    <form name="edit students" @submit.prevent="saveStudentList">
      <div class="flex gap-x-10">
        <label class="p-0">Vorname:</label>
        <label class="p-0">Nachname:</label>
      </div>
      <fieldset v-for="student in studentsList" :key="student.id">
        <input type="text" v-model="student.firstName" />
        <input type="text" v-model="student.lastName" />
      </fieldset>
      <input type="submit" :disabled="preventSubmit" />
    </form>
    <form>
      <fieldset>
        <select
          v-model="selectedStudent"
          @change="$emit('update:selectedStudent', selectedStudent)"
        >
          <option
            v-for="student in studentsList"
            :key="student.id"
            :value="student"
          >
            {{ `${student.firstName} ${student.lastName}` }}
          </option>
        </select>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    studentsList: {
      type: Array,
      default: () => []
    },
    startStudents: {
      type: Array,
      default: () => []
    },
    selectedStudent: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    preventSubmit() {
      return this.arrayEquals(this.studentsList, this.startStudents)
    }
  },
  methods: {
    arrayEquals(a, b) {
      const sameValues = a.every((val, index) => {
        return (
          val.firstName === b[index].firstName &&
          val.lastName === b[index].lastName
        )
      })
      return sameValues
    },
    saveStudentList() {
      this.$emit('update:studentsList', studentsList)
    }
  }
}
</script>

<style lang="postcss" scoped>
form {
  @apply mt-8;
}
fieldset {
  @apply mb-5 flex-row gap-1 p-3 w-max;
}
input {
  @apply max-w-[5rem];
}
select {
  @apply w-[8.5rem] h-8;
}
</style>
