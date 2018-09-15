<template>
    <b-card style="max-width: 20rem;"
            class="bg-dark text-white">
        <div style="opacity: 1;">
            <div style="
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            border-radius: 4px;
                            background: linear-gradient(to left, #ff4400, #4568DC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                            ">

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

        </div>
        <slot/>
    </b-card>
</template>
<style>
    .card {
        border: none !important;
        box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, .3) !important;
    }
    .card-body {
        padding: 0 !important;
    }
</style>