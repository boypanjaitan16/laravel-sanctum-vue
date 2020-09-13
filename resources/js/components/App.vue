<template>
    <div>
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" :href="this.homeRoute">LaraVue</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <router-link :to="{name: 'home'}" class="nav-link">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{name: 'about'}" class="nav-link">About</router-link>
                        </li>

                        <li v-if="loggedIn" class="nav-item">
                            <router-link :to="{name: 'dashboard', params : this.allRoute}" class="nav-link">Dashboard</router-link>
                        </li>

                        <li v-if="!loggedIn" class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Account
                            </a>
                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <router-link :to="{name: 'login', params : this.allRoute}" class="dropdown-item">Login</router-link>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        <div class="container" style="margin-top: 20px; margin-bottom: 20px;">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name    : 'App',
        props   : ['homeRoute', 'apiRoute', 'welcomeRoute'],
        data() {
            return {
                loggedIn    : null,
                allRoute    : {}
            }
        },
        mounted() {
            this.allRoute   = {
                apiRoute    : this.apiRoute,
                homeRoute   : this.homeRoute,
                welcomeRoute    : this.welcomeRoute
            }

            this.$router.push({ name: 'home' });
        },
        methods: {
            getLoggedIn() {
                this.loggedIn = localStorage.getItem("loggedIn");
            }
        },

        watch: {
            $route: {
                immediate: true,
                handler() {
                    this.getLoggedIn()
                }
            }
        },

    }
</script>
