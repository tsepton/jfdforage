import fr from "./fr";

type TranslationNode = string | string[] | { [key: string]: TranslationNode };

class Translator {
  private readonly translation = fr as unknown as Record<string, TranslationNode>;

  private resolve(path: string): TranslationNode | undefined {
    return path.split(".").reduce<TranslationNode | undefined>((node, key) => {
      if (node && typeof node === "object" && !Array.isArray(node)) {
        return node[key];
      }
      return undefined;
    }, this.translation);
  }

  /** Look up a single translation string. */
  public get(path: string): string {
    const value = this.resolve(path);
    if (typeof value !== "string") {
      throw new MissingKeyError(path, "string");
    }
    return value;
  }

  /** Look up a translation that is a list of strings. */
  public getList(path: string): string[] {
    const value = this.resolve(path);
    if (!Array.isArray(value)) {
      throw new MissingKeyError(path, "string[]");
    }
    return value;
  }
}

class MissingKeyError extends Error {
  constructor(key: string, expected: string) {
    super(`Translation key '${key}' is missing or is not a ${expected}.`);
    this.name = "MissingKeyError";
  }
}

const trans = new Translator();

export default trans;
