<template>
    <div style="overflow-y: hidden; overflow-x: hidden; background: #212529">
        <b-container fluid style="height: 100%; width: 100%;">
            <b-row>
                <b-col lg="1"
                       style="padding: 0 0 0 1rem; height: 100vh; width: 100%; opacity: 0.3; margin: auto; display: flex; align-items: center;">
                    <b-button id="next-page" :to="{name:'home'}"
                              style="border-radius: 0; height: 80px; width: 80px; border-radius: 40px; display: flex; align-items: center;">
                        <font-awesome-icon icon="arrow-left"
                                           style="width: 100%; height: 100%; transform: scale(0.5, 0.5);"/>
                    </b-button>
                </b-col>
                <b-col lg="11" style="padding: 0 0 0 1rem; height: 100vh; overflow-y: hidden; overflow-x: hidden;">
                    <b-card-group columns>
                        <ToDoList/>
                        <MathQuestion/>
                        <Calendar/>
                        <Weather/>
                        <Dining/>
                    </b-card-group>
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