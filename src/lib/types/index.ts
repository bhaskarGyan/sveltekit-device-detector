export interface Browser  { major: string; version: string; name: string; }
export interface Engine { name: string; version: string; }
export interface OS { name: string; version: string; }
export interface Device { vendor: string; model: string; type:string }

export interface DeviceOptions  { 
    device: Device; 
    browser: Browser; 
    os: OS; 
    engine: Engine; 
    ua: string; 
}

export interface DeviceType {
    isMobile?:boolean;
    isTablet?:boolean;
    isSmartTV?:boolean;
    isConsole?:boolean;
    isWearable?:boolean;
    isBrowser?:boolean;
    isEmbedded?:boolean;
  
  }
  
export interface DevicePayload extends DeviceType {
  
    browserMajorVersion?:string;
    browserFullVersion?:string;
    browserName?:string;
    engineName?:string;
    engineVersion?:string;
    osName?:string;
    osVersion:string;
    userAgent?:string;
    vendor?:string;
    model?:string;
    os?:string;
    ua?:string;
  
  }