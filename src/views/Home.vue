<template>
  <div class="home">
    <Reddit/>
    <ToDoList/>
  </div>
</template>

<script>
import Reddit from '@/components/Reddit'
import ToDoList from '@/components/ToDoList'
export default {
  name: 'home',
  components: {
    Reddit,
    ToDoList
  }
}
</script>
