<template>
	<div>
		<app-menu></app-menu>
		<Nuxt />
	</div>
</template>
<script>
import AppMenu from "@/components/AppMenu.vue";

export default {
	components: {
		AppMenu,
	},
};
</script>
<style>
html {
	font-family: "Mulish", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
		"Helvetica Neue", Arial, sans-serif;
	padding: 0;
	margin: 0;
}

h1,
h2,
h3,
h4 {
	font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI",
		Roboto, "Helvetica Neue", Arial, sans-serif;
	font-weight: 600;
}
</style>
