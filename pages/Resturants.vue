<template>
	<div>
		<main class="container restaurant">
			<div class="restaurantheading">
				<h1>Resturants</h1>
				<app-select @change="selectedResturant = $event" />
			</div>
			<app-resturant-info :datasource="filteredResturants" />
		</main>
	</div>
</template>

<script>
import AppResturantInfo from "../components/AppResturantInfo.vue";
import AppSelect from "../components/AppSelect.vue";
import { mapState } from "vuex";

export default {
	components: { AppResturantInfo, AppSelect },
	data() {
		return {
			selectedResturant: "",
		};
	},
	computed: {
		...mapState(["foodData"]),
		filteredResturants() {
			if (this.selectedResturant) {
				return this.foodData.filter((el) => {
					return el.name
						.toLowerCase()
						.includes(this.selectedResturant);
				});
			}
			return this.foodData;
		},
	},
};
</script>

<style lang="scss" scoped></style>
