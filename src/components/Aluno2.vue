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
        <div class="col-10 q-table__title text-weight-bold">Boletim</div>
        <div class="col-2 row items-center no-wrap justify-end">
          <q-select
            v-model="anoSelecionado"
            :options="anos"
            label="Ano Letivo"
            style="width: 100%"
            map-options
          />
        </div>
        <div class="col-12">Escola Municipal Bom Senhor</div>
        <div class="col-12">Ensino Fundamental</div>
        <div class="col-12">{{ anoSelecionado.anoEscolar }}</div>
        
      </template>
      <template v-slot:bottom>
        <div class="col-12 row items-center no-wrap justify-end">
          <q-btn color="primary" icon="print" @click="exportTable" />
        </div>
      </template>
    </q-table>
  </div>
</template>

<script>
import { exportFile } from "quasar";

function wrapCsvValue(val, formatFn) {
  let formatted = formatFn !== void 0 ? formatFn(val) : val;

  formatted =
    formatted === void 0 || formatted === null ? "" : String(formatted);

  formatted = formatted.split('"').join('""');

  return `"${formatted}"`;
}

export default {
  name: "Boletim",
  methods: {
    exportTable() {
      // naive encoding to csv format
      const content = [this.columns.map(col => wrapCsvValue(col.label))]
        .concat(
          this.anoSelecionado.data.map(row =>
            this.columns
              .map(col =>
                wrapCsvValue(
                  typeof col.field === "function"
                    ? col.field(row)
                    : row[col.field === void 0 ? col.name : col.field],
                  col.format
                )
              )
              .join(",")
          )
        )
        .join("\r\n");

      const status = exportFile("Boletim.csv", content, "text/csv");

      if (status !== true) {
        this.$q.notify({
          message: "Browser denied file download...",
          color: "negative",
          icon: "warning"
        });
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
          anoEscolar: "9° ano",
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
              bim1: 9.9,
              bim2: 9.5,
              sem1: 9.7,
              bim3: 8.9,
              bim4: 9.1,
              sem2: 9.0,
              mediafinal: 9.3
            },
            {
              name: "Educação Física",
              bim1: 10.0,
              bim2: 10.0,
              sem1: 10.0,
              bim3: 10.0,
              bim4: 10.0,
              sem2: 10.0,
              mediafinal: 10.0
            },
            {
              name: "Geografia",
              bim1: 5.4,
              bim2: 6.5,
              sem1: 5.9,
              bim3: 7.1,
              bim4: 8.2,
              sem2: 7.6,
              mediafinal: 6.7
            },
            {
              name: "História",
              bim1: 4.1,
              bim2: 6.0,
              sem1: 5.0,
              bim3: 6.0,
              bim4: 8.0,
              sem2: 7.0,
              mediafinal: 6.0
            },
            {
              name: "Língua Inglesa",
              bim1: 6.1,
              bim2: 6.6,
              sem1: 6.3,
              bim3: 6.3,
              bim4: 6.5,
              sem2: 6.4,
              mediafinal: 6.3
            },
            {
              name: "Língua Portuguesa",
              bim1: 7.2,
              bim2: 8.1,
              sem1: 7.6,
              bim3: 8.4,
              bim4: 8.2,
              sem2: 8.3,
              mediafinal: 7.9
            },
            {
              name: "Matemática",
              bim1: 9.1,
              bim2: 9.5,
              sem1: 9.3,
              bim3: 9.7,
              bim4: 9.9,
              sem2: 9.8,
              mediafinal: 9.5
            }
          ]
        },
        {
          value: 1,
          label: "2020",
          anoEscolar: "8° ano",
          data: [
            {
              name: "Arte",
              bim1: 8.0,
              bim2: 8.5,
              sem1: 8.2,
              bim3: 7.7,
              bim4: 8.2,
              sem2: 7.9,
              mediafinal: 8.0
            },
            {
              name: "Ciências",
              bim1: 8.1,
              bim2: 8.7,
              sem1: 8.4,
              bim3: 7.9,
              bim4: 7.5,
              sem2: 7.7,
              mediafinal: 8.0
            },
            {
              name: "Educação Física",
              bim1: 9.5,
              bim2: 9.2,
              sem1: 9.3,
              bim3: 8.0,
              bim4: 8.5,
              sem2: 8.2,
              mediafinal: 8.7
            },
            {
              name: "Geografia",
              bim1: 6.2,
              bim2: 6.5,
              sem1: 6.3,
              bim3: 7.1,
              bim4: 7.7,
              sem2: 7.4,
              mediafinal: 6.8
            },
            {
              name: "História",
              bim1: 6.6,
              bim2: 7.1,
              sem1: 6.8,
              bim3: 7.5,
              bim4: 6.0,
              sem2: 6.7,
              mediafinal: 6.7
            },
            {
              name: "Língua Inglesa",
              bim1: 7.2,
              bim2: 7.5,
              sem1: 7.3,
              bim3: 8.1,
              bim4: 8.0,
              sem2: 8.0,
              mediafinal: 7.6
            },
            {
              name: "Língua Portuguesa",
              bim1: 8.1,
              bim2: 8.9,
              sem1: 8.5,
              bim3: 9.5,
              bim4: 7.0,
              sem2: 8.2,
              mediafinal: 8.3
            },
            {
              name: "Matemática",
              bim1: 6.0,
              bim2: 6.1,
              sem1: 6.0,
              bim3: 7.2,
              bim4: 5.0,
              sem2: 6.1,
              mediafinal: 6.0
            }
          ]
        },
        {
          value: 3,
          label: "2019",
          anoEscolar: "7° ano",
          data: [
            {
              name: "Arte",
              bim1: 6.0,
              bim2: 7.1,
              sem1: 6.5,
              bim3: 7.5,
              bim4: 7.3,
              sem2: 7.4,
              mediafinal: 6.9
            },
            {
              name: "Ciências",
              bim1: 6.5,
              bim2: 6.1,
              sem1: 6.3,
              bim3: 7.4,
              bim4: 6.8,
              sem2: 7.1,
              mediafinal: 6.7
            },
            {
              name: "Educação Física",
              bim1: 5.7,
              bim2: 6.5,
              sem1: 6.1,
              bim3: 6.2,
              bim4: 6.6,
              sem2: 6.4,
              mediafinal: 6.2
            },
            {
              name: "Geografia",
              bim1: 7.5,
              bim2: 7.8,
              sem1: 7.6,
              bim3: 8.1,
              bim4: 8.0,
              sem2: 8.0,
              mediafinal: 7.8
            },
            {
              name: "História",
              bim1: 7.7,
              bim2: 7.2,
              sem1: 7.4,
              bim3: 7.5,
              bim4: 7.9,
              sem2: 7.7,
              mediafinal: 7.5
            },
            {
              name: "Língua Inglesa",
              bim1: 6.2,
              bim2: 6.6,
              sem1: 6.4,
              bim3: 7.2,
              bim4: 7.0,
              sem2: 7.1,
              mediafinal: 6.7
            },
            {
              name: "Língua Portuguesa",
              bim1: 6.6,
              bim2: 7.2,
              sem1: 6.9,
              bim3: 6.9,
              bim4: 8.4,
              sem2: 7.6,
              mediafinal: 7.2
            },
            {
              name: "Matemática",
              bim1: 5.5,
              bim2: 6.1,
              sem1: 5.8,
              bim3: 6.6,
              bim4: 7.1,
              sem2: 6.8,
              mediafinal: 6.3
            }
          ]
        }
      ],
      anoSelecionado: {
        value: 0,
        label: "2021",
        anoEscolar: "9° ano",
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
            bim1: 9.9,
            bim2: 9.5,
            sem1: 9.7,
            bim3: 8.9,
            bim4: 9.1,
            sem2: 9.0,
            mediafinal: 9.3
          },
          {
            name: "Educação Física",
            bim1: 10.0,
            bim2: 10.0,
            sem1: 10.0,
            bim3: 10.0,
            bim4: 10.0,
            sem2: 10.0,
            mediafinal: 10.0
          },
          {
            name: "Geografia",
            bim1: 5.4,
            bim2: 6.5,
            sem1: 5.9,
            bim3: 7.1,
            bim4: 8.2,
            sem2: 7.6,
            mediafinal: 6.7
          },
          {
            name: "História",
            bim1: 4.1,
            bim2: 6.0,
            sem1: 5.0,
            bim3: 6.0,
            bim4: 8.0,
            sem2: 7.0,
            mediafinal: 6.0
          },
          {
            name: "Língua Inglesa",
            bim1: 6.1,
            bim2: 6.6,
            sem1: 6.3,
            bim3: 6.3,
            bim4: 6.5,
            sem2: 6.4,
            mediafinal: 6.3
          },
          {
            name: "Língua Portuguesa",
            bim1: 7.2,
            bim2: 8.1,
            sem1: 7.6,
            bim3: 8.4,
            bim4: 8.2,
            sem2: 8.3,
            mediafinal: 7.9
          },
          {
            name: "Matemática",
            bim1: 9.1,
            bim2: 9.5,
            sem1: 9.3,
            bim3: 9.7,
            bim4: 9.9,
            sem2: 9.8,
            mediafinal: 9.5
          }
        ]
      }
    };
  }
};
</script>
