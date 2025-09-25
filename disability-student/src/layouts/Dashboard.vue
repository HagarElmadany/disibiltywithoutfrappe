<template>
  <div class="flex h-screen flex-row-reverse">
    <!-- Sidebar -->
    <aside
      dir="rtl"
      :class="[
        'bg-white shadow-md transition-all duration-300 flex flex-col justify-between relative',
        isCollapsed ? 'w-20' : 'w-64'
      ]"
    >
      <!-- Top Section -->
      <div>
        <!-- Logo Container -->
        <div class="relative p-4 h-20 flex items-center justify-center group">
          <img
            src="../assets/images/logo.png"
            alt="Logo"
            width="100px"
            height="80px"
            class="block mx-auto transition-opacity duration-300 group-hover:opacity-0"
          />

          <button
            class="absolute w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:cursor-pointer"
            @click="toggleSidebar"
          >
            <i :class="isCollapsed ? 'pi pi-angle-left' : 'pi pi-angle-right'"></i>
          </button>
        </div>

        <!-- Title -->
        <div
          v-if="!isCollapsed"
          class="px-4 mb-6 text-center transition-opacity duration-300"
        >
          <span
            class="font-[Cairo] font-bold text-md text-[var(--secondary-color)]"
          >
            مركز خدمة الطلاب ذوي الإعاقة
          </span>
        </div>

        <!-- Nav Links -->
        <nav class="mt-2 flex flex-col gap-2">
          <RouterLink
            to="/dashboard/students"
            class="nav-link flex items-center gap-3 py-2 pr-4 transition"
            :class="isCollapsed ? 'justify-center' : 'justify-start'"
          >
            <i class="pi pi-users text-lg"></i>
            <span v-if="!isCollapsed" class="ml-auto">
              {{ $t("Sidebar.student_list") }}
            </span>
          </RouterLink>

          <RouterLink
            to="/dashboard/students/add"
            class="nav-link flex items-center gap-3 py-2 pr-4 transition"
            :class="isCollapsed ? 'justify-center' : 'justify-start'"
          >
            <i class="pi pi-user-plus text-lg"></i>
            <span v-if="!isCollapsed" class="ml-auto">
              {{ $t("Sidebar.add_student") }}
            </span>
          </RouterLink>
        </nav>
      </div>

      <div class="p-4 flex flex-col gap-4">
        <button
          class="flex items-center gap-3 w-full py-2 pr-4 text-red-600 hover:bg-red-50 transition"
          :class="isCollapsed ? 'justify-center' : 'justify-start'"
        >
          <span v-if="!isCollapsed" class="ml-auto">
            {{ $t("Sidebar.log_out") }}
          </span>
          <i class="pi pi-sign-out text-lg"></i>
        </button>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 bg-[#FFFCFB] p-6 overflow-y-auto">
      <RouterView />
    </main>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const isCollapsed = ref(true); 

const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value;
};
</script>

<style scoped>
.nav-link.router-link-exact-active {
  background-color: #ffd8da;
  color: #ff555d;
  position: relative;
}

.nav-link.router-link-exact-active::before {
  content: "";
  position: absolute;
  right: 0; 
  top: 0;
  height: 100%;
  width: 4px;
  background-color: #ff555d;
  border-radius: 0 4px 4px 0; 
}

.nav-link.router-link-exact-active i {
  color: #ff555d;
}

.nav-link:hover {
  background-color: #ffd8da;
  color: #ff555d;
  cursor: pointer;
}

.nav-link:hover i {
  color: #ff555d;
}
</style>
