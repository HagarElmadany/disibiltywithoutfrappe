<template>
  <div class="space-y-6 p-4">

    <h4 class="text-lg font-bold text-[#074667] font-[Cairo] flex items-center mb-6">
      <i class="pi pi-exclamation-circle text-[#FF555D] ml-3"></i>
      كيف تؤثر الإعاقة عليك أكاديمياً؟
    </h4>

        <hr class="my-6 border-t-2 border-gray-300" />

    <div>
      <h4 class="text-md font-semibold mb-3">مشكلات الانتقال:</h4>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-2">
        <div v-for="opt in academicMobility" :key="opt.value" class="flex items-center">
          <Checkbox 
            v-model="form.academic_impact.mobility" 
            :inputId="opt.value" 
            :value="opt.value"
            :disabled="form.academic_impact.mobility.includes('No Issues') && opt.value !== 'No Issues'"
          />
          <label :for="opt.value" class="mx-2">{{ opt.label }}</label>
        </div>
      </div>
    </div>

    <div>
      <h4 class="text-md font-semibold mb-3">مشكلات البيئة الداخلية:</h4>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-2">
        <div v-for="opt in academicEnvironment" :key="opt.value" class="flex items-center">
          <Checkbox 
            v-model="form.academic_impact.environment" 
            :inputId="opt.value" 
            :value="opt.value"
            :disabled="form.academic_impact.environment.includes('No Issues') && opt.value !== 'No Issues'"
          />
          <label :for="opt.value" class="mx-2">{{ opt.label }}</label>
        </div>
      </div>
    </div>

    <div>
      <h4 class="text-md font-semibold mb-3">مشكلات التدريس:</h4>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-2">
        <div v-for="opt in academicTeaching" :key="opt.value" class="flex items-center">
          <Checkbox 
            v-model="form.academic_impact.teaching" 
            :inputId="opt.value" 
            :value="opt.value"
            :disabled="form.academic_impact.teaching.includes('No Issues') && opt.value !== 'No Issues'"
          />
          <label :for="opt.value" class="mx-2">{{ opt.label }}</label>
        </div>
      </div>
    </div>

    <div>
      <h4 class="text-md font-semibold mb-3">التجهيزات المطلوبة:</h4>
      <Textarea 
        v-model="form.academic_impact.required_equipment" 
        rows="3" 
        autoResize 
        class="w-full p-inputtext-sm" 
        placeholder="اذكر التجهيزات المطلوبة لمساعدتك أكاديمياً" 
      />
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Checkbox from 'primevue/checkbox';
import Textarea from 'primevue/textarea';
import type { StudentForm, AcademicImpact } from '../../../interfaces/Student';
import { watchEffect } from 'vue';

const defaultAcademicImpact: AcademicImpact = {
  transportation_issue: 'No Issues',
  env_no_elevators: false,
  env_no_internal_transport: false,
  env_unprepared_roads: false,
  env_unprepared_facilities: false,
  env_unprepared_lecture_halls: false,
  env_unprepared_bathrooms: false,
  env_no_companion_waiting_area: false,
  teaching_issue: 'No Issues',
  required_equipment: '',
  mobility: [],
  environment: [],
  teaching: [],
};

const form = ref<StudentForm>({
  name_ar: '',
  name_en: '',
  national_id: '',
  academic_impact: defaultAcademicImpact
});

interface Option {
  label: string;
  value: string;
}

const academicMobility: Option[] = [
  { label: "لا توجد مشكلات", value: "No Issues" },
  { label: "صعوبة في الحركة داخل الحرم", value: "campus" },
  { label: "صعوبة في استخدام المصاعد", value: "elevator" },
  { label: "مشكلات في التنقل بين القاعات", value: "classrooms" },
];

const academicEnvironment: Option[] = [
  { label: "لا توجد مشكلات", value: "No Issues" },
  { label: "الإضاءة غير مناسبة", value: "lighting" },
  { label: "الضوضاء عالية", value: "noise" },
  { label: "عدم توفر أدوات مساعدة", value: "tools" },
];

const academicTeaching: Option[] = [
  { label: "لا توجد مشكلات", value: "No Issues" },
  { label: "سرعة الشرح", value: "speed" },
  { label: "عدم استخدام وسائل بصرية", value: "visual" },
  { label: "عدم مراعاة الفروق الفردية", value: "individual" },
];


watchEffect(() => {
  // Mobility
  if (form.value.academic_impact.mobility.includes('No Issues') && form.value.academic_impact.mobility.length > 1) {
    form.value.academic_impact.mobility = ['No Issues'];
  } else if (!form.value.academic_impact.mobility.includes('No Issues') && form.value.academic_impact.mobility.length > 1) {
    form.value.academic_impact.mobility = form.value.academic_impact.mobility.filter(v => v !== 'No Issues');
  }

  // Environment
  if (form.value.academic_impact.environment.includes('No Issues') && form.value.academic_impact.environment.length > 1) {
    form.value.academic_impact.environment = ['No Issues'];
  } else if (!form.value.academic_impact.environment.includes('No Issues') && form.value.academic_impact.environment.length > 1) {
    form.value.academic_impact.environment = form.value.academic_impact.environment.filter(v => v !== 'No Issues');
  }

  // Teaching
  if (form.value.academic_impact.teaching.includes('No Issues') && form.value.academic_impact.teaching.length > 1) {
    form.value.academic_impact.teaching = ['No Issues'];
  } else if (!form.value.academic_impact.teaching.includes('No Issues') && form.value.academic_impact.teaching.length > 1) {
    form.value.academic_impact.teaching = form.value.academic_impact.teaching.filter(v => v !== 'No Issues');
  }
});
</script>

