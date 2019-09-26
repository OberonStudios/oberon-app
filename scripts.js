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
                <h2 class="mt-5 text-center" v-else>Sorry, but you a just a dog! 🐶</h2>
              </p>
            </main>`,
  data: function() {
    return({
      random: Math.floor( Math.random()*100 )
    })
  }
}
const FeaturesComponent = {
  template: `<p class="text-center">{{message}}</p>`,
  data: function() { return({ message: `¶Insert Paragraph`})  } }

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
