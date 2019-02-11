<template>
  <div class="home">
    <app-form></app-form>
  </div>
</template>


<style lang="scss" scoped>
    h1{
      color: blue;
  }
</style>


<script>
// @ is an alias to /src
import Form from '@/components/basics/forms/Form.vue';
export default {
  name: 'home',
  components: {
    appForm: Form
  }
}
</script>
