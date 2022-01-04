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
          name: 'activity_id',
          label: 'Activity ID',
          field: 'activity_id',
        },
        {
          name: 'desc',
          required: true,
          label: 'Activity Name',

          field: (row) => row.name,
        },
        {
          name: 'regarding',
          label: 'Regarding',
          field: 'regarding',
        },
        {
          name: 'owner',

          label: 'Owner',
          field: 'owner',
        },
        {
          name: 'status',
          label: 'Status',
          field: 'status',
        },
        {
          name: 'creation_date',

          label: 'Creation Date',
          field: 'creation_date',
        },
      ],
      data: [
        {
          activity_id: 'C001',
          name: 'Advanced communications',
          regarding: 'Presentation',
          owner: 'John',
          status: 'Pending',
          creation_date: '12-09-2019',
        },
        {
          activity_id: 'C002',
          name: 'New drug discussion',
          regarding: 'Meeting',
          owner: 'John',
          status: 'Completed',
          creation_date: '09-02-2019',
        },
        {
          activity_id: 'C003',
          name: 'Universal services discussion',
          regarding: 'Meeting',
          owner: 'John',
          status: 'Completed',
          creation_date: '03-25-2019',
        },
        {
          activity_id: 'C004',
          name: 'Add on business',
          regarding: 'Business',
          owner: 'John',
          status: 'Pending',
          creation_date: '03-18-2019',
        },
        {
          activity_id: 'C005',
          name: 'Promotional Activity',
          regarding: 'Personal',
          owner: 'John',
          status: 'Completed',
          creation_date: '04-09-2019',
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
      this.downloadCSVFile(content, 'activity.csv')
    },
  },
}
</script>









