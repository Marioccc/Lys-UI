<template>
    <div class="notice">
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
            message: {
                type: String,
                default: ''
            }
        },
    }
</script>

<style scoped>
.notice {
    width: 200px;
    background-color: green;
    top: 1rem;
    right: 1rem;
    z-index: 999;
    position: fixed;
    display: flex;
}
</style>