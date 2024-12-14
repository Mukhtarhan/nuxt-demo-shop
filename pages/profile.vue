<template>
  <div
    class="profile-page max-w-5xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg"
  >
    <!-- Header -->
    <div class="flex justify-between mb-6">
      <h2
        class="text-2xl font-semibold text-purple-600 flex items-center gap-2"
      >
        <font-awesome-icon icon="user-circle" class="text-purple-600" />
        Profile
      </h2>
      <button
        @click="toggleEdit"
        class="flex items-center gap-2 bg-purple-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-purple-700 transition duration-300"
      >
        <font-awesome-icon :icon="isEditing ? 'times' : 'edit'" />
        {{ isEditing ? "Cancel" : "Edit" }}
      </button>
    </div>

    <!-- Content -->
    <div class="flex justify-between items-start">
      <!-- Left: Editable Fields -->
      <form class="space-y-6 w-3/5" @submit.prevent>
        <!-- Name -->
        <div class="form-group">
          <label for="name" class="text-gray-700 flex items-center gap-2">
            <font-awesome-icon icon="user" class="text-purple-600" />
            Name
          </label>
          <input
            id="name"
            type="text"
            v-model="user.name"
            :disabled="!isEditing"
            class="form-input w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600 focus:outline-none disabled:bg-gray-100"
          />
        </div>

        <!-- Surname -->
        <div class="form-group">
          <label for="surname" class="text-gray-700 flex items-center gap-2">
            <font-awesome-icon icon="user-tag" class="text-purple-600" />
            Surname
          </label>
          <input
            id="surname"
            type="text"
            v-model="user.surname"
            :disabled="!isEditing"
            class="form-input w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600 focus:outline-none disabled:bg-gray-100"
          />
        </div>

        <!-- Age -->
        <div class="form-group">
          <label for="age" class="text-gray-700 flex items-center gap-2">
            <font-awesome-icon icon="calendar-alt" class="text-purple-600" />
            Age
          </label>
          <input
            id="age"
            type="number"
            v-model="user.age"
            :disabled="!isEditing"
            class="form-input w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600 focus:outline-none disabled:bg-gray-100"
          />
        </div>

        <!-- Save Button -->
        <button
          v-if="isEditing"
          type="button"
          class="w-full bg-purple-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-purple-700 transition duration-300"
          @click="saveChanges"
        >
          Save Changes
        </button>
      </form>

      <!-- Right: Logout Button -->
      <div class="flex justify-end">
        <button
          class="w-full bg-red-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-red-700 transition duration-300"
          @click="logout"
        >
          <font-awesome-icon icon="sign-out-alt" class="mr-2" />
          Logout
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faUser,
  faUserTag,
  faCalendarAlt,
  faEdit,
  faTimes,
  faUserCircle,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

// Add icons to the FontAwesome library
library.add(
  faUser,
  faUserTag,
  faCalendarAlt,
  faEdit,
  faTimes,
  faUserCircle,
  faSignOutAlt
);

// User data (for demonstration)
const user = ref({
  name: "John",
  surname: "Doe",
  age: 30,
});

const isEditing = ref(false);

// Toggle edit mode
const toggleEdit = () => {
  isEditing.value = !isEditing.value;
};

// Save changes (no backend integration here)
const saveChanges = () => {
  isEditing.value = false;
  alert("Changes saved successfully!");
};

// Logout action
const logout = () => {
  alert("Logged out successfully!");
};
</script>

<style scoped>
.form-input {
  transition: all 0.3s ease-in-out;
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}
</style>
