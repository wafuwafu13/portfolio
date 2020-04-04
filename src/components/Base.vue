<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <v-card to="/" raised color="#B8F89A" height="50">
          <v-card-text>
            <v-layout justify-center>
              <p>HOME</p>
           </v-layout>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card to="/works" raised color="#BEEFE6" height="50">
          <v-card-text>
            <v-layout justify-center>
                <p>WORKS</p>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card to="/experiences" raised color="#FFD2E8" height="50">
          <v-card-text>
            <v-layout justify-center>
                <p>EXPERIENCES</p>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card to="/skills" raised color="#FEEAB7" height="50">
          <v-card-text>
            <v-layout justify-center>
                <p>SKILLS</p>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-container>
      <router-view></router-view>
    </v-container>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class Base extends Vue {}
</script>
