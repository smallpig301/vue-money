<template>
    <div id="first" class="wrapper">
        <div class="wrap-box">
            
            <pic-round></pic-round>
            
            <div class="category">
                <a href="#">
                    <div><img src="../assets/images/category1.png"></div>
                    <div>电商贷</div>
                </a>
                <a href="#">
                    <div><img src="../assets/images/category2.png"></div>
                    <div>工资贷</div>
                </a>
                <a href="#">
                    <div><img src="../assets/images/category3.png"></div>
                    <div>学生贷</div>
                </a>
                <a href="#">
                    <div><img src="../assets/images/category4.png"></div>
                    <div>身份证借贷</div>
                </a>
                <a href="#">
                    <div><img src="../assets/images/category5.png"></div>
                    <div>小额极速贷</div>
                </a>
                <a href="#">
                    <div><img src="../assets/images/category6.png"></div>
                    <div>大额借贷</div>
                </a>
                <a href="#">
                    <div><img src="../assets/images/category7.png"></div>
                    <div>信用卡VIP</div>
                </a>
                <a href="#">
                    <div><img src="../assets/images/category8.png"></div>
                    <div>贷款百科</div>
                </a>
            </div>
            <div class="block-title">
                <span>热门推荐</span>
            </div>
            <div class="list-block">
                <hot-list></hot-list>
                <hot-list></hot-list>
                <hot-list></hot-list>
            </div>
        </div>
        <nav-bottom></nav-bottom>
    </div>
</template>
<script type="text/javascript">
	import { Storage } from "../assets/js/storage.js";
	import picRound from "../components/picRound.vue";
	import navBottom from "../components/navBottom.vue";
	import hotList from "../components/hotList.vue";


	export default {
	    data() {
	        return {
	            // login : false
	            selected: "abc"
	        }
	    },
	    computed: {
	        login() {

	        }
	    },
	    components: {
	    	'pic-round': picRound,
	    	'nav-bottom': navBottom,
	    	'hot-list': hotList
	    },
	    methods: {

	    },
	    created() {
	        // this.$store.commit("changeLogin",true);
	    },
	    mounted() {
	        console.log(this.$refs.wrap)
	    }
	}
</script>
<style lang="less">
@import '../assets/css/common.less';
.wrap-box {
    position: absolute;
    padding-bottom: 50px;
    height: 100%;
    overflow: auto;
    z-index: 9;
}

.category {
    background: #fff;
    overflow: auto;
    a {
        .flex();
        .flex-justify-center();
        .flex-align-center();
        .flex-direction-column();
        float: left;
        width: 25%;
        color: #666;
        div {
            &:first-child {
                height: 40px;
                width: 40px;
                margin-top: 8px;
                margin-bottom: 8px;
            }
            img {
                width: 100%
            }
            &:last-child {
                padding-bottom: 8px;
            }
        }
    }
}

.block-title {
    .flex();
    .flex-justify-center();
    .flex-align-center();
    font-size: 16px;
    padding: 10px;
    color: #666;
    span {
        position: relative;
        width: 80px;
        text-align: center;
        &::after {
            content: "";
            height: 1px;
            width: 50px;
            position: absolute;
            display: block;
            background: #666;
            top: 50%;
            right: 0;
            -webkit-transform: translate(100%, -50%);
            transform: translate(100%, -50%);
            overflow: hidden;
        }
        &::before {
            content: "";
            height: 1px;
            width: 50px;
            position: absolute;
            display: block;
            top: 50%;
            left: 0;
            -webkit-transform: translate(-100%, -50%);
            transform: translate(-100%, -50%);
            background: #666;
            overflow: hidden;
        }
    }
}

.list-block {
    padding: 0 8px;    
}


</style>