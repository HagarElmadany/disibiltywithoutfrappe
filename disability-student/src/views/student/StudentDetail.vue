<template>
  <div class="min-h-screen p-6 font-[Cairo]" dir="rtl">
    <!-- Header Breadcrumb -->
    <div class="flex items-center gap-2 mb-8 text-[#074667] font-bold">
      <a href="#" class="hover:underline">كل الطلاب</a>
      <i class="pi pi-chevron-left text-gray-400"></i>
      <span class="text-gray-600">{{ student.name_ar }}</span>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-6 max-w-7xl mx-auto">
      
      <!-- Right Column - Student Card -->
      <div class="bg-white rounded-2xl shadow-md p-6 h-fit">
        <div class="text-center">
          <!-- Student Image -->
          <div class="w-36 h-36 mx-auto mb-4 relative">
            <img
              src="../../assets/images/details.png"
              alt="student"
              class="w-full h-full"
            />
            <div v-if="student.motor_disabilities?.length" 
                 class="absolute -bottom-2 -right-2 bg-[#FF555D] p-2 rounded-full">
              <i class="pi pi-wheelchair text-white text-lg"></i>
            </div>
          </div>

          <!-- Student Name -->
          <h3 class="text-xl font-bold text-gray-800 mb-1">{{ student.name_ar }}</h3>
          <p class="text-base text-gray-500 mb-1">{{ student.name_en }}</p>
          <p class="text-sm text-gray-600 mb-4">{{ student.national_id }}</p>

          <!-- Basic Info -->
          <div class="space-y-2 text-right text-sm">
            <div class="flex items-center justify-between">
              <span class="text-gray-600">{{ student.gender }}</span>
              <i class="pi pi-user text-gray-400"></i>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-gray-600">{{ student.phone }}</span>
              <i class="pi pi-phone text-gray-400"></i>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-gray-600">{{ student.email }}</span>
              <i class="pi pi-envelope text-gray-400"></i>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-gray-600">{{ student.university }}</span>
              <i class="pi pi-map-marker text-gray-400"></i>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-gray-600">{{ student.faculty }}</span>
              <i class="pi pi-building text-gray-400"></i>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-gray-600">{{ student.department }}</span>
              <i class="pi pi-bookmark text-gray-400"></i>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-gray-600">{{ student.academic_level }}</span>
              <i class="pi pi-graduation-cap text-gray-400"></i>
            </div>
          </div>
        </div>
      </div>

      <!-- Left Column - Details Cards -->
      <div class="space-y-4">
        
        <!-- Medical Diagnosis -->
        <div class="bg-[#FFF5E1] border border-[#FFD8A8] rounded-2xl p-6 shadow-sm">
          <div class="flex items-center justify-between">
            <h4 class="text-lg font-bold text-gray-800">التشخيص الطبي</h4>
            <div class="bg-[#FF555D] p-3 rounded-full">
              <i class="pi pi-clipboard text-white text-lg"></i>
            </div>
          </div>
          <p class="text-gray-700 mt-3 leading-relaxed">
            {{ student.medical_diagnosis_summary || "شلل نصفي سفلي نتيجة إصابة في الحبل الشوكي." }}
          </p>
        </div>

        <!-- Cognitive Disabilities -->
        <div class="bg-[#F0F8FF] border border-[#BFD9FF] rounded-2xl p-6 shadow-sm">
          <div class="flex items-center justify-between">
            <h4 class="text-lg font-bold text-gray-800">الاعاقات الذهنية</h4>
            <div class="bg-[#2A93D1] p-3 rounded-full">
              <i class="pi pi-brain text-white text-lg"></i>
            </div>
          </div>
          <p class="text-gray-600 mt-3">{{ student.cognitive_disabilities?.length ? "موجود" : "لا يوجد" }}</p>
        </div>

        <!-- Motor Disabilities -->
        <div class="bg-[#FFE8E8] border border-[#FFB3B3] rounded-2xl p-6 shadow-sm">
          <div class="flex items-center justify-between">
            <h4 class="text-lg font-bold text-gray-800">الاعاقات الحركية</h4>
            <div class="bg-[#FF555D] p-3 rounded-full">
              <i class="pi pi-wheelchair text-white text-lg"></i>
            </div>
          </div>
          <p class="text-gray-600 mt-3">{{ student.motor_disabilities?.length ? "موجود" : "لا يوجد" }}</p>
        </div>

        <!-- Hearing Disabilities -->
        <div class="bg-[#F0F8FF] border border-[#BFD9FF] rounded-2xl p-6 shadow-sm">
          <div class="flex items-center justify-between">
            <h4 class="text-lg font-bold text-gray-800">الاعاقات السمعية</h4>
            <div class="bg-[#2A93D1] p-3 rounded-full">
              <i class="pi pi-volume-off text-white text-lg"></i>
            </div>
          </div>
          <p class="text-gray-600 mt-3">{{ student.hearing_disabilities?.length ? "موجود" : "لا يوجد" }}</p>
        </div>

        <!-- Visual Disabilities -->
        <div class="bg-[#FFF5E1] border border-[#FFD8A8] rounded-2xl p-6 shadow-sm">
          <div class="flex items-center justify-between">
            <h4 class="text-lg font-bold text-gray-800">الاعاقات البصرية</h4>
            <div class="bg-[#F0DE7D] p-3 rounded-full">
              <i class="pi pi-eye text-white text-lg"></i>
            </div>
          </div>
          <p class="text-gray-600 mt-3">{{ student.visual_disabilities?.length ? "موجود" : "لا يوجد" }}</p>
        </div>

        <!-- Services Card -->
        <div class="bg-[#E8F4FD] border border-[#BFD9FF] rounded-2xl p-6 shadow-sm">
          <div class="flex items-center justify-between">
            <h4 class="text-lg font-bold text-gray-800">لديه بطاقة الخدمات المتكاملة</h4>
            <div class="bg-[#2A93D1] p-3 rounded-full">
              <i class="pi pi-info-circle text-white text-lg"></i>
            </div>
          </div>
        </div>

        <!-- Guardian Info -->
        <div class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <div class="flex items-center justify-between mb-4">
            <h4 class="text-lg font-bold text-gray-800">بيانات ولي الأمر :</h4>
            <div class="bg-gray-500 p-3 rounded-full">
              <i class="pi pi-users text-white text-lg"></i>
            </div>
          </div>
          <div class="space-y-2 text-gray-700">
            <p>{{ student.guardian_name_ar || "أحمد محمد محمد" }}</p>
            <p class="text-gray-500">{{ student.relationship || "أب" }}</p>
          </div>
        </div>

        <!-- Talents -->
        <div class="bg-[#F0FFF0] border border-[#A8FFD8] rounded-2xl p-6 shadow-sm">
          <div class="flex items-center justify-between">
            <h4 class="text-lg font-bold text-gray-800">المواهب :</h4>
            <div class="bg-[#4CAF50] p-3 rounded-full">
              <i class="pi pi-star text-white text-lg"></i>
            </div>
          </div>
          <div class="mt-3">
            <div v-if="student.talents?.length">
              <div v-for="(talent, index) in student.talents" :key="index" class="text-gray-700">
                <span>{{ talent.talent_description }}</span>
                <span class="text-sm text-gray-500 mr-2">
                  ({{ talent.is_still_practicing ? "مازال يمارس" : "توقف" }})
                </span>
              </div>
            </div>
            <p v-else class="text-gray-600">عازف بيانو (مازال يمارس)</p>
          </div>
        </div>

        <!-- Employment -->
        <div class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <div class="flex items-center justify-between">
            <h4 class="text-lg font-bold text-gray-800">العمل :</h4>
            <div class="bg-[#2A93D1] p-3 rounded-full">
              <i class="pi pi-briefcase text-white text-lg"></i>
            </div>
          </div>
          <p class="text-gray-600 mt-3">
            {{ (student.employment_records?.length && student.employment_records[0]?.is_working) ? "يعمل" : "لا يعمل" }}
          </p>
        </div>

        <!-- Academic Problems -->
        <div class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <div class="flex items-center justify-between mb-4">
            <h4 class="text-lg font-bold text-gray-800">المشكلات الاكاديميه</h4>
            <div class="bg-[#2A93D1] p-3 rounded-full">
              <i class="pi pi-exclamation-circle text-white text-lg"></i>
            </div>
          </div>
          
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <span class="bg-[#E8F5E8] text-[#2D5016] px-3 py-1 rounded-full text-sm">
                {{ getTransportationIssueText(student.academic_impact?.transportation_issue) }}
              </span>
              <span class="text-gray-600">: مشكلات التنقل</span>
            </div>
            
            <div class="flex items-center justify-between">
              <span class="bg-[#FDE8E8] text-[#991B1B] px-3 py-1 rounded-full text-sm">
                {{ getTeachingIssueText(student.academic_impact?.teaching_issue) }}
              </span>
              <span class="text-gray-600">: مشكلات البيئة الداخلية للجامعة</span>
            </div>
            
            <div class="flex items-center justify-between">
              <span class="bg-[#EDF2FF] text-[#3730A3] px-3 py-1 rounded-full text-sm">
                {{ getTeachingIssueText(student.academic_impact?.teaching_issue) }}
              </span>
              <span class="text-gray-600">: مشكلات التدريس</span>
            </div>
            
            <div class="mt-4">
              <p class="text-gray-600 mb-2">التجهيزات المطلوبة</p>
              <p class="text-gray-500 text-sm">{{ student.academic_impact?.required_equipment || "لا توجد تجهيزات خاصة مطلوبة" }}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref } from "vue";
import type { StudentForm } from "../../interfaces/Student";

// route param
const route = useRoute();

// data
const student = ref<StudentForm>({
  name_ar: "مراد احمد",
  name_en: "Murad Ahmed",
  national_id: "30111931200144",
  gender: "Male",
  phone: "01019353444",
  email: "murad@example.com",
  university: "جامعة المنصورة",
  faculty: "كلية الهندسة",
  department: "قسم حاسبات ونظم",
  academic_level: "الفرقة الأولى",
  has_integrated_services_card: true,
  medical_diagnosis_summary: "شلل نصفي سفلي نتيجة إصابة في الحبل الشوكي.",
  guardian_name_ar: "أحمد محمد محمد",
  relationship: "Father",
  motor_disabilities: [
    {
      body_part: "right_leg",
      impairment_type: "Hemiplegia",
      can_write: true,
      writing_hand: "Right"
    }
  ],
  hearing_disabilities: [],
  visual_disabilities: [],
  cognitive_disabilities: [],
  academic_impact: {
  transportation_issue: "No Special Vehicles",
  env_no_elevators: false,
  env_no_internal_transport: false,
  env_unprepared_roads: false,
  env_unprepared_facilities: true,
  env_unprepared_lecture_halls: false,
  env_unprepared_bathrooms: false,
  env_no_companion_waiting_area: false,
  teaching_issue: "Insufficient Support",
  required_equipment: "كرسي متحرك كهربائي، مصعد خاص",

  mobility: [],
  environment: [],
  teaching: []
},
  talents: [
    { 
      talent_description: "عازف بيانو", 
      is_still_practicing: true,
      practice_location: "المنزل" 
    }
  ],
  employment_records: [
    { 
      is_working: false,
      work_duration: "" 
    }
  ],
});

// Helper functions
const getTransportationIssueText = (issue?: string) => {
  const translations = {
    'No Issues': 'لا توجد مشاكل',
    'Distant Residence': 'السكن بعيد',
    'No Special Vehicles': 'لا توجد سيارات خاصة',
    'Unprepared Roads': 'طرق غير مهيأة'
  };
  return translations[issue as keyof typeof translations] || 'غير محدد';
};

const getTeachingIssueText = (issue?: string) => {
  const translations = {
    'No Issues': 'لا توجد مشاكل',
    'Faculty Member Issues': 'مشاكل مع أعضاء هيئة التدريس',
    'Book Delays': 'تأخير في الكتب',
    'Insufficient Support': 'دعم غير كافي',
    'Unsuitable Specialization': 'تخصص غير مناسب'
  };
  return translations[issue as keyof typeof translations] || 'غير محدد';
};
</script>
