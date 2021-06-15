<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1">
    <q-header bordered class="bg-white text-grey-8" height-hint="64">
      <q-toolbar class="GNL__toolbar">
        <!-- <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
          class="q-mr-sm"
        /> -->

        <q-toolbar-title shrink class="row items-center no-wrap">
          <span class="q-ml-sm">Boletim Fácil</span>
        </q-toolbar-title>

        <q-space />
        <div class="q-gutter-x-lg row items-center no-wrap">
          <q-select 
            borderless 
            v-model="alunoSelecionado"
            :options="alunosVinculados"
            label="Aluno"
            style="width: 200px"
            emit-value
            map-options
          />
          <q-select 
            borderless 
            v-model="anoSelecionado" 
            :options="anos" 
            label="Ano Letivo" 
            style="width: 100px"
            emit-value
            map-options
          />
          <q-btn round dense flat color="grey-8" icon="notifications">
            <q-badge color="red" text-color="white" floating>
              2
            </q-badge>
            <q-tooltip>Notificações</q-tooltip>
          </q-btn>
          <q-btn round flat>
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <q-tooltip>Responsável</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <!-- <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      overlay
      bordered
      content-class="bg-white"
      :width="280"
    >
      <q-scroll-area class="fit">
        <q-list padding class="text-grey-8">
          <q-item class="GNL__drawer-item" v-ripple v-for="link in links1" :key="link.text" clickable>
            <q-item-section avatar>
              <q-icon :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'Layout',
  data () {
    return {
      leftDrawerOpen: false,
      anos: [
        { value: 0, label: '2021' },
        { value: 1, label: '2020' },
        { value: 2, label: '2019' },
        { value: 3, label: '2018' },
        { value: 4, label: '2017' },
      ],
      anoSelecionado: 0,
      alunosVinculados: [
        { value: 0, label: 'Danielle Sayuri' },
        { value: 1, label: 'Everton Carniato' },
        { value: 2, label: 'João Eduardo' },
        { value: 3, label: 'Maria Gabriela' }
      ],
      alunoSelecionado: null,
      links1: [
        { icon: 'web', text: 'Notas' },
        { icon: 'person', text: 'For you' },
        { icon: 'star_border', text: 'Favourites' },
        { icon: 'search', text: 'Saved searches' }
      ]
    }
  },
  methods: {
  }
}
</script>

<style lang="sass">
.GNL
  &__toolbar
    height: 64px
  &__toolbar-input
    width: 55%
  &__drawer-item
    line-height: 24px
    border-radius: 0 24px 24px 0
    margin-right: 12px
    .q-item__section--avatar
      .q-icon
        color: #5f6368
    .q-item__label
      color: #3c4043
      letter-spacing: .01785714em
      font-size: .875rem
      font-weight: 500
      line-height: 1.25rem
  &__drawer-footer-link
    color: inherit
    text-decoration: none
    font-weight: 500
    font-size: .75rem
    &:hover
      color: #000
</style>