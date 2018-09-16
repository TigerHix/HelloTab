<template>
    <b-card no-body style="max-width: 20rem;"
            class="bg-dark text-white">
        <div slot="header"><slot name="title"></slot></div>
        <div style="opacity: 1;">
            <div style="
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            border-radius: 4px;
                            background: linear-gradient(to left, #ff4400, #4568DC);
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


<script>
export default {
  props: {
    title: String,
  }
}
</script>