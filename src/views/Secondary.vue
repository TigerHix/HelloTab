<template>
    <div style="overflow-y: hidden; overflow-x: hidden; background: #212529">
        <b-container fluid style="height: 100%; width: 100%;">
            <b-row>
                <b-col lg="11" style="padding: 0 0 0 1rem; height: 100vh; overflow-y: hidden; overflow-x: hidden;">
                    <b-card-group columns>
                        <ToDoList/>
                        <MathQuestion/>
                        <Calendar/>
                        <Weather/>
                        <Dining/>
                    </b-card-group>
                </b-col>
                <b-col lg="1" style="padding: 1rem 0 0 1rem; height: 100vh; width: 100%;  opacity: 0.3; margin: auto; display: flex; align-items: flex-start;">
                    <b-button id="next-page" :to="{name:'home'}"
                              style="border-radius: 0; height: 75px; width: 75px; border-radius: 37.5px; display: flex; align-items: center;"><font-awesome-icon icon="arrow-right" style="width: 100%; height: 100%; transform: scale(0.5, 0.5);"/></b-button>
                </b-col>
            </b-row>
        </b-container>
        <PA/>
    </div>
</template>


<script>
import ToDoList from '@/components/ToDoList'
import Calendar from '@/components/Calendar'
import Weather from '@/components/Weather'
import Dining from '@/components/Dining'
import PA from '@/components/PA'
import MathQuestion from '@/components/MathQuestion';
export default {
    components: {
        ToDoList,
        Calendar,
        Weather,
        Dining,
        PA,
        MathQuestion,
    },
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
        font-family: 'Nunito', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
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