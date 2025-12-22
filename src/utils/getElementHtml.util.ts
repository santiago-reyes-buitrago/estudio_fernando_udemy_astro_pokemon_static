export const getElementHtml = <T>(name: string,target = document) => {
    return target.querySelector(name) as T;
}