<script setup>
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";
import TheFooter from "../components/TheFooter.vue";
</script>

<template>
  <!-- Page Wrapper -->
  <div id="wrapper">
    <Sidebar />

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <Navbar />

        <router-view></router-view>
      </div>
      <!-- End of Main Content -->

      <TheFooter />
    </div>
    <!-- End of Content Wrapper -->
  </div>
  <!-- End of Page Wrapper -->

  <!-- Scroll to Top Button-->
  <a class="scroll-to-top rounded" href="#page-top">
    <i class="fas fa-angle-up"></i>
  </a>
</template>
