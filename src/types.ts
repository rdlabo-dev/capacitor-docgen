export interface DocsData {
  /** Primary plugin API. */
  api: DocsInterface | null;
  /** Parsed interfaces. */
  interfaces: DocsInterface[];
  /** Parsed type aliases. */
  typeAliases: DocsTypeAlias[];
  /** Parsed enums. */
  enums: DocsEnum[];
  /** Parsed Capacitor config interfaces. */
  pluginConfigs: DocsConfigInterface[];
}

export interface DocsConfigInterface {
  name: string;
  slug: string;
  properties: DocsInterfaceProperty[];
  docs: string;
}

export interface DocsInterface {
  name: string;
  slug: string;
  docs: string;
  tags: DocsTagInfo[];
  extends: string[];
  methods: DocsInterfaceMethod[];
  properties: DocsInterfaceProperty[];
}

export interface DocsEnum {
  name: string;
  slug: string;
  members: DocsEnumMember[];
}

export interface DocsTypeAlias {
  name: string;
  slug: string;
  docs: string;
  types: DocsTypeAliasReference[];
}

export interface DocsTypeAliasReference {
  text: string;
  complexTypes: string[];
}

export interface DocsEnumMember {
  name: string;
  value: string | undefined;
  docs: string;
  tags: DocsTagInfo[];
}

export interface DocsInterfaceMethod {
  name: string;
  docs: string;
  tags: DocsTagInfo[];
  signature: string;
  returns: string;
  parameters: DocsMethodParam[];
  complexTypes: string[];
  slug: string;
}

export interface DocsInterfaceProperty {
  name: string;
  docs: string;
  tags: DocsTagInfo[];
  type: string;
  complexTypes: string[];
}

export interface DocsInterfaceEnum {
  name: string;
  docs: string;
  tags: DocsTagInfo[];
  complexTypes: string[];
  slug: string;
}

export interface DocsMethodParam {
  name: string;
  docs: string;
  type: string;
}

export interface DocsJsDoc {
  docs: string;
  tags: DocsTagInfo[];
}

export interface DocsTagInfo {
  name: string;
  text?: string;
}

export interface DocsParseOptions {
  /** Optional TypeScript configuration path. */
  tsconfigPath?: string;
  /** Optional explicit source files. */
  inputFiles?: string[];
}

export interface DocsGenerateOptions extends DocsParseOptions {
  /** Primary plugin interface name. */
  api: string;
  /** Optional JSON output path. */
  outputJsonPath?: string;
  /** Optional README output path. */
  outputReadmePath?: string;
}

export interface DocsGenerateResults extends DocsGenerateOptions {
  data: DocsData;
}
