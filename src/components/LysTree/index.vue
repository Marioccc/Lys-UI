<template>
    <div>
        <h2>Tree 树形控件</h2>
        <ul>
            <tree :model='model' />
        </ul>
    </div>
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