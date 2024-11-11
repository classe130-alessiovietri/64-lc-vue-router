<script>
import axios from 'axios';

export default {
	data() {
		return {
			defaultUrl: 'http://127.0.0.1:8000/api/posts',
			newPost: {
				title: ''
			}
		};
	},
	methods: {
		storePost() {
			console.log(this.newPost);

			axios
				.post(this.defaultUrl, {
					post: this.newPost
				})
				.then((res) => {
					console.log(res);
				})
				.catch((err) => {
					console.error(err);
					console.log(err.response.data);
				});
		}
	}
}
</script>

<template>
	<div class="container">
		<h1>
			Crea post
		</h1>

		<div>
			<form @submit.prevent="storePost()">
				<div>
					<div>
						<label for="title">
							Titolo
						</label>
					</div>
					<input type="text" id="title" v-model="newPost.title" placeholder="Inserisci il titolo dell'articolo...">
				</div>

				<div>
					<button type="submit">
						+ Aggiungi
					</button>
				</div>
			</form>
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

.post-container > .cover-container > img {
	width: 100%;
}
</style>