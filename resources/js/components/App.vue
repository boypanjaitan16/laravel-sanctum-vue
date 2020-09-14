<template>
    <router-view :all-route="this.allRoute"></router-view>
</template>

<script>
    export default {
        name    : 'App',
        props   : ['homeRoute', 'apiRoute', 'welcomeRoute'],
        data() {
            return {
                allRoute    : {}
            }
        },
        mounted() {
            this.allRoute   = {
                apiRoute    : this.apiRoute,
                homeRoute   : this.homeRoute,
                welcomeRoute    : this.welcomeRoute
            }

            // this.$router.push({ name: 'home' });
        },
    }
</script>
