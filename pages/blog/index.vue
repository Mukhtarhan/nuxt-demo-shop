<!-- ./pages/blog/index.vue -->
<script setup>
// Set meta for the page
useHead({
  title: "All Articles",
  meta: [
    {
      name: "description",
      content: "Explore a curated list of articles on various topics.",
    },
  ],
});
</script>

<template>
  <main class="bg-gray-100 min-h-screen">
    <header
      class="bg-gradient-to-r from-purple-500 to-purple-600 text-white py-12 px-6 text-center"
    >
      <h1 class="text-5xl font-bold">All Articles</h1>
      <p class="mt-2 text-lg">Discover a world of insights and knowledge</p>
    </header>

    <section class="py-8 px-4 sm:px-12 lg:px-24">
      <!-- Render list of all articles in ./content/blog using path -->
      <!-- Provide only defined fields in the :query prop -->
      <ContentList
        path="/blog"
        :query="{
          only: ['title', 'description', '_path', 'readingTime'],
        }"
      >
        <!-- Default list slot -->
        <template v-slot="{ list }">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              v-for="article in list"
              :key="article._path"
              class="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <header class="p-6">
                <h2 class="text-xl font-semibold text-gray-800 mb-2">
                  {{ article.title }}
                </h2>
                <p class="text-gray-600 mb-4">
                  {{ article.description }}
                </p>
                <p class="text-sm text-gray-500">
                  Reading time:
                  {{ article.readingTime?.text }}
                </p>
              </header>
              <footer class="bg-gray-50 px-6 py-4 text-right">
                <NuxtLink :to="article._path" class="btn-primary">
                  Read More &rarr;
                </NuxtLink>
              </footer>
            </div>
          </div>
        </template>

        <!-- Slot to display a message when no content is found -->
        <template #not-found>
          <div class="text-center py-12">
            <p class="text-xl text-gray-700">No articles found.</p>
          </div>
        </template>
      </ContentList>
    </section>
  </main>
</template>

<style scoped>
/* Tailwind CSS classes are used for styling. */
.btn-primary {
  display: inline-block;
  background-color: #4f46e5; /* Indigo */
  color: white;
  padding: 0.5rem 1.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  text-align: center;
  border-radius: 0.375rem;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #4338ca; /* Darker Indigo */
}
</style>
