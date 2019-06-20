<template>
    <div class="hello">
        <touch-ripple>
            <el-button type="primary">点击测试</el-button>
        </touch-ripple>
        <div class="groups">
            <grid-layout
                    :layout.sync="layout"
                    :col-num="12"
                    :row-height="30"
                    :is-draggable="true"
                    :is-resizable="true"
                    :is-mirrored="false"
                    :vertical-compact="true"
                    :margin="[10, 10]"
                    :use-css-transforms="true"
            >

                <grid-item v-for="item in layout"
                           :x="item.x"
                           :y="item.y"
                           :w="item.w"
                           :h="item.h"
                           :i="item.i">
                    {{item.i}}
                </grid-item>
            </grid-layout>
        </div>
    </div>
</template>

<script>
    import api from '@/axios/api'
    import draggable from 'vuedraggable'
    import VueGridLayout from 'vue-grid-layout';

    export default {
        components: {
            draggable,
            GridLayout: VueGridLayout.GridLayout,
            GridItem: VueGridLayout.GridItem
        },
        name: 'HelloWorld',
        props: {
            msg: String
        },
        data() {
            return {
                myArray: [{id: 0, name: 'tom'}, {id: 1, name: 'jim'}, {id: 2, name: 'sair'}],
                drag: false,
                layout: [
                    {"x":0,"y":0,"w":2,"h":2,"i":"0"},
                    {"x":2,"y":0,"w":2,"h":4,"i":"1"},
                    {"x":4,"y":0,"w":2,"h":5,"i":"2"},
                    {"x":6,"y":0,"w":2,"h":3,"i":"3"},
                    {"x":8,"y":0,"w":2,"h":3,"i":"4"},
                    {"x":10,"y":0,"w":2,"h":3,"i":"5"},
                    {"x":0,"y":5,"w":2,"h":5,"i":"6"},
                    {"x":2,"y":5,"w":2,"h":5,"i":"7"},
                    {"x":4,"y":5,"w":2,"h":5,"i":"8"},
                    {"x":6,"y":3,"w":2,"h":4,"i":"9"},
                    {"x":8,"y":4,"w":2,"h":4,"i":"10"},
                    {"x":10,"y":4,"w":2,"h":4,"i":"11"},
                    {"x":0,"y":10,"w":2,"h":5,"i":"12"},
                    {"x":2,"y":10,"w":2,"h":5,"i":"13"},
                    {"x":4,"y":8,"w":2,"h":4,"i":"14"},
                    {"x":6,"y":8,"w":2,"h":4,"i":"15"},
                    {"x":8,"y":10,"w":2,"h":5,"i":"16"},
                    {"x":10,"y":4,"w":2,"h":2,"i":"17"},
                    {"x":0,"y":9,"w":2,"h":3,"i":"18"},
                    {"x":2,"y":6,"w":2,"h":2,"i":"19"}
                ]
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

    .box-card {
        height: 100px;
        margin: 20px 0;
    }
</style>
