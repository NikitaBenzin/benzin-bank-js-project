/**
 * Represents the RQuery class for working with DOM elements.
 */
class RQuery {
	/**
	 * Create a new instance of the RQuery class.
	 * @param {string|HTMLElement} selector - A CSS selector or an HTMLElement.
	 */
	constructor(selector) {
		if (typeof selector === 'string') {
			this.element = document.querySelector(selector)

			if (!this.element) {
				throw new Error(`Element ${this.element} not found`)
			}
		} else if (selector instanceof HTMLElement) {
			this.element = selector
		} else {
			throw new Error('Invalid selector type')
		}
	}

	/**
	 * Find the first element that matches the specified selector within the selected element.
	 * @param {string} selector - A CSS selector string to search for within the selected element.
	 * @returns {RQuery} A new RQuery instance for the found element.
	 */
	find(selector) {
		const element = new RQuery(this.element.querySelector(selector))

		if (element) {
			return element
		} else {
			throw new Error(`Element ${this.element} not found`)
		}
	}

	css(property, value) {
		if (typeof property !== 'string' || typeof value !== 'string') {
			throw new Error('Invalid property or value type must be a string')
		}

		this.element.style[property] = value
		return this
	}

	append(element) {
		if (element instanceof HTMLElement) {
			this.element.appendChild(element)
			return this
		} else {
			throw new Error('Invalid element type in append method')
		}
	}
}

/**
 * Create a new instance of the RQuery class.
 * @param {string|HTMLElement} selector - A CSS selector or an HTMLElement.
 * @returns {RQuery} A new RQuery instance for the given selector.
 */
export function $R(selector) {
	return new RQuery(selector)
}
