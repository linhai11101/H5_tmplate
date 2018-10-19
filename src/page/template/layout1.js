export default {
	data() {
		return{}
	},
	template: `<div class="content layout1">
				<header v-if="$store.state.hashHeader"></header>
				<main class="main">
					<transition name="router-fade" mode="out-in">
						<keep-alive>
							<router-view v-if="$route.meta.keepAlive"></router-view>
						</keep-alive>
					</transition>
					<transition name="router-fade" mode="out-in">
						<router-view v-if="!$route.meta.keepAlive"></router-view>
					</transition>
				</main>
				<footer>
					<h-footer></h-footer>
				</footer>
			</div>`
}