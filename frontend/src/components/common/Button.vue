<template>
    <button class="btn btn-primary m-1" @click="onClick">{{ text }}</button>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            required: true
        }
    },
    methods: {
        onClick() {
            this.$emit('click');
        }
    }
}
</script>

<style scoped>
</style>