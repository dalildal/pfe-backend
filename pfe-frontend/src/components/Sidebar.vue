<template>
  <v-navigation-drawer
        permanent
        app
        width=80
      >
        <v-layout justify-space-between column fill-height>
          <v-list> 
            <v-list-item link href="/">
              <v-list-item-avatar>
                  <v-img
                    rounded
                    src='@/assets/home.png'
                  />
              </v-list-item-avatar>
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
                    <v-icon v-if="$vuetify.theme.dark" large v-bind="attrs" v-on="on">mdi-weather-night</v-icon>
                    <v-icon v-if="!$vuetify.theme.dark" large v-bind="attrs" v-on="on">mdi-sun-wireless-outline</v-icon>
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
</template>

<script>
export default {
    name: 'Sidebar',
    data: () => ({
    top_items: [
      {
        href: '/announces',
        icon: 'mdi-widgets-outline',
        span: 'Annonces'
      },
      {
        href: '/my-announces',
        icon: 'mdi-cart-outline',
        span: 'Mes annonces'
      }
    ],
    bottom_items: [
      {
        href: '/about',
        icon: 'mdi-information-outline',
        span: 'À propos de nous'
      },
      {
        href: '/logout',
        icon: 'mdi-logout',
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
}
</script>

<style>

</style>