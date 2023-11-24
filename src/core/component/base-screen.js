import { getTitle } from '@/config/seo.config'

export class BaseScreen {
	/**
	 * Creates a new BaseScreen instance.
	 * @param {Object} options - The options for the BaseScreen.
	 * @param {string} options.title - The title for the screen.
	 */
	constructor({ title }) {
		document.title = getTitle(title)
	}

	UpdateTitle(title) {
		document.querySelector('title').textContent = title
	}

	/**
	 * Renders the child component content.
	 * @return {HTMLElement}
	 */
	render() {
		throw new Error('Render method must be implemented in thw child class')
	}
}
