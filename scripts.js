const HomeComponent = {
  template:`<main role="main" class="inner cover">
              <h1 class="text-center cover-heading">How awesome is Artem today?</h1>
              <p class="text-center lead">Today artem is <span id="score">{{ random  }}</span>% awesome!</p>
              <p class="lead">
                <div class="progress">
                  <div v-bind:style="{ width: random + '%' }" class="progress-bar bg-success progress-bar-striped progress-bar-animated" id="progressbar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria- valuemax="100"></div>
                </div>
                <h2 class="mt-5 text-center" v-if="random>75">🔥🔥🔥</h2>
                <h2 class="mt-5 text-center" v-else-if="random>40">Not bad 😏</h2>
                <h2 class="mt-5 text-center" v-else>Oh no 😢</h2>
              </p>
            </main>`,
  data: function() {
    return({
      random: Math.floor( Math.random()*100 )
    })
  }
}
const FeaturesComponent = {
  template: `<p class="text-center"><a href="/mockup"> <h2>{{message}}</h2> </a><br>Username: admin<br>Password: 12345</p>`,
  data: function() { return({ message: `¶Click Me...`})  } }
const ContactComponent = {
  template: `<div class="container text-center">
      <div class="row">
        <div class="col-sm">
          <i class="material-icons">local_phone</i>
          <p>+1(415)-470-0506</p>
        </div>
        <div class="col-sm">
          <i class="material-icons">email</i>
          <p>artem.akatev@edduus.com</p>
        </div>
        <div class="col-sm">
          <i class="material-icons">code</i>
          <p>GitHub: aakatev</p>
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
