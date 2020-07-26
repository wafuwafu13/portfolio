<template>
  <v-content>
    <v-toolbar max-height="60" :class="itemName">
      <v-app-bar-nav-icon 
        @click.native.stop="sideNav = !sideNav" 
        class="hidden-sm-and-up">
      </v-app-bar-nav-icon>
      <v-toolbar-title>
        {{ itemName.toUpperCase() }}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn text 
          v-for="item in menuItems" 
          :key="item.title"
          router
          :to="item.link">
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer absolute temporary v-model="sideNav">
      <v-list>
        <v-list-item 
          v-for="item in menuItems" 
          :key="item.title"
          router
          :to="item.link">
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>{{ item.title.toUpperCase() }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-content>
</template>

<script lang="ts">
  import Vue from 'vue';
  export default Vue.extend({
    name: 'Base',
    data: () => ({
      sideNav: false,
      menuItems: [
          { icon: 'mdi-home', title: 'home', link: '/'},
          { icon: 'mdi-laptop', title: 'works', link: '/works'},
          { icon: 'mdi-airplane', title: 'experiences', link: '/experiences'},
          { icon: 'mdi-face', title: 'skils', link: '/skills'}
        ]
    }),
    computed: {
      itemName () {
        if (this.$route.path == '/') {
          return 'home'
        } else if (this.$route.path == '/works') {
          return 'works'
        } else if (this.$route.path == '/experiences') {
          return 'experiences'
        } else {
          return 'skils'
        }
      }
    }
  })
</script>
