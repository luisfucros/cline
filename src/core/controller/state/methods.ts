// AUTO-GENERATED FILE - DO NOT MODIFY DIRECTLY
// Generated by proto/build-proto.js

// Import all method implementations
import { registerMethod } from "./index"
import { getLatestState } from "./getLatestState"
import { subscribeToState } from "./subscribeToState"

// Streaming methods for this service
export const streamingMethods = ["subscribeToState"]

// Register all state service methods
export function registerAllMethods(): void {
	// Register each method with the registry
	registerMethod("getLatestState", getLatestState)
	registerMethod("subscribeToState", subscribeToState, { isStreaming: true })
}
