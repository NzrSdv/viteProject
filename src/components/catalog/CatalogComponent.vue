<script setup>
import CatalogContent from './CatalogContent.vue';
</script>
<template>
    <main class="main">
    <CatalogContent/>        
    </main>
</template>
<script>

export default {
    name:"CatalogComponent",
    components:{CatalogContent}
}
</script>
<style scoped>
</style>