<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRoute } from "vue-router";

const advertisement = ref(null);

const route = useRoute();

axios
  .get(`http://localhost:8080/api/v1/post/getPost/${route.params.id}`)
  .then((response) => {
    advertisement.value = response.data.data;
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
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <img src="" alt="Image" class="img-fluid rounded mb-3" />
          </div>
          <div class="col-md-6">
            <h2 class="mb-3">Advertisement Title</h2>
            <p class="text-muted mb-2"><strong>Posted by:</strong> John Doe</p>
            <p class="text-muted mb-2"><strong>Date:</strong> 2024-06-10</p>
            <p class="mb-4">
              This is a detailed description of the advertisement. It provides
              all relevant information about the product or service being
              advertised, including features, benefits, and any other important
              details.
            </p>
            <ul class="list-group mb-4">
              <li class="list-group-item">
                <strong>Category:</strong> Electronics
              </li>
              <li class="list-group-item">
                <strong>Location:</strong> New York, NY
              </li>
              <li class="list-group-item"><strong>Price:</strong> $299</li>
              <li class="list-group-item">
                <strong>Status:</strong> Available
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
