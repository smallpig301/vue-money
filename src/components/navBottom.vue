<template>
	<div class="bottom-nav">
	    <a href="#" class="current">
	        <div class="nav-pic"><img src="../assets/images/bar_home@2x.png" alt=""></div>
	        <div class="nav-pic current"><img src="../assets/images/bar_home_red@2x.png" alt=""></div>
	        <div>首页</div>
	    </a>
	    <a href="#">
	        <div class="nav-pic"><img src="../assets/images/bar_loan@2x.png" alt=""></div>
	        <div class="nav-pic current"><img src="../assets/images/bar_loan_red@2x.png" alt=""></div>
	        <div>贷款</div>
	    </a>
	    <a href="#">
	        <div class="nav-pic"><img src="../assets/images/bar_welfare@2x.png" alt=""></div>
	        <div class="nav-pic current"><img src="../assets/images/bar_welfare_red@2x.png" alt=""></div>
	        <div>福利</div>
	    </a>
	    <a href="#">
	        <div class="nav-pic"><img src="../assets/images/bar_mine@2x.png" alt=""></div>
	        <div class="nav-pic current"><img src="../assets/images/bar_mine_red@2x.png" alt=""></div>
	        <div>我的</div>
	    </a>
	</div>
</template>
<script>
	export default {
		name: 'txt-list',
		data() {
			return {
				topStatus:'',
				bottomStatus:'',
				selected: '1',
				items: []
			}
		},
		methods: {
			
		},
		created: function(){

		}
	}
</script>
<style  lang="less">
	@import '../assets/css/common.less';
	.bottom-nav {
	    position: absolute;
	    width: 100%;
	    bottom: 0;
	    height: 49px;
	    z-index: 99;
	    .flex();
	    border-top: 1px solid #d6d6d6;
	    background: #fff;
	    a {
	        .flex();
	        .flex-justify-center();
	        .flex-align-center();
	        .flex-direction-column();
	        width: 25%;
	        color: #999;
	        .nav-pic {
	            height: 34px;
	            width: 34px;
	            overflow: hidden;
	            img {
	                width: 100%;
	            }
	        }
	        .nav-pic.current {
	            display: none;
	        }
	    }
	    a.current {
	    	.nav-pic {
	    		display: none;
	    	}
	    	.nav-pic.current {
	    		display: block;
	    	}
	    	color: @color-main
	    }
	}
</style>