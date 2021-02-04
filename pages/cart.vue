<template>
	<div>
		<main class="container cart">
			<h2>Cart Page</h2>
			<section v-if="cart.length">
				<b-table
					responsive
					bordered
					:items="cart"
					:fields="fields"
					head-variant="dark"
				>
					<template #cell(item)="data">
						{{ data.value }}
						<span v-if="data.item.options">
							- {{ data.item.options }}</span
						>
					</template>
					<template #cell(addons)="data">
						<p v-for="item in data.item.addons" :key="item">
							{{ item }}
						</p>
						<!-- <pre>{{data.item.addons}}</pre> -->
					</template>

					<template #custom-foot>
						<b-tr>
							<b-td
								colspan="4"
								variant="secondary"
								class="text-center"
							>
								Total Price:
								<strong>{{ totalPrice.toFixed(2) }}</strong>
							</b-td>
						</b-tr>
					</template>
				</b-table>
			</section>
			<app-empty-cart v-else />
		</main>
	</div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import AppEmptyCart from "../components/AppEmptyCart.vue";

export default {
	components: { AppEmptyCart },
	data() {
		return {
			fields: ["item", "count", "addons", "combinedPrice"],
		};
	},
	computed: {
		...mapState(["cart"]),
		...mapGetters(["totalPrice"]),
	},
};
</script>

<style lang="scss" scoped></style>
