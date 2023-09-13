export interface Browser {
	major: string;
	version: string;
	name: string;
}
export interface Engine {
	name: string;
	version: string;
}
export interface OS {
	name: string;
	version: string;
}
export interface Device {
	vendor: string;
	model: string;
	type: string;
}

export interface DeviceOptions {
	device: Device;
	browser: Browser;
	os: OS;
	engine: Engine;
	ua: string;
}

export interface DeviceType {
	isMobile: boolean;
	isBrowser: boolean;
	isAndroid: boolean;
	isIOS: boolean;
	isSmartTV: boolean;
	isConsole: boolean;
	isWearable: boolean;
	isEmbedded: boolean;
	isMobileSafari: boolean;
	isChromium: boolean;
	isTablet: boolean;
	isDesktop: boolean;
	isWinPhone: boolean;
	isChrome: boolean;
	isFirefox: boolean;
	isSafari: boolean;
	isOpera: boolean;
	isIE: boolean;
	osVersion: string;
	fullBrowserVersion: string;
	browserVersion: string;
	mobileVendor: string;
	mobileModel: string;
	getUA: string;
	isEdge: boolean;
	isYandex: boolean;
	isIOS13: boolean;
	isIPad13: boolean;
	isIPhone13: boolean;
	isIPod13: boolean;
	isElectron: boolean;
	isEdgeChromium: boolean;
	isLegacyEdge: boolean;
	isWindows: boolean;
	isMacOs: boolean;
	isMIUI: boolean;
	isSamsungBrowser: boolean;
	isWebView: boolean;
	isCrawler: boolean;
}

export interface DevicePayload extends DeviceType {
	browserMajorVersion?: string;
	browserFullVersion?: string;
	browserName?: string;
	engineName?: string;
	engineVersion?: string;
	osName?: string;
	osVersion: string;
	userAgent?: string;
	vendor?: string;
	model?: string;
	os?: string;
	ua?: string;
}
