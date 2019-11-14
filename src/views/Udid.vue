<template>
    <div>
        {{this.body}}
    </div>
</template>

<script>
export default {
    name: 'udid',
    data() {
        return {
            body: this.$route.query['body']
        }
    }
}
</script>
<style scoped>

</style>