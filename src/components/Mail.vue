<template>
  <b-card no-body>
    <div slot="header"><slot name="title"></slot></div>
    <slot/>
  </b-card>
</template>


<script>
export default {
  props: {
    title: String,
  }
}
</script>
