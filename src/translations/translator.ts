import fr from "./fr";

class Translator {

    current: Language = Language.fr;

    get translation(): any {
        switch (this.current) {
            case Language.fr:
                return fr;
            default:
                throw new MissingTranlsationError(this.current);

        }
    }

    public get(path: string): string {
        const word = path.split(".").reduce((json, key) => json[key], this.translation);
        if (word === undefined) console.error(`Translation for key '${path}' does not exist`);
        return word;
    }

    public set(lang: Language): void {
        switch (lang) {
            case Language.fr:
                this.current = lang;
                break;
            default:
                throw new MissingTranlsationError(lang);
        }
    }
}

export enum Language {
    fr,
}

class MissingTranlsationError extends Error {
    constructor(lang: Language) {
        super(`Language ${lang} is not available.`);
        this.name = "MissingTranlsationError";
    }
}

const trans: Translator = new Translator();

export default trans;