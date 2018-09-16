<template>
  <card>
    <div slot="title">Twitter Feed</div>
    <div class="mb-2 mx-2" style="position: relative;">
      <a class="twitter-grid" href="https://twitter.com/TwitterDev/timelines/539487832448843776?ref_src=twsrc%5Etfw">National Park Tweets</a>
    </div>
  </card>
</template>
<script async src="" charset="utf-8"></script>
<script>
import Card from '@/components/Card'
export default {
  name: 'home',

  components: {
    Card
  },

  // data() {
  //
  // },

  methods: {

  },

  mounted() {
    var twitterFeedScript = document.createElement('script');
    twitterFeedScript.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    document.head.appendChild(twitterFeedScript);
  },
}
</script>
