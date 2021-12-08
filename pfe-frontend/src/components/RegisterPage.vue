<template>
    <v-row justify=center>
        <v-col
            cols="12"
            sm="10"
            md="8"
            lg="6"
            xl="4"
        >
            <p class="pt-2 font-weight-thin">Déjà un compte ? <a color=#158aaf href="/login">Se connecter</a></p>
            <h1 class="pt-14 mb-5">Bienvenue chez Vinci Market</h1>
            <p class="mb-10 font-weight-thin">Projet dans une démarche de développement durable visant à promouvoir le réemploi.</p>
            <v-form>
                <v-text-field
                    label="Email vinci"
                    outlined
                    append-icon="mdi-account-outline"
                />
                <v-text-field
                    label="Mot de passe"
                    outlined
                    append-icon="mdi-lock-outline"
                />
                <v-btn
                    block
                    large
                    elevation="0"
                    color=#158aaf
                >
                    S'enregistrer
                </v-btn>
            </v-form>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'RegisterPage',
    data: () => {}
}
</script>
