<template>
  <div>
    <div v-if="isLoading">Loading product details...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else-if="product">
      <table class="table-auto border-collapse border border-slate-400">
        <tbody>
          <tr>
            <td class="border border-slate-300 p-1">Product ID</td>
            <td class="border border-slate-300 p-1">{{ product.id }}</td>
          </tr>
          <tr>
            <td class="border border-slate-300 p-1">Product Name</td>
            <td class="border border-slate-300 p-1">{{ product.name }}</td>
          </tr>
          <tr>
            <td class="border border-slate-300 p-1">Product Price</td>
            <td class="border border-slate-300 p-1">{{ product.price }}</td>
          </tr>
          <tr>
            <td class="border border-slate-300 p-1">Product Description</td>
            <td class="border border-slate-300 p-1">
              {{ product.description }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
const { product, isLoading, error } = useProduct(1)
</script>
