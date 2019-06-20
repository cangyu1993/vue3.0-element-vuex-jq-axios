<template>
    <div class="hello">
        <touch-ripple>
            <el-button type="primary">点击测试</el-button>
        </touch-ripple>
        <div class="groups">
            <draggable v-model="myArray" group="people" @start="drag=true" @end="drag=false">
                <div class="groups-item" v-for="element in myArray" :key="element.id">{{element.name}}</div>
            </draggable>
        </div>
    </div>
</template>

<script>
    import api from '@/axios/api'
    import draggable from 'vuedraggable'
    export default {
        components: {  draggable },
        name: 'HelloWorld',
        props: {
            msg: String
        },
        data(){
            return{
                myArray:[{id:0,name:'tom'},{id:1,name:'jim'},{id:2,name:'sair'}],
                drag:false
            }
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
    .groups>div{
        width: 100vw;
        .groups-item{
            width: 200px;
            height: 200px;
        }
    }
</style>
