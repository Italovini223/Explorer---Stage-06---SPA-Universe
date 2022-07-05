import { Router } from "./router.js"

const router = new Router()

window.route = () => router.route()
window.onpopstate= () => router.handle()
router.handle()