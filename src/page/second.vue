<template>
	<div id="first" class="wrapper">
		
	</div>
</template>

<script type="text/javascript">
	import { Storage } from "../assets/js/storage.js";
	export default {
		data() {
			return {
				login : false
			}
		},
		computed: {
			login(){
				return this.$store.login;
			}
		},
		components: {
			
		},
		methods: {
			
		},
		created() {
			this.$store.commit("changeLogin",true);
		},
		mounted() {

		}
	}
</script>
<style lang="scss">

	#first{

	}
</style>
