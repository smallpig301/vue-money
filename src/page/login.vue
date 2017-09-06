<template>
	<div class="wrapper">
		<mt-header title="标题过长会隐藏后面的">
		  <router-link to="/" slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </router-link>
		  <mt-button icon="more" slot="right">
		 	
		  </mt-button>
		</mt-header>
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
	@import '../assets/css/common.less';
	.font {
		.flex();
	}	
</style>