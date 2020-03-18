<template>
    <input :type="TDtype" :placeholder="TDplaceholder" :style="TDstyle">
</template>

<script>

    export default {
        
        props: {

            TDtype: {
                required: true, 
                type: String
            },

            TDplaceholder: {
                required: true, 
                type: String
            },

            TDstyle: {
                type: String
            }

        },

    }

</script>

<style scoped>
    
    input {
        width: 100%;
        height: 32px;
        border: 2px solid #fff;
        border-radius: 10px;
        padding-left: 5px;
        padding-right: 5px;
        color: #000;
    }

    input:focus {
        border: 2px solid rgb(33, 182, 137);
        border-radius: 10px;
    }

    ::placeholder {
        color: #000;
    }

</style>