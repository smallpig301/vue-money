<template>
	<div id="first" class="wrapper">
		<mt-swipe :auto="0">
		  <mt-swipe-item><img src="../assets/images/banner.jpg" /></mt-swipe-item>
		  <mt-swipe-item><img src="../assets/images/banner.jpg" /></mt-swipe-item>
		  <mt-swipe-item><img src="../assets/images/banner.jpg" /></mt-swipe-item>
		</mt-swipe>
	</div>
</template>

<script type="text/javascript">
	import { Storage } from "../assets/js/storage.js";
	export default {
		data() {
			return {
				// login : false
			}
		},
		computed: {
			login(){
				// return this.$store.login;
			}
		   
		},
		components: {
			
		},
		methods: {
			
		},
		created() {
			// this.$store.commit("changeLogin",true);
		},
		mounted() {

		}
	}
</script>
<style lang="less">

	.mint-swipe-items-wrap > div {
		display: block;
		position: relative;
		img {
			width: 100%
		}
	}
</style>
