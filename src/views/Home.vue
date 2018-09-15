<template>
    <div class="home ml-3 mt-3">
        <HackerNews/>
    </div>
</template>

<script>
    import Reddit from '@/components/Reddit'
    import PurdueExponent from '@/components/PurdueExponent'
    import HackerNews from '@/components/HackerNews'
    export default {
        name: 'home',
        components: {
            Reddit,
            PurdueExponent,
            HackerNews
        }
    }
</script>

<style>
    body {
        background-image: url("https://dummyimage.com/600x400/6c757d/fff&text=+");
    }
</style>
