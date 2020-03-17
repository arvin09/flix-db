<template>
  <div class="container-login">
    <div class="d-flex justify-content-center h-100">
      <div class="card">
        <div class="card-header">
          <h3>{{ routeName }}</h3>
          <div class="d-flex justify-content-end social_icon">
            <span>
              <i class="fab fa-facebook-square"></i>
            </span>
            <span>
              <i class="fab fa-google-plus-square"></i>
            </span>
            <span>
              <i class="fab fa-twitter-square"></i>
            </span>
          </div>
          <div class="message" v-if="message">{{ message }}</div>
        </div>
        <div class="card-body">
          <form action="#" @submit.prevent="submit">
            <div v-if="!isLogin" class="input-group form-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fas fa-user"></i>
                </span>
              </div>
              <input
                id="name"
                type="name"
                class="form-control"
                name="name"
                placeholder="User name"
                value
                required
                autofocus
                v-model="form.name"
              />
            </div>
            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fas fa-user"></i>
                </span>
              </div>
              <input
                id="email"
                type="email"
                class="form-control"
                name="email"
                placeholder="Email address"
                value
                required
                autofocus
                v-model="form.email"
              />
            </div>
            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fas fa-key"></i>
                </span>
              </div>
              <input
                id="password"
                type="password"
                class="form-control"
                name="password"
                placeholder="password"
                required
                v-model="form.password"
              />
            </div>
            <div v-if="isLogin" class="row align-items-center remember">
              <input type="checkbox" />Remember Me
            </div>
            <div class="form-group">
              <input
                type="submit"
                :value="routeName"
                class="btn float-right login_btn"
              />
            </div>
          </form>
        </div>
        <div v-if="isLogin" class="card-footer">
          <div class="d-flex justify-content-center links">
            Don't have an account?
            <router-link to="/signup">Sign up</router-link>
          </div>
          <!-- <div class="d-flex justify-content-center">
            <a href="#">Forgot your password?</a>
          </div>-->
        </div>
        <div v-else class="card-footer">
          <div class="d-flex justify-content-center links">
            Already have an account?
            <router-link to="/login">Login</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: ""
      },
      message: null
    };
  },
  computed: {
    isLogin() {
      return this.$route.path.replace("/", "") === "login";
    },
    routeName() {
      const currentRoute = this.$route.path.replace("/", "");
      return currentRoute === "login" ? "Login" : "Sign up";
    }
  },
  methods: {
    submit() {
      if (this.routeName === "Login") {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.form.email, this.form.password)
          .then(() => {
            // console.log(data);
            this.$router.replace({ name: "dashboard" });
          })
          .catch(err => {
            this.message = err.message;
          });
      } else {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.form.email, this.form.password)
          .then(data => {
            data.user
              .updateProfile({
                displayName: this.form.name
              })
              .then(() => {
                this.message = `${this.form.name} successfully resgistered, Please login`;
                setTimeout(() => {
                  this.form.email = "";
                  this.form.password = "";
                  this.$router.replace({ name: "login" });
                }, 500);
              });
          })
          .catch(err => {
            this.message = err.message;
          });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Numans");

.message {
  color: white;
  font-size: 12px;
}

.container-login {
  background-image: url("../assets/login-bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  font-family: "Numans", sans-serif;
  align-content: center;
}

.card {
  height: auto;
  margin-top: auto;
  margin-bottom: auto;
  width: 400px;
  background-color: rgba(0, 0, 0, 0.5) !important;
}

.social_icon span {
  font-size: 60px;
  margin-left: 10px;
  color: #ffc312;
}

.social_icon span:hover {
  color: white;
  cursor: pointer;
}

.card-header h3 {
  color: white;
}

.social_icon {
  position: absolute;
  right: 20px;
  top: -45px;
}

.input-group-prepend span {
  width: 50px;
  background-color: #ffc312;
  color: black;
  border: 0 !important;
}

input:focus {
  outline: 0 0 0 0 !important;
  box-shadow: 0 0 0 0 !important;
}

.remember {
  color: white;
}

.remember input {
  width: 20px;
  height: 20px;
  margin-left: 15px;
  margin-right: 5px;
}

.login_btn {
  color: black;
  background-color: #ffc312;
  width: 100px;
}

.login_btn:hover {
  color: black;
  background-color: white;
}

.links {
  color: white;
}

.links a {
  margin-left: 4px;
}
</style>
