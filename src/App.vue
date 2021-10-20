<template>
	<div id="app">
		<Navi />
		<div class="container">
			<router-view ref="myGallery" :GalleryData="GalleryData" />
		</div>
		<Footer />
	</div>
</template>

<script>
import Navi from '@/components/App/Navi.vue';
import Footer from '@/components/App/Footer.vue';

import GalleryData from '@/assets/data/galleryData.js';

export default {
	name: 'App',
	components: {
		Navi,
		Footer
	},
	data() {
		return {
			GalleryData: GalleryData
		};
	},
	computed: {
		gallery() {
			return this.$refs.myGallery.$gallery;
		}
	}
};
</script>

<style lang="scss">
@import '@/assets/styles/_variabled';
@import '@/assets/styles/scss/common';
@import '@/assets/styles/scss/navi';
@import '@/assets/styles/scss/footer';
@import '@/assets/styles/scss/home';
@import '@/assets/styles/scss/about';
@import '@/assets/styles/scss/projects';
@import '@/assets/styles/scss/contact';

#app {
	font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	margin-top: 6rem;
	margin-bottom: 11rem;
}
</style>
