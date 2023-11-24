import { BaseScreen } from '../../../core/component/base-screen'

export class AboutUs extends BaseScreen {
	constructor() {
		super({ title: 'About Us' })
	}

	render() {
		return '<h1>About Us</h1>'
	}
}
