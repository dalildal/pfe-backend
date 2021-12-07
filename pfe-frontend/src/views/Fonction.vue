<template>
  <div>
      <create />
      <edit />
  </div>
</template>

<script>
  import Create from '../components/customer/Create.vue'
  import Edit from '../components/customer/Edit.vue'

  export default {
    name: 'Fonction',

    components: {
      Create,
      Edit
    },
  }
</script>