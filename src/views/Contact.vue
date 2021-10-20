<template>
	<div id="contact" class="row">
		<div class="left col-lg-7">
			<h1>Thank you</h1>
			<p>
				Contact me directly or fill out the form<br />
				and i will get back to you promptly
			</p>
			<div class="contact-info">
				<ul>
					<li><span class="material-icons"> phone </span>010 3492 0060</li>
					<li><span class="material-icons"> mail </span>a_co89@naver.com</li>
					<li>
						<span class="material-icons"> location_on </span>18, Dorim-ro
						26-gil, Guro-gu, Seoul
					</li>
				</ul>
			</div>
			<div class="mySign">
				<p>by Designer Soot</p>
			</div>
		</div>
		<div class="right col-lg-5">
			<div class="form-wrapper">
				<div class="form-group">
					<span>Your Name</span>
					<input
						type="text"
						name="name"
						id="name"
						class="form-control"
						placeholder="Please enter your name "
					/>
				</div>

				<div class="form-group">
					<span>Email</span>
					<input
						type="text"
						name="email"
						id="email"
						class="form-control"
						placeholder="Please enter your email "
					/>
				</div>

				<div class="form-group">
					<span>Message</span>
					<textarea
						type="text"
						name="message"
						id="message"
						class="form-control"
						placeholder="Enter your message here"
						rows="10"
					/>
				</div>

				<button class="btn btn-primary" id="contact-submit">
					Send Message
				</button>
			</div>
		</div>
	</div>
</template>
