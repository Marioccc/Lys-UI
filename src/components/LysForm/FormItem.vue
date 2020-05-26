<template>
    <div>
        <label v-show="label">{{label}}</label>
        <slot/>
        <p v-show="errorMessage">{{errorMessage}}</p>
    </div>
</template>

<script>
    import schema from 'async-validator';
    export default {
        inject: ['form'],
        props: {
            label: {
                type: String,
                default: ''
            },
            prop: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                errorMessage: ''
            }
        },
        methods: {
            validate() {
                if(this.prop) {
                    var descriptor = { [this.prop]: this.form.rules[this.prop] };
                    var validator = new schema(descriptor);
                    return validator.validate({[this.prop]: this.form.model[this.prop]}, errors => {
                        if(errors) {
                            this.errorMessage = errors[0].message
                        } else {
                            this.errorMessage = ""
                        }
                    });
                }
            }
        },
        mounted () {
            this.$on('validate', () => {
                this.validate()
            })
        },
    }
</script>

<style lang="scss" scoped>

</style>