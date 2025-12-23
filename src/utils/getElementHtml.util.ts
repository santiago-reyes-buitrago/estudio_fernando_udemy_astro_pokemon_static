type HasQuerySelector = {
    querySelector(selectors: string): Element | null;
};

export const getElementHtml = <T>(name: string,target: HasQuerySelector = document): T => {
    return target.querySelector(name) as T;
}