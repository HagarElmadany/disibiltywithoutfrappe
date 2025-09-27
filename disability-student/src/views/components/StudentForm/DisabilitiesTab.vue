<template>
  <div class="p-2 space-y-6">
    <!-- Motor Disability -->
    <section>
      <h4 class="text-lg font-bold text-[#074667] font-[Cairo] flex items-center mb-6">
<i class="fa fa-wheelchair ml-2 text-[#FF555D]"></i>
         هل لديك إعاقة حركية ؟
      </h4>
      <div class="flex gap-6 mb-4">
        <div class="flex items-center">
          <RadioButton inputId="motor_yes" name="motor" :value="true" v-model="motorHas" />
          <label for="motor_yes" class="mx-2">نعم</label>
        </div>
        <div class="flex items-center">
          <RadioButton inputId="motor_no" name="motor" :value="false" v-model="motorHas" />
          <label for="motor_no" class="mx-2">لا</label>
        </div>
      </div>

      <div v-if="motorHas && form.motor_disabilities && form.motor_disabilities.length > 0 && form.motor_disabilities[0]">
        <h4 class="mb-2">مكان الإعاقة:</h4>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div v-for="loc in physicalLocations" :key="loc.value" class="flex items-center">
            <Checkbox
              :inputId="`motor_location_${loc.value}`"
              :value="loc.value"
              v-model="motorBodyParts"
              :binary="false"
            />
            <label :for="`motor_location_${loc.value}`" class="mx-2">{{ loc.label }}</label>
          </div>
        </div>

        <h4 class="mt-4 mb-2">نوع الإعاقة الحركية:</h4>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div v-for="type in physicalTypes" :key="type.value" class="flex items-center">
            <Checkbox
              :inputId="`motor_type_${type.value}`"
              :value="type.value"
              v-model="motorImpairmentTypes"
              :binary="false"
            />
            <label :for="`motor_type_${type.value}`" class="mx-2">{{ type.label }}</label>
          </div>
        </div>

        <h4 class="mt-4 mb-2">هل تستطيع الكتابة؟</h4>
        <div class="flex gap-6">
          <div class="flex items-center">
            <RadioButton inputId="can_write_yes" name="can_write_radio" :value="true" v-model="canWriteValue" />
            <label for="can_write_yes" class="mx-2">نعم</label>
          </div>
          <div class="flex items-center">
            <RadioButton inputId="can_write_no" name="can_write_radio" :value="false" v-model="canWriteValue" />
            <label for="can_write_no" class="mx-2">لا</label>
          </div>
        </div>

        <div v-if="canWriteValue" class="mt-3">
          <Dropdown
            v-model="form.motor_disabilities[0].writing_hand"
            :options="writingHands"
            optionLabel="label"
            optionValue="value"
            placeholder="اليد المستخدمة في الكتابة"
            class="w-full"
          />
        </div>
      </div>
    </section>

    <hr class="my-6 border-t-2 border-gray-300" />

    <!-- Hearing Disability -->
    <section>
      <h4 class="text-lg font-bold text-[#074667] font-[Cairo] flex items-center my-6">
        <i class="pi pi-volume-up ml-2 text-[#FF555D]"></i> هل لديك إعاقة سمعية ؟
      </h4>
      <div class="flex gap-6 mb-4">
        <div class="flex items-center">
          <RadioButton inputId="hearing_yes" name="hearing" :value="true" v-model="hearingHas" />
          <label for="hearing_yes" class="mx-2">نعم</label>
        </div>
        <div class="flex items-center">
          <RadioButton inputId="hearing_no" name="hearing" :value="false" v-model="hearingHas" />
          <label for="hearing_no" class="mx-2">لا</label>
        </div>
      </div>

      <div v-if="hearingHas && form.hearing_disabilities && form.hearing_disabilities.length > 0 && form.hearing_disabilities[0]">
        <h4 class="mb-2">مكان الإعاقة:</h4>
        <Dropdown
          v-model="form.hearing_disabilities[0].affected_ear"
          :options="hearingOptions"
          optionLabel="label"
          optionValue="value"
          placeholder="اختر"
          class="w-full mb-4"
        />

        <h4 class="mb-2">زرع قوقعة؟</h4>
        <div class="flex gap-6 mb-4">
          <div class="flex items-center">
            <RadioButton inputId="cochlear_yes" name="cochlear_radio" :value="true" v-model="cochlearValue" />
            <label for="cochlear_yes" class="mx-2">نعم</label>
          </div>
          <div class="flex items-center">
            <RadioButton inputId="cochlear_no" name="cochlear_radio" :value="false" v-model="cochlearValue" />
            <label for="cochlear_no" class="mx-2">لا</label>
          </div>
        </div>

        <h4 class="mb-2">سماعة جديدة؟</h4>
        <div class="flex gap-6 mb-4">
          <div class="flex items-center">
            <RadioButton inputId="hearing_aid_yes" name="hearing_aid_radio" :value="true" v-model="hearingAidValue" />
            <label for="hearing_aid_yes" class="mx-2">نعم</label>
          </div>
          <div class="flex items-center">
            <RadioButton inputId="hearing_aid_no" name="hearing_aid_radio" :value="false" v-model="hearingAidValue" />
            <label for="hearing_aid_no" class="mx-2">لا</label>
          </div>
        </div>

        <h4 class="mb-2">لغة الإشارة:</h4>
        <div class="flex gap-6 mb-4">
          <div class="flex items-center">
            <RadioButton inputId="sign_lang_yes" name="sign_lang_radio" :value="true" v-model="signLangValue" />
            <label for="sign_lang_yes" class="mx-2">نعم</label>
          </div>
          <div class="flex items-center">
            <RadioButton inputId="sign_lang_no" name="sign_lang_radio" :value="false" v-model="signLangValue" />
            <label for="sign_lang_no" class="mx-2">لا</label>
          </div>
        </div>
      </div>
    </section>

    <hr class="my-6 border-t-2 border-gray-300" />

    <!-- Visual Disability -->
    <section>
      <h4 class="text-lg font-bold text-[#074667] font-[Cairo] flex items-center my-6">
        <i class="pi pi-eye ml-2 text-[#FF555D]"></i> هل لديك إعاقة بصرية ؟
      </h4>
      <div class="flex gap-6 mb-4">
        <div class="flex items-center">
          <RadioButton inputId="visual_yes" name="visual" :value="true" v-model="visualHas" />
          <label for="visual_yes" class="ml-2">نعم</label>
        </div>
        <div class="flex items-center">
          <RadioButton inputId="visual_no" name="visual" :value="false" v-model="visualHas" />
          <label for="visual_no" class="ml-2">لا</label>
        </div>
      </div>

      <div v-if="visualHas && form.visual_disabilities && form.visual_disabilities.length > 0 && form.visual_disabilities[0]">
        <h4 class="mb-2">نوع الإعاقة البصرية:</h4>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <div class="flex items-center">
            <Checkbox 
              v-model="form.visual_disabilities[0].is_blind" 
              inputId="is_blind" 
              :binary="true" 
            />
            <label for="is_blind" class="mx-2">كفيف</label>
          </div>
          <div class="flex items-center">
            <Checkbox 
              v-model="form.visual_disabilities[0].has_low_vision" 
              inputId="has_low_vision" 
              :binary="true" 
            />
            <label for="has_low_vision" class="mx-2">ضعف بصري</label>
          </div>
          <div class="flex items-center">
            <Checkbox 
              v-model="form.visual_disabilities[0].has_color_blindness" 
              inputId="has_color_blindness" 
              :binary="true" 
            />
            <label for="has_color_blindness" class="mx-2">عمى ألوان</label>
          </div>
          <div class="flex items-center">
            <Checkbox 
              v-model="form.visual_disabilities[0].has_nystagmus" 
              inputId="has_nystagmus" 
              :binary="true" 
            />
            <label for="has_nystagmus" class="mx-2">رأرأة</label>
          </div>
          <div class="flex items-center">
            <Checkbox 
              v-model="form.visual_disabilities[0].has_strabismus" 
              inputId="has_strabismus" 
              :binary="true" 
            />
            <label for="has_strabismus" class="mx-2">حول</label>
          </div>
        </div>

        <h4 class="mb-2">المهارات المساعدة:</h4>
        <div class="grid grid-cols-2 gap-4 mb-4">
          <div class="flex items-center">
            <Checkbox 
              v-model="form.visual_disabilities[0].uses_electronic_reader" 
              inputId="uses_electronic_reader" 
              :binary="true" 
            />
            <label for="uses_electronic_reader" class="mx-2">يستخدم قارئ إلكتروني</label>
          </div>
          <div class="flex items-center">
            <Checkbox 
              v-model="form.visual_disabilities[0].uses_braille" 
              inputId="uses_braille" 
              :binary="true" 
            />
            <label for="uses_braille" class="mx-2">يستخدم برايل</label>
          </div>
        </div>

        <h4 class="mb-2">تدريب العصا البيضاء:</h4>
        <div class="flex gap-6 mb-4">
          <div class="flex items-center">
            <RadioButton inputId="cane_yes" name="cane_training_radio" :value="true" v-model="caneTrainingValue" />
            <label for="cane_yes" class="mx-2">نعم</label>
          </div>
          <div class="flex items-center">
            <RadioButton inputId="cane_no" name="cane_training_radio" :value="false" v-model="caneTrainingValue" />
            <label for="cane_no" class="mx-2">لا</label>
          </div>
        </div>
      </div>
    </section>

    <hr class="my-6 border-t-2 border-gray-300" />

   <!-- Cognitive Disability -->
<section>
  <h4 class="text-lg font-bold text-[#074667] font-[Cairo] flex items-center my-6" >
   <i class="fa fa-brain ml-2 text-[#FF555D]"></i>
    هل لديك إعاقة ذهنية ؟
  </h4>
  <div class="flex gap-6 mb-4">
    <div class="flex items-center">
      <RadioButton inputId="cognitive_yes" name="cognitive" :value="true" v-model="cognitiveHas" />
      <label for="cognitive_yes" class="mx-2">نعم</label>
    </div>
    <div class="flex items-center">
      <RadioButton inputId="cognitive_no" name="cognitive" :value="false" v-model="cognitiveHas" />
      <label for="cognitive_no" class="mx-2">لا</label>
    </div>
  </div>

  <div v-if="form.cognitive_disabilities && form.cognitive_disabilities.length > 0 && form.cognitive_disabilities[0]">
    
    <div v-if="cognitiveHas">
      <h4 class="mb-2">نوع الإعاقة الذهنية:</h4>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div class="flex items-center">
          <Checkbox 
            v-model="form.cognitive_disabilities[0].has_intellectual_delay" 
            inputId="has_intellectual_delay" 
            :binary="true" 
          />
          <label for="has_intellectual_delay" class="mx-2">تأخر ذهني</label>
        </div>
        <div class="flex items-center">
          <Checkbox 
            v-model="form.cognitive_disabilities[0].has_learning_difficulties" 
            inputId="has_learning_difficulties" 
            :binary="true" 
          />
          <label for="has_learning_difficulties" class="mx-2">صعوبات تعلم</label>
        </div>
        <div class="flex items-center">
          <Checkbox 
            v-model="form.cognitive_disabilities[0].has_academic_delay" 
            inputId="has_academic_delay" 
            :binary="true" 
          />
          <label for="has_academic_delay" class="mx-2">تأخر أكاديمي</label>
        </div>
        <div class="flex items-center">
          <Checkbox 
            v-model="form.cognitive_disabilities[0].has_hyperactivity_disorder" 
            inputId="has_hyperactivity_disorder" 
            :binary="true" 
          />
          <label for="has_hyperactivity_disorder" class="mx-2">فرط الحركة</label>
        </div>
        <div class="flex items-center">
          <Checkbox 
            v-model="form.cognitive_disabilities[0].has_autism" 
            inputId="has_autism" 
            :binary="true" 
          />
          <label for="has_autism" class="mx-2">توحد</label>
        </div>
        <div class="flex items-center">
          <Checkbox 
            v-model="form.cognitive_disabilities[0].has_down_syndrome" 
            inputId="has_down_syndrome" 
            :binary="true" 
          />
          <label for="has_down_syndrome" class="mx-2">متلازمة داون</label>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      <InputText 
        v-model="iqScore" 
        placeholder="IQ" 
        class="w-full"
        type="number"
      />
      <Calendar
        v-model="form.cognitive_disabilities[0].iq_test_date"
        placeholder="تاريخ اختبار IQ"
        class="w-full"
        dateFormat="yy-mm-dd"
        showIcon
        :locale="calendarLocale"
      />
    </div>

   <div class="rounded-xl border-r-5 border-[#FF555D] overflow-hidden ">
  <!-- Card Header -->
  <div class="px-4 py-3 bg-gradient-to-r from-[#FFF3F3] to-[#FFC1C4]  font-semibold">
    برجاء ذكر أي حالة أخرى غير مسجلة
  </div>

  <!-- Card Body -->
  <div class="p-4 bg-white">
    <Textarea
      v-model="form.cognitive_disabilities[0].other_conditions"
      rows="3"
      class="w-full border border-[#2a93d1] rounded-md p-2"
      placeholder="برجاء ذكر أي حالة أخرى"
    />
  </div>
</div>

  </div>
</section>

  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from "vue";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import RadioButton from "primevue/radiobutton";
import Checkbox from "primevue/checkbox";
import Dropdown from "primevue/dropdown";
import Calendar from "primevue/calendar";
import type { StudentForm } from "../../../interfaces/Student";

// ---------------- Props ----------------
interface Props {
  modelValue: StudentForm;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  'update:modelValue': [value: StudentForm];
}>();

// ---------------- Computed Form ----------------
const form = computed({
  get: () => props.modelValue || {
    name_en: "",
    name_ar: "",
    national_id: "",
    gender: "Male" as const
  },
  set: (value: StudentForm) => {
    emit('update:modelValue', value);
  }
});

// ---------------- Helper States ----------------
const motorHas = ref(true); 
const hearingHas = ref(true); 
const visualHas = ref(true); 
const cognitiveHas = ref(true); 

// ---------------- Initialize Disability Arrays ----------------
const initializeDisabilityArrays = () => {
  if (!form.value) return;
  
  if (!form.value.motor_disabilities) {
    form.value.motor_disabilities = [];
  }
  if (!form.value.hearing_disabilities) {
    form.value.hearing_disabilities = [];
  }
  if (!form.value.visual_disabilities) {
    form.value.visual_disabilities = [];
  }
  if (!form.value.cognitive_disabilities) {
    form.value.cognitive_disabilities = [];
  }
};

// ---------------- Watch for Motor Disability ----------------
watch(motorHas, (hasMotor) => {
  if (!form.value) return;
  
  initializeDisabilityArrays();
  
  if (hasMotor) {
    if (form.value.motor_disabilities!.length === 0) {
      form.value.motor_disabilities!.push({
        body_part: "right_hand" as const,
        impairment_type: "Longitudinal Paralysis" as const,
        can_write: false
      });
    }
  } else {
    form.value.motor_disabilities = [];
  }
});

// ---------------- Watch for Hearing Disability ----------------
watch(hearingHas, (hasHearing) => {
  if (!form.value) return;
  
  initializeDisabilityArrays();
  
  if (hasHearing) {
    if (form.value.hearing_disabilities!.length === 0) {
      form.value.hearing_disabilities!.push({
        affected_ear: "Right" as const,
        has_cochlear_implant: false,
        needs_new_hearing_aid: false,
        knows_sign_language: false
      });
    }
  } else {
    form.value.hearing_disabilities = [];
  }
});

// ---------------- Watch for Visual Disability ----------------
watch(visualHas, (hasVisual) => {
  if (!form.value) return;
  
  initializeDisabilityArrays();
  
  if (hasVisual) {
    if (form.value.visual_disabilities!.length === 0) {
      form.value.visual_disabilities!.push({
        is_blind: false,
        has_low_vision: false,
        has_color_blindness: false,
        has_nystagmus: false,
        has_strabismus: false,
        uses_electronic_reader: false,
        uses_braille: false,
        white_cane_training_needed: false
      });
    }
  } else {
    form.value.visual_disabilities = [];
  }
});

// ---------------- Watch for Cognitive Disability ----------------
watch(cognitiveHas, (hasCognitive) => {
  if (!form.value) return;

  initializeDisabilityArrays();

  if (hasCognitive) {
    if (form.value.cognitive_disabilities!.length === 0) {
      form.value.cognitive_disabilities!.push({
        has_intellectual_delay: false,
        has_learning_difficulties: false,
        has_academic_delay: false,
        has_hyperactivity_disorder: false,
        has_autism: false,
        has_down_syndrome: false,
        iq_score: undefined,
        iq_test_date: null,
        other_conditions: ""
      });
    }
  } else {
    if (form.value.cognitive_disabilities && form.value.cognitive_disabilities[0]) {
      const cd = form.value.cognitive_disabilities[0];
      cd.has_intellectual_delay = false;
      cd.has_learning_difficulties = false;
      cd.has_academic_delay = false;
      cd.has_hyperactivity_disorder = false;
      cd.has_autism = false;
      cd.has_down_syndrome = false;
    }
  }
});


// ---------------- Options Data ----------------
const physicalLocations = [
  { label: "اليد اليمنى", value: "right_hand" },
  { label: "اليد اليسرى", value: "left_hand" },
  { label: "الرجل اليمنى", value: "right_leg" },
  { label: "الرجل اليسرى", value: "left_leg" }
];

const physicalTypes = [
  { label: "شلل طولي", value: "Longitudinal Paralysis" },
  { label: "شلل نصفي", value: "Hemiplegia" },
  { label: "شلل رباعي", value: "Quadriplegia" },
  { label: "شلل أحادي", value: "Monoplegia" },
  { label: "ضمور عضلي", value: "Muscular Atrophy" },
  { label: "أمراض المفاصل", value: "Joint Disease" },
  { label: "بتر", value: "Amputation" },
  { label: "مشاكل التوازن", value: "Balance Issues" }
];

const hearingOptions = [
  { label: "الأذن اليمنى", value: "Right" },
  { label: "الأذن اليسرى", value: "Left" },
  { label: "كلتا الأذنين", value: "Both" }
];



const writingHands = [
  { label: "اليد اليمنى", value: "Right" },
  { label: "اليد اليسرى", value: "Left" }
];

const calendarLocale = {
  firstDayOfWeek: 0,
  dayNames: ["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],
  dayNamesShort: ["أحد","اثنين","ثلاثاء","أربعاء","خميس","جمعة","سبت"],
  dayNamesMin: ["ح","ن","ث","ر","خ","ج","س"],
  monthNames: ["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],
  monthNamesShort: ["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],
  today: "اليوم",
  clear: "مسح"
};

// ---------------- Additional Helper States for Checkboxes ----------------
const motorBodyParts = ref<string[]>([]);
const motorImpairmentTypes = ref<string[]>([]);

// ---------------- Additional Helper States for RadioButtons ----------------
const canWriteValue = ref(false);
const cochlearValue = ref(false);
const hearingAidValue = ref(false);
const signLangValue = ref(false);
const caneTrainingValue = ref(false);

// ---------------- Watchers for Checkbox Values ----------------
watch(motorBodyParts, (parts) => {
  if (form.value && form.value.motor_disabilities && form.value.motor_disabilities[0]) {
    // Store as array but interface expects single value, so take first selected
    const validBodyPart = parts[0] as 'right_hand' | 'left_hand' | 'right_leg' | 'left_leg';
    form.value.motor_disabilities[0].body_part = validBodyPart || "right_hand";
  }
});

watch(motorImpairmentTypes, (types) => {
  if (form.value && form.value.motor_disabilities && form.value.motor_disabilities[0]) {
    // Store as array but interface expects single value, so take first selected  
    const validImpairmentType = types[0] as 'Longitudinal Paralysis' | 'Hemiplegia' | 'Quadriplegia' | 'Monoplegia' | 'Muscular Atrophy' | 'Joint Disease' | 'Amputation' | 'Balance Issues';
    form.value.motor_disabilities[0].impairment_type = validImpairmentType || "Longitudinal Paralysis";
  }
});

// ---------------- Watchers for RadioButton Values ----------------
watch(canWriteValue, (val) => {
  if (form.value && form.value.motor_disabilities && form.value.motor_disabilities[0]) {
    form.value.motor_disabilities[0].can_write = val;
  }
});

watch(cochlearValue, (val) => {
  if (form.value && form.value.hearing_disabilities && form.value.hearing_disabilities[0]) {
    form.value.hearing_disabilities[0].has_cochlear_implant = val;
  }
});

watch(hearingAidValue, (val) => {
  if (form.value && form.value.hearing_disabilities && form.value.hearing_disabilities[0]) {
    form.value.hearing_disabilities[0].needs_new_hearing_aid = val;
  }
});

watch(signLangValue, (val) => {
  if (form.value && form.value.hearing_disabilities && form.value.hearing_disabilities[0]) {
    form.value.hearing_disabilities[0].knows_sign_language = val;
  }
});

watch(caneTrainingValue, (val) => {
  if (form.value && form.value.visual_disabilities && form.value.visual_disabilities[0]) {
    form.value.visual_disabilities[0].white_cane_training_needed = val;
  }
});
const iqScore = ref<string>("");

watch(iqScore, (val) => {
  if (form.value && form.value.cognitive_disabilities && form.value.cognitive_disabilities[0]) {
    form.value.cognitive_disabilities[0].iq_score = val ? Number(val) : undefined;
  }
});

// Initialize on mount - only if form.value exists
watch(
  () => form.value,
  (newForm) => {
    if (newForm) {
      initializeDisabilityArrays();
      
      // Force initialize all disabilities by default since we want them all visible
      if (!newForm.motor_disabilities || newForm.motor_disabilities.length === 0) {
        newForm.motor_disabilities = [{
          body_part: "right_hand" as const,
          impairment_type: "Longitudinal Paralysis" as const,
          can_write: false
        }];
      }
      
      if (!newForm.hearing_disabilities || newForm.hearing_disabilities.length === 0) {
        newForm.hearing_disabilities = [{
          affected_ear: "Right" as const,
          has_cochlear_implant: false,
          needs_new_hearing_aid: false,
          knows_sign_language: false
        }];
      }
      
      if (!newForm.visual_disabilities || newForm.visual_disabilities.length === 0) {
        newForm.visual_disabilities = [{
          is_blind: false,
          has_low_vision: false,
          has_color_blindness: false,
          has_nystagmus: false,
          has_strabismus: false,
          uses_electronic_reader: false,
          uses_braille: false,
          white_cane_training_needed: false
        }];
      }
      
      if (!newForm.cognitive_disabilities || newForm.cognitive_disabilities.length === 0) {
        newForm.cognitive_disabilities = [{
          has_intellectual_delay: false,
          has_learning_difficulties: false,
          has_academic_delay: false,
          has_hyperactivity_disorder: false,
          has_autism: false,
          has_down_syndrome: false,
          iq_score: undefined,
          iq_test_date: null,
          other_conditions: ""
        }];
      }
      
      // Set initial values for checkboxes
      if (newForm.motor_disabilities && newForm.motor_disabilities[0]) {
        motorBodyParts.value = newForm.motor_disabilities[0].body_part ? [newForm.motor_disabilities[0].body_part as string] : [];
        motorImpairmentTypes.value = newForm.motor_disabilities[0].impairment_type ? [newForm.motor_disabilities[0].impairment_type as string] : [];
        canWriteValue.value = newForm.motor_disabilities[0].can_write;
      }
      
      // Set initial values for radio buttons
      if (newForm.motor_disabilities && newForm.motor_disabilities[0]) {
        canWriteValue.value = newForm.motor_disabilities[0].can_write;
      }
      
      if (newForm.hearing_disabilities && newForm.hearing_disabilities[0]) {
        cochlearValue.value = newForm.hearing_disabilities[0].has_cochlear_implant;
        hearingAidValue.value = newForm.hearing_disabilities[0].needs_new_hearing_aid;
        signLangValue.value = newForm.hearing_disabilities[0].knows_sign_language;
      }
      
      if (newForm.visual_disabilities && newForm.visual_disabilities[0]) {
        caneTrainingValue.value = newForm.visual_disabilities[0].white_cane_training_needed;
      }
      
      // Set IQ score if exists
      if (newForm.cognitive_disabilities && newForm.cognitive_disabilities[0] && newForm.cognitive_disabilities[0].iq_score) {
        iqScore.value = newForm.cognitive_disabilities[0].iq_score.toString();
      }
    }
  },
  { immediate: true }
);
</script>