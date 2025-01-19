<template>
<router-view />
</template>

  
  
<script>
import getEndDate from './composables/getEndDate';
import StudentForm from './views/StudentForm.vue';
import TeacherForm from './views/TeacherForm.vue';

export default {
    setup() {
        getEndDate();
    }
};
</script>
  
  
<style scoped>
/* Add custom styles if needed */
</style>
