/**
 * @company/ui-library — public entrypoint.
 *
 * Consumers MUST import the compiled stylesheet once:
 *   import "@company/ui-library/styles.css";
 */

// Bundled stylesheet — ensures `dist/styles.css` is emitted on build.
import "./globals.css";

// Components
export * from "./components";

// Providers
export * from "./providers";

// Hooks
export * from "./hooks";

// Utils & lib
export * from "./lib";
export * from "./utils";

// Types & constants
export * from "./types";
export * from "./constants";
