<template>
  <div class="q-py-md">
    <q-table
      title="Boletim"
      :data="anoSelecionado.data"
      :columns="columns"
      row-key="name"
      separator="vertical"
    >
      <template v-slot:top>
        <div class="col-10 q-table__title">Boletim</div>
        <div class="col-2 row items-center no-wrap justify-end">
          <q-select
            v-model="anoSelecionado"
            :options="anos"
            label="Ano Letivo"
            style="width: 100%"
            map-options
          />
        </div>
        <div class="col-12">Escola Municipal Pedro Álvares Cabral</div>
        <div class="col-12">Ensino Fundamental</div>
        <div class="col-12">{{ anoSelecionado.anoEscolar }}</div>
      </template>
      <template v-slot:bottom>
        <div class="col-12 row items-center no-wrap justify-end">
          <q-btn
            color="primary"
            icon="print"
            @click="exportTable"
          />
        </div>
        
      </template>
    </q-table>
  </div>
</template>

<script>
import { exportFile } from 'quasar'

function wrapCsvValue (val, formatFn) {
  let formatted = formatFn !== void 0
    ? formatFn(val)
    : val

  formatted = formatted === void 0 || formatted === null
    ? ''
    : String(formatted)

  formatted = formatted.split('"').join('""')

  return `"${formatted}"`
}

export default {
  name: "Boletim",
  methods: {
    exportTable () {
      // naive encoding to csv format
      const content = [ this.columns.map(col => wrapCsvValue(col.label)) ].concat(
        this.anoSelecionado.data.map(row => this.columns.map(col => wrapCsvValue(
          typeof col.field === 'function'
            ? col.field(row)
            : row[col.field === void 0 ? col.name : col.field],
          col.format
        )).join(','))
      ).join('\r\n')

      const status = exportFile(
        'Boletim.csv',
        content,
        'text/csv'
      )

      if (status !== true) {
        this.$q.notify({
          message: 'Browser denied file download...',
          color: 'negative',
          icon: 'warning'
        })
      }
    }
  },
  data() {
    return {
      columns: [
        {
          name: "name",
          required: true,
          label: "Disciplina",
          align: "left",
          field: row => row.name,
          format: val => `${val}`,
          sortable: false
        },
        {
          name: "bim1",
          align: "center",
          label: "1° Bimestre",
          field: "bim1",
          sortable: false
        },
        {
          name: "bim2",
          align: "center",
          label: "2° Bimestre",
          field: "bim2",
          sortable: false
        },
        {
          name: "sem1",
          align: "center",
          label: "Média 1",
          field: "sem1",
          sortable: false,
          classes: "bg-grey-1 ellipsis",
          headerClasses: "bg-grey text-white"
        },
        {
          name: "bim3",
          align: "center",
          label: "1° Bimestre",
          field: "bim3",
          sortable: false
        },
        {
          name: "bim4",
          align: "center",
          label: "2° Bimestre",
          field: "bim4",
          sortable: false
        },
        {
          name: "sem2",
          align: "center",
          label: "Média 2",
          field: "sem2",
          sortable: false,
          classes: "bg-grey-1 ellipsis",
          headerClasses: "bg-grey text-white"
        },
        {
          name: "mediafinal",
          align: "center",
          label: "Média Final",
          field: "mediafinal",
          sortable: false,
          classes: "bg-grey-3 ellipsis",
          headerClasses: "bg-secondary text-white text-weight-bolder"
        }
      ],
      anos: [
        {
          value: 0,
          label: "2021",
          anoEscolar: '7° ano',
          data: [
            {
              name: "Arte",
              bim1: 9.0,
              bim2: 9.5,
              sem1: 9.2,
              bim3: 8.7,
              bim4: 9.2,
              sem2: 8.9,
              mediafinal: 9.0
            },
            {
              name: "Ciências",
              bim1: 7.5,
              bim2: 7.0,
              sem1: 7.2,
              bim3: 9.0,
              bim4: 9.0,
              sem2: 9.0,
              mediafinal: 8.1
            },
            {
              name: "Educação Física",
              bim1: 10,
              bim2: 10,
              sem1: 10,
              bim3: 10,
              bim4: 10,
              sem2: 10,
              mediafinal: 10
            },
            {
              name: "Geografia",
              bim1: 6.0,
              bim2: 8.0,
              sem1: 7.0,
              bim3: 7.0,
              bim4: 7.0,
              sem2: 7.0,
              mediafinal: 7.0
            },
            {
              name: "História",
              bim1: 5.0,
              bim2: 10.0,
              sem1: 7.5,
              bim3: 9.4,
              bim4: 6.0,
              sem2: 7.7,
              mediafinal: 7.6
            },
            {
              name: "Língua Inglesa",
              bim1: 6.0,
              bim2: 8.0,
              sem1: 7.0,
              bim1: 7.5,
              bim2: 7.0,
              sem1: 7.2,
              mediafinal: 7.1
            },
            {
              name: "Língua Portuguesa",
              bim1: 6.5,
              bim2: 6.8,
              sem1: 6.6,
              bim3: 7.2,
              bim4: 7.4,
              sem2: 7.3,
              mediafinal: 6.9
            },
            {
              name: "Matemática",
              bim1: 9.5,
              bim2: 9.0,
              sem1: 9.2,
              bim3: 8.3,
              bim4: 8.2,
              sem2: 8.2,
              mediafinal: 8.7
            }
          ]
        },
        {
          value: 1,
          label: "2020",
          anoEscolar: '6° ano',
          data: [
            {
              name: "Arte",
              bim1: 6.0,
              bim2: 8.0,
              sem1: 7.0,
              bim3: 7.5,
              bim4: 7.0,
              sem2: 7.2,
              mediafinal: 7.1
            },
            {
              name: "Ciências",
              bim1: 9.5,
              bim2: 9.0,
              sem1: 9.2,
              bim3: 8.3,
              bim4: 8.2,
              sem2: 8.2,
              mediafinal: 8.7
            },
            {
              name: "Educação Física",
              bim1: 9.0,
              bim2: 9.5,
              sem1: 9.2,
              bim3: 8.7,
              bim4: 9.2,
              sem2: 8.9,
              mediafinal: 9.0
            },
            {
              name: "Geografia",
              bim1: 5.0,
              bim2: 10.0,
              sem1: 7.5,
              bim3: 9.4,
              bim4: 6.0,
              sem2: 7.7,
              mediafinal: 7.6
            },
            {
              name: "História",
              bim1: 6.0,
              bim2: 8.0,
              sem1: 7.0,
              bim3: 7.0,
              bim4: 7.0,
              sem2: 7.0,
              mediafinal: 7.0
            },
            {
              name: "Língua Inglesa",
              bim1: 6.5,
              bim2: 6.8,
              sem1: 6.6,
              bim3: 7.2,
              bim4: 7.4,
              sem2: 7.3,
              mediafinal: 6.9
            },
            {
              name: "Língua Portuguesa",
              bim1: 7.5,
              bim2: 7.0,
              sem1: 7.2,
              bim3: 9.0,
              bim4: 9.0,
              sem2: 9.0,
              mediafinal: 8.1
            },
            {
              name: "Matemática",
              bim1: 10,
              bim2: 10,
              sem1: 10,
              bim3: 10,
              bim4: 10,
              sem2: 10,
              mediafinal: 10
            }
          ]
        },
        {
          value: 3,
          label: "2019",
          anoEscolar: '5° ano',
          data: [
            {
              name: "Arte",
              bim1: 9.9,
              bim2: 9.5,
              sem1: 9.7,
              bim3: 8.9,
              bim4: 9.1,
              sem2: 9.0,
              mediafinal: 9.3
            },
            {
              name: "Ciências",
              bim1: 10.0,
              bim2: 10.0,
              sem1: 10.0,
              bim3: 10.0,
              bim4: 10.0,
              sem2: 10.0,
              mediafinal: 10.0
            },
            {
              name: "Educação Física",
              bim1: 9.0,
              bim2: 9.5,
              sem1: 9.2,
              bim3: 8.7,
              bim4: 9.2,
              sem2: 8.9,
              mediafinal: 9.0
            },
            {
              name: "Geografia",
              bim1: 6.1,
              bim2: 6.6,
              sem1: 6.3,
              bim3: 6.3,
              bim4: 6.5,
              sem2: 6.4,
              mediafinal: 6.3
            },
            {
              name: "História",
              bim1: 7.2,
              bim2: 8.1,
              sem1: 7.6,
              bim3: 8.4,
              bim4: 8.2,
              sem2: 8.3,
              mediafinal: 7.9
            },
            {
              name: "Língua Inglesa",
              bim1: 4.1,
              bim2: 6.0,
              sem1: 5.0,
              bim3: 6.0,
              bim4: 8.0,
              sem2: 7.0,
              mediafinal: 6.0
            },
            {
              name: "Língua Portuguesa",
              bim1: 5.4,
              bim2: 6.5,
              sem1: 5.9,
              bim3: 7.1,
              bim4: 8.2,
              sem2: 7.6,
              mediafinal: 6.7
            },
            {
              name: "Matemática",
              bim1: 8.0,
              bim2: 8.5,
              sem1: 8.2,
              bim3: 7.7,
              bim4: 8.2,
              sem2: 7.9,
              mediafinal: 8.0
            }
          ]
        },
      ],
      anoSelecionado: {
          value: 0,
          label: "2021",
          anoEscolar: '7° ano',
          data: [
            {
              name: "Arte",
              bim1: 9.0,
              bim2: 9.5,
              sem1: 9.2,
              bim3: 8.7,
              bim4: 9.2,
              sem2: 8.9,
              mediafinal: 9.0
            },
            {
              name: "Ciências",
              bim1: 7.5,
              bim2: 7.0,
              sem1: 7.2,
              bim3: 9.0,
              bim4: 9.0,
              sem2: 9.0,
              mediafinal: 8.1
            },
            {
              name: "Educação Física",
              bim1: 10,
              bim2: 10,
              sem1: 10,
              bim3: 10,
              bim4: 10,
              sem2: 10,
              mediafinal: 10
            },
            {
              name: "Geografia",
              bim1: 6.0,
              bim2: 8.0,
              sem1: 7.0,
              bim3: 7.0,
              bim4: 7.0,
              sem2: 7.0,
              mediafinal: 7.0
            },
            {
              name: "História",
              bim1: 5.0,
              bim2: 10.0,
              sem1: 7.5,
              bim3: 9.4,
              bim4: 6.0,
              sem2: 7.7,
              mediafinal: 7.6
            },
            {
              name: "Língua Inglesa",
              bim1: 6.0,
              bim2: 8.0,
              sem1: 7.0,
              bim1: 7.5,
              bim2: 7.0,
              sem1: 7.2,
              mediafinal: 7.1
            },
            {
              name: "Língua Portuguesa",
              bim1: 6.5,
              bim2: 6.8,
              sem1: 6.6,
              bim3: 7.2,
              bim4: 7.4,
              sem2: 7.3,
              mediafinal: 6.9
            },
            {
              name: "Matemática",
              bim1: 9.5,
              bim2: 9.0,
              sem1: 9.2,
              bim3: 8.3,
              bim4: 8.2,
              sem2: 8.2,
              mediafinal: 8.7
            }
          ]
        },
    };
  }
};
</script>
