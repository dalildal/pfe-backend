<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card max-width="500">
          <v-carousel>
            <v-carousel-item
              v-for="(item, i) in items"
              :key="i"
              :src="item.src"
              reverse-transition="fade-transition"
              transition="fade-transition"
            ></v-carousel-item>
          </v-carousel>
          <v-row>
            <v-col>
              <v-container>
                <v-img 
                  src="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
                  width="100"
                  height="100"
                ></v-img>
              </v-container>
            </v-col>
            <v-col>
              <v-container>
                <v-img
                  src="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
                  width="100"
                  height="100"
                ></v-img>
              </v-container>
            </v-col>
            <v-col>
              <v-container>
                <v-img
                  src="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
                  width="100"
                  height="100"
                ></v-img>
              </v-container>
            </v-col>
            <v-col>
              <v-container>
                <v-img
                  src="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
                  width="100"
                  height="100"
                ></v-img>
              </v-container>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col>
        <v-container>
          <v-card class="mb-12" height="50" width="100%">Titre</v-card>
          <v-card class="mb-12" height="100" width="100%">Information</v-card>

          <v-row>
            <v-col>
              <v-card height="200" width="325">MAP</v-card>
            </v-col>
            <v-col>
              <v-card height="200" width="100%">Info vendeur</v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-btn class="white--text" width="325" color="teal accent-4" >contacter le vendeur</v-btn>
            </v-col>
            <v-col>
              <v-btn class="white--text" width="100%" color="blue darken-2">ajouter au panier</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ProductDetail",
  data() {
    return {
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
    };
  },
};
</script>

<style>
</style>