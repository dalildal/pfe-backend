<template>
  <v-container fluid>
    <v-row>
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
                <v-icon large>fas fa-bell</v-icon>
              </v-btn>
            </v-badge>
          </template>
          <span>Notifications</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{on, attrs}">
            <v-sheet>
              <row class="ml-10">
                <v-btn plain height=100% @click.stop="drawer = !drawer" v-bind="attrs" v-on="on">
                  <v-avatar color=#21bfe5>JV</v-avatar>
                  <span class="mx-2">Julien</span>
                  <v-icon>fas fa-caret-down</v-icon>
                </v-btn>
              </row>
              <v-navigation-drawer
                v-model="drawer"
                absolute
                temporary
                right
                width=35%
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
                <v-list-item two-line>
                  <v-list-item-avatar tile>
                    <v-img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-family-hero?wid=470&hei=556&fmt=png-alpha&.v=1631220221000"/>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>IPHONE 13 PRO MAX</v-list-item-title>
                    <v-list-item-subtitle>petit tel pas piqué des annetons</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item two-line>
                  <v-list-item-avatar tile>
                    <v-img src="https://media.lactualite.com/2014/08/banane-480x360.jpg"/>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>BANANE</v-list-item-title>
                    <v-list-item-subtitle>pas encore mangée</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-navigation-drawer>
            </v-sheet>
          </template>
          <span>Profile</span>
        </v-tooltip>
      </v-layout>
    </v-row>

    <v-row>
      <v-col md="8" lg="9">
        <v-container fluid>
          <v-row dense>
            <v-col cols="12">
              <v-card color=#158aaf>
                <v-card-title>
                  <v-img max-width=50 src="../assets/home.png"/>
                  <span class="text-h6 ml-5 font-weight-light">Vinci Market</span>
                </v-card-title>
                <v-card-text class="text-h5">
                  "Nous avons tous des trésors enfouis au fond de notre grenier ou de nos placards.
                  Trésors qui profiteraient à d’autres.
                  Valorisons-les en leur donnant une seconde vie."
                </v-card-text>
                <v-card-actions>
                  <v-list-item>
                    <v-list-item-avatar>
                      <v-icon>fas fa-globe</v-icon>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title>
                        <v-btn plain target="_blank" href="https://www.ecoconso.be/fr/content/pourquoi-acheter-en-seconde-main">EcoConso.be</v-btn>
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-card-actions>
              </v-card>
            </v-col>
            <v-col
              v-for="card in cards"
              :key="card.title"
              md="6"
              lg="4"
              xl="3"
            >
              <v-card>
                <v-img
                  :src="card.src"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="200px"
                >
                  <v-card-title v-text="card.title"></v-card-title>
                </v-img>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                  </v-btn>

                  <v-btn icon>
                    <v-icon>mdi-bookmark</v-icon>
                  </v-btn>

                  <v-btn icon>
                    <v-icon>mdi-share-variant</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col md="4" lg="3">
        <v-container fluid>
          <v-row dense>
            <v-col
              v-for="card in cards"
              :key="card.title"
              :cols="card.flex"
            >
              <v-card>
                <v-img
                  :src="card.src"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="200px"
                >
                  <v-card-title v-text="card.title"></v-card-title>
                </v-img>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                  </v-btn>

                  <v-btn icon>
                    <v-icon>mdi-bookmark</v-icon>
                  </v-btn>

                  <v-btn icon>
                    <v-icon>mdi-share-variant</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HomePage',

    data: () => ({
      cards: [
        { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'},
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg'},
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg'},
      ],
    }),
  }
</script>
