<!-- ./components/SiteHeader.vue -->
<script setup lang="ts">
const { items } = useCart();
</script>
<template>
    <header class="site-header">
        <NuxtLink to="/">
            <div class="site-logo">
                <span>Nuxt Shop</span>
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
                    <img src="../assets/Union.svg" alt="" />
                    <NuxtLink to="/cart">Profile</NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
</template>
