<script setup>
import { ref } from "vue";
import axiosClient from "../axios";
import router from "../router";
import axios from "axios";

const data = ref({
  email: "",
  password: "",
});

function submit() {
  axios
    .post("http://localhost:8080/api/v1/login", data.value)
    .then((response) => {
      console.log("Login successful:", response.data);
      router.push({ name: "Home" });
    })
    .catch((error) => {
      console.error("Login failed:", error.response.data);
      alert("Login failed: " + error.response.data.message);
    });
}
</script>

<template>
  <div class="container">
    <!-- Outer Row -->
    <div class="row justify-content-center">
      <div class="col-xl-6 col-lg-8 col-md-9">
        <div class="card o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0">
            <!-- Nested Row within Card Body -->
            <div class="row">
              <!-- <div class="col-lg-6 d-none d-lg-block bg-login-image"></div> -->
              <div class="col-lg-12">
                <div class="p-5">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                  </div>
                  <form class="user" @submit.prevent="submit">
                    <div class="form-group">
                      <input
                        v-model="data.email"
                        type="email"
                        class="form-control form-control-user"
                        id="exampleInputEmail"
                        aria-describedby="emailHelp"
                        placeholder="Enter Email Address..."
                      />
                    </div>
                    <div class="form-group">
                      <input
                        v-model="data.password"
                        type="password"
                        class="form-control form-control-user"
                        id="exampleInputPassword"
                        placeholder="Password"
                      />
                    </div>
                    <div class="form-group">
                      <div class="custom-control custom-checkbox small">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="customCheck"
                        />
                        <label class="custom-control-label" for="customCheck"
                          >Remember Me</label
                        >
                      </div>
                    </div>
                    <button
                      type="submit"
                      class="btn btn-primary btn-user btn-block"
                    >
                      Login
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
