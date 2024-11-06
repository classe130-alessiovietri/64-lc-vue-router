<script>
export default {
	data() {
		return {
			mainText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, illo voluptates. Quas consequatur cupiditate culpa.'
		};
	},
	methods: {

	}
}
</script>

<template>
	<div class="container">
		<h1>
			Classe 130 Blog
		</h1>

		<p>
			{{ mainText }}
		</p>
	</div>
</template>

<style scoped>
.container {
	text-align: center;
	padding: 40px 0;
}
</style>