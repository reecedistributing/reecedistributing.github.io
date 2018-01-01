
<template lang="pug">
v-breadcrumbs(divider="/")
    v-breadcrumbs-item(
        v-for=`item in breadCrumbRoutes`
        :exact="true"
        :disabled="false"
        :nuxt="true"
        :to="item.route.fullPath"
        :key="item.route.fullPath"
        v-if="item.text.length"
    )
        | {{ item.text }}
</template>


<script>

    export default {
        computed: {
            breadCrumbRoutes () {
                let route = this.$route;
                let router = this.$router;
                let routeStringArray = route.fullPath.split('/');
                return routeStringArray.map(
                    (segment, index) => {
                        let routePath = routeStringArray.slice(0, index + 1).join('/')
                        let routeObj = router.matcher.match(routePath);
                        return {
                            text: segment,
                            route: routeObj
                        }
                    }
                )
                
            }
        },
    }

</script>


<style lang="scss">

</style>