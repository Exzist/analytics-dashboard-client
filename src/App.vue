<template>
  <div class="flex h-screen font-[Trebuchet MS]">
    <!-- Sidebar -->
    <aside class="w-64 bg-gray-900 text-white p-4">
      <h2 class="text-lg font-bold mb-6">E-commerce Dashboard</h2>
      <nav class="space-y-2">
        <RouterLink
          to="/"
          class="block hover:bg-gray-700 p-2 rounded"
          active-class="bg-gray-800"
          >Dashboard</RouterLink
        >
        <RouterLink
          to="/products"
          class="block hover:bg-gray-700 p-2 rounded"
          active-class="bg-gray-800"
          >Products</RouterLink
        >
        <RouterLink
          to="/customers"
          class="block hover:bg-gray-700 p-2 rounded"
          active-class="bg-gray-800"
          >Customers</RouterLink
        >
        <RouterLink
          to="/transactions"
          class="block hover:bg-gray-700 p-2 rounded"
          active-class="bg-gray-800"
          >Transactions</RouterLink
        >
      </nav>
    </aside>

    <!-- Main content -->
    <main class="flex-1 bg-gray-200 overflow-y-auto">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
