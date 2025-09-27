<template>
  <div class="flex justify-between mt-8 sticky bottom-0 bg-[#EDF7FF] py-4">
    <button 
      v-if="showPrev"
      @click="$emit('prev')"
      class="bg-white border border-[#FF555D] text-[#FF555D] px-4 py-2 rounded-lg font-[Cairo] hover:bg-[#FFF5F5] hover:cursor-pointer transition-colors duration-200"
    >
      {{ $t("form.prev") }}
    </button>

    <div class="flex-1"></div>

    <button 
      @click="$emit('next')"
      :class="[
        isSubmit 
          ? 'bg-[#FF555D] hover:bg-[#e04449]' 
          : 'bg-[#FF555D] hover:bg-[#e04449]',
        'text-white px-4 py-2 rounded-lg font-medium font-[Cairo] hover:cursor-pointer transition-colors duration-200'
      ]"
    >
      {{ isSubmit ? $t("form.submit") : $t("form.next") }}
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  showPrev?: boolean
  isSubmit?: boolean
}>()
</script>
