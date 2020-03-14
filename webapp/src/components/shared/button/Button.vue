<template>
    <button @click="click()" :class="classButton" :type="TDtype" :style="TDstyle">{{ TDtext }}</button>
</template>

<script>

    export default {
        
        props: {

            TDclass: String,

            TDtext: {
                required: true, 
                type: String
            },

            TDstyle: {
                type: String
            },

            TDtype: {
                required: true, 
                type: String
            },

        },

        computed: {

            classButton() {

                if(this.TDclass == 'colorful' || !this.TDclass) return 'colorful';
                if(this.TDclass == 'transparent') return 'transparent';

            }

        }

    }

</script>

<style scoped>

    button {
        width: 103%;
        height: 39px;
        border: 2px solid rgb(26, 48, 49);
        border-radius: 10px;
        padding-left: 5px;
        padding-right: 5px;
        font-size: 12pt;
    }
    
    .colorful {
        color: rgb(15, 24, 22);
        background-color: rgb(47, 121, 105);
    }

    .colorful:hover {
        border: 2px solid rgb(37, 67, 70);
        background-color: rgb(55, 146, 126);
    }

    .transparent {
        color: rgb(255, 255, 255);
        background-color: rgba(255, 255, 255, 0);
        border: 2px solid rgb(186, 215, 216);
    }

    .transparent:hover {
        background-color: rgba(0, 0, 0, 0.075)
    }

</style>