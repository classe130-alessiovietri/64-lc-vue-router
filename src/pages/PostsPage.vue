<script>
import axios from 'axios';

export default {
	data() {
		return {
			defaultUrl: 'http://127.0.0.1:8000/api/posts',
			posts: [],
			prevPage: null,
			nextPage: null,
			clickedButton: false
		};
	},
	mounted() {
		this.getPosts(this.defaultUrl);
	},
	methods: {
		getPosts(url) {
			axios
				.get(url)
				.then((res) => {
					console.log(res.data.posts);

					this.posts = res.data.posts.data;
					console.log(this.posts);

					this.prevPage = res.data.posts.prev_page_url;
					console.log(this.prevPage);
					this.nextPage = res.data.posts.next_page_url;
					console.log(this.nextPage);
					
					this.clickedButton = false;
				});
		},
		getPrevPage() {
			this.clickedButton = true;
			
			this.getPosts(this.prevPage);
		},
		getNextPage() {
			this.clickedButton = true;
			
			this.getPosts(this.nextPage);
		}
	}
}
</script>

<template>
	<div class="container">
		<h1>
			Blog
		</h1>

		<div class="posts-container">
			<div v-for="post in posts" :key="post.id">
				<h3>
					{{ post.id }}) {{ post.title }}
				</h3>
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

				<div>
					<router-link :to="{ name: 'posts-show', params: { slug: post.slug } }">
						Leggi tutto
					</router-link>
				</div>
			</div>
		</div>

		<div class="buttons">
			<button @click="getPrevPage()" :disabled="prevPage == null || clickedButton">
				&lt; Precedente
			</button>

			<button @click="getNextPage()" :disabled="nextPage == null || clickedButton">
				Successiva &gt;
			</button>
		</div>
	</div>
</template>

<style scoped>
h1 {
	text-align: center;
	margin-bottom: 40px;
}

.posts-container {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between
}

.posts-container > * {
	width: 30%;
	border: 2px solid lightcoral;
	margin-bottom: 10px;
	padding: 5px;
}

.posts-container > * > h3 {
	margin-bottom: 5px;
}

.posts-container > * > h5 {
	margin-bottom: 15px;
}

.posts-container > * > .tags-container {
	display: flex;
	flex-wrap: wrap;
}

.posts-container > * > .tags-container > * {
	margin-right: 4px;
	background-color: lightseagreen;
	color: white;
	padding: 2px 6px;
	border-radius: 50px;
	margin: 4px;
}

.buttons {
	display: flex;
	justify-content: center;
	align-items: center;
}

.buttons > button {
	margin: 4px;
	padding: 4px 8px;
	border: none;
	background-color: crimson;
	color: white;
	cursor: pointer;
	font-size: 1.25em;
}

.buttons > button:disabled {
	opacity: .5;
	background-color: lightgray;
	cursor: default;
}
</style>