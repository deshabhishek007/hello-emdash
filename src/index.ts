import type { PluginDescriptor } from "emdash";

export function helloEmdashPlugin(): PluginDescriptor {
	return {
		id: "hello-emdash",
		version: "0.1.0",
		format: "standard",
		entrypoint: "@emdash-cms/plugin-hello-emdash/sandbox",
		adminWidgets: [{ id: "daily-quote", title: "Daily Quote", size: "half" }],
	};
}
