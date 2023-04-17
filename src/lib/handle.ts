import type { Handle } from '@sveltejs/kit';
import { deviceDetect } from './core/detect';

export function handleDeviecDetector(
	options: {},
	passedHandle: Handle = async ({ event, resolve }) => resolve(event)
): Handle {
	return async function handle({ event, resolve }) {
		// Add UA logic
        const ua = event.request.headers.get('user-agent') || '';
        const deviceType = deviceDetect(ua);
        event.locals.deviceType = deviceType
		const response = await passedHandle({ event, resolve });

		
		return response;
	};
}