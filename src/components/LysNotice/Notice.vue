<template>
    <div :class="styles">
        <p>{{title}}</p>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: ''
            },
            type: {
                type: String,
                default: 'success'
            },
        },
        data() {
            return {
                styles: `notice ${this.type}`
            }
        },
    }
</script>

<style lang="scss" scoped>
.notice {
    width: 200px;
    top: 1rem;
    right: 1rem;
    z-index: 999;
    position: fixed;
    display: flex;
}
.success {
    background-color: green;
}
.error {
    background-color: red;
}
</style>