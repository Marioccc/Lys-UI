<template>
    <li>
        <h2 @click="toggle">{{model.title}} {{isFolder ? isOpen ? "-" : "+" : ""}}</h2>
        <ul v-show="isOpen">
            <li v-for="(item, index) in model.children" :key="index">
                <tree :model='item'></tree>
            </li>
        </ul>
    </li>
</template>

<script>
    export default {
        name: 'Tree',
        props: {
            model: {
                type: Object,
                required: true
            },
        },
        computed: {
            isFolder() {
                return this.model.children && this.model.children.length
            }
        },
        methods: {
            toggle() {
                this.isOpen = !this.isOpen
            }
        },
        data() {
            return {
                isOpen: false
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>