import ChromeExtension from './chrome-extension.js';

const ext = new ChromeExtension();
ext.onInstalled = details => {
	console.log(`Chrome extension ${details.reason} ${details.previousVersion ? `from ${details.previousVersion}` : ''} `);
};
