<template>
  <v-container>
    <v-col cols=12>
      <v-row>
        <v-col cols=12 sm=12 md=3 lg=3 xl=3
         v-for="(card, i) in cardContents"
         :key=i>
          <v-card
           color="skils" 
           height="250"
           >
            <v-layout justify-center>
              <v-card-title>
                {{ card.title }}
              </v-card-title>
            </v-layout>
            <v-divider></v-divider>
            <v-card-text>
              {{ card.date }}
            </v-card-text>
            <v-card-text>
              {{ card.description }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
  import Vue from 'vue'
  export default Vue.extend({
    name: 'Skills',
    data: () => ({
      cardContents: [
        {
          title: 'HTML, CSS',
          date: '実務10ヶ月',
          description: '基本的な実装やレスポンシブ対応ができます。'
        },
        {
          title: 'React, ReactNative',
          date: '実務1ヶ月, 個人開発: アプリリリース',
          description: 'JSのフレームワークの中では一番使ってます。'
        },
        {
          title: 'Riot.js',
          date: '実務4ヶ月',
          description: '既存のコードを読んで改修できます。'
        },
        {
          title: 'Vue.js, Vuetify',
          date: '個人開発',
          description: 'Vuetifyが楽なので使ってます。'
        },
        {
          title: 'Bolt, GAS',
          date: '実務: 業務用SlackBot',
          description: 'clasp、TypeScriptを活用し、Jestのモックでテストされた安全なBotを作成できます。'
        },
        {
          title: 'TypeScript',
          date: '実務: 2ヶ月, 個人開発: アプリリリース',
          description: '主にReactで使っています。'
        },
        {
          title: 'RubyonRails, RSpec',
          date: '実務: 5ヶ月',
          description: '主にAPIモードで使っています。'
        },
        {
          title: 'Django, Wagtail',
          date: '実務: 3ヶ月',
          description: '最近触っていないので忘れています。'
        },
        {
          title: 'Go',
          date: '趣味',
          description: '基礎文法は押さえているつもりです。 インタプリタを完成させたいです。'
        },
        {
          title: 'Docker',
          date: '趣味',
          description: '簡単な環境構築ができます。'
        },
        {
          title: 'AWS',
          date: '趣味',
          description: '基本的な使い方は押さえているつもりです。'
        },
        {
          title: 'マーケティング',
          date: '実務: 半年',
          description: '正しい日本語を使った質の良い記事を作成、公正できます。ツールを用いたキーワード選定や企画書作成ができます。'
        },
      ]
    })
  })
</script>