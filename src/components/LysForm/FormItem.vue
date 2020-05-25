<template>
    <div>
        <label v-show="label">{{label}}</label>
        <slot/>
        <p v-show="errorMessage">{{errorMessage}}</p>
    </div>
</template>

<script>
    export default {
        props: {
            label: {
                type: String,
                default: ''
            },
            prop: {
                type: String,
            }
        },
        data() {
            return {
                errorMessage: ''
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>