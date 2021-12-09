<template>
    <v-app-bar
    absolute
    color="white"
    elevate-on-scroll
    scroll-target="#scrolling-techniques-7"
    >
        <v-toolbar-title>Campus</v-toolbar-title>
        <v-list
            v-for="category in categories"
            :key="category.id"
        >
            <v-list-item>
                {{category.name}}
            </v-list-item>
        </v-list>
    </v-app-bar>
</template>

<script>
    export default {
        name: 'CategoryBar',
        data: () => ({
            campus: [
                {ville: "Woluwe-Saint-Lambert"},
                {ville: "Ixelles"},
                {ville: "Louvain-La-Neuve"},
            ],
            categories: [
                {id: 1, name: 'Maison & Jardin'},
                {id: 2, name: 'Famille'},
                {id: 3, name: 'Vêtements & Accessoires'},
                {id: 4, name: 'Loisirs & Hobbys'},
                {id: 5, name: 'Électronique'},
                {id: 6, name: 'Autres'}
            ],
            subcategories: [
                {id_categorie: 1, name: 'Outils'},
                {id_categorie: 1, name: 'Meubles'},
                {id_categorie: 1, name: 'Pour la maison'},
                {id_categorie: 1, name: 'Jardin'},
                {id_categorie: 1, name: 'Électroménager'},
                {id_categorie: 2, name: 'Santé & Beauté'},
                {id_categorie: 2, name: 'Fournitures pour animaux'},
                {id_categorie: 2, name: 'Puériculture et enfants'},
                {id_categorie: 2, name: 'Jouets & Jeux'},
                {id_categorie: 3, name: 'Sacs & Bagages'},
                {id_categorie: 3, name: 'Vêtements & chaussures femmes'},
                {id_categorie: 3, name: 'Vêtements & chaussures hommes'},
                {id_categorie: 3, name: 'Bijoux & Accessoires'},
                {id_categorie: 4, name: 'Vélos'},
                {id_categorie: 4, name: 'Loisirs créatifs'},
                {id_categorie: 4, name: 'Pièces auto'},
                {id_categorie: 4, name: 'Sports & Activités d\'extérieures'},
                {id_categorie: 4, name: 'Jeux Vidéo'},
                {id_categorie: 4, name: 'Livres, films & musiques'},
                {id_categorie: 4, name: 'Instruments de musique'},
                {id_categorie: 4, name: 'Antiquité & Objets de collection'},
                {id_categorie: 5, name: 'Électronique & Ordinateurs'},
                {id_categorie: 5, name: 'Téléphones mobiles'},
            ]
        })
    }
</script>
