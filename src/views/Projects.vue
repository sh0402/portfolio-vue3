<template>
	<div id="work">
		<div class="title">
			<h1 style="text-align: left">
				Designer with <br />
				Precision and Aesthetics.
			</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
		</div>

		<div id="gallery-btn">
			<div class="wrapper">
				<button class="active">All</button>
				<button>UX/UI</button>
				<button>BX/BI</button>
				<button>Package</button>
				<button>Funiture</button>
				<button>Contents</button>
			</div>
		</div>

		<div id="gallery">
			<div class="row gallery-wrapper">
				<Gallery
					:GalleryData="GalleryData[i]"
					v-for="(a, i) in GalleryData"
					:key="i"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import Gallery from '@/components/Container/Gallery.vue';
export default {
	name: 'Projects',
	components: {
		Gallery
	},
	props: {
		GalleryData: Object
	}
};
</script>
