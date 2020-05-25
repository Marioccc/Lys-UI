<template>
    <div>
        <input :value='value' @input="inputEvent" v-bind="$attrs">
    </div>
</template>

<script>
    export default {
        inheritAttrs: false,
        props: {
            value: {
                type: String,
                default: ''
            },
        },
        methods: {
            inputEvent(e) {
                this.$emit('input', e.target.value)
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>