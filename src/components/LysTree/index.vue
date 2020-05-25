<template>
    <ul>
        <tree :model='model' />
    </ul>
</template>

<script>
    import Tree from './Tree'
    export default {
        data() {
            return {
                model: {
                    title: '首先',
                    children: [
                        {
                            title: '首先',
                        },
                        {
                            title: '首先',
                            children: [
                                {
                                    title: '首先',
                                    children: [
                                        {
                                            title: '首先',
                                        },
                                    ]
                                },
                                {
                                    title: '首先',
                                },
                            ]
                        },
                        {
                            title: '首先',
                        },
                    ]
                }
            }
        },
        components: {
            Tree,
        },
    }
</script>

<style lang="scss" scoped>

</style>