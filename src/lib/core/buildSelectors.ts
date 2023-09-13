import type { DeviceOptions } from '$lib/types';
import * as UAHelper from './parse';
import * as types from './types';

export function buildSelectorsObject(options: DeviceOptions) {
	const { device, browser, os, engine, ua } = options ? options : UAHelper;
	return {
		isSmartTV: types.isSmartTVType(device),
		isConsole: types.isConsoleType(device),
		isWearable: types.isWearableType(device),
		isEmbedded: types.isEmbeddedType(device),
		isMobileSafari: types.isMobileSafariType(browser) || types.getIPad13(),
		isChromium: types.isChromiumType(browser),
		isMobile: types.isMobileType(device),
		isTablet: types.isTabletType(device) || types.getIPad13(),
		isBrowser: types.isBrowserType(device),
		isDesktop: types.isBrowserType(device),
		isAndroid: types.isAndroidType(os),
		isWinPhone: types.isWinPhoneType(os),
		isIOS: types.isIOSType(os) || types.getIPad13(),
		isChrome: types.isChromeType(browser),
		isFirefox: types.isFirefoxType(browser),
		isSafari: types.isSafariType(browser),
		isOpera: types.isOperaType(browser),
		isIE: types.isIEType(browser),
		osVersion: types.getOsVersion(os),
		osName: types.getOsName(os),
		fullBrowserVersion: types.getBrowserFullVersion(browser),
		browserVersion: types.getBrowserVersion(browser),
		browserName: types.getBrowserName(browser),
		mobileVendor: types.getMobileVendor(device),
		mobileModel: types.getMobileModel(device),
		engineName: types.getEngineName(engine),
		engineVersion: types.getEngineVersion(engine),
		getUA: types.getUseragent(ua),
		isEdge: types.isEdgeType(browser) || types.isEdgeChromiumType(ua),
		isYandex: types.isYandexType(browser),
		isIOS13: types.getIOS13(),
		isIPad13: types.getIPad13(),
		isIPhone13: types.getIphone13(),
		isIPod13: types.getIPod13(),
		isElectron: types.isElectronType(),
		isEdgeChromium: types.isEdgeChromiumType(ua),
		isLegacyEdge: types.isEdgeType(browser) && !types.isEdgeChromiumType(ua),
		isWindows: types.isWindowsType(os),
		isMacOs: types.isMacOsType(os),
		isMIUI: types.isMIUIType(browser),
		isSamsungBrowser: types.isSamsungBrowserType(browser),
		isWebView: types.isWebview(ua),
		isCrawler: types.isCrawler(ua)
	};
}
