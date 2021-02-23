<template>
	<v-container fluid>
		<v-form>
			<v-file-input
				multiple
				chips
				v-model="files"
				label="Selecionar as legendas"
				outlined
				prepend-icon="mdi-subtitles-outline "
				append-outer-icon="mdi-check"
				@click:append-outer="processSubtitles"
			/>
		</v-form>
		<div class="card">
			<Card
				v-for="word in groupedWords"
				:key="word.name"
				:name="word.name"
				:amount="word.amount"
			/>
		</div>
	</v-container>
</template>

<script>
import { ipcRenderer } from 'electron';
import Card from './Card';

export default {
	components: { Card },

	data() {
		return {
			files: [],
			groupedWords: [],
		};
	},

	methods: {
		processSubtitles() {
			const paths = this.files.map((file) => file.path);
			ipcRenderer.send('process-subtitles', paths);
			ipcRenderer.on('process-subtitles', (event, resp) => {
				this.groupedWords = resp;
			});
		},
	},
};
</script>

<style>
.card {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}
</style>
