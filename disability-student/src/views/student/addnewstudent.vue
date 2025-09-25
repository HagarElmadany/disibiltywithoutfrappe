<template>
  <div
    class="flex flex-col items-center justify-center h-screen text-center gap-6 overflow-hidden"
  >
    <img
      src="../../assets/images/logo.png"
      alt="Logo"
      class="max-w-[200px] md:max-w-[400px] lg:max-w-[500px] h-auto"
    />

    <h1
      class="text-xl md:text-2xl lg:text-3xl font-bold text-[#074667] font-[Cairo] leading-snug"
    >
      {{ $t("form.registration_at_the_center_for_students_with_disabilities") }}
    </h1>

    <button
      class="flex items-center justify-center gap-2 bg-[#FF555D] text-white px-6 py-2 rounded-full shadow-md hover:bg-[#e04b52] transition hover:cursor-pointer"
      @click="goToForm"
    >
      <svg
  xmlns="http://www.w3.org/2000/svg"
  class="w-5 h-5 rotate-0"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
  stroke-width="2"
>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M11 17l-5-5m0 0l5-5m-5 5h12"
  />
</svg>


      <span class="font-medium">
        {{ $t("form.add_new_student") }}
      </span>
    </button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const goToForm = () => {
  router.push("/dashboard/students/form");
};

</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden; 
}
</style>
س