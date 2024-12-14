<script setup lang="ts">
import { useCart } from "@/composables/useCart";
import { useAuthStore } from "../store/authStore";
import { inject } from 'vue'

const { items } = useCart();
const showAuthModal = ref(false);
const authStore = useAuthStore();
const isopen = inject('isopen')


const openAuthModal = () => (showAuthModal.value = true);
const closeAuthModal = () => (showAuthModal.value = false);
</script>

<template>
  <header class="site-header">
    <NuxtLink to="/">
      <div class="site-logo">
        <span><span class="text-purple-600">Protype</span> Store</span>
      </div>
    </NuxtLink>

    <nav class="site-nav">
      <ul class="site-nav__list">
        <li
          class="site-nav__item cursor-pointer text-gray-500 hover:text-black"
        >
          <NuxtLink to="/blog">Blog</NuxtLink>
        </li>
        <li
          class="site-nav__item cursor-pointer text-gray-500 hover:text-black"
        >
          <NuxtLink to="/products">Products</NuxtLink>
        </li>

        <li
          class="site-nav__item cursor-pointer text-gray-500 hover:text-black"
        >
          <NuxtLink to="/cart">Cart - {{ items.length }}</NuxtLink>
        </li>
        <li
          class="site-nav__item flex items-center gap-3 text-gray-500 hover:text-black"
        >
          <img src="../assets/drawer.svg" alt="" />
          <NuxtLink @click="isopen = !isopen">Drawer</NuxtLink>
        </li>

        <li
          v-if="authStore.isAuthenticated"
          class="site-nav__item flex items-center gap-3 text-gray-500 hover:text-black"
        >
          <img src="../assets/Union.svg" alt="" />
          <NuxtLink to="/profile">Profile</NuxtLink>
        </li>
        <li
          v-else
          @click="openAuthModal"
          class="site-nav__item flex items-center gap-3 text-gray-500 hover:text-black"
        >
          <img src="../assets/Union.svg" alt="" />
          <NuxtLink>Login</NuxtLink>
        </li>
      </ul>
    </nav>

    <!-- Auth Modal -->
    <AuthForm
      v-if="showAuthModal"
      :show="showAuthModal"
      @close="closeAuthModal"
    />
  </header>
</template>
