<template>
	<nav>
		<ul>
			<li>
				<nuxt-link to="/"><food-logo /></nuxt-link>
			</li>
			<li><nuxt-link to="/resturants">Resturants</nuxt-link></li>
		</ul>
		<div class="smallnum" v-if="cartCount > 0">{{ cartCount }}</div>
		<nuxt-link to="/cart">Cart</nuxt-link>
	</nav>
</template>

<script>
import { mapGetters } from 'vuex';
import FoodLogo from "./FoodLogo.vue";

export default {
    components: { FoodLogo },
    computed: {
        ...mapGetters([
            'cartCount',
        ])
    },
};
</script>

<style lang="scss" scoped></style>
