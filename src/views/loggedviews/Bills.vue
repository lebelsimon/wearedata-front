<template>
<div class="container">
</div>
</template>


<script>
import { mapGetters } from 'vuex'

export default {
    name: "bills",
    computed: {
    ...mapGetters({ currentUser: 'currentUser' })
    },
};
</script>
