<template>
  <v-container>
    <p><router-link to="/">home</router-link></p>
    <p><router-link to="/works">works</router-link></p>
    <p><router-link to="/experiences">experiences</router-link></p>
    <p><router-link to="/skills">skills</router-link></p>
    <router-view></router-view>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class Base extends Vue {}
</script>
