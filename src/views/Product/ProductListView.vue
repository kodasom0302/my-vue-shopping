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
                            <table></table>



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
import "@/assets/css/Product/ProductListView.css"
import AppFooter from "@/components/AppFooter.vue";
import AppHeader from "@/components/AppHeader.vue";

export default {
    name: "ProductListView",
    components: {
        AppHeader,
        AppFooter,
    },
    data() {
        return {};
    },
    methods: {},
    created() { },
};
</script>

<style></style>