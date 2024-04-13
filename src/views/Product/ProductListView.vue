<template>
    <div>
        <AppHeader />
        <div id="wrap">
            <div id="container" class="clearfix">
                <!-- aside 없음 -->
                <div id="full-content">
                    <!-- content-head 없음 -->

                    <div id="index">
                        <div id="greetings">



                            <h1>상품 리스트</h1>
                            <!--
                            <table>
                                <thead>
                                    <tr>
                                        <th>에</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>헤<ul>
                                <li>사진</li>
                                <li>상품명</li>
                                <li>가격</li>
                                <li>사진</li>
                            </ul></td>
                                        <td>ㅇ원</td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                            -->
                            <ul v-bind:key="i" v-for="(productVo, i) in pList">
                                <li>
                                    <img src="">
                                    <!-- <img v-bind:src="`http://localhost:9000/upload/${productVo.saveName}`"> -->
                                </li>
                                <li>{{ productVo.p_name }}</li>
                                <li><strong>{{ productVo.p_price }}원</strong></li>
                            </ul>



                        </div>
                        <!-- //greetings -->
                        <div class="clear"></div>
                    </div>
                    <!-- //index -->
                </div>
                <!-- //full-content -->
            </div>
            <!-- //container -->

            <!-- //footer -->
        </div>
        <!-- //wrap -->
        <AppFooter />
    </div>
</template>

<script>
import axios from 'axios';
import "@/assets/css/Product/ProductListView.css";
import AppFooter from "@/components/AppFooter.vue";
import AppHeader from "@/components/AppHeader.vue";

export default {
    name: "ProductListView",
    components: {
        AppHeader,
        AppFooter,
    },
    data() {
        return {
            pList:[],
            productVo:{}
        };
    },
    methods: {
        getList(){
            axios({
                method: 'get',
                url: 'http://localhost:9000/api/product/list',
                headers: { "Content-Type": "application/json; charset=utf-8" },

                responseType: 'json'
            }).then(response => {
                this.pList = response.data.apiData;
                console.log(this.pList);
            }).catch(error => {
                console.log(error);
            });
        }
    },
    created(){
        this.getList();
    },
};
</script>

<style></style>