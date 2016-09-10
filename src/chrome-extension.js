const noop = () => {};

export default class ChromeExtension {
	constructor() {
		this._onInstalled = noop;
	}

	set onInstalled(cb) {
		this._onInstalled = cb;
		chrome.runtime.onInstalled.addListener(this._onInstalled);
	}

	get onInstalled() {
		return this._onInstalled;
	}
}
