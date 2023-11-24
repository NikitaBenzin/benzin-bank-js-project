export class Layout {
	constructor({ router, component }) {
		this.router = router
		this.component = component
	}

	render() {
		const headerHTML = `<header>
      Header
      <nav>
        <a href="/">Home</a>
        <a href="/about-us">About</a>
      </nav>
    </header>`

		return `
      ${headerHTML}
      <main>${this.component}</main>
    `
	}
}
