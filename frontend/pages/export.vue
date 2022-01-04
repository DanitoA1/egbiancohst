





<template>
  <div class="flex justify-center my-5">
    <button @click="exportTable" class="bg-blue-500 p-3 rounded-md">
      Export Table
    </button>
  </div>
</template>

<script>
/* eslint-disable */

function wrapCsvValue(val, formatFn) {
  let formatted = formatFn !== void 0 ? formatFn(val) : val

  formatted =
    formatted === void 0 || formatted === null ? '' : String(formatted)

  formatted = formatted.split('"').join('""')

  return `"${formatted}"`
}

export default {
  data() {
    return {
      columns: [
        {
          name: 'app_no',
          label: 'Application No',
          field: 'app_no',
        },
        {
          name: 'name',
          label: 'Appicant Name',
          field: (row) => row.name,
        },
        {
          name: 'course',
          label: 'Course',
          field: 'course',
        },
        {
          name: 'stete',
          label: 'State',
          field: 'state',
        },
        {
          name: 'lga',
          label: 'LGA',
          field: 'lga',
        },
        {
          name: 'status',
          label: 'Admin Status',
          field: 'status',
        },
      ],
      data: [
        {
          app_no: 'C001',
          name: 'Advanced communications',
          course: 'Pharmacy',
          state: 'Oyo',
          lga: 'Ibadan',
          status: 'Admitted',
        },
        {
          app_no: 'C001',
          name: 'Advanced communications',
          course: 'Pharmacy',
          state: 'Oyo',
          lga: 'Ibadan',
          status: 'Admitted',
        },
        {
          app_no: 'C001',
          name: 'Advanced communications',
          course: 'Pharmacy',
          state: 'Oyo',
          lga: 'Ibadan',
          status: 'Admitted',
        },
      ],
    }
  },

  methods: {
    downloadCSVFile(csv, filename) {
      let csv_file, download_link

      csv_file = new Blob([csv], { type: 'text/csv' })

      download_link = document.createElement('a')

      download_link.download = filename

      download_link.href = window.URL.createObjectURL(csv_file)

      download_link.style.display = 'none'

      document.body.appendChild(download_link)

      download_link.click()
    },
    exportTable() {
      // naive encoding to csv format
      const content = [this.columns.map((col) => wrapCsvValue(col.label))]
        .concat(
          this.data.map((row) =>
            this.columns
              .map((col) =>
                wrapCsvValue(
                  typeof col.field === 'function'
                    ? col.field(row)
                    : row[col.field === void 0 ? col.name : col.field],
                  col.format
                )
              )
              .join(',')
          )
        )
        .join('\r\n')
      this.downloadCSVFile(content, 'applicants.csv')
    },
  },
}
</script>
