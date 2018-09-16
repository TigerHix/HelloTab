<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <b-card no-body style="max-width: 20rem; border: none;"
            class="bg-dark text-white">

        <div style="
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            border-radius: 4px;
                            background: linear-gradient(to bottom right, #000, #000);"
             v-bind:style="{ background: 'linear-gradient(to right,' + fromColor + ',' + toColor }">

        </div>

        <div style="
                            position: absolute;
                            bottom: 67%;
                            width: 100%;
                            height: 33%;
                            background: linear-gradient(to top, rgb(52,58,64), rgba(0,0,0,0) 100%);
                            border-radius: 4px 4px 0 0 ;
                            ">

        </div>

        <div style="
                            position: absolute;
                            bottom: 0;
                            width: 100%;
                            height: 67%;
                            border-radius: 0 0 4px 4px;
                            background: rgb(52,58,64);
                            ">
        </div>

        <p class="mx-3 my-3" style="z-index: 512; position:relative; font-weight: bold;">
            <slot name="title"></slot>
        </p>

        <slot/>

    </b-card>
</template>


<script>
    export default {
        props: {
            title: String,
            fromColor: String,
            toColor: String,
        }
    }
</script>