<template>
    <router-view :all-route="this.allRoute"></router-view>
</template>

<script>
    export default {
        name    : "Container",
        props   : ["allRoute"],
    }
</script>
