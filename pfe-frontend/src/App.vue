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
          <v-list-item link href="#">
            <v-list-item-icon>
                <v-img
                  src='./assets/home.png'
                  max-width=50
                  max-height=50
                />
            </v-list-item-icon>
          </v-list-item>
          <v-tooltip right>
            <template v-slot:activator="{on, attrs}">
              <v-list-item link href="/">
                <v-list-item-icon>
                      <v-icon color=#21bfe5 large v-bind="attrs" v-on="on">fas fa-shapes</v-icon>
                </v-list-item-icon>
              </v-list-item>
            </template>
            <span>Accueil</span>
          </v-tooltip>
          <v-tooltip right>
            <template v-slot:activator="{on, attrs}">
              <v-list-item link href="#">
                <v-list-item-icon>
                      <v-icon large v-bind="attrs" v-on="on">fas fa-shopping-cart</v-icon>
                </v-list-item-icon>
              </v-list-item>
            </template>
            <span>Panier</span>
          </v-tooltip>
        </v-list>
        <v-list>
          <v-tooltip right>
            <template v-slot:activator="{on, attrs}">
              <v-list-item @click="$vuetify.theme.dark = !$vuetify.theme.dark">
                <v-list-item-icon>
                  <v-icon v-if="$vuetify.theme.dark" large v-bind="attrs" v-on="on">fas fa-moon</v-icon>
                  <v-icon v-if="!$vuetify.theme.dark" large v-bind="attrs" v-on="on">fas fa-sun</v-icon>
                </v-list-item-icon>
              </v-list-item>
            </template>
            <span>Thème</span>
          </v-tooltip>
          <v-tooltip right>
            <template v-slot:activator="{on, attrs}">
              <v-list-item link href="/about">
                <v-list-item-icon>
                      <v-icon large v-bind="attrs" v-on="on">fas fa-info-circle</v-icon>
                </v-list-item-icon>
              </v-list-item>
            </template>
            <span>À propos de nous</span>
          </v-tooltip>
          <v-tooltip right>
            <template v-slot:activator="{on, attrs}">
              <v-list-item link href="#">
                <v-list-item-icon>
                      <v-icon large v-bind="attrs" v-on="on">fas fa-sign-out-alt</v-icon>
                </v-list-item-icon>
              </v-list-item>
            </template>
            <span>Déconnexion</span>
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
    //
  }),
};
</script>
