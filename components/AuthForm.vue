<template>
  <div v-if="show" class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <button
        class="close-btn text-black font-bold hover:text-purple-600"
        @click="closeModal"
      >
        x
      </button>
      <h2
        class="text-xl font-semibold mb-4 flex items-center gap-2 justify-center"
      >
        {{
          isSignIn
            ? "Sign In"
            : confirmStage
            ? "Confirm Code"
            : successStage
            ? "Congratulations!"
            : "Sign Up"
        }}
      </h2>

      <!-- Form -->
      <form
        v-if="!confirmStage && !successStage"
        @submit.prevent="handleSubmit"
      >
        <div class="form-group">
          <label for="email" class="flex items-center gap-2">
            <font-awesome-icon icon="envelope" class="text-purple-600" />
            Email
          </label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div class="form-group">
          <label for="password" class="flex items-center gap-2">
            <font-awesome-icon icon="lock" class="text-purple-600" />
            Password
          </label>
          <input
            type="password"
            id="password"
            v-model="form.password"
            placeholder="Enter your password"
            required
          />
        </div>

        <!-- Confirm Password Field -->
        <div v-if="!isSignIn" class="form-group">
          <label for="confirmPassword" class="flex items-center gap-2">
            <font-awesome-icon icon="lock" class="text-purple-600" />
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            v-model="form.confirmPassword"
            placeholder="Confirm your password"
            required
          />
        </div>

        <button
          type="submit"
          class="form-btn bg-purple-600 flex items-center justify-center gap-2"
          :disabled="loading"
        >
          <font-awesome-icon icon="lock" class="text-white" v-if="isSignIn" />
          <font-awesome-icon icon="user-plus" class="text-white" v-else />
          {{ loading ? "Processing..." : isSignIn ? "Sign In" : "Sign Up" }}
        </button>
      </form>

      <!-- Confirmation Code -->
      <div
        v-if="confirmStage"
        class="form-group flex flex-col items-center gap-4"
      >
        <div class="w-full">
          <label for="code" class="flex items-center gap-2">
            <font-awesome-icon icon="key" class="text-purple-600" />
            Enter Confirmation Code
          </label>
          <input
            type="text"
            id="code"
            v-model="form.confirmCode"
            placeholder="Enter code"
            required
          />
        </div>

        <button
          class="form-btn bg-purple-600 flex items-center justify-center gap-2"
          @click="handleConfirmCode"
          :disabled="loading"
        >
          <font-awesome-icon icon="key" class="text-white" />
          Confirm
        </button>
      </div>

      <!-- Success Message -->
      <div
        v-if="successStage"
        class="form-success gap-6 flex flex-col items-center"
      >
        <font-awesome-icon
          icon="check-circle"
          class="text-purple-600 w-20 h-20"
        />
        <p>Your account has been created successfully.</p>
        <button
          class="form-btn bg-purple-600 flex items-center justify-center gap-2"
          @click="goToLogin"
        >
          <font-awesome-icon icon="sign-in-alt" class="text-white" />
          Go to Login
        </button>
      </div>

      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      <p v-if="!confirmStage && !successStage">
        {{ isSignIn ? "Don't have an account?" : "Already have an account?" }}
        <span class="toggle-link" @click="toggleAuthMode">
          {{ isSignIn ? "Sign Up" : "Sign In" }}
        </span>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";
import axios from "axios";
import { useAuthStore } from "../store/authStore";
import { useRouter } from "vue-router";

const API_URL = "https://67415a25e4647499008d72f6.mockapi.io/api/v1/users";

// Props
defineProps({ show: Boolean });
const emit = defineEmits(["close"]);

// State
const authStore = useAuthStore();
const router = useRouter();

const isSignIn = ref(true);
const confirmStage = ref(false);
const successStage = ref(false);
const loading = ref(false);
const errorMessage = ref("");
const form = ref({
  email: "",
  password: "",
  confirmPassword: "",
  confirmCode: "",
});
const defaultConfirmCode = "1111";

// Actions
const closeModal = () => emit("close");
const toggleAuthMode = () => {
  isSignIn.value = !isSignIn.value;
  confirmStage.value = successStage.value = false;
  form.value.email = form.value.password = form.value.confirmPassword = "";
};

// Submit Handler
const handleSubmit = async () => {
  errorMessage.value = "";
  loading.value = true;

  try {
    if (isSignIn.value) {
      const { data: users } = await axios.get(API_URL);
      const user = users.find(
        (u) =>
          u.username === form.value.email && u.password === form.value.password
      );
      if (user) {
        authStore.login(user);
        router.push("/");
        closeModal();
      } else {
        errorMessage.value = "Invalid email or password.";
      }
    } else {
      if (form.value.password !== form.value.confirmPassword) {
        errorMessage.value = "Passwords do not match.";
        return;
      }
      confirmStage.value = true;
    }
  } catch (error) {
    errorMessage.value = "An error occurred.";
  } finally {
    loading.value = false;
  }
};

// Confirmation Code Handler
const handleConfirmCode = async () => {
  if (form.value.confirmCode !== defaultConfirmCode) {
    errorMessage.value = "Invalid confirmation code.";
    return;
  }

  try {
    await axios.post(API_URL, {
      name: "New User",
      username: form.value.email,
      password: form.value.password,
      name: "",
      surname: "",
      age: 0,
      products: [],
    });
    successStage.value = true;
    confirmStage.value = false;
  } catch {
    errorMessage.value = "Failed to create user.";
  }
};

const goToLogin = () => toggleAuthMode();
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  width: 400px;
  text-align: center;
  position: relative;
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.4rem;
  cursor: pointer;
}

.form-group {
  margin-bottom: 1rem;
  text-align: left;
}

.form-group label {
  display: block;
  margin-top: 18px;
  margin-bottom: 0.5rem;
}

.form-group input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.form-btn {
  color: white;
  width: 100%;
  border: none;
  padding: 0.5rem 40px;
  border-radius: 10px;
  margin-bottom: 10px;
  cursor: pointer;
}

.form-btn:disabled {
  background: #ccc;
  cursor: not-allowed;
}

.error-message {
  color: red;
  margin-top: 1rem;
}

.toggle-link {
  color: #007bff;
  cursor: pointer;
  text-decoration: underline;
}

.form-success {
  text-align: center;
}
</style>
