<template>
  <v-app>
    <v-content>
      <Base/>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Base from './components/Base.vue';
@Component({
  components: {
    Base,
  },
})
export default class App extends Vue {}
</script>
