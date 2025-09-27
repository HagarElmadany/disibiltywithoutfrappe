<template>
  <div class="p-2 space-y-6">
    <h2 class="text-lg font-bold text-[#074667] font-[Cairo] flex items-center">
      <i class="pi pi-user ml-3  text-[#FF555D]"></i>
      البيانات الشخصية
    </h2>

    <!-- Personal Info -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label class="block mb-2 text-sm font-medium text-gray-700">الاسم بالعربية</label>
        <InputText v-model="form.name_ar" class="w-full" placeholder="اكتب اسمك بالعربية" />
      </div>
      <div>
        <label class="block mb-2 text-sm font-medium text-gray-700">الاسم بالانجليزية</label>
        <InputText v-model="form.name_en" class="w-full" placeholder="Enter your name in English" />
      </div>
      <div class="md:col-span-2">
        <label class="block mb-2 text-sm font-medium text-gray-700">الرقم القومي</label>
        <InputText v-model="form.national_id" class="w-full" placeholder="xxxxxxxxxxxxxx" />
      </div>
    </div>

    <div>
      <h4 class="text-sm font-medium text-gray-700 mb-2">النوع</h4>
      <div class="flex gap-6">
        <div class="flex items-center">
          <RadioButton inputId="male" name="gender" value="Male" v-model="form.gender" />
          <label for="male" class="mx-2">ذكر</label>
        </div>
        <div class="flex items-center">
          <RadioButton inputId="female" name="gender" value="Female" v-model="form.gender" />
          <label for="female" class="mx-2">أنثى</label>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label class="block mb-2 text-sm font-medium text-gray-700">العنوان</label>
        <InputText v-model="form.address" class="w-full" placeholder="اكتب العنوان" />
      </div>
      <div>
        <label class="block mb-2 text-sm font-medium text-gray-700">الهاتف</label>
        <InputText v-model="form.phone" class="w-full" placeholder="01xxxxxxxx" />
      </div>
      <div>
        <label class="block mb-2 text-sm font-medium text-gray-700">رقم الواتساب</label>
        <InputText v-model="form.whatsapp" class="w-full" placeholder="01xxxxxxxx" />
      </div>
      <div>
        <label class="block mb-2 text-sm font-medium text-gray-700">الايميل</label>
        <InputText v-model="form.email" class="w-full" placeholder="example@mail.com" />
      </div>
    </div>

    <hr class="my-6 border-t-2 border-gray-300" />


    <!-- Guardian Info -->
    <h3 class="text-lg font-bold text-[#074667] font-[Cairo] flex items-center mt-6">
      <i class="pi pi-users ml-3 text-[#FF555D]"></i>
      بيانات ولي الأمر
    </h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label class="block mb-2 text-sm font-medium text-gray-700">اسم ولي الأمر بالعربية</label>
        <InputText v-model="form.guardian_name_ar" class="w-full" />
      </div>
      <div>
        <label class="block mb-2 text-sm font-medium text-gray-700">اسم ولي الأمر بالانجليزية</label>
        <InputText v-model="form.guardian_name_en" class="w-full" />
      </div>
      <div>
        <label class="block mb-2 text-sm font-medium text-gray-700">صلة القرابة</label>
        <Dropdown v-model="form.relationship" :options="relationships" optionLabel="label" optionValue="value" placeholder="اختر" class="w-full" />
      </div>
      <div>
        <label class="block mb-2 text-sm font-medium text-gray-700">هاتف ولي الأمر</label>
        <InputText v-model="form.guardian_phone" class="w-full" />
      </div>
    </div>

    <hr class="my-6 border-t-2 border-gray-300" />


    <!-- Academic Info -->
    <h3 class="text-lg font-bold text-[#074667] font-[Cairo] flex items-center mt-6">
      <i class="pi pi-book ml-3 text-[#FF555D]"></i>
      البيانات الأكاديمية
    </h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

<div>
  <label class="block mb-2 text-sm font-medium text-gray-700">الجامعة</label>
  <Dropdown 
    v-model="form.university" 
    :options="universities" 
    optionLabel="name_ar" 
    optionValue="name" 
    placeholder="اختر الجامعة" 
    class="w-full" 
  />
</div>

     <div>
  <label class="block mb-2 text-sm font-medium text-gray-700">الكلية</label>
  <Dropdown 
    v-model="form.faculty" 
    :options="faculties" 
    optionLabel="name_ar" 
    optionValue="name" 
    placeholder="اختر الكلية" 
    class="w-full" 
  />
</div>
<div>
  <label class="block mb-2 text-sm font-medium text-gray-700">القسم/الشعبة</label>
  <Dropdown 
    v-model="form.department" 
    :options="departments" 
    optionLabel="name_ar" 
    optionValue="name" 
    placeholder="اختر القسم" 
    class="w-full" 
  />
</div>

      <div>
  <label class="block mb-2 text-sm font-medium text-gray-700">الفرقة</label>
  <Dropdown 
    v-model="form.academic_level" 
    :options="academicLevels" 
    optionLabel="name_ar" 
    optionValue="name" 
    placeholder="اختر الفرقة" 
    class="w-full" 
  />
</div>

    </div>

    <hr class="my-6 border-t-2 border-gray-300" />


   


     <!-- Medical Diagnosis -->
    <div>
      <h3 class="text-lg font-bold text-[#074667] font-[Cairo] flex items-center my-6">
        <i class="pi pi-file ml-2 text-[#FF555D]"></i>
        التشخيص الطبي
      </h3>
      <Textarea
        v-model="form.medical_diagnosis_summary"
        rows="3"
        class="w-full p-inputtextarea"
        placeholder="اكتب التشخيص الطبي هنا..."
      />
    </div>

     <!-- Service Card -->
<div class="mt-6 p-4 rounded-xl border-r-5 border-[#FF555D] bg-gradient-to-r from-[#FFF3F3] to-[#FFC1C4]">
  <h4 class="text-sm font-medium mb-4">هل لديك بطاقة الخدمات المتكاملة؟</h4>
  <div class="flex gap-6">
    <label class="flex items-center cursor-pointer">
      <RadioButton inputId="serviceYes" name="serviceCard" :value="1" v-model="form.has_integrated_services_card" />
      <span class="mx-2">نعم</span>
    </label>
    <label class="flex items-center cursor-pointer">
      <RadioButton inputId="serviceNo" name="serviceCard" :value="0" v-model="form.has_integrated_services_card" />
      <span class="mx-2">لا</span>
    </label>
  </div>
</div>


  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import InputText from "primevue/inputtext";
import RadioButton from "primevue/radiobutton";
import Dropdown from "primevue/dropdown";
import Textarea from 'primevue/textarea';


import type { StudentForm } from "../../../interfaces/Student";
import type { University, Faculty, Department, AcademicLevel } from "../../../interfaces/Academic";


const universities = ref<University[]>([
  { name: 'UNIV-1', name_ar: 'جامعة القاهرة', name_en: 'Cairo University' },
  { name: 'UNIV-2', name_ar: 'جامعة عين شمس', name_en: 'Ain Shams University' },
]);


const faculties = ref<Faculty[]>([
  { name: 'FAC-1', name_ar: 'كلية الهندسة', name_en: 'Engineering' },
  { name: 'FAC-2', name_ar: 'كلية الطب', name_en: 'Medicine' },
]);

const departments = ref<Department[]>([
  { name: 'DEP-1', name_ar: 'قسم الحاسبات', name_en: 'Computer Science' },
  { name: 'DEP-2', name_ar: 'قسم الكيمياء', name_en: 'Chemistry' },
]);


const academicLevels = ref<AcademicLevel[]>([
  { name: 'LEVEL-1', name_ar: 'الفرقة الأولى', name_en: 'First Year' },
  { name: 'LEVEL-2', name_ar: 'الفرقة الثانية', name_en: 'Second Year' },
  { name: 'LEVEL-3', name_ar: 'الفرقة الثالثة', name_en: 'Third Year' },
  { name: 'LEVEL-4', name_ar: 'الفرقة الرابعة', name_en: 'Fourth Year' },
]);

const form = ref<StudentForm>({
  name_en: "",
  name_ar: "",
  national_id: "",
  gender: undefined,
  address: "",
  phone: "",
  whatsapp: "",
  email: "",
  guardian_name_en: "",
  guardian_name_ar: "",
  relationship: undefined,
  guardian_phone: "",
  university: "",
  faculty: "",
  department: "",
  academic_level: "",
  has_integrated_services_card: false,
  medical_diagnosis_summary: "",
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
    teaching: []
  }
});

const relationships = [
  { label: "الأب", value: "Father" },
  { label: "الأم", value: "Mother" },
  { label: "الأخ", value: "Brother" },
  { label: "الأخت", value: "Sister" },
  { label: "ولي قانوني", value: "Legal Guardian" },
];
</script>

<style>
.p-radiobutton .p-radiobutton-input:checked + .p-radiobutton-box,
.p-radiobutton .p-radiobutton-box.p-highlight,
[data-pc-name="radiobutton"] [data-pc-section="box"].p-highlight {
  background: #FF555D !important;
  border-color: #FF555D !important;
  color: white !important;
}

.p-radiobutton .p-radiobutton-input:focus + .p-radiobutton-box,
.p-radiobutton .p-radiobutton-box:hover,
[data-pc-name="radiobutton"] [data-pc-section="box"]:hover {
  border-color: #FF555D !important;
  box-shadow: 0 0 0 0.2rem rgba(255, 85, 93, 0.2) !important;
}

.p-checkbox .p-checkbox-input:checked + .p-checkbox-box,
.p-checkbox .p-checkbox-box.p-highlight,
[data-pc-name="checkbox"] [data-pc-section="box"].p-highlight {
  background: #FF555D !important;
  border-color: #FF555D !important;
  color: white !important;
}

.p-checkbox .p-checkbox-input:focus + .p-checkbox-box,
.p-checkbox .p-checkbox-box:hover,
[data-pc-name="checkbox"] [data-pc-section="box"]:hover {
  border-color: #FF555D !important;
  box-shadow: 0 0 0 0.2rem rgba(255, 85, 93, 0.2) !important;
}

/* InputText & Textarea */
.p-inputtext:enabled:focus,
.p-inputtextarea:enabled:focus,
[data-pc-name="inputtext"]:focus,
[data-pc-name="textarea"]:focus {
  outline: 0 none !important;
  outline-offset: 0 !important;
  box-shadow: 0 0 0 0.2rem #bde5ff !important;
  border-color: #4599D2 !important;
}

.p-inputtext,
.p-inputtextarea,
[data-pc-name="inputtext"],
[data-pc-name="textarea"] {
  border-color: #4599D2 !important;
}



</style>