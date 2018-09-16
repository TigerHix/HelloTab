<template>
    <div style="overflow-y: hidden; overflow-x: hidden; background: #212529">
        <!--<b-carousel id="background-carousel"
                    background="#ababab"
                    :interval="10000"
                    img-width="100%"
                    img-height="100%"
        >
            &lt;!&ndash; Text slides with image &ndash;&gt;
            <b-carousel-slide v-for="image in wallpapers"
                              :key="image.hsh"
                              :caption="image.title"
                              :img-src="'//www.bing.com' + image.url"
            ></b-carousel-slide>
        </b-carousel>-->
        <b-container fluid style="height: 100%; width: 100%;">
            <b-row>
                <b-col lg="11" style="padding: 0 0 0 1rem; height: 100vh; overflow-y: hidden; overflow-x: hidden;">
                    <b-card-group columns>
                        <Calendar/>
                        <Weather/>
                        <PurdueExponent/>
                        <HackerNews/>
                        <GitHub/>
                        <Reddit/>
                        <Mail/>
                        <ToDoList/>
                        <TwitterFeed/>
                        <MathQuestion/>
                    </b-card-group>
                </b-col>
                <b-col lg="1" style="padding: 0 0 0 1rem; height: 100vh; width: 100%;  opacity: 0.3; margin: auto; display: flex; align-items: center;">
                    <b-button id="next-page" to="pa"
                              style="border-radius: 0; height: 80px; width: 80px; border-radius: 40px; display: flex; align-items: center;"><font-awesome-icon icon="arrow-right" style="width: 100%; height: 100%; transform: scale(0.5, 0.5);"/></b-button>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import Mail from '@/components/Mail'
    import axios from 'axios';
    import Reddit from '@/components/Reddit';
    import PurdueExponent from '@/components/PurdueExponent';
    import HackerNews from '@/components/HackerNews';
    import GitHub from '@/components/GitHub';
    import ToDoList from '@/components/ToDoList';
    import PA from '@/components/PA';
    import MathQuestion from '@/components/MathQuestion';
    import TwitterFeed from '@/components/TwitterFeed';
    import Dining from '@/components/Dining';
    import Weather from '@/components/Weather';
    import Calendar from '@/components/Calendar';
    export default {
        name: 'home',
        components: {
            Reddit,
            PurdueExponent,
            HackerNews,
            GitHub,
            ToDoList,
            PA,
            Mail,
            Dining,
            MathQuestion,
            TwitterFeed,
            Weather,
            Calendar,
        },
        data() {
            return {
                wallpapers: []
            }
        },
        mounted () {
            axios.get('https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1')
                .then(response => {
                    this.wallpapers = response.data.images
                });
        }
    }

</script>

<style lang="scss">
    #anime {
        position: fixed;
        right: 2rem;
        bottom: 2rem;
        z-index: 100;
    }

    body {
        overflow: hidden;
    }

    #background-carousel {
        z-index: -100;
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        overflow: hidden;

    img {
        object-fit: cover;
        height: 100%;
        width: 100%;
        filter: brightness(0.2);
    }

    }

    .card {
        margin-top: 1rem !important;
        margin-bottom: 0 !important;
        box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, .5);
    }

    .carousel-inner, .carousel-item {
        height: 100%;
    }

    @media (min-width: 576px) {
        .card-columns {
            column-count: 1 !important;
        }
    }

    @media (min-width: 768px) {
        .card-columns {
            column-count: 2 !important;
        }
    }

    @media (min-width: 992px) {
        .card-columns {
            column-count: 3 !important;
        }
    }

    @media (min-width: 1200px) {
        .card-columns {
            column-count: 4 !important;
        }
    }

    ::-webkit-scrollbar {
        width: 0; /* remove scrollbar space */
        background: transparent; /* optional: just make scrollbar invisible */
    }

    .secondary-text {
        opacity: 0.7;
    }

    .simplebar-scroll-content {
        margin-bottom: unset !important;
    }

</style>
