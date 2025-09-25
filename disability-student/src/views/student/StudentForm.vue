<template>
  <div class="flex flex-col items-center min-h-screen" dir="rtl">
    <div class="flex flex-col items-center mt-2 mb-8 text-center">
      <img
        src="../../assets/images/basicinfo.png"
        alt="student header"
        class="w-18 md:w-34 lg:w-42 h-auto mb-4"
      />
      <h1 class="text-2xl md:text-3xl font-bold text-[#074667] font-[Cairo]">
        {{ $t("form.registration_form_at_the_center_for_students_with_disabilities") }}
      </h1>
      <!-- Modified divider to span across both columns -->
      <div class="w-full max-w-7xl px-4 mt-4">
        <div class="h-1 bg-[#FF555D] rounded mx-auto" style="width: calc(100% - 2rem);"></div>
      </div>
    </div>

    <div class="w-full max-w-7xl px-4">
      <div class="bg-white rounded-xl shadow-lg overflow-hidden">
        <div class="flex flex-row-reverse min-h-[600px]">
          
          <!-- Main content area -->
          <div class="bg-[#EDF7FF] flex-1 p-8">
            <div v-show="currentStep === 1">
              <BasicInfoTab />
              <div class="flex justify-start mt-8">
                <button 
                  type="button"
                  @click="goToStep(2)"
                  class="bg-[#FF555D] hover:bg-[#e04449] text-white px-4 py-2 text-sm rounded-lg font-medium font-[Cairo] transition-colors duration-200"
                >
                  {{ $t("form.next") }}
                </button>
              </div>
            </div>

            <div v-show="currentStep === 2">
              <DisabilitiesTab />
              <div class="flex justify-between mt-8">
                <button 
                  type="button"
                  @click="goToStep(3)"
                  class="bg-[#FF555D] hover:bg-[#e04449] text-white px-4 py-2 text-sm rounded-lg font-medium font-[Cairo] transition-colors duration-200"
                >
                  {{ $t("form.next") }}
                </button>
                <button 
                  type="button"
                  @click="goToStep(1)"
                  class="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 text-sm rounded-lg font-medium font-[Cairo] transition-colors duration-200"
                >
                  {{ $t("form.prev") }}
                </button>
              </div>
            </div>

            <div v-show="currentStep === 3">
              <AcademicProblemsTab />
              <div class="flex justify-between mt-8">
                <button 
                  type="button"
                  @click="goToStep(4)"
                  class="bg-[#FF555D] hover:bg-[#e04449] text-white px-4 py-2 text-sm rounded-lg font-medium font-[Cairo] transition-colors duration-200"
                >
                  {{ $t("form.next") }}
                </button>
                <button 
                  type="button"
                  @click="goToStep(2)"
                  class="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 text-sm rounded-lg font-medium font-[Cairo] transition-colors duration-200"
                >
                  {{ $t("form.prev") }}
                </button>
              </div>
            </div>

            <div v-show="currentStep === 4">
              <ExtraInfoTab />
              <div class="flex justify-between mt-8">
                <button 
                  type="button"
                  @click="submitForm"
                  class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 text-sm rounded-lg font-medium font-[Cairo] transition-colors duration-200"
                >
                  {{$t("form.submit")}}
                </button>
                <button 
                  type="button"
                  @click="goToStep(3)"
                  class="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 text-sm rounded-lg font-medium font-[Cairo] transition-colors duration-200"
                >
                  {{ $t("form.prev") }}
                </button>
              </div>
            </div>
          </div>

          <!-- Sidebar - separated with border -->
          <div class="w-80 bg-white border-l border-gray-200 p-6">
            <div class="space-y-6">
              
              <div 
                role="button"
                tabindex="0"
                @click="goToStep(1)"
                @keydown.enter="goToStep(1)"
                @keydown.space.prevent="goToStep(1)"
                :class="[
                  'flex items-center p-4 rounded-lg transition-all duration-200',
                  currentStep === 1 
                    ? 'bg-[#FF555D] text-white shadow-lg cursor-pointer' 
                    : currentStep > 1 
                      ? 'bg-white text-[#074667] border border-[#FF555D] hover:bg-[#FFF5F5] cursor-pointer'
                      : 'bg-white text-gray-400 hover:bg-gray-100 cursor-pointer'
                ]"
              >
                <div class="flex-1">
                  <h3 class="font-bold font-[Cairo] text-sm">البيانات الشخصية</h3>
                </div>
                <div 
                  :class="[
                    'w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ml-4',
                    currentStep === 1 
                      ? 'bg-white text-[#FF555D]' 
                      : currentStep > 1 
                        ? 'bg-[#FF555D] text-white'
                        : 'bg-gray-300 text-white'
                  ]"
                >
                  <i v-if="currentStep > 1" class="fas fa-check"></i>
                  <span v-else>1</span>
                </div>
              </div>

              <div 
                :class="[
                  'h-8 w-px mr-9 transition-colors duration-200',
                  currentStep > 1 ? 'bg-[#FF555D]' : 'bg-gray-300'
                ]"
              ></div>

              <div 
                role="button"
                tabindex="0"
                @click="currentStep >= 2 ? goToStep(2) : null"
                @keydown.enter="currentStep >= 2 ? goToStep(2) : null"
                @keydown.space.prevent="currentStep >= 2 ? goToStep(2) : null"
                :class="[
                  'flex items-center p-4 rounded-lg transition-all duration-200',
                  currentStep === 2 
                    ? 'bg-[#FF555D] text-white shadow-lg cursor-pointer' 
                    : currentStep > 2 
                      ? 'bg-white text-[#074667] border border-[#FF555D] hover:bg-[#FFF5F5] cursor-pointer'
                      : currentStep < 2
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed opacity-60'
                        : 'bg-white text-gray-400 hover:bg-gray-100 cursor-pointer'
                ]"
              >
                <div class="flex-1">
                  <h3 class="font-bold font-[Cairo] text-sm">الإعاقات</h3>
                </div>
                <div 
                  :class="[
                    'w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ml-4',
                    currentStep === 2 
                      ? 'bg-white text-[#FF555D]' 
                      : currentStep > 2 
                        ? 'bg-[#FF555D] text-white'
                        : 'bg-gray-300 text-white'
                  ]"
                >
                  <i v-if="currentStep > 2" class="fas fa-check"></i>
                  <span v-else>2</span>
                </div>
              </div>

              <div 
                :class="[
                  'h-8 w-px mr-9 transition-colors duration-200',
                  currentStep > 2 ? 'bg-[#FF555D]' : 'bg-gray-300'
                ]"
              ></div>

              <div 
                role="button"
                tabindex="0"
                @click="currentStep >= 3 ? goToStep(3) : null"
                @keydown.enter="currentStep >= 3 ? goToStep(3) : null"
                @keydown.space.prevent="currentStep >= 3 ? goToStep(3) : null"
                :class="[
                  'flex items-center p-4 rounded-lg transition-all duration-200',
                  currentStep === 3 
                    ? 'bg-[#FF555D] text-white shadow-lg cursor-pointer' 
                    : currentStep > 3 
                      ? 'bg-white text-[#074667] border border-[#FF555D] hover:bg-[#FFF5F5] cursor-pointer'
                      : currentStep < 3
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed opacity-60'
                        : 'bg-white text-gray-400 hover:bg-gray-100 cursor-pointer'
                ]"
              >
                <div class="flex-1">
                  <h3 class="font-bold font-[Cairo] text-sm">المشكلات الأكاديمية</h3>
                </div>
                <div 
                  :class="[
                    'w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ml-4',
                    currentStep === 3 
                      ? 'bg-white text-[#FF555D]' 
                      : currentStep > 3 
                        ? 'bg-[#FF555D] text-white'
                        : 'bg-gray-300 text-white'
                  ]"
                >
                  <i v-if="currentStep > 3" class="fas fa-check"></i>
                  <span v-else>3</span>
                </div>
              </div>

              <div 
                :class="[
                  'h-8 w-px mr-9 transition-colors duration-200',
                  currentStep > 3 ? 'bg-[#FF555D]' : 'bg-gray-300'
                ]"
              ></div>

              <div 
                role="button"
                tabindex="0"
                @click="currentStep >= 4 ? goToStep(4) : null"
                @keydown.enter="currentStep >= 4 ? goToStep(4) : null"
                @keydown.space.prevent="currentStep >= 4 ? goToStep(4) : null"
                :class="[
                  'flex items-center p-4 rounded-lg transition-all duration-200',
                  currentStep === 4 
                    ? 'bg-[#FF555D] text-white shadow-lg cursor-pointer' 
                    : currentStep < 4
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed opacity-60'
                      : 'bg-white text-gray-400 hover:bg-gray-100 cursor-pointer'
                ]"
              >
                <div class="flex-1">
                  <h3 class="font-bold font-[Cairo] text-sm">مواهب / بيانات إضافية</h3>
                </div>
                <div 
                  :class="[
                    'w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ml-4',
                    currentStep === 4 
                      ? 'bg-white text-[#FF555D]' 
                      : 'bg-gray-300 text-white'
                  ]"
                >
                  4
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Components
import BasicInfoTab from "../components/StudentForm/BasicInfoTab.vue";
import DisabilitiesTab from "../components/StudentForm/DisabilitiesTab.vue";
import AcademicProblemsTab from "../components/StudentForm/AcademicProblemsTab.vue";
import ExtraInfoTab from "../components/StudentForm/ExtraInfoTab.vue";

// State
const currentStep = ref(1)

// Methods
const goToStep = (step: number) => {
  if (step <= currentStep.value + 1 && step >= 1 && step <= 4) {
    currentStep.value = step
  }
}

const submitForm = () => {
  console.log('Form submitted!')
}
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');

@media (max-width: 1024px) {
  .flex.min-h-\\[600px\\] {
    flex-direction: column-reverse;
  }
  
  .w-80 {
    width: 100%;
  }

  .border-l {
    border-left: none;
    border-top: 1px solid #e5e7eb;
  }

  button {
    padding: 0.5rem 0.75rem;
    font-size: 0.875rem;
  }
}

@media (max-width: 640px) {
  button {
    padding: 0.375rem 0.5rem;
    font-size: 0.75rem;
  }

  .w-18, .md\\:w-34, .lg\\:w-42 {
    width: 3rem;
  }

  .text-2xl.md\\:text-3xl {
    font-size: 1.25rem;
  }

  .p-8 {
    padding: 1rem;
  }

  .p-6 {
    padding: 1rem;
  }

  .space-y-6 > * + * {
    margin-top: 1rem;
  }

  .p-4 {
    padding: 0.75rem;
  }

  .text-sm {
    font-size: 0.75rem;
  }
}

.transition-all {
  transition: all 0.2s ease-in-out;
}

.font-cairo {
  font-family: "Cairo", sans-serif;
}

[dir="rtl"] .flex-row-reverse {
  flex-direction: row-reverse;
}

[dir="rtl"] .justify-start {
  justify-content: flex-start;
}

[dir="rtl"] .justify-between {
  justify-content: space-between;
}

[dir="rtl"] .ml-4 {
  margin-left: 0;
  margin-right: 1rem;
}

[dir="rtl"] .mr-9 {
  margin-right: 0;
  margin-left: 2.25rem;
}

[role="button"]:focus-visible {
  outline: 2px solid #FF555D;
  outline-offset: 2px;
}
</style>