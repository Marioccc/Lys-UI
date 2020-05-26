<template>
    <div>
        <input :value='value' @input="inputEvent" v-bind="$attrs" @blur="validate">
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
            },
            validate() {
                this.$parent.$emit('validate')
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>