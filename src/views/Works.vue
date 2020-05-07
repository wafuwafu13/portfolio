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
            <v-layout class="pt-5" justify-center>
              <v-btn icon href="https://github.com/wafuwafu13/portfolio" target="_blank">
                <v-icon x-large>mdi-github</v-icon>
              </v-btn>
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
              ReactNative / e-StatのAPIを用いた統計アプリ
            </v-layout>
           <v-layout class="pt-5" justify-center>
              <v-btn class="ml-5" icon href="https://apps.apple.com/jp/app/%E6%97%A5%E6%9C%AC%E7%B5%B1%E8%A8%88-%E6%96%87%E7%B3%BB%E5%AD%A6%E7%94%9F%E3%81%A8%E5%AD%A6%E3%81%B6%E7%A4%BE%E4%BC%9A%E7%B5%B1%E8%A8%88%E5%AD%A6/id1491159876" target="_blank">
                <v-icon x-large>mdi-apple</v-icon>
              </v-btn>
              <v-btn class="ml-5" icon href="https://github.com/wafuwafu13/e-stat-native" target="_blank">
                <v-icon x-large>mdi-github</v-icon>
              </v-btn>
           </v-layout>
           <v-layout justify-center>
              <a class="pt-5" href="https://qiita.com/wafuwafu13/items/3c1ad74e8984d67e0a95" target="_blank">個人開発をしたので技術とマーケティングの観点からまとめる</a>
           </v-layout>
           </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols=12 sm=12 md=6 lg=6 xl=6>
        <v-card shaped color="#CDFFF6">
          <v-layout justify-center>
            <v-card-title>カオスジェネレーター</v-card-title>
          </v-layout>
          <v-img src="@/assets/chaos-generator.png"></v-img>
          <v-card-subtitle>
            <v-layout justify-center>
              Python / 社会学の授業を自力でコード化
            </v-layout>
           <v-layout class="pt-5" justify-center>
              <v-btn icon href="https://github.com/wafuwafu13/chaos-generator" target="_blank">
                <v-icon x-large>mdi-github</v-icon>
              </v-btn>
           </v-layout>
           <v-layout justify-center>
              <a class="pt-5" href="https://kyoupurog.hatenablog.com/entry/2020/04/20/201717?_ga=2.133063371.454462925.1587375416-132769761.1586770378" target="_blank">ロジスティック方程式とカオス反制御・制御から見出すシステム家族療法</a>
           </v-layout>
           </v-card-subtitle>
        </v-card>
      </v-col>
      <v-col cols=12 sm=12 md=6 lg=6 xl=6>
        <v-card shaped color="#CDFFF6">
          <v-layout justify-center>
            <v-card-title>多面！フラッシュ暗算</v-card-title>
          </v-layout>
          <v-img src="@/assets/flash.png" height="476"></v-img>
          <v-card-subtitle>
            <v-layout justify-center>
              ReactNative + Firebase / 世界に一つの多面フラッシュ暗算アプリ
            </v-layout>
            <v-layout class="pt-5" justify-center>
              <v-btn class="ml-5" icon href="https://apps.apple.com/jp/app/%E5%A4%9A%E9%9D%A2-%E3%83%95%E3%83%A9%E3%83%83%E3%82%B7%E3%83%A5%E6%9A%97%E7%AE%97/id1511473910" target="_blank">
                <v-icon x-large>mdi-apple</v-icon>
              </v-btn>
              <v-btn class="ml-5" icon target="_blank">
                <v-icon x-large>mdi-android</v-icon>
              </v-btn>
              <v-btn class="ml-5" icon href="https://tamen.jimdofree.com/" target="_blank">
                <v-icon x-large>mdi-web</v-icon>
              </v-btn>
              <v-btn class="ml-5" icon href="https://github.com/wafuwafu13/flash-mental-arithmetic" target="_blank">
                <v-icon x-large>mdi-github</v-icon>
              </v-btn>
            </v-layout>
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
