export declare class Greeter {
    sayHi(): string;
    sayNumber(): number;
    saySomethingAsync(callback: ((val: string) => void)): void;
    saySomethingPromised(): Promise<string>;
    forceACrash(): void;
}
