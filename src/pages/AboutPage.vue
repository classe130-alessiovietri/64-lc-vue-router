<script>
export default {
	data() {
		return {
			mainText: 'Siamo la classe #130 e questo è il nostro blog'
		};
	},
	methods: {

	}
}
</script>

<template>
	<div class="container">
		<h1>
			Chi siamo
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