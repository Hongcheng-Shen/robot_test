

/**
 * Control blocks
 */
//% weight=100 color=#0fbc11 icon=""
//% groups='["Positional", "Continuous", "Configuration"]'
namespace Control {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    //% groups="Positional"
    export function Control_init(): void {
        // Add code here
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    //% groups="Continuous"
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value - 1) + fib(value - 2);
    }
}
