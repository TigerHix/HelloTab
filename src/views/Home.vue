<template>
  <div class="home">
    <Reddit/>
    <ToDoList/>
    <TwitterFeed/>
    <MathQuestion/>
  </div>
</template>

<script>
import Reddit from '@/components/Reddit'
import ToDoList from '@/components/ToDoList'
import TwitterFeed from '@/components/TwitterFeed'
import MathQuestion from '@/components/MathQuestion'
export default {
  name: 'home',
  components: {
    Reddit,
    ToDoList,
    TwitterFeed,
    MathQuestion
  }
}
</script>
