<template>
  <v-container>
    <v-row>
      <v-col 
       cols=12 sm=12 md=6 lg=6 xl=6 
       v-for="(card, i) in cardContents"
       :key=i>
        <v-card color="works">
          <v-layout justify-center>
            <v-card-title>{{ card.title }}</v-card-title>
          </v-layout>
          <v-img :src=card.image :height=card.height></v-img>
          <v-card-subtitle>
            <v-layout justify-center>
              {{ card.date }}
            </v-layout>
            <v-layout justify-center>
              {{ card.description }}
            </v-layout>
            <v-layout justify-center>
              <a class="pt-5" :href=card.articleUrl target="_blank">{{ card.articleTitle }}</a>
            </v-layout>
            <v-row>
              <v-layout 
                class="pt-5" 
                justify-center
                v-for="(btn, i) in card.button"
                :key=i>
                 <v-btn class="ml-5" icon :href=btn.url target="_blank">
                   <v-icon x-large>{{ btn.icon }}</v-icon>
                 </v-btn>
              </v-layout>
            </v-row>
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import Vue from 'vue'
  export default Vue.extend({
    name: 'Works',
    data: () => ({
      cardContents: [
        {
          title: '日本統計',
          image: require("@/assets/e-stat-native.png"),
          height: '345',
          date: '2019年 12月',
          description: 'ReactNative / e-StatのAPIを用いた統計アプリ',
          articleUrl: 'https://qiita.com/wafuwafu13/items/3c1ad74e8984d67e0a95',
          articleTitle: '個人開発をしたので技術とマーケティングの観点からまとめる',
          button: [
            {
              icon: 'mdi-github',
              url: 'https://github.com/wafuwafu13/e-stat-native'
            },
            {
              icon: 'mdi-web',
              url: 'https://japanese-statistics.jimdofree.com/'
            },
            {
              icon: 'mdi-apple',
              url: 'https://apps.apple.com/jp/app/%E6%97%A5%E6%9C%AC%E7%B5%B1%E8%A8%88-%E6%96%87%E7%B3%BB%E5%AD%A6%E7%94%9F%E3%81%A8%E5%AD%A6%E3%81%B6%E7%A4%BE%E4%BC%9A%E7%B5%B1%E8%A8%88%E5%AD%A6/id1491159876'
            }
          ]
        },
        {
          title: '多面！フラッシュ暗算',
          image: require("@/assets/flash.png"),
          date: '2020年 5月',
          description: 'ReactNative + Firebase / 世界に一つの多面フラッシュ暗算アプリ',
          articleUrl: 'https://qiita.com/wafuwafu13/items/9655c2a1d912ba2d2dac',
          articleTitle: 'ReactNativeでフラッシュ暗算アプリを開発して公開しました',
          button: [
            {
              icon: 'mdi-github',
              url: 'https://github.com/wafuwafu13/flash-mental-arithmetic'
            },
            {
              icon: 'mdi-web',
              url: 'https://tamen.jimdofree.com/'
            },
            {
              icon: 'mdi-apple',
              url: 'https://apps.apple.com/jp/app/%E5%A4%9A%E9%9D%A2-%E3%83%95%E3%83%A9%E3%83%83%E3%82%B7%E3%83%A5%E6%9A%97%E7%AE%97/id1511473910'
            },
            {
              icon: 'mdi-android',
              url: 'https://play.google.com/store/apps/details?id=jp.wafuwafu.flash&hl=ja'
            },
          ]
        },
        {
          title: 'e-stat-population',
          image: require("@/assets/e-stat-population.png"),
          date: '2020年 5月',
          description: 'Node.js + Jest + Travis CI / e-StatのAPIを用いて人口を取得するnpmパッケージ',
          articleUrl: 'https://qiita.com/wafuwafu13/items/6c7704c04465c13ca8d8',
          articleTitle: 'まずは簡単なnpmパッケージを半日で作ってみよう',
          button: [
            {
              icon: 'mdi-github',
              url: 'https://github.com/wafuwafu13/e-stat-population'
            }
          ]
        },
        {
          title: 'riot-commentout',
          image: require("@/assets/riot-commentout.png"),
          height: '345',
          date: '2020年 5月',
          description: 'Typescript / Riot.jsでのコメントアウトを補助するVSCode拡張機能',
          articleUrl: 'https://qiita.com/wafuwafu13/items/3c13da6c22f898b09be9',
          articleTitle: 'VSCode拡張機能開発メモ',
          button: [
            {
              icon: 'mdi-github',
              url: 'https://github.com/wafuwafu13/riot-commentout'
            },
            {
              icon: 'mdi-web',
              url: 'https://marketplace.visualstudio.com/items?itemName=hirotakatagawa.riot-commentout'
            }
          ]
        }
      ]
    })
  })
</script>