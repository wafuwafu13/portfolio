<template>
  <v-container>
    <v-row>
      <v-col cols=12 sm=12 md=6 lg=6 xl=6>
        <v-card shaped color="#CDFFF6">
          <v-layout justify-center>
            <v-card-title>田川裕隆のポートフォリオサイト</v-card-title>
          </v-layout>
          <v-img src="@/assets/portfolio.png" height="305"></v-img>
          <v-card-subtitle>
            <v-layout justify-center>
              Vue.ts + Vuetify / シンプルなデザインのポートフォリオサイト
            </v-layout>
            <v-layout justify-center>
              <a class="pt-5" href="https://github.com/wafuwafu13/portfolio" target="_blank">Github</a>
            </v-layout>
            <v-layout justify-center>
              <a class="pt-5" href="https://qiita.com/wafuwafu13/items/e86fd839a5728a1d5d43" target="_blank">Vue初心者が2日でポートフォリオサイトを作る</a>
            </v-layout>
          </v-card-subtitle>
        </v-card>
      </v-col>
      <v-col cols=12 sm=12 md=6 lg=6 xl=6>
        <v-card shaped color="#CDFFF6">
          <v-layout justify-center>
            <v-card-title>日本の統計</v-card-title>
          </v-layout>
          <v-img src="@/assets/e-stat-native.png"></v-img>
          <v-card-subtitle>
            <v-layout justify-center>
              ReactNative / 累計100ダウンロード越えの統計アプリ
            </v-layout>
           <v-layout justify-center>
              <a class="pt-5" href="https://github.com/wafuwafu13/e-stat-native" target="_blank">Github</a>
           </v-layout>
           <v-layout justify-center>
              <a class="pt-5" href="https://qiita.com/wafuwafu13/items/3c1ad74e8984d67e0a95" target="_blank">個人開発をしたので技術とマーケティングの観点からまとめる</a>
           </v-layout>
           </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
