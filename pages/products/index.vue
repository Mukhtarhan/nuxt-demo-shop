<script setup lang="ts">
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

interface ProductResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

// Fetch products
const { products }: ProductResponse = await $fetch("/api/getProducts");

// Reactive states for sort and search
const searchQuery = ref("");
const sortOption = ref("name");

// Computed property for filtered and sorted products
const filteredAndSortedProducts = computed(() => {
  // Filter by search query
  let filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  );

  // Sort based on sortOption
  if (sortOption.value === "name") {
    filteredProducts = filteredProducts.sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  } else if (sortOption.value === "price-asc") {
    filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption.value === "price-desc") {
    filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
  }

  return filteredProducts;
});

useSeoMeta({
  title: "Products",
});
</script>

<template>
  <div class="flex flex-col gap-8 max-w-7xl mx-auto p-4">
    <!-- Header -->
    <header class="text-center">
      <h1 class="text-3xl font-bold mb-4">Products</h1>
      <p class="font-normal">
        Browse our products and find the best deals. It's not a promise. It's a
        guarantee!
      </p>
    </header>

    <!-- Controls: Search and Sort -->
    <div class="flex items-center justify-between gap-4">
      <div class="relative w-full max-w-sm">
        <input
          type="text"
          v-model="searchQuery"
          class="w-full border border-gray-200 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:border-gray-400"
          placeholder="Search products..."
        />
        <div
          class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
        >
          <img src="../../assets/search.svg" />
        </div>
      </div>
      <select
        v-model="sortOption"
        class="py-2 px-3 border border-gray-200 focus:border-gray-400 rounded-md focus:outline-none"
      >
        <option value="name">Sort by name</option>
        <option value="price-asc">Sort by price (low to high)</option>
        <option value="price-desc">Sort by price (high to low)</option>
      </select>
    </div>

    <!-- Product List -->
    <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="product in filteredAndSortedProducts"
        :key="product.id"
        class=""
      >
        <ProductCard :product="product" />
      </div>
    </section>
  </div>
</template>
