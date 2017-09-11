<template>
    <div class="wrapper">
        <div class="wrap-box">
            <div class="tab-nav">
            	<a href="#">
            		<div>贷款金额<span></span></div>
            	</a>
            	<a href="#">
            		<div>贷款利率<span></span></div>
            	</a>
            </div>

            <div class="list-block">
                <lists></lists>
            </div>
        </div>
        <nav-bottom></nav-bottom>
    </div>
</template>
<script type="text/javascript">
	import { Storage } from "../assets/js/storage.js";
	import navBottom from "../components/navBottom.vue";
	import lists from "../components/lists.vue";


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
	    	'nav-bottom': navBottom,
	    	'lists': lists
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
    width: 100%;
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