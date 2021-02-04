<template>
	<b-navbar toggleable="lg" type="dark" style="background-color: #082c40">
		<b-navbar-brand>
			<nuxt-link to="/"><food-logo /></nuxt-link>
			<nuxt-link to="/resturants">Resturants</nuxt-link>
		</b-navbar-brand>

		<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

		<b-collapse id="nav-collapse" is-nav>
			<b-navbar-nav class="ml-auto">
				<b-navbar-brand>
					<nuxt-link to="/cart"
						>Cart
						<b-badge variant="light" v-if="cartCount > 0">{{
							cartCount
						}}</b-badge></nuxt-link
					>
				</b-navbar-brand>
			</b-navbar-nav>
		</b-collapse>
	</b-navbar>
</template>

<script>
import { mapGetters } from "vuex";
import FoodLogo from "./FoodLogo.vue";

export default {
	components: { FoodLogo },
	computed: {
		...mapGetters(["cartCount"]),
	},
};
</script>

<style lang="scss" scoped>
nav {
	a {
		color: white;
		text-decoration: none;
	}
}
</style>
