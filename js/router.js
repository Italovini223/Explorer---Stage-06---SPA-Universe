export class Router{
  routes = {
    "/": "/pages/home.html",
    "/exploration": "pages/exploration.html",
    "/universe": "/pages/universe.html"
  }
  
  route(event) {
    event = event || window.event
    event.preventDefault()
  
    window.history.pushState({}, "", event.target.href)
  
    this.handle()
  }
  
  
  handle() {
    const {pathname} = window.location
  
    const route = this.routes[pathname]
  
  
    fetch(route).then(data => data.text()).then(html => {
      document.getElementById("content").innerHTML = html
    })
  
  }
}