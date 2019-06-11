<template>
    <div class="hello">
        <touch-ripple>
            <el-button type="primary">点击测试</el-button>
        </touch-ripple>
    </div>
</template>

<script>
    import api from '@/axios/api'

    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        methods: {
            getData() {
                this.$axios.get(api.getList_0).then(res => {
                    console.log(res)
                })
            }
        },
        created() {
            this.getData()
        },
        mounted() {
            console.log($('.hello'))
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
