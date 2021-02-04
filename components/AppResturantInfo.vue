<template>
	<div class="container">
		<div v-for="store in datasource" :key="store.id" class="my-3">
			<h2>{{ store.name }}</h2>
			<p>Delivery Time {{ store.deliveryTime }}</p>
			<p>Rating {{ store.rating }}</p>
			<p v-if="store.freeDelivery" class="label">
				<b-button variant="danger" pill>Free Delivery</b-button>
			</p>
			<b-card-group deck class="my-3">
				<b-card
					v-for="menuItem in store.menu"
					:key="menuItem.id"
					:title="menuItem.item"
					:img-src="menuItem.img"
					img-height="250px"
				>
					<b-card-text>
						{{ priceFormatting(menuItem.price) }}
					</b-card-text>
					<nuxt-link :to="`/items/${menuItem.id}`">
						<b-button variant="success">View Item ></b-button>
					</nuxt-link>
				</b-card>
			</b-card-group>

			<!-- <div class="row">
				<div
					class="items"
					v-for="menuItem in store.menu"
					:key="menuItem.id"
					:style="`background: url(${menuItem.img}) no-repeat center center`"
				>
					<div class="iteminfo">
						<div>
							<h4>{{ menuItem.item }}</h4>
							<p>{{ priceFormatting(menuItem.price) }}</p>
						</div>
						<nuxt-link :to="`/items/${menuItem.id}`">
							<button class="ghost">View Item ></button>
						</nuxt-link>
					</div>
				</div>
			</div> -->
		</div>
	</div>
</template>

<script>
export default {
	props: {
		datasource: {
			type: [Array, Object],
		},
	},
	methods: {
		priceFormatting(item) {
			return "₹ " + item.toFixed(2);
		},
	},
};
</script>

<style lang="scss" scoped>
.card {
	box-shadow: 2px 6px 6px 0 rgb(215, 215, 215);
}
</style>
