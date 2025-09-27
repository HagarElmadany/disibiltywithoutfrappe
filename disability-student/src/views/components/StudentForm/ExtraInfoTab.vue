<template>
  <div class="space-y-6">
    <h4 class="text-lg font-bold text-[#074667] font-[Cairo] flex items-center mb-6">
      <i class="pi pi-star ml-3 text-[#FF555D]"></i>
      المواهب والعمل
    </h4>
    <hr class="my-6 border-t-2 border-gray-300" />

    <div>
      <h4 class="text-md font-semibold mb-3">هل لديك مواهب؟</h4>
      <div class="flex gap-6">
        <div class="flex items-center">
          <RadioButton
            inputId="talent-yes"
            value="yes"
            v-model="hasTalent"
          />
          <label for="talent-yes" class="mx-2">نعم</label>
        </div>
        <div class="flex items-center">
          <RadioButton
            inputId="talent-no"
            value="no"
            v-model="hasTalent"
          />
          <label for="talent-no" class="mx-2">لا</label>
        </div>
      </div>

      <div v-if="hasTalent === 'yes'" class="mt-4 space-y-3">
        <InputText
          v-model="talentDesc"
          placeholder="ما هي المواهب إن وجدت؟"
          class="w-full p-inputtext-sm"
        />
       <div class="flex gap-4">
    <InputText
      v-model="talentPractice"
      placeholder="هل مازلت تمارسها؟ (نعم / لا)"
      class="w-1/2 p-inputtext-sm"
    />
    <InputText
      v-model="talentPlace"
      placeholder="أين؟"
      class="w-1/2 p-inputtext-sm"
    />
  </div>
      </div>
    </div>

    <div>
      <h4 class="text-md font-semibold mb-3">هل تعمل؟</h4>
      <div class="flex gap-6">
        <div class="flex items-center">
          <RadioButton
            inputId="work-yes"
            value="yes"
            v-model="isWorking"
          />
          <label for="work-yes" class="mx-2">نعم</label>
        </div>
        <div class="flex items-center">
          <RadioButton
            inputId="work-no"
            value="no"
            v-model="isWorking"
          />
          <label for="work-no" class="mx-2">لا</label>
        </div>
      </div>

      <div v-if="isWorking === 'yes'" class="mt-4">
        <InputText
          v-model="workDuration"
          placeholder="مدة العمل"
          class="w-full p-inputtext-sm"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import InputText from "primevue/inputtext";
import RadioButton from "primevue/radiobutton";
import type { StudentForm, Talent, EmploymentRecord } from "../../../interfaces/Student"

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
  talents: [],
  employment_records: [],
});

const hasTalent = ref<"yes" | "no" | "">("");
const talentDesc = ref("");
const talentPractice = ref("");
const talentPlace = ref("");

const isWorking = ref<"yes" | "no" | "">("");
const workDuration = ref("");

watch([hasTalent, talentDesc, talentPractice, talentPlace], () => {
  if (hasTalent.value === "yes") {
    form.value.talents = [
      {
        talent_description: talentDesc.value,
        is_still_practicing: talentPractice.value === "نعم",
        practice_location: talentPlace.value,
      },
    ];
  } else {
    form.value.talents = [];
  }
});

watch([isWorking, workDuration], () => {
  form.value.employment_records = [
    {
      is_working: isWorking.value === "yes",
      work_duration: workDuration.value,
    },
  ];
});
</script>
