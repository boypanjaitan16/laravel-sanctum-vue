<template>
    <div>
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" :href="this.allRoute.homeRoute">LaraVue</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <router-link :to="{name: 'home'}" class="nav-link">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{name: 'home.about'}" class="nav-link">About</router-link>
                        </li>

                        <li class="nav-item">
                            <router-link :to="{name: 'dashboard', params : this.$route.params}" class="nav-link font-weight-bold">{{ this.user.name }}</router-link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        <div class="container" style="margin-top: 20px; margin-bottom: 20px;">
            <router-view :user-profile="this.user" :all-route="this.allRoute"></router-view>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name    : "Container",
        props   : ["allRoute"],
        data() {
            return {
                //state loggedIn with localStorage
                loggedIn: localStorage.getItem('loggedIn'),
                //state token
                token   : localStorage.getItem('token'),
                //state user logged In
                user    : []
            }
        },
        created() {
            axios.get(`${this.allRoute.apiRoute}/user`, {headers: {'Authorization': 'Bearer '+this.token}})
                .then(response => {
                    this.user = response.data;
                })
        },
        mounted() {
            if(!this.loggedIn) {
                return this.$router.push({ name: 'auth.login', params : this.$route.params })
            }
        },
    }
</script>

<style scoped>

</style>
