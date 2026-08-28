import type { DocsData, DocsGenerateOptions, DocsGenerateResults, DocsParseOptions } from './types';

/**
 * Documentation facade for `@rdlabo/capacitor-docgen`.
 * Not part of the public runtime API.
 */
export interface CapacitorDocgenApi {
  /** Parses a TypeScript project or input files and optionally writes README and JSON output. */
  generate(opts: DocsGenerateOptions): Promise<DocsGenerateResults>;
  /** Creates a parser result lookup for a named plugin API. */
  parse(opts: DocsParseOptions): (api: string) => DocsData;
  /** Updates the docgen placeholders in a README file. */
  outputReadme(readmeFilePath: string, data: DocsData): Promise<void>;
  /** Writes the parsed documentation model as JSON. */
  outputJson(jsonFilePath: string, data: DocsData): Promise<void>;
  /** Returns Markdown with `<docgen-index>` and `<docgen-api>` content replaced. */
  replaceMarkdownPlaceholders(content: string, data: DocsData): string;
  /** Runs the docgen command with an explicit working directory and argument list. */
  run(config: { cwd: string; args: string[] }): Promise<void>;
}
