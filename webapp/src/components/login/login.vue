<template>
    <div class="Page">
        <div class="PaddingPage">
            <div class="Header">
                <h1>
                    To Do List
                </h1>
                <h2>
                    Application written using Node + Vue + MongoDB.
                </h2>
            </div>
            <div class="Body">
                <TDinput
                    TDtype='mail'
                    TDplaceholder="Email:"
                />
                <TDinput
                    TDtype='password'
                    TDplaceholder="Password:"
                    TDstyle="margin-top: 25px"
                />
                <TDbutton
                    TDclass="colorful"
                    TDtext="Login"
                    TDtype="Button"
                    TDstyle="margin-top: 25px"
                />
                <hr>
                <h3>
                    <router-link class="H3 Link" :to="'ForgotPassword'">Forgot password?</router-link>
                </h3>
                <hr>
                <h3>
                    Don't have accont?
                </h3>
                <TDbutton
                    TDclass="transparent"
                    TDtext="Sign up"
                    TDtype="Button"
                />
            </div>
        </div>
    </div>
</template>

<script>

    import Input from '../shared/input/Input.vue'
    import Button from '../shared/button/Button.vue'

    export default {

        components: {
            'TDinput' : Input,
            'TDbutton' : Button
        },
        
    }

</script>

<style lang="scss" scoped>

    body {
        background-color: rgb(46, 70, 68);
    }

    .Page {
        background-color: rgb(46, 70, 68);
        width: 100vw;
        min-height: 100vh;
    }

    .PaddingPage {
        padding: 15px;
    }

    .Header {
        height: 65px;
        background-color: #ffffff;
        border: 1px solid #a1a1a1;
        border-radius: 15px;
        display: flex;
        align-content: space-between;
    }

    h1 {
        margin: 0px;
        height: 100%;
        display: flex;
        align-items: center;
        padding-left: 25px;
        color: rgb(66, 66, 66);
    }

    h2 {
        margin-top: 0px;
        margin-bottom: 0px;
        margin-left: auto;
        margin-right: 0px;
        height: 100%;
        display: flex;
        align-items: center;
        padding-right: 25px;
        color: rgb(66, 66, 66);
        font-size: 12pt;
    }

    h3, .H3 {
        color: rgb(212, 212, 212);
        font-size: 11pt;
        text-align: center;
        text-decoration: none;
        width: 103%;
    }

    .Link:hover {
        color: rgb(152, 223, 199);
    }

    hr {
        margin-bottom: 20px;
        margin-top: 20px;
        width: 103%;
        border: 1px solid rgb(101, 136, 136);
        border-radius: 5px;
    }

    .Body {
        margin: auto;
        margin-top: 50px;
        width: 540px;
    }

</style>