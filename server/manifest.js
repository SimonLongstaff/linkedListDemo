export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.731e94f4.js","imports":["_app/immutable/entry/start.731e94f4.js","_app/immutable/chunks/index.010fa5b9.js","_app/immutable/chunks/singletons.452a78e6.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.d613b801.js","imports":["_app/immutable/entry/app.d613b801.js","_app/immutable/chunks/index.010fa5b9.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
