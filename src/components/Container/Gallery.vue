<template>
	<div class="gallery-box col-lg-6">
		<div class="gallery-filter"></div>
		<img :src="GalleryData.image" alt="" />
		<div class="content-element">
			<h4>{{ GalleryData.title }}</h4>
			<p>{{ GalleryData.subTitle }}</p>
		</div>
	</div>

	<!-- <div class="gallery-box col-lg-6">
        <div class="gallery-filter"></div>
        <img :src="GalleryData[0].image" alt="" />
        <div class="content-element">
          <h4>{{ GalleryData[0].title }}</h4>
          <p>{{ GalleryData[0].subTitle }}</p>
        </div>
      </div>

      <div class="gallery-box col-lg-6">
        <div class="gallery-filter"></div>
        <img :src="GalleryData[0].image" alt="" />
        <div class="content-element">
          <h4>{{ GalleryData[0].title }}</h4>
          <p>{{ GalleryData[0].subTitle }}</p>
        </div>
      </div>

      <div class="gallery-box col-lg-6">
        <div class="gallery-filter"></div>
        <img :src="GalleryData[0].image" alt="" />
        <div class="content-element">
          <h4>{{ GalleryData[0].title }}</h4>
          <p>{{ GalleryData[0].subTitle }}</p>
        </div>
      </div> -->
</template>

<script>
export default {
	name: 'Gallery',
	props: {
		GalleryData: Object
	}
};
</script>

<style></style>
