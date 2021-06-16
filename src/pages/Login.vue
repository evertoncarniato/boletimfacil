<template>
  <q-page id="page" class="pagina bg-blue-4">
    <div id="card" class="flex flex-center">
      <q-card color="black" bordered class="bg-lightgray my-card">
        <div class="container flex flex-center q-pt-lg text-weight-bold text-h5">
          <div class="text-primary">
              Boletim
          </div>
          <div class="text-secondary">
              Fácil
          </div>
        </div>
        <q-card-section id="itens">
          <div id="cpf">
            <q-input
              outlined
              v-model="cpf"
              type="text"
              label="CPF do Responsável"
              color="primary"
            />
          </div>
          <div id="senha">
            <q-input
              outlined
              v-model="senha"
              type="password"
              label="Senha"
              color="primary"
            />
          </div>
          <div id="btn">
            <q-btn color="primary" label="ENTRAR" @click="botao()" />
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      cpf: "",
      senha: ""
    };
  },
  methods: {
    botao() {
      if (this.cpf == '36138017013') {
          if (this.senha == '1234') {
              this.$router.push('boletim')
          }
      }

    }
  }
};
</script>

<style>
#card {
  padding-top: 12%;
}
#btn {
  padding-top: 5%;
  float: right;
}
#senha {
  padding-top: 5%;
}
.my-card {
  width: 340px;
  height: 295px;
}
#itens {
  padding-top: 10%;
}
.container img {
  max-width: 200px;
  max-height: 150px;
  width: auto;
  height: auto;
  padding-top: 10%;
}
.text-llog {
  color: #01a79d;
}
.bg-llog {
  background: #01a79d;
}
.bg-camila {
  background: red;
}
</style>
