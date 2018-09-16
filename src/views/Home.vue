<template>
  <div class="home">
    <Reddit/>
    <ToDoList/>
    <TwitterFeed/>
  </div>
</template>

<script>
import Reddit from '@/components/Reddit'
import ToDoList from '@/components/ToDoList'
import TwitterFeed from '@/components/TwitterFeed'
export default {
  name: 'home',
  components: {
    Reddit,
    ToDoList,
    TwitterFeed
  }
}
</script>
