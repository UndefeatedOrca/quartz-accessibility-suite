import type {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "@quartz-community/types";
import { classNames } from "../util/lang";
import styles from "./styles/beelineReader.scss";
// @ts-expect-error - inline script import handled by Quartz bundler
import beelineReaderScript from "./scripts/beeline.inline.ts";

export interface BeelineReaderOptions {
  className?: string;
}

const enableLabel = "Enable BeeLine reader";

export default ((opts?: BeelineReaderOptions) => {
  const { className } = opts ?? {};

  const BeelineReader: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    return (
      <button
        class={classNames(displayClass, "beeline-reader", className)}
        type="button"
        aria-label={enableLabel}
        aria-pressed="false"
        title={enableLabel}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="beelineIcon"
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="M4 6.5h16" />
          <path d="M4 10.5h8" />
          <path d="M4 14.5h16" />
          <path d="M4 18.5h8" />
          <path d="M15.5 9.5h4a1 1 0 0 1 1 1v4a3.5 3.5 0 0 1-3.5 3.5h-1.5z" />
        </svg>
      </button>
    );
  };

  BeelineReader.beforeDOMLoaded = beelineReaderScript;
  BeelineReader.css = styles;

  return BeelineReader;
}) satisfies QuartzComponentConstructor;
