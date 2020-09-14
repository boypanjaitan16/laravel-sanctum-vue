<template>
    <div class="dashboard" style="margin-top:80px">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            MAIN MENU
                            <hr>
                            <ul class="list-group">
                                <router-link :to="{name: 'dashboard'}" class="list-group-item text-dark text-decoration-none">DASHBOARD</router-link>
                                <li @click="logout" class="list-group-item text-dark text-decoration-none" style="cursor:pointer">LOGOUT</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-body">
                            DASHBOARD
                            <hr>
                            Selamat Datang <strong>{{ this.userProfile.name }}</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name    : 'Dashboard',
        props   : ["userProfile", "allRoute"],
        data() {
            return {
                //state loggedIn with localStorage
                loggedIn: localStorage.getItem('loggedIn'),
                //state token
                token   : localStorage.getItem('token'),
            }
        },

        created() {
            console.log('userProfile', this.userProfile);
        },

        methods: {
            logout() {
                axios.post(`${this.allRoute.apiRoute}/auth/logout`)
                    .then(() => {
                        //remove localStorage
                        localStorage.removeItem("loggedIn")
                        localStorage.removeItem("token")

                        //redirect
                        return this.$router.push({ name: 'auth.login', params: this.allRoute })
                    })
            }
        },

        //check user logged in or not
        mounted() {
            if(!this.loggedIn) {
                return this.$router.push({ name: 'auth.login', params : this.allRoute })
            }
        }
    }
</script>
