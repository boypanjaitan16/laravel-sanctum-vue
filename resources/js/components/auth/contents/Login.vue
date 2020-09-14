<template>
    <div class="login">
        <div class="container" style="margin-top:80px">
            <h3 class="card-title text-center font-weight-bold text-primary">Masuk</h3>
            <div v-if="loginFailed" class="alert alert-danger mt-4 mb-4 text-center">
                {{ this.errorMessage }}
            </div>
            <div class="row justify-content-center">
                <div class="col-md-5">
                    <div class="card border-primary">
                        <div class="card-body" style="padding-top: 50px; padding-bottom: 50px;">
                            <form @submit.prevent="login">
                                <div class="form-group">
                                    <input type="email" class="form-control" v-model="user.email"
                                           placeholder="Masukkan Email">
                                    <div v-if="validation.email" class="text-danger font-weight-bold">
                                        Masukkan Email
                                    </div>
                                </div>

                                <div class="form-group">
                                    <input type="password" class="form-control" v-model="user.password"
                                           placeholder="Masukkan Password">
                                    <div v-if="validation.password" class="text-danger font-weight-bold">
                                        Masukkan Password
                                    </div>
                                </div>

                                <button type="submit" class="btn btn-primary btn-block mt-4">Masuk</button>
                            </form>
                        </div>
                    </div>
                    <p class="text-center mt-5">
                        <router-link :to="{name : 'home', params : this.$route.params}">&leftarrow; Back to Home</router-link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'Login',

        data() {
            return {
                //state loggedIn with localStorage
                loggedIn    : localStorage.getItem('loggedIn'),
                //state token
                token       : localStorage.getItem('token'),
                //state user
                user        : [],
                //state validation
                validation  : [],
                //state login failed
                loginFailed : null,
                errorMessage    : null
            }
        },
        methods: {
            login() {
                if (this.user.email && this.user.password) {
                    axios.get(`${this.$route.params.welcomeRoute}/sanctum/csrf-cookie`)
                        .then(response => {

                            //debug cookie
                            console.log(response)

                            axios.post(`${this.$route.params.apiRoute}/auth/login`, {
                                email: this.user.email,
                                password: this.user.password
                            }).then(res => {

                                //debug user login
                                console.log(res)

                                if (res.data.status === "success") {

                                    //set localStorage
                                    localStorage.setItem("loggedIn", "true")

                                    //set localStorage Token
                                    localStorage.setItem("token", res.data.data.token)

                                    //change state
                                    this.loggedIn = true

                                    //redirect dashboard
                                    return this.$router.push({ name: 'dashboard', params : this.$route.params})

                                } else {
                                    //set state login failed
                                    this.loginFailed    = true;
                                    this.errorMessage   = res.data.message;
                                }

                            }).catch(error => {
                                console.log(error)
                            })

                        })
                }

                this.validation = []

                if (!this.user.email) {
                    this.validation.email = true
                }

                if (!this.user.password) {
                    this.validation.password = true
                }

            }
        },

        //check user already logged in
        mounted() {
            console.log(this.$route.params);
            if (this.loggedIn) {
                return this.$router.push({ name: 'onguard', params : this.$route.params })
            }
        }
    }
</script>
