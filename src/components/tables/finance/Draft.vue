<!-- 어음 table template-->
<template>
  <div>
    <h4 class="font-weight-bold py-3 mb-4">
      <span class="text-muted font-weight-light">신용관리 /</span> 어음
    </h4>

    <hr class="border-light container-m--x mt-0 mb-5">

    <v-client-table :data="tableData" :columns="columns" :options="options">
      <template slot="edit" slot-scope="props">
        <div>
          <b-btn variant="outline-success borderless icon-btn" class="btn-xs" @click.prevent="edit(props.row)"><i class="ion ion-md-create"></i></b-btn>
          <b-btn variant="outline-danger borderless icon-btn" class="btn-xs" @click.prevent="remove(props.row)"><i class="ion ion-md-close"></i></b-btn>
        </div>
      </template>
    </v-client-table>
  </div>
</template>

<style src="@/vendor/libs/vue-data-tables/vue-data-tables.scss" lang="scss"></style>

<script>
import Vue from 'vue'
import { ClientTable } from 'vue-tables-2'

Vue.use(ClientTable)

export default {
  name: 'tables-vue-tables-2',
  metaInfo: {
    title: 'Vue Tables 2 - Tables'
  },
  data: () => ({
    tableData: [
      { first_name: 'kim', last_name: 'soo', gender: 'girl', company: 'com', edit: '' },
      { first_name: 'lee', last_name: 'soo', gender: 'boy', company: 'com', edit: '' },
      { first_name: 'kim', last_name: 'soo', gender: 'girl', company: 'com', edit: '' },
      { first_name: 'soo', last_name: 'soo', gender: 'girl', company: 'com', edit: '' },
      { first_name: 'kim', last_name: 'soo', gender: 'girl', company: 'com', edit: '' },
      { first_name: 'as', last_name: 'soo', gender: 'boy', company: 'com', edit: '' },
      { first_name: 'kim', last_name: 'soo', gender: 'girl', company: 'com', edit: '' },
      { first_name: 'ooo', last_name: 'soo', gender: 'girl', company: 'com', edit: '' },
      { first_name: 'kim', last_name: 'soo', gender: 'boy', company: 'com', edit: '' },
      { first_name: 'kim', last_name: 'soo', gender: 'girl', company: 'com', edit: '' },
      { first_name: 'kim', last_name: 'soo', gender: 'girl', company: 'com', edit: '' },
      { first_name: 'kim', last_name: 'soo', gender: 'girl', company: 'com', edit: '' },
      { first_name: 'kim', last_name: 'soo', gender: 'girl', company: 'com', edit: '' },
      { first_name: 'kim', last_name: 'soo', gender: 'girl', company: 'com', edit: '' },
      { first_name: 'kim', last_name: 'soo', gender: 'girl', company: 'com', edit: '' },
      { first_name: 'kim', last_name: 'soo', gender: 'girl', company: 'com', edit: '' },
      { first_name: 'kim', last_name: 'soo', gender: 'girl', company: 'com', edit: '' },
      { first_name: 'kim', last_name: 'soo', gender: 'girl', company: 'com', edit: '' },
      { first_name: 'kim', last_name: 'soo', gender: 'girl', company: 'com', edit: '' },
      { first_name: 'kim', last_name: 'soo', gender: 'girl', company: 'com', edit: '' },
      { first_name: 'kim', last_name: 'soo', gender: 'girl', company: 'com', edit: '' },
      { first_name: 'kim', last_name: 'soo', gender: 'girl', company: 'com', edit: '' }
    ],
    columns: ['first_name', 'last_name', 'gender', 'company', 'edit'],
    options: {
      pagination: { chunk: 5 },
      sortIcon: {
        is: 'fa-sort',
        base: 'fas',
        up: 'fa-sort-up',
        down: 'fa-sort-down'
      }
    }
  }),
  methods: {
    edit (row) {
      alert(`Edit: ${row.first_name} ${row.last_name}`)
    },
    remove (row) {
      alert(`Remove: ${row.first_name} ${row.last_name}`)
    }
  }
}
</script>
