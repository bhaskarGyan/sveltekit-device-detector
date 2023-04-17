## sveltekit-device-detector

![npm](https://img.shields.io/npm/dm/sveltekit-device-detector?label=npm%20downloads)

Detect device, and render view according to the detected device type.


## When to use this library

This library uses a technique called [user agent sniffing](https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent) to detect device information. That means it works by examining the [User Agent string](https://en.wikipedia.org/wiki/User_agent) given by a browser and comparing it to a list of browser and device names it knows about. This technique works, but [has drawbacks](https://css-tricks.com/browser-detection-is-bad/) and may or may not be the right approach, depending on what you're trying to achieve. If you need to detect a specific browser type (e.g. Chrome, Safari, Internet Explorer) or specific category of device (e.g. all iPods), this library can do that.



## Installation

To install, you can use npm or yarn:

```
npm install sveltekit-device-detector --save

or

yarn add sveltekit-device-detector
```

Update your `app.d.ts` file to look something like:

```ts
import type { DeviceType } from 'sveltekit-device-detector/dist/types';
// See https://kit.svelte.dev/docs#typescript
// for information about these interfaces
declare namespace App {
	interface Locals {
		deviceType: DeviceType;
	}

	interface PageData {}

	interface Platform {}

	interface PrivateEnv {}

	interface PublicEnv {}
}
```

Create a +layout.server.js file at the root and returning the DeviceType from there.


```js
/** @type {import('./$types').LayoutServerLoad} */
export const load = ({ locals }) => {
	return {
		deviceType: locals.deviceType 
	};
};
```

You'll now have access to the `deviceType` data by using `$page.data.deviceType` or via the `parent` function from other `+page.server.js` load functions.

```svelte
<script>
	import { page } from '$app/stores';
	$: deviceType = $page.data.deviceType;
</script>
```

### Initializing
> src/hooks.server.ts 

```js
import { handleDeviecDetector } from 'sveltekit-device-detector';


// You can do it like this, without passing a own handle function
export const handle = handleDeviecDetector({});

// Or pass your handle function as second argument to handleDeviecDetector

export const handle = handleSession({},
	({ event, resolve }) => {
		// event.locals is populated with the deviceType `event.locals.deviceType`

		// Do anything you want here
		return resolve(event);
	}
);
```

In case you're using [sequence()](https://kit.svelte.dev/docs/modules#sveltejs-kit-hooks-sequence), do this

```js
const deviceDetector = handleDeviecDetector({});
export const handle = sequence(deviceDetector, ({ resolve, event }) => {
	// event.locals is populated with the deviceType `event.locals.deviceType`
	// Do anything you want here
	return resolve(event);
});
```

