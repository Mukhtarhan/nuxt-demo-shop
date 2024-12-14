<!-- ./pages/products/index.vue -->
<script setup lang="ts">
interface ProductResponse {
<<<<<<< HEAD
  products: Product[];
  total: number;
  skip: number;
  limit: number;
=======
    products: Product[];
    total: number;
    skip: number;
    limit: number;
>>>>>>> 5e6360592fdec55301852ab96ccf681aef2251f7
}
const { products }: ProductResponse = await $fetch("/api/getProducts");

useSeoMeta({
<<<<<<< HEAD
  title: "Products",
});
</script>
<template>
  <header class="site-section">
    <h1>Products</h1>
    <p>
      Browse our products and find the best deals. It's not a promise. It's a
      guarantee!d
    </p>
  </header>
  <section class="site-section">
    <ul class="product-list">
      <li
        v-for="product in products"
        :key="product.id"
        class="product-list__item"
      >
        <ProductCard :product="product" />
      </li>
    </ul>
  </section>
=======
    title: "Products",
});
</script>
<template>
    <div class="flex justify-between items-center mx-auto max-w-7xl p-4">
        <header class="max-w-7xl p-4 pt-10">
            <h1 class="text-3xl font-bold mb-8">Products</h1>
            <p class="font-normal">
                Browse our products and find the best deals. It's not a promise.
                It's a guarantee!
            </p>
        </header>
        <div class="flex items-center gap-4">
            <select
                class="py-2 px-3 border border-gray-200 focus:border-gray-400 rounded-md focus:outline-none"
            >
                <option value="name">By name</option>
                <option value="price">By price(cheap)</option>
                <option value="price">By price(expensive)</option>
            </select>
            <div class="relative">
                <input
                    type="text"
                    class="border border-gray-200 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:border-gray-400"
                    placeholder="Search..."
                />
                <div
                    class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                >
                    <img src="../../assets/search.svg" />
                </div>
            </div>
        </div>
    </div>
    <section class="site-section">
        <ul class="product-list">
            <li
                v-for="product in products"
                :key="product.id"
                class="product-list__item"
            >
                <ProductCard :product="product" />
            </li>
        </ul>
    </section>
>>>>>>> 5e6360592fdec55301852ab96ccf681aef2251f7
</template>
