const vue = new Vue({
    el : "#app",
    data : {
        message : 'connected',
        isLogin : false,
        signinPage : false,
    },
    created(){
        if(this.signinPage){
            this.signinPage = true
        }
    }
})