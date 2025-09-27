<template>
  <div class="p-6">
<h1 class="mb-6 text-3xl font-bold text-[#FF555D] text-right">
  قائمة الطلاب
</h1>

    <DataTable
      :value="students"
      :columns="studentColumns"
      paginator
      :rows="5"
    >
      <template #actions>
        <Column header="الإجراءات" bodyClass="text-center">
          <template #body="slotProps">
            <div class="flex gap-3 justify-center">
             <Button
  icon="pi pi-eye"
  label="عرض"
  class="p-button-rounded p-button-info mr-2"
  @click="$router.push(`/dashboard/students/${slotProps.data.id}`)"
/>

              <Button
                icon="pi pi-trash"
                label="حذف"
                class="p-button-sm p-button-danger flex items-center gap-2 rounded-3xl"
                @click="deleteStudent(slotProps.data)"
              />
            </div>
          </template>
        </Column>
      </template>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import DataTable from "../components/StudentList/Table.vue";
import Column from "primevue/column";
import Button from "primevue/button";

const studentColumns = [
  { field: "name", header: "اسم الطالب" },
  { field: "university", header: "الجامعة" },
  { field: "faculty", header: "الكلية" },
  { field: "phone", header: "رقم التليفون" },
];

const students = ref([
  { id: 1, name: "أحمد محمد", university: "جامعة القاهرة", faculty: "الهندسة", phone: "01012345678" },
  { id: 2, name: "سارة علي", university: "جامعة عين شمس", faculty: "الطب", phone: "01098765432" },
]);

function viewStudent(student: any) {
  console.log("عرض الطالب:", student);
}

function deleteStudent(student: any) {
  console.log("حذف الطالب:", student);
}
</script>
