<script>
import axios from 'axios';

export default {
	data() {
		return {
			userName: '',
			userEmail: '',
			userMessage: ''
		};
	},
	methods: {
		sendContact() {
			axios
				.post('http://localhost:8000/api/new-contact', {
					name: this.userName,
					email: this.userEmail,
					message: this.userMessage
				})
				.then(res => {
					if (res.data.success) {
						alert('Messaggio inviato con successo!');

						this.userName = '';
						this.userEmail = '';
						this.userMessage = '';
					}
					else {
						alert('Si è verificato un errore durante l\'invio. Riprova più tardi');
					}
				})
				.catch(err => {
					console.log(err);
					alert(err.response.data.message);
				});
				
		}
	}
}
</script>

<template>
	<div class="container">
		<h1>
			Contatti
		</h1>

		<form @submit.prevent="sendContact()">

			<div>
				<div>
					<label for="name">Nome<span>*</span></label>
				</div>

				<input type="text" id="name" name="name" v-model="userName" required minlength="3" maxlength="64" placeholder="Inserisci il tuo nome...">
			</div>

			<div>
				<div>
					<label for="email">Email<span>*</span></label>
				</div>

				<input type="email" id="email" name="email" v-model="userEmail" required minlength="5" maxlength="255" placeholder="Inserisci la tua email...">
			</div>

			<div>
				<div>
					<label for="message">Messaggio<span>*</span></label>
				</div>

				<textarea id="message" name="message" v-model="userMessage" required minlength="3" maxlength="2048" placeholder="Inserisci la tua email..."></textarea>
			</div>

			<div>
				<p>
					<small>
						N.B. i campi contrassegnati con <span>*</span> sono obbligatori
					</small>
				</p>
			</div>

			<div>
				<button type="submit">
					Invia
				</button>
			</div>

		</form>
	</div>
</template>

<style scoped>
.container {
	text-align: center;
	padding: 40px 0;
}

span {
	font-weight: bold;
	color: red;
}
</style>