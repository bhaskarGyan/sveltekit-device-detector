import type { Browser, Device, Engine, OS } from '$lib/types';
import { setDefaults, type DeviceType } from './utils';

export const browserPayload = (
	isBrowser: boolean,
	browser: Browser,
	engine: Engine,
	os: OS,
	ua: string
): DevicePayload => ({
	isBrowser,
	browserMajorVersion: setDefaults(browser.major),
	browserFullVersion: setDefaults(browser.version),
	browserName: setDefaults(browser.name),
	engineName: setDefaults(engine.name),
	engineVersion: setDefaults(engine.version),
	osName: setDefaults(os.name),
	osVersion: setDefaults(os.version),
	userAgent: setDefaults(ua)
});

export const mobilePayload = (
	type: DeviceType,
	device: Device,
	os: OS,
	ua: string
): DevicePayload => ({
	...type,
	vendor: setDefaults(device.vendor),
	model: setDefaults(device.model),
	os: setDefaults(os.name),
	osVersion: setDefaults(os.version),
	ua: setDefaults(ua),
	userAgent: setDefaults(ua)
});

export const smartTvPayload = (
	isSmartTV: boolean,
	engine: Engine,
	os: OS,
	ua: string
): DevicePayload => ({
	isSmartTV,
	engineName: setDefaults(engine.name),
	engineVersion: setDefaults(engine.version),
	osName: setDefaults(os.name),
	osVersion: setDefaults(os.version),
	userAgent: setDefaults(ua)
});

export const consolePayload = (
	isConsole: boolean,
	engine: Engine,
	os: OS,
	ua: string
): DevicePayload => ({
	isConsole,
	engineName: setDefaults(engine.name),
	engineVersion: setDefaults(engine.version),
	osName: setDefaults(os.name),
	osVersion: setDefaults(os.version),
	userAgent: setDefaults(ua)
});

export const wearablePayload = (
	isWearable: boolean,
	engine: Engine,
	os: OS,
	ua: string
): DevicePayload => ({
	isWearable,
	engineName: setDefaults(engine.name),
	engineVersion: setDefaults(engine.version),
	osName: setDefaults(os.name),
	osVersion: setDefaults(os.version),
	userAgent: setDefaults(ua)
});

export const embeddedPayload = (
	isEmbedded: boolean,
	device: Device,
	engine: Engine,
	os: OS,
	ua: string
): DevicePayload => ({
	isEmbedded,
	vendor: setDefaults(device.vendor),
	model: setDefaults(device.model),
	engineName: setDefaults(engine.name),
	engineVersion: setDefaults(engine.version),
	osName: setDefaults(os.name),
	osVersion: setDefaults(os.version),
	userAgent: setDefaults(ua)
});
