<template>
  <v-container>
    <v-col cols=12 justify-center>
      <v-timeline dense>
        <v-timeline-item 
          color="experiences"
          v-for="(timeline, i) in timelineContents"
          :key=i>
          <v-card>
            <v-card-title>
              {{ timeline.companyName }}
            </v-card-title>
            <v-card-subtitle>
              {{ timeline.date }}
            </v-card-subtitle>
            <v-divider></v-divider>
            <v-card-text
             v-for="(text, i) in timeline.texts"
             :key=i>
             {{ text }}
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-col>
  </v-container>
</template>

<script>
  import Vue from 'vue'
  export default Vue.extend({
    name: 'Experiences',
    data: () => ({
      timelineContents: [
        {
          companyName: '未来電子テクノロジー株式会社',
          date: '2019 4月~12月',
          texts: [
            '4月~9月は他のインターン生とプログラミングを学びつつ、マーケターとして活動しました。',
            'マーケターの活動としては、ライターとして記事の作成をしたり、アナリストとしてキーワードの選定をしたり、編集者として校正をするなど、様々な役職に就かせていただきました。',
            'また、メンバーを支えるマネージャーとしての役割も担わせていただきました。',
            'プログラミングの活動としては、独自のカリキュラムを進めて基礎を学んだ他、カリキュラムの改善や、勉強会の開催など、プログラミングを学ぶのにより良い環境の構築にも励みました。',
            '10月~12月はエンジニアとしての活動に専念し、Wagtail(Django)で社内用管理ツールの共同開発を行いました。'
          ]
        },
        {
          companyName: '株式会社タンバリン',
          date: '2020 3月',
          texts: [
            'Bolt, GASで社内の蔵書管理を行うSlackBotをペアの方と2人で設計、開発しました。',
            'Botの機能や開発の工程などを2人でコミュニケーションを取りながら決め、開発では主にGASの部分を担当しました。',
            'claspを用いてTypeScriptで書き、Jestでテストをすることによりコードの正確性を向上させた他、単一責任の原則やDRY原則を意識してコードのリファクタリングも行いました。',
            '0から1を作る力、新しい技術を短期間で習得する力、より良いコードを書こうとする意識が身につきました。'
          ]
        },
        {
          companyName: '京都エンタテインメントワークス株式会社',
          date: '2020 3月~現在',
          texts: [
            '3月~6月は、Riot.js, RubyonRailsで、うつ病などの精神疾患で困っている当事者を持つご家族が、日々の介護の様子や症状・行動などを、PCやスマートフォンを使って日々記録し、後でその記録を振り返ることができるWebサービス「みまもメイト」の改修、新機能の追加をし。',
            'RubyonRailsでAPIの処理をしたり、Riot.jsでフロント部分のロジックを書いたり、RSpecでテストコードを書いたり、デバッグをしてバグ修正やデザイン修正をするなど、幅広く活動させてもらいました。',
            '7月~現在は、React, RubyonRails, PixiJSで、社内のデザイナーが使うレイアウトツールを作成しています。',
          ]
        },
      ]
    })
  })
</script>