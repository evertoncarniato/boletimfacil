<template>
  <q-page class="q-mx-xl q-pt-lg">
    <div>
      <div class="q-gutter-x-lg row items-center no-wrap justify-end">
        <q-select
          
          v-model="alunoSelecionado"
          :options="alunosVinculados"
          label="Aluno"
          style="width: 200px"
          map-options
        />
      </div>
      <div>
        <aluno1 v-if="alunoSelecionado.value == 0"/>
        <aluno2 v-else-if="alunoSelecionado.value == 1"/>
      </div>
    </div>
  </q-page>
</template>

<script>
import Aluno1 from "src/components/Aluno1.vue";
import Aluno2 from "src/components/Aluno2.vue";
export default {
  components: { Aluno1, Aluno2 },
  name: "PageIndex",
  data() {
    return {
      alunosVinculados: [
        { value: 0, label: "Marcio Silva" },
        { value: 1, label: "Valentina Oliveira" }
      ],
      alunoSelecionado: { value: 0, label: "Marcio Silva" },
    };
  },
  computed: {
    dados: {
      get() {
        return this.$store.state.dados.alunosVinculados;
      }
    }
  }
};
</script>
