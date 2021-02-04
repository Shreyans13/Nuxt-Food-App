<template>
	<div>
		<b-card
			body-class="text-center"
			text-variant="white"
			style="width: 100%; height: 80vh; overflow: hidden"
		>
			<b-card-text>
				<h1 class="display-1">Nuxt Food App</h1>
				<nuxt-link to="/resturants">
					<b-button variant="success">
						<span class="h4"> Resturants ></span></b-button
					></nuxt-link
				>
			</b-card-text>
		</b-card>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.card {
	border: 0;
	border-radius: 0;
	background-size: cover !important;
	background: linear-gradient(
			to top,
			rgba(0, 0, 0, 0) 0%,
			rgba(0, 0, 0, 0) 73%,
			rgba(0, 0, 0, 0.65) 100%
		),
		url("~assets/headerimg.jpg") no-repeat center center scroll;
}
</style>
