<template>
  <div class="flex flex-col items-center min-h-screen" dir="rtl">
    <!-- Header -->
    <div class="flex flex-col items-center mt-6 mb-8 text-center w-full">
      <img
        src="../../assets/images/disabled student-amico.png"
        alt="student header"
        class="w-25 md:w-32 lg:w-40 h-auto mb-4"
      />
      <h1 class="text-xl md:text-2xl font-bold text-[#074667] font-[Cairo]">
        {{ $t("form.registration_form_at_the_center_for_students_with_disabilities") }}
      </h1>

      <!-- Divider line -->
      <div class="w-full max-w-7xl px-4 mt-4 flex items-center gap-4">
        <div class="w-1/4 h-1 bg-[#FF555D] "></div>
        <div class="w-3/4 h-1 bg-[#FF555D] "></div>
      </div>
    </div>

    <!-- Main content -->
    <div class="w-full max-w-7xl">
      <div class="overflow-hidden p-6">
        <div class="flex flex-row gap-6 min-h-[600px]">
          
          <!-- Sidebar (Stepper) -->
          <div class="w-1/4 bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
            <div class="space-y-6">

              <!-- Step 1 -->
              <div role="button" @click="goToStep(1)" :class="stepClass(1)">
                <div :class="circleClass(1)">
                  <i v-if="currentStep > 1" class="fas fa-check"></i>
                  <span v-else>1</span>
                </div>
                <div class="flex-1">
                  <h3 class="font-bold font-[Cairo] text-sm">البيانات الشخصية</h3>
                </div>
              </div>
              <div class="h-8 w-px mr-9" :class="lineClass(1)"></div>

              <!-- Step 2 -->
              <div role="button" @click="goToStep(2)" :class="stepClass(2)">
                <div :class="circleClass(2)">
                  <i v-if="currentStep > 2" class="fas fa-check"></i>
                  <span v-else>2</span>
                </div>
                <div class="flex-1">
                  <h3 class="font-bold font-[Cairo] text-sm">الإعاقات</h3>
                </div>
              </div>
              <div class="h-8 w-px mr-9" :class="lineClass(2)"></div>

              <!-- Step 3 -->
              <div role="button" @click="goToStep(3)" :class="stepClass(3)">
                <div :class="circleClass(3)">
                  <i v-if="currentStep > 3" class="fas fa-check"></i>
                  <span v-else>3</span>
                </div>
                <div class="flex-1">
                  <h3 class="font-bold font-[Cairo] text-sm">المشكلات الأكاديمية</h3>
                </div>
              </div>
              <div class="h-8 w-px mr-9" :class="lineClass(3)"></div>

              <!-- Step 4 -->
              <div role="button" @click="goToStep(4)" :class="stepClass(4)">
                <div :class="circleClass(4)">
                  <i v-if="isSubmitted" class="fas fa-check"></i>
                  <span v-else>4</span>
                </div>
                <div class="flex-1">
                  <h3 class="font-bold font-[Cairo] text-sm">مواهب / بيانات إضافية</h3>
                </div>
              </div>

            </div>
          </div>

          <!-- Main form area -->
          <div class="flex-1 bg-[#EDF7FF] p-8 rounded-lg shadow-sm">
            <div v-show="currentStep === 1">
              <BasicInfoTab v-model="form" />
              <FormNavigationButtons 
                :showPrev="false" 
                @next="goToStep(2)" 
              />
            </div>

            <div v-show="currentStep === 2">
              <DisabilitiesTab v-model="form"/>
              <FormNavigationButtons 
                :showPrev="true" 
                @prev="goToStep(1)" 
                @next="goToStep(3)" 
              />
            </div>

            <div v-show="currentStep === 3">
              <AcademicProblemsTab  v-model="form"/>
              <FormNavigationButtons 
                :showPrev="true" 
                @prev="goToStep(2)" 
                @next="goToStep(4)" 
              />
            </div>

            <div v-show="currentStep === 4">
              <ExtraInfoTab v-model="form"/>
              <FormNavigationButtons 
                :showPrev="true" 
                isSubmit
                @prev="goToStep(3)" 
                @next="submitForm" 
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import BasicInfoTab from "../components/StudentForm/BasicInfoTab.vue";
import DisabilitiesTab from "../components/StudentForm/DisabilitiesTab.vue";
import AcademicProblemsTab from "../components/StudentForm/AcademicProblemsTab.vue";
import ExtraInfoTab from "../components/StudentForm/ExtraInfoTab.vue";
import FormNavigationButtons from "../components/StudentForm/FormNavigationButtons.vue";
import type { StudentForm } from "../../interfaces/Student";

const currentStep = ref(1)
const isSubmitted = ref(false)

const form = ref<StudentForm>({
  name_en: "",
  name_ar: "",
  national_id: "",
  gender: undefined,
  academic_impact: {
    transportation_issue: "No Issues",
    env_no_elevators: false,
    env_no_internal_transport: false,
    env_unprepared_roads: false,
    env_unprepared_facilities: false,
    env_unprepared_lecture_halls: false,
    env_unprepared_bathrooms: false,
    env_no_companion_waiting_area: false,
    teaching_issue: "No Issues",
    required_equipment: "",
    mobility: [],
    environment: [],
    teaching: [],
  },
  motor_disabilities: [],
  hearing_disabilities: [],
  visual_disabilities: [],
  cognitive_disabilities: [],

  talents: [],
  employment_records: [],
});

const goToStep = (step: number) => {
  if (step >= 1 && step <= 4) {
    currentStep.value = step
  }
}

const submitForm = () => {
  console.log("Form submitted!")
  isSubmitted.value = true
}

// UI helpers
const stepClass = (step: number) => {
  return [
    "flex items-center p-4 rounded-lg transition-all duration-200 cursor-pointer",
    currentStep.value === step
      ? "bg-[#FF555D] text-white shadow-lg"
      : currentStep.value > step
      ? "bg-white text-[#074667] border border-[#FF555D] hover:bg-[#FFF5F5]"
      : "bg-white text-gray-400 hover:bg-gray-100"
  ]
}

const circleClass = (step: number) => {
  return [
    "w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ml-4",
    currentStep.value === step
      ? "bg-white text-[#FF555D]"
      : currentStep.value > step
      ? "bg-[#FF555D] text-white"
      : "bg-gray-300 text-white"
  ]
}

const lineClass = (step: number) => {
  return [
    "h-8 w-px mr-9 transition-colors duration-200",
    currentStep.value > step ? "bg-[#FF555D]" : "bg-gray-300"
  ]
}
</script>
