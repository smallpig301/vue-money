<template>
	<div class="ad-pic">
		<mt-swipe :auto="0">
		    <mt-swipe-item><img src="../assets/images/banner.jpg" /></mt-swipe-item>
		    <mt-swipe-item><img src="../assets/images/banner.jpg" /></mt-swipe-item>
		    <mt-swipe-item><img src="../assets/images/banner.jpg" /></mt-swipe-item>
		</mt-swipe>
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
	.ad-pic {
	    height: 100px;
	    img {
	        width: 100%;
	    }
	}
</style>