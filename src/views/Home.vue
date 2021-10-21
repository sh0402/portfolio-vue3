<template>
	<div>
		<div id="mainBnr">
			<div class="mainBnr-left">
				<h1>
					Products & Brand<br />
					UI/UX & Web Design<br />
					<span>experiences</span>.
				</h1>
				<p>
					Hello, I'm Soohwan Kim, Designer of Web & Products.<br />
					I specialize in UI/UX design, responsive web design<br />
					and product packaging design.<br />
				</p>
				<p>Thank you for visiting my portfolio site.</p>
			</div>
			<div class="mainBnr-right"></div>
		</div>

		<div class="row">
			<div id="aboutBnr" class="col-lg-4">
				<div class="title-head">
					<h2>About</h2>
					<a class="setting-btn" href="javascript:void(0)">
						<span></span>
						<span></span>
						<span></span>
					</a>
				</div>

				<div class="aboutBnr-thumb"></div>

				<h1>Lorem ipsum dolor sit amet, consectetur</h1>

				<!-- <h1>Main Skill</h1> -->

				<div class="aboutBnr-item">
					<p class="aboutBnr-element">#Adobe_Photoshop</p>
					<p class="aboutBnr-element">#Adobe_illustrator</p>
					<p class="aboutBnr-element">#UI/UX_Design</p>
					<p class="aboutBnr-element">#Web_Developer</p>
					<p class="aboutBnr-element">#Package_Design</p>
					<p class="aboutBnr-element">#Furniture_Design</p>
					<p class="aboutBnr-element">#Graphic_Design</p>
					<p class="aboutBnr-element">#Product_Branding</p>
				</div>
			</div>

			<div id="worksBnr" class="col-lg-8">
				<div class="title-head">
					<h2>Works</h2>
					<a class="setting-btn" href="javascript:void(0)">
						<span></span>
						<span></span>
						<span></span>
					</a>
				</div>

				<h1>
					Lorem ipsum dolor sit amet,<br />
					consectetur
				</h1>

				<CardSlide />
			</div>
		</div>
	</div>
</template>

<script>
import CardSlide from '@/components/Container/CardSlide.vue';
export default {
	name: 'Home',
	components: {
		CardSlide
	}
};
</script>
