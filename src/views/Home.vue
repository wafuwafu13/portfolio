<template>
  <v-container>
    <v-col cols=12>
      <v-expansion-panels>
        <v-expansion-panel
         v-for="(panel, i) in panelContents"
         :key=i>
          <v-expansion-panel-header>
            {{ panel.header }}
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            {{ panel.content }}
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <v-row class="pt-10">
        <v-col 
          cols="3"
          v-for="(medium, i) in media"
          :key=i>
          <v-card :href=medium.url target="_blank" color="home" height="50">
            <v-card-text>
              <v-layout justify-center>
                <p>{{ medium.title }}</p>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="2" offset-md="10" class="text-center">
          <v-img class="pt-5 mt-5" align="right" src="@/assets/face.png"></v-img>
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
  import Vue from 'vue'
  import { Timeline } from 'vue-tweet-embed'
  export default Vue.extend({
    name: 'Home',
    data: () => ({
      panelContents: [
        {
          header: '名前',
          content: '田川裕隆(たがわひろたか)'
        },
        {
          header: '大学',
          content: '同志社大学社会学部(23卒)'
        },
        {
          header: '資格',
          content: 'Python3エンジニア認定基礎試験'
        },
        {
          header: 'お気に入りの学術書',
          content: '勉強の哲学 (千葉雅也) / なっとく!アルゴリズム (Aditya Y. Bhargava) / 「なぜ」シリーズ (矢沢久雄) / アーキテクチャの生態系(濱野智史)'
        },
        {
          header: 'お気に入りの本、作家',
          content: '太宰治全集 (全10巻) / 走れ!T校バスケット部 (松崎洋) / バッテリー (あさのあつこ) / 僕らの七日間戦争シリーズ (宗田理) / 池井戸潤 / 重松清'
        },
        {
          header: '好きなテレビ番組',
          content: 'アメトーク / しゃべくり007 / 全力!脱力タイムズ / 千鳥の相席食堂 / 千原ジュニアの座王 / さんまのお笑い向上委員会'
        },
        {
          header: '好きなアーティスト',
          content: 'amazarashi / Mr.Children / GREEEEN / 緑黄色社会 / Official髭男dism / Mrs. GREEN APPLE / ポルノグラフィティ / BUMP OF CHICKEN'
        }
      ],
      media: [
        {
          url: 'https://github.com/wafuwafu13',
          title: 'GitHub'
        },
        {
          url: 'https://wafuwafu13.hatenadiary.com/',
          title: 'Hatena'
        },
        {
          url: 'https://qiita.com/wafuwafu13',
          title: 'Qiita'
        },
        {
          url: 'https://lapras.com/public/5ZYRU00',
          title: 'LAPRAS'
        },
      ]
    })
  })
</script>