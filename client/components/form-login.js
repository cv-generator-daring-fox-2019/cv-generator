Vue.component('form-login',{
    data(){
        return{
            userdata : {
                email : '',
                password : ''
            }
        }
    },
    methods: {
        login(){
            this.$emit(`login`,this.userdata)
        }
    },
    template: `
    <div>
      <div class="col d-flex justify-content-center"  style="margin-top:50px">
          <div class="card-transparant">
            <h2 style="color: white; font-family: 'Quicksand';text-align:center">Login Here</h2>
            <div class="text-justify p-3 card-block special-card" style="background-color: rgba(235, 221, 221,0.9); width: 400px; color: white">
                <form v-on:submit.prevent="login">
                    <div class="form-group">
                      <label for="Email">Email address</label>
                      <input v-model="userdata.email" type="email" class="form-control" id="Email" placeholder="Enter email">
                    </div>
                    <div class="form-group">
                      <label for="Password">Password</label>
                      <input v-model="userdata.password" type="password" class="form-control" id="Password" placeholder="Password">
                    </div>
                    <button type="submit" class="btn btn-primary">sign in</button>
                  </form>
            </div>
        </div>
      </div>
    </div>
    `
})