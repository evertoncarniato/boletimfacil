<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >
    <h3>{{ dados.label }}</h3>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  computed: {
    dados: {
      get () {
        return this.$store.state.dados.alunosVinculados
      }
    }
  }
}
</script>
