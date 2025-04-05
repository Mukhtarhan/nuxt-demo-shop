import { useAuthStore } from "../store/authStore";
import { useToast } from "vue-toastification";
const toast = useToast();
export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();

  // Check if the user is authenticated
  if (!authStore.isAuthenticated) {
    // Redirect to the login page
    toast.error("Please log in to your account");
    return navigateTo("/");
  }
});
