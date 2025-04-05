<!-- ./components/ProductCard.vue -->

<script setup lang="ts">
import { useToast } from "vue-toastification";
import { useAuthStore } from "../../store/authStore";
const { addToCart } = useCart();
const toast = useToast();
const authStore = useAuthStore();
defineProps({
  product: {
    type: Object as PropType<Product>,
    required: true,
  },
});

const handleAddToCart = (product: Product) => {
  if (!authStore.isAuthenticated) {
    toast.error("Please log in to add items to your cart!");
    return;
  }

  addToCart(product);
  toast.success(`${product.title} added to cart!`);
};
</script>
<template>
  <article
    class="product-card cursor-pointer transition hover:border-purple-600 border hover:-translate-y-2 hover:shadow-xl"
  >
    <div class="product-card__content">
      <h2 class="product-card__title">{{ product.title }}</h2>
      <p class="product-card__description">{{ product.description }}</p>
      <span class="product-card__price">{{
        formatPrice(
          product.price - product.price * (product.discountPercentage / 100)
        )
      }}</span>
      <div class="product-card__action-cont">
        <button @click="handleAddToCart(product)" class="btn btn--alt">
          Add to cart
        </button>
        <NuxtLink :to="`/products/${product.id}`">
          <button class="btn btn">View details</button>
        </NuxtLink>
      </div>
    </div>
    <div class="product-card__image">
      <img :src="product.thumbnail" :alt="product.title" />
    </div>
  </article>
</template>
