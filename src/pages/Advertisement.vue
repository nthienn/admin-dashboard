<script setup>
import { ref } from "vue";
import axiosClient from "../axios";
import axios from "axios";

const advertisements = ref([]);

// axiosClient
//   .get("post/getAllPost")
//   .then((response) => {
//     advertisements.value = response.data;
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.error("Error fetching advertisements:", error);
//   });

axios
  .get("http://localhost:8080/api/v1/post/getAllPost")
  .then((response) => {
    advertisements.value = response.data.data;
    console.log(response.data.data);
  })
  .catch((error) => {
    console.error(error);
  });
</script>

<template>
  <!-- Begin Page Content -->
  <div class="container-fluid">
    <!-- Page Heading -->
    <h1 class="h3 mb-4 text-gray-800">Advertisement</h1>

    <!-- DataTales Example -->
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">DataTables</h6>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table
            class="table table-bordered"
            id="dataTable"
            width="100%"
            cellspacing="0"
          >
            <thead>
              <tr>
                <th>Text</th>
                <th>Image</th>
                <th>Advertiser</th>
                <th>Status</th>
                <th>Date</th>
                <!-- <th>Action</th> -->
              </tr>
            </thead>
            <tbody>
              <tr v-for="(post, index) in advertisements" :key="index">
                <td>{{ post.content.text }}</td>
                <td>
                  <img :src="post.image.url" alt="Image" width="50px" />
                </td>
                <td>{{ post.advertiser_id.name }}</td>
                <td>{{ post.process_id.currentStatus }}</td>
                <td>{{ post.createdAt }}</td>
                <!-- <td>
                  <router-link
                    class="btn btn-info btn-icon-split"
                    :to="{
                      name: 'AdvertisementDetail',
                      params: { id: post._id },
                    }"
                  >
                    <span class="icon text-white-50">
                      <i class="fas fa-info-circle"></i>
                    </span>
                    <span class="text">Detail</span>
                  </router-link>
                </td> -->
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
