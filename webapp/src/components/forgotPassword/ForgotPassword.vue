<template>
    <div class="Page">
        <div class="PaddingPage">
            <div class="Body">
                <h1>
                    Forgot Password
                </h1>
                <TDinput
                    TDtype='mail'
                    TDplaceholder="Email:"
                />
                <TDbutton
                    TDclass="colorful"
                    TDtext="Recover Password"
                    TDtype="Button"
                    TDstyle="margin-top: 25px"
                    @TDclick="alterShowMessage"
                />
                <hr>
                <h3 v-show="showMessage">
                    A recovery email has been sent
                </h3>
            </div>
        </div>
    </div>
</template>

<script>

    import Input from '../shared/input/Input.vue'
    import Button from '../shared/button/Button.vue'

    export default {

        props: {
            showMessage: {
                type: Boolean,
                default: false
            },
        },

        components: {
            'TDinput' : Input,
            'TDbutton' : Button
        },

        methods: {
            alterShowMessage() {
                if(this.showMessage){
                    null;
                }else{
                    this.showMessage = !this.showMessage;
                }
            }
        }
        
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

    h1 {
        color: rgb(212, 212, 212);
        font-size: 20pt;
        text-align: center;
        text-decoration: none;
        width: 103%;
    }

    h3, .H3 {
        color: rgb(212, 212, 212);
        font-size: 11pt;
        text-align: center;
        text-decoration: none;
        width: 103%;
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