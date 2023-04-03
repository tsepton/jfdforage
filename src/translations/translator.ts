import fr from "./fr";

class Translator {
  current: Language = Language.fr;

  get translation(): any {
    switch (this.current) {
      case Language.fr:
        return fr;
      default:
        throw new MissingLangError(this.current);
    }
  }

  public get(path: string): string {
    const word: string = path
      .split(".")
      .reduce((json, key) => json[key], this.translation);
    if (word === undefined)
      throw new MissingKeyError(`Translation for key '${path}' does not exist`);
    return word;
  }

  public set(lang: Language): void {
    switch (lang) {
      case Language.fr:
        this.current = lang;
        break;
      default:
        throw new MissingLangError(lang);
    }
  }
}

export enum Language {
  fr,
}

class TranslationError extends Error {}

class MissingLangError extends TranslationError {
  constructor(lang: Language) {
    super(`Language ${lang} is not available.`);
    this.name = "MissingLangError";
  }
}

class MissingKeyError extends TranslationError {
  constructor(key: string) {
    super(`Key ${key} is not available for this translation.`);
    this.name = "MissingKeyError";
  }
}

const trans: Translator = new Translator();

export default trans;
