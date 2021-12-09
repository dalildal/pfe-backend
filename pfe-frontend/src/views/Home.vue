<template>
  <v-container>
    <navbar />
    <v-container fluid>
      <v-row>
        <v-col md="8" lg="9">
          <v-container fluid>
            <v-row dense>
              <v-col cols="12">
                <v-card
                  style="
                    background-image: linear-gradient(
                      to bottom right,
                      #0c607a,
                      #21bfe5
                    );
                  "
                  elevation="0"
                  class="mb-5"
                >
                  <v-card-title>
                    <v-img max-width="50" src="../assets/home.png" />
                    <span class="text-h6 ml-5 font-weight-light"
                      >Vinci Market</span
                    >
                  </v-card-title>
                  <v-card-text class="text-h5">
                    "Nous avons tous des trésors enfouis au fond de notre
                    grenier ou de nos placards. Trésors qui profiteraient à
                    d’autres. Valorisons-les en leur donnant une seconde vie."
                  </v-card-text>
                  <v-card-actions>
                    <v-list-item>
                      <v-list-item-avatar>
                        <v-icon>fas fa-globe</v-icon>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title>
                          <v-btn
                            plain
                            target="_blank"
                            href="https://www.ecoconso.be/fr/content/pourquoi-acheter-en-seconde-main"
                            >EcoConso.be</v-btn
                          >
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-card-actions>
                </v-card>
              </v-col>
              <v-col cols="12">
                <v-card>
                  <v-row>
                    <h1 class="pl-10 pt-5">Fil d'actualité</h1>
                  </v-row>
                  <v-row class="px-2">
                    <v-col
                      v-for="card in cards"
                      :key="card.title"
                      md="6"
                      lg="4"
                      xl="3"
                      class="px-5"
                    >
                      <v-card elevation="0">
                        <v-img
                          :src="card.src"
                          class="white--text align-end"
                          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                          height="200px"
                        >
                          <v-card-title v-text="card.title" />
                          <v-card-subtitle v-text="card.desc" />
                        </v-img>

                        <v-card-actions>
                          <v-list-item class="grow">
                            <v-list-item-avatar color="grey darken-3">
                              <v-img
                                class="elevation-6"
                                alt=""
                                src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                              ></v-img>
                            </v-list-item-avatar>
                            <v-row>
                              <v-list-item-content>
                                <v-list-item-title>Evan You</v-list-item-title>
                              </v-list-item-content>
                              <v-tooltip top>
                                <template v-slot:activator="{ on, attrs }">
                                  <v-btn icon v-bind="attrs" v-on="on">
                                    <v-icon>mdi-star</v-icon>
                                    <span>4,5</span>
                                  </v-btn>
                                </template>
                                <span>Utilisateur recommendé</span>
                              </v-tooltip>
                            </v-row>
                          </v-list-item>
                        </v-card-actions>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col md="4" lg="3">
          <v-container fluid>
            <v-row dense>
              <v-col>
                <v-card max-width="400" class="mx-auto">
                  <h3 class="pa-5">Mes ventes</h3>
                  <v-virtual-scroll
                    :bench="benched"
                    :items="cards"
                    height="250"
                    item-height="64"
                  >
                    <template v-slot:default="{ item }">
                      <v-list-item two-line :key="item">
                        <v-list-item-avatar tile>
                          <v-img tile :src="item.src" />
                        </v-list-item-avatar>
                        <v-list-item-content>
                          <v-list-item-title>
                            {{ item.title }}
                          </v-list-item-title>
                          <v-list-item-subtitle>
                            {{ item.desc }}
                          </v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-action>
                          <v-icon small> mdi-open-in-new </v-icon>
                        </v-list-item-action>
                      </v-list-item>

                      <v-divider></v-divider>
                    </template>
                  </v-virtual-scroll>
                </v-card>
                <v-card max-width="400" class="mx-auto mt-5">
                  <h3 class="pa-5">Chats</h3>
                  <v-virtual-scroll
                    :bench="benched"
                    :items="users"
                    height="300"
                    item-height="70"
                  >
                    <template v-slot:default="{ item }">
                      <v-list-item two-line :key="item">
                        <v-list-item-avatar>
                          <v-img :src="item.src" />
                        </v-list-item-avatar>
                        <v-list-item-content>
                          <v-list-item-title>
                            {{ item.name }}
                          </v-list-item-title>
                          <v-list-item-subtitle>
                            Dernière chose de dite
                          </v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                      <v-divider></v-divider>
                    </template>
                  </v-virtual-scroll>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import Navbar from "../components/Navbar";

export default {
  name: "Home",
  components: {
    Navbar,
  },

  data: () => ({
      cards: [
        { title: 'IPHONE 13 PRO MAX', desc:'petit tel pas piqué des annetons', src: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-family-hero?wid=470&hei=556&fmt=png-alpha&.v=1631220221000'},
        { title: 'BANANE', desc:'pas encore mangée', src: 'https://media.lactualite.com/2014/08/banane-480x360.jpg'},
        { title: 'VESTE', desc:'comme neuf', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg'},
      ],
      users: [
        { name: 'Chris Gaviria', src: "https://randomuser.me/api/portraits/men/78.jpg"},
        { name: 'Dalil Rachik', src: "https://randomuser.me/api/portraits/men/78.jpg"},
        { name: 'Filipe Manuel Cardoso Ribeiro', src: "https://randomuser.me/api/portraits/men/78.jpg"},
        { name: 'Obey Senhaji', src: "https://randomuser.me/api/portraits/men/78.jpg"},
      ]
    }),

};
</script>
