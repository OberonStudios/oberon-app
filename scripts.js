const HomeComponent = {
  template:`<main role="main" class="inner cover">
              <h1 class="text-center cover-heading">BEAROMETER</h1>
              <p class="text-center lead">Your score is <span id="score">{{ random  }}</span>%!</p>
              <p class="lead">
                <div class="progress">
                  <div v-bind:style="{ width: random + '%' }" class="progress-bar bg-success progress-bar-striped progress-bar-animated" id="progressbar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria- valuemax="100"></div>
                </div>
                <h2 class="mt-5 text-center" v-if="random>75">Congrats! You are definitely a bear! 🐻</h2>
                <h2 class="mt-5 text-center" v-else-if="random>40">You might be a panda, boi! 🐼</h2>
                <h2 class="mt-5 text-center" v-else>Sorry, but you are just a dog! 🐶</h2>
              </p>
            </main>`,
  data: function() {
    return({
      random: Math.floor( Math.random()*100 )
    })
  }
}
const FeaturesComponent = {
  template: `<div class="text-center">
                <p>{{ data }}</p>
                <input v-model="address" placeholder="Enter account address">
                <p>Address is: {{ address }}</p>
                <button v-on:click="getAccount()">Get</button>
              </div>`,
  // mounted () {  },
  methods: {
    getAccount () {
      axios
        .get(`https://coris.network/cosmos/rpc1/auth/accounts/${this.address}`)
        .then(response => {
          this.data = response.data;
        })
        .catch(function (error) {
          console.log(error);
        })
    }
  }, 
  data() { 
    return { 
      address: ``,
      data: ``
    }
  } 
}

const ContactComponent = {
  template: `<div class="container text-center">
      <div class="row">
        <div class="col-sm">
          <i class="material-icons">local_phone</i>
          <p>+X(XXX)-XXX-XXXX</p>
        </div>
        <div class="col-sm">
          <i class="material-icons">email</i>
          <p>oberonstudios@gmail.com</p>
        </div>
        <div class="col-sm">
          <i class="material-icons">code</i>
          <p>GitHub: OberonStudios</p>
        </div>
      </div>
    </div>`
}

const routes = [
  { path: '', component: HomeComponent },
  { path: '/features', component: FeaturesComponent },
  { path: '/contact', component: ContactComponent }
]

const router = new VueRouter({
  routes: routes
})

const app = new Vue({
  router,
}).$mount('#app')
