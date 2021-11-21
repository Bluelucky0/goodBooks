<template>
  <div class="Home">HomePage</div>
</template>

<script>
import { getBookCategory,getBookList } from '../services/index'
export default {
  name:'Home',
  mounted() {
    const Category = getBookCategory();
    console.log(Category);

  },
}
</script>

<style>

</style>