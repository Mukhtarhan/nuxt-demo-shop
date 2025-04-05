<template>
  <div class="pt-4">
    <div class="max-w-7xl mx-auto">
      <!-- Hero Section -->
      <div
        class="shadow min-h-[400px] rounded-3xl mt-8 bg-gradient-to-r from-green-200 to-blue-100 flex items-center justify-center flex-col text-center p-8"
      >
        <h2 class="text-4xl font-extrabold max-w-4xl mx-auto leading-tight">
          Our products offer innovative, reliable, and user-friendly solutions
          designed to enhance productivity and efficiency in your daily
          operations
        </h2>
        <NuxtLink to="/products">
          <button class="btn-primary mt-8">View collection</button>
        </NuxtLink>
      </div>

      <!-- Features Section -->
      <div class="site-section mt-16 text-center">
        <h2 class="text-3xl font-bold mb-6">Why Choose Us?</h2>
        <p class="text-lg text-gray-600 mb-10">
          Discover the key benefits of using our solutions.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Feature 1 -->
          <div class="feature-card">
            <FontAwesomeIcon icon="cogs" class="text-green-500 text-6xl mb-4" />
            <h3 class="text-xl font-semibold">Innovative Design</h3>
            <p class="text-gray-600">
              Stay ahead of the curve with cutting-edge, creative designs.
            </p>
          </div>

          <!-- Feature 2 -->
          <div class="feature-card">
            <FontAwesomeIcon
              icon="check-circle"
              class="text-blue-500 text-6xl mb-4"
            />
            <h3 class="text-xl font-semibold">User-Friendly</h3>
            <p class="text-gray-600">
              Experience hassle-free and intuitive user interfaces.
            </p>
          </div>

          <!-- Feature 3 -->
          <div class="feature-card">
            <FontAwesomeIcon
              icon="user-shield"
              class="text-yellow-500 text-6xl mb-4"
            />
            <h3 class="text-xl font-semibold">Reliable Performance</h3>
            <p class="text-gray-600">
              Depend on consistent, high-quality performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faCogs,
  faCheckCircle,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";

// Add FontAwesome icons to the library
library.add(faCogs, faCheckCircle, faUserShield);
</script>

<style scoped>
.feature-card {
  background: #ffffff;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.15);
}

.btn-primary {
  background-color: #22c55e;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #16a34a;
}
</style>
