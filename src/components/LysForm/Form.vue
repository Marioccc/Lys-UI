<template>
    <div>
        <slot/>
    </div>
</template>

<script>
    export default {
        props: {
            model: {
                type: Object,
                required: true
            },
            rules: {
                type: Object,
                required: true
            },
        },
        provide() {
            return {
                form: this
            }
        },
        methods: {
            validate() {
                const tasks = this.$children
                    .filter(item => item.prop)
                    .map(item => item.validate())
                return Promise.all(tasks)
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>