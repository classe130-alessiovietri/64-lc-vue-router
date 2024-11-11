<script>
export default {
	data() {
		return {
			menuItems: [
				{
					routeName: 'home',
					label: 'Home'
				},
				{
					routeName: 'about',
					label: 'Chi siamo'
				},
				{
					routeName: 'posts-index',
					label: 'Blog'
				},
				{
					routeName: 'posts-create',
					label: 'Nuovo articolo'
				},
				{
					routeName: 'contact',
					label: 'Contatti'
				}
			]
		};
	}
}
</script>

<template>
	<header>
		<div class="container">
			<ul>
				<li v-for="(item, index) in menuItems" :key="index">
					<router-link :to="{ name: item.routeName }" class="nav-link">
						{{ item.label }}
					</router-link>
				</li>

				<!-- <li>
					<router-link :to="{ name: 'home' }" class="nav-link">
						Home
					</router-link>
				</li>
				<li>
					<router-link :to="{ name: 'about' }" class="nav-link">
						Chi siamo
					</router-link>
				</li>
				<li>
					<router-link :to="{ name: 'posts-index' }" class="nav-link">
						Blog
					</router-link>
				</li> -->
			</ul>
		</div>
	</header>
</template>

<style scoped>
header {
	text-align: center;
	padding: 20px 0;
}

ul {
	display: flex;
	justify-content: center;
	list-style: none;
}

ul li {
	margin: 0 3px;
}
</style>