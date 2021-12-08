<template>
  <div id="app">
  <v-app id="inspire">
    <v-navigation-drawer
        permanent
        app
        width=80
    >
      <v-layout justify-space-between column fill-height>
        <v-list> 
          <v-list-item link href="/">
            <v-list-item-icon>
                <v-img
                  src='./assets/home.png'
                  max-width=50
                  max-height=50
                />
            </v-list-item-icon>
          </v-list-item>
          <v-tooltip right
            v-for="(item, i) in top_items"
            :key="i">
            <template v-slot:activator="{on, attrs}">
              <v-list-item link :href="item.href">
                <v-list-item-icon>
                      <v-icon v-bind:color="$route.path==item.href?'#158aaf':''" large v-bind="attrs" v-on="on">{{item.icon}}</v-icon>
                </v-list-item-icon>
              </v-list-item>
            </template>
            <span>{{item.span}}</span>
          </v-tooltip>
        </v-list>
        <v-list>
          <v-tooltip right>
            <template v-slot:activator="{on, attrs}">
              <v-list-item @click="toggle_dark_mode">
                <v-list-item-icon>
                  <v-icon v-if="$vuetify.theme.dark" large v-bind="attrs" v-on="on">fas fa-moon</v-icon>
                  <v-icon v-if="!$vuetify.theme.dark" large v-bind="attrs" v-on="on">fas fa-sun</v-icon>
                </v-list-item-icon>
              </v-list-item>
            </template>
            <span>Thème</span>
          </v-tooltip>
          <v-tooltip right
            v-for="(item, i) in bottom_items"
            :key="i">
            <template v-slot:activator="{on, attrs}">
              <v-list-item link :href="item.href">
                <v-list-item-icon>
                      <v-icon v-bind:color="$route.path==item.href?'#158aaf':''" large v-bind="attrs" v-on="on">{{item.icon}}</v-icon>
                </v-list-item-icon>
              </v-list-item>
            </template>
            <span>{{item.span}}</span>
          </v-tooltip>
        </v-list>
      </v-layout>
    </v-navigation-drawer>
    <v-content>
      <v-container fluid>
          <v-row class="fill-height">
              <v-col>
                  <transition name="fade">
                      <router-view></router-view>
                  </transition>
              </v-col>
          </v-row>
      </v-container>
    </v-content>
  </v-app>
</div>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    top_items: [
      {
        href: '/',
        icon: 'fas fa-shapes',
        span: 'Accueil'
      },
      {
        href: '/mes-produits',
        icon: 'fas fa-shopping-cart',
        span: 'Mes produits'
      }
    ],
    bottom_items: [
      {
        href: '/a-propos',
        icon: 'fas fa-info-circle',
        span: 'À propos de nous'
      },
      {
        href: '/logout',
        icon: 'fas fa-sign-out-alt',
        span: 'Déconnexion'
      }
    ]
  }),
  methods: {
    toggle_dark_mode: function () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString())
    }
  },
  mounted() {
    const theme = localStorage.getItem("dark_theme");
    if(theme) {
      theme=="true"?this.$vuetify.theme.dark = true : this.$vuetify.theme.dark = false;
    }
  }
};
</script>
