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
            <v-card-actions
             v-for="(btn, i) in timeline.buttons"
             :key=i>
              <v-btn depressed target="_blank" :href=btn.url color="experiences">
                {{ btn.text }}
              </v-btn>
            </v-card-actions>
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
          date: '2019 4月~12月　インターン',
          texts: [
            'Job:　ライター, アナリスト, 編集者, マネージャー (4月~9月)',
            'Use:　Googleアナリティクス, Ubersuggest など',
            'Job:　社内用タスク管理ツールの開発 (9月~12月)',
            'Use:　Wagtail',
          ],
          buttons: [
            {
              text: 'COMPANY',
              url: 'https://www.miraidenshi-tech.jp/',
            }
          ]
        },
        {
          companyName: '株式会社タンバリン',
          date: '2020 3月　インターン',
          texts: [
            'Job:　社内蔵書管理Slackbotの開発',
            'Use:　Bolt, Google Apps Script, TypeScript, clasp, Jest',
          ],
          buttons: [
            {
              text: 'COMPANY',
              url: 'https://www.tam-bourine.co.jp/',
            }
          ]
        },
        {
          companyName: '京都エンタテインメントワークス株式会社',
          date: '2020 3月~現在　アルバイト',
          texts: [
            'Job:　「みまもメイト」の開発 (3月~6月)',
            'Use:　Riot.js, Ruby on Rails',
            'Job:　社内用レイアウトツールの開発 (7月~現在)',
            'Use:　React, Ruby on Rails',
          ],
          buttons: [
            {
              text: 'COMPANY',
              url: 'https://www.entaworks.co.jp/',
            }
          ]
        },
        {
          companyName: '株式会社いい生活',
          date: '2020 8月24日~28日　インターン',
          texts: [
            'Job:　「大学生にいい生活」の開発',
            'Use:　Vue.js, Firebase',
          ],
          buttons: [
            {
              text: 'COMPANY',
              url: 'https://www.e-seikatsu.info/',
            },
            {
              text: 'ARTICLE',
              url: 'https://wafuwafu13.hatenadiary.com/entry/2020/08/29/114547',
            }
          ]
        },
        {
          companyName: '株式会社はてな',
          date: '2020 8月~現在　アルバイト, インターン',
          texts: [
            'Job:　「はてなブログ」の開発',
            'Use:　Perl'
          ],
          buttons: [
            {
              text: 'COMPANY',
              url: 'https://hatenacorp.jp/',
            }
          ]
        },
      ]
    })
  })
</script>