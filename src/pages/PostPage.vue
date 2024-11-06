<script>
import axios from 'axios';

export default {
	data() {
		return {
			defaultUrl: 'http://127.0.0.1:8000/api/posts',
			post: null
		};
	},
	mounted() {
		this.getPost();
	},
	methods: {
		getPost() {
			axios
				.get(this.defaultUrl + '/' + this.$route.params.slug)
				.then((res) => {
					console.log(res.data.post);

					this.post = res.data.post;
					console.log(this.post);
				})
				.catch((err) => {
					console.error(err);

					this.$router.push({ name: 'not-found' });
				});
		}
	}
}
</script>

<template>
	<div class="container" v-if="post != null">
		<h1>
			{{ post.id }}) {{ post.title }}
		</h1>

		<div class="post-container">
			<h5 v-if="post.category != null">
				{{ post.category.name }}
			</h5>
			<h5 v-else>
				Non categorizzato
			</h5>

			<div class="tags-container">
				<div v-for="tag in post.tags" :key="tag.id">
					{{ tag.name }}
				</div>
			</div>

			<p>
				{{ post.content }}
			</p>
		</div>
	</div>
</template>

<style scoped>
h1 {
	text-align: center;
	margin-bottom: 40px;
}

.post-container {
	border: 2px solid lightcoral;
	margin-bottom: 10px;
	padding: 5px;
}

.post-container > h3 {
	margin-bottom: 5px;
}

.post-container > h5 {
	margin-bottom: 15px;
}

.post-container > .tags-container {
	display: flex;
	flex-wrap: wrap;
}

.post-container > .tags-container > * {
	margin-right: 4px;
	background-color: lightseagreen;
	color: white;
	padding: 2px 6px;
	border-radius: 50px;
	margin: 4px;
}
</style>