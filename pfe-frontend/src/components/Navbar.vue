<template>
  <v-row class="pt-5 px-9">
      <v-layout class="mb-5">
        <v-autocomplete
          v-model="select"
          :loading="loading"
          :items="items"
          :search-input.sync="search"
          cache-items
          flat
          hide-no-data
          hide-details
          label="Rechercher ..."
          solo-inverted
        ></v-autocomplete>
        <v-spacer />
        <v-tooltip bottom>
          <template v-slot:activator="{on, attrs}">
            <v-badge
              bordered
              color="error"
              overlap
              class="mt-2"
            >
              <v-btn icon v-bind="attrs" v-on="on">
                <v-icon large>mdi-bell-outline</v-icon>
              </v-btn>
            </v-badge>
          </template>
          <span>Notifications</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{on, attrs}">
            <v-sheet>
              <row>
                <v-btn plain height=100% @click.stop="drawer = !drawer" v-bind="attrs" v-on="on">
                  <v-avatar color=#158aaf>JV</v-avatar>
                  <span class="mx-2">Julien</span>
                  <v-icon>fas fa-caret-down</v-icon>
                </v-btn>
              </row>
              <v-navigation-drawer
                v-model="drawer"
                absolute
                temporary
                right
                width=300
              >
                <v-btn absolute plain top right>
                  <v-icon>far fa-edit</v-icon>
                </v-btn>
                <v-list-item class="d-flex justify-center mt-10 ml-5">
                  <v-list-item-avatar width=75% height=auto>
                    <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
                  </v-list-item-avatar>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="d-flex justify-center">Julien Van Tongerloo</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Informations de contact</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item two-line>
                  <v-list-item-content>
                    <v-list-item-title>EMAIL</v-list-item-title>
                    <v-list-item-subtitle>julien.vantongerloo@student.vinci.be</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item two-line>
                  <v-list-item-content>
                    <v-list-item-title>TELEPHONE</v-list-item-title>
                    <v-list-item-subtitle>0499/46.73.83</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Mes ventes en cours ...</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list 
                  v-for="card in cards"
                  :key="card.title"
                >
                  <v-list-item two-line>
                    <v-list-item-avatar tile>
                      <v-img :src="card.src"/>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title>{{card.title}}</v-list-item-title>
                      <v-list-item-subtitle>{{card.desc}}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-navigation-drawer>
            </v-sheet>
          </template>
          <span>Profile</span>
        </v-tooltip>
      </v-layout>
    </v-row>
</template>

<script>
export default {
    name : 'Navbar',

    data: () => ({
      cards: [
        { title: 'IPHONE 13 PRO MAX', desc:'petit tel pas piqué des annetons', src: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-family-hero?wid=470&hei=556&fmt=png-alpha&.v=1631220221000'},
        { title: 'BANANE', desc:'pas encore mangée', src: 'https://media.lactualite.com/2014/08/banane-480x360.jpg'},
        { title: 'VESTE', desc:'comme neuf', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg'},
      ],
    })
}
</script>

<style>

</style>