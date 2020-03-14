<template>
    <transition name="pagina">
        <router-view></router-view>
    </transition>
</template>

<script>

    import { routes } from './routes';

    export default {
         data() {

             return { routes }

         }
    }

</script>

<style lang="scss">

    * {
        font-family: sans-serif;
        outline: none;
    }

    body{
        margin: 0px;
        min-height: 100vh;
    }

   .pagina-enter, .pagina-leave-active {
        opacity: 0;
    }

   .pagina-enter-active, .pagina-leave-active {
        transition: opacity .4s;
    }

</style>