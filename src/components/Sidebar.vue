<script setup></script>

<template>
  <!-- Sidebar -->
  <ul
    class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    id="accordionSidebar"
  >
    <!-- Sidebar - Brand -->
    <router-link
      :to="{ name: 'Home' }"
      class="sidebar-brand d-flex align-items-center justify-content-center"
    >
      <div class="sidebar-brand-icon rotate-n-15">
        <i class="fas fa-laugh-wink"></i>
      </div>
      <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
    </router-link>

    <!-- Divider -->
    <hr class="sidebar-divider my-0" />

    <!-- Nav Item - Dashboard -->
    <li class="nav-item">
      <router-link :to="{ name: 'Home' }" class="nav-link">
        <i class="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span>
      </router-link>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider" />

    <!-- Heading -->
    <div class="sidebar-heading">Interface</div>

    <!-- Nav Item - Tables -->
    <li class="nav-item">
      <router-link class="nav-link" :to="{ name: 'Advertisement' }">
        <i class="fas fa-fw fa-table"></i>
        <span>Advertisement</span>
      </router-link>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider" />

    <!-- Sidebar Toggler (Sidebar) -->
    <div class="text-center d-none d-md-inline">
      <button class="rounded-circle border-0" id="sidebarToggle"></button>
    </div>
  </ul>
  <!-- End of Sidebar -->
</template>
