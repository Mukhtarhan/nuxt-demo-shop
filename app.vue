<!-- ./app.vue -->
<script setup lang="ts">
import Drawer from "./components/Drawer.vue";

let isopen = ref(false);
const title = ref("Nuxt Shop");
const description = ref("A simple shop built with Nuxt.");
provide("isopen", isopen);
useHead({
    titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} - Nuxt Shop` : "Nuxt Shop";
    },
    meta: [
        //Open Graph
        {
            key: "og-type",
            property: "og:type",
            content: "website",
        },
        {
            key: "og-url",
            property: "og:url",
            content: `https://anuxtshop.netlify.app/`,
        },
        //Twitter
        {
            key: "twitter-card",
            property: "twitter:card",
            content: "summary_large_image",
        },
        {
            key: "twitter-url",
            property: "twitter:url",
            content: `https://anuxtshop.netlify.app/`,
        },
    ],
});

useSeoMeta({
    description: description,
    ogTitle: title,
    ogDescription: description,
    ogImage: `https://anuxtshop.netlify.app/assets/images/cover.jpg`,
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: `https://anuxtshop.netlify.app/assets/images/cover.jpg`,
});
</script>
<template>
<<<<<<< HEAD
  <NuxtLayout>
    <div class="bg-white">
      <NuxtLoadingIndicator />
      <NuxtPage />
      <!-- <Drawer /> -->
    </div>
  </NuxtLayout>
=======
    <NuxtLayout>
        <!-- <div class="bg-white max-w-7xl mx-auto mt-14"> -->
        <NuxtLoadingIndicator />
        <NuxtPage />
        <Drawer v-if="isopen" />
        <!-- </div> -->
    </NuxtLayout>
>>>>>>> cb5dd41b38c1d9dcf55ab037f70cfffdcb5083ea
</template>
