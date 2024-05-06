<template>
    <div>
        <div id="wrap">
            <div id="container" class="clearfix">
                <!-- aside 없음 -->
                <div id="full-content">
                    <!-- content-head 없음 -->

                    <div id="index">
                        <div id="greetings">



                            <!-- <h1>상품 등록창</h1> -->

                            <div id="addContentGroup">

                                <h1>상품 관리</h1>

                                <p>상품 등록</p>

                                <div id="productAddForm">
                                    <form action="" method="">

                                        <div id="addFormTitleGroup">

                                            <div id="insertImg"><!--
                                                    <form action="" method="imageChange">
                                                        <img id="clothesImgPreview">
                                                    </form>
                                                    <div id="imageGroup">
                                                        <label id="productAddFormTitle">착장 사진</label>
                                                        <input id="clothesImg" type="file" method="imageChange">
                                                        <input id="clothesImg" type="file" onchange="imgPreview(this);">
                                                    </div> -->
                                                <div id="clothesImgPreview"></div>
                                                <div id="imageGroup">
                                                    <label id="productAddFormTitle">착장 사진</label>
                                                    <!-- <input id="clothesImg" type="file" onchange="plz(event);"> -->
                                                </div>
                                            </div>

                                            <div id="productAddFormGroup">
                                                <label id="productAddFormTitle">상품명</label>
                                                <input type="text">
                                            </div>

                                            <div id="productAddFormGroup">
                                                <label id="productAddFormTitle">가격</label>
                                                <input type="text"> 원
                                            </div>

                                            <div id="productAddFormGroup">
                                                <span id="productAddFormTitle">종류</span>

                                                <input type="radio" name="productType" value="outer">
                                                <label>아우터</label>

                                                <input type="radio" name="productType" value="top">
                                                <label>상의</label>

                                                <input type="radio" name="productType" value="bottom">
                                                <label>하의</label>
                                            </div>

                                            <div id="productAddFormGroup">
                                                <label id="productAddFormTitle">설명</label>
                                                <textarea></textarea>
                                            </div>

                                        </div>

                                        <div id="btnAdd">
                                            <button type="submit">등록하기</button>
                                        </div>

                                    </form>
                                </div>
                            </div>



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
    </div>
</template>

<script>
import "@/assets/css/admin/ProductAddView.css";

export default {
    name: "ProductAddView",
    components: {
    },
    data() {
        return {};
    },
    methods: {
        /*
        imgPreview() {
            let file = document.getElementById("clothesImg");
            let preview = document.getElementById("clothesImgPreview");

            file.addEventListener("change", () => {
                let reader = new FileReader();
                reader.onload = () => {
                    preview.src = reader.result;
                }
                reader.readAsDataURL(file.files[0]);
            });
        },
        *//*
        imgPreview(value) {
            if (value.files && value.files[0]) {
                let reader = new FileReader();
                reader.onload = function (event) {
                    document.getElementById("clothesImgPreview").src = e.target.result;
                };
                reader.readAsDataURL(value.files[0]);
            } else {
                document.getElementById("clothesImgPreview").src = "";
            }
        }*//*
        imageChange(event) {
            let img = document.getElementsByTagName("img");
            let reader = new FileReader();
            reader.onload = function (event) {
                img.setAttribute("src", event.target.result);
            }
            reader.readAsDataURL(event.target.files[0]);
            document.querySelector("#clothesImgPreview").appendChild(img);
        }*/
    },
    created() { },
};
/*
$("clothesImg").onchange.function(event){
    let file=event.target.files[0];

    reader.onload=function(event){
        let img=document.createElement("img");
        img.setAttribute("src", event.target.result);
        document.querySelector("div#clothesImgPreview").appendChild(img);
    };
    reader.readAsDataURL(event.target.files[0]);
}
*/
</script>

<style></style>