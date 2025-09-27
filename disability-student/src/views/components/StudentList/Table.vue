<template>
  <div class="overflow-x-auto shadow-md rounded-2xl p-4 bg-white">
    <DataTable
      :value="value"
      :paginator="paginator"
      :rows="rows"
      :rowsPerPageOptions="[5,10,20]"
      class="p-datatable-striped"
      responsive-layout="scroll"
    >
      <Column
        v-for="col in columns"
        :key="col.field"
        :field="col.field"
        :header="col.header"
        :sortable="true"
        :filter="true"
        filterPlaceholder="ابحث..."
      />

      <slot name="actions" />
    </DataTable>
  </div>
</template>

<script setup lang="ts">
import DataTable from "primevue/datatable";
import Column from "primevue/column";

export interface ColumnDef {
  field: string;
  header: string;
}

defineProps<{
  value: any[];
  columns: ColumnDef[];
  paginator?: boolean;
  rows?: number;
}>();
</script>

<style scoped>
.p-datatable {
  font-family: "Cairo", sans-serif;
  direction: rtl;
}
</style>
