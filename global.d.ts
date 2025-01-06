// global.d.ts
interface Window {
    checkoutElements: {
        init: (arg: string) => {
            mount: (selector: string) => void;
        };
    };
}