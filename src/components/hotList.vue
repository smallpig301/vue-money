<template>
	<a href="#" class="list-item">
	    <div class="list-logo">
	        <img src="../assets/images/pro.jpg" alt="">
	    </div>
	    <div class="list-content">
	        <div class="list-title">光大银行VIP信用卡</div>
	        <div class="list-sub-title">
	            <span>日利率低至0.04%</span>
	            <span>25542人已放款</span>
	        </div>
	        <div class="list-info">
	            纯上线申请，高额度，2-20月到账
	        </div>
	    </div>
	</a>
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
	a.list-item {
	    .flex();
	    padding: 14px 8px;
	    background: #fff;
	    margin-bottom: 8px;
	    .list-logo {
	        position: relative;
	        width: 80px;
	        height: 80px;
	        -webkit-flex-shrink: 0;
	        flex-shrink: 0;
	        img {
	            width: 100%;
	        }
	        &::after {
	            content: "";
	            height: 100%;
	            width: 1px;
	            position: absolute;
	            display: block;
	            top: 0;
	            right: -8px;
	            background: #dedede;
	        }
	    }
	    .list-content {
	        .flex();
	        .flex-justify-between();
	        .flex-direction-column();
	        width: 100%;
	        padding: 5px 10px;
	        padding-left: 16px;
	        .list-info {
	            color: #b7b7b7;
	            font-size: 12px;
	        }
	        .list-sub-title {
	            .flex();
	            .flex-justify-between();
	            color: #666;
	            font-size: 14px;
	        }
	    }
	    .list-title {
	        font-size: 16px;
	        color: #333;
	    }
	}
</style>