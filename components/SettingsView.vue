<template>
  <form @submit.prevent="submitStudent(selectedStudent)">
    <fieldset>
      <input type="text" v-model="student.firstName" />
      <input type="text" v-model="student.lastName" />
      <input type="submit" />
    </fieldset>
  </form>
</template>

<script>
export default {
  props: {
    selectedStudent: {
      Type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      student: {
        firstName: '',
        lastName: ''
      }
    }
  },
  methods: {
    submitStudent(student) {
      if (!student.firstName && !student.lastName) {
        console.log('student was not defined')
      }
      this.$emit('update:selectedStudent', student)
      console.log('updated')
    }
  },
  watch: {
    selectedStudent: {
      deep: true,
      handler(val) {
        const { firstName, lastName } = val
        this.student.firstName = firstName
        this.student.lastName = lastName
      }
    }
  }
}
</script>

<style lang="postcss">
form {
  @apply mt-8;
}
fieldset {
  @apply mb-5 flex flex-col gap-1;
}
input {
  @apply max-w-[5rem];
}
</style>
