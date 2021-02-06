export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: "static",

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: "nuxtFoodApp",
		htmlAttrs: {
			lang: "en",
		},
		meta: [
			{ charset: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{ hid: "description", name: "description", content: "" },
		],
		link: [
			{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
			{
				rel: "stylesheet",
				href:
					"https://fonts.googleapis.com/css2?family=Mulish:wght@300&family=Poppins:wght@600&display=swap",
			},
		],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		// '@/assets/main',
		// '@/assets/css/main.scss',
		// '@/assets/main.scss',
		// { src: '~/assets/Bootstrap5/css/bootstrap.min.css', lang: 'css'},
		// { src: '~/assets/temp.js', lang: 'js'}
		{ src: '~/assets/main.scss', lang: 'scss' }
	],

	// js: [
	//   {href: '~/assets/temp.js'}
	// ],
	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [`~/plugins/getFood.server.js`, "~/plugins/bootstrap.js", "~/plugins/validate.js"],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: ["bootstrap-vue/nuxt"],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {},
};
