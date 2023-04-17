import * as UAHelper from './parse';
import * as create from '../utils/payloads';
import { checkDeviceType } from '../utils/utils';
import type { Device,Browser, Engine,OS, DeviceType } from '$lib/types';

export function deviceDetect(userAgent:string) {
  const { device, browser, engine, os, ua }:{device:Device,browser:Browser,engine:Engine,os:OS,ua:string} = userAgent
    ? UAHelper.parseUserAgent(userAgent)
    : UAHelper;

  const type: DeviceType = checkDeviceType(device.type);
  const { isBrowser, isMobile, isTablet, isSmartTV, isConsole, isWearable, isEmbedded } = type;

  if (isBrowser) {
    return create.browserPayload(isBrowser, browser, engine, os, ua);
  }

  if (isSmartTV) {
    return create.smartTvPayload(isSmartTV, engine, os, ua);
  }

  if (isConsole) {
    return create.consolePayload(isConsole, engine, os, ua);
  }

  if (isMobile) {
    return create.mobilePayload(type, device, os, ua);
  }

  if (isTablet) {
    return create.mobilePayload(type, device, os, ua);
  }

  if (isWearable) {
    return create.wearablePayload(isWearable, engine, os, ua);
  }

  if (isEmbedded) {
    return create.embeddedPayload(isEmbedded, device, engine, os, ua);
  }
}
