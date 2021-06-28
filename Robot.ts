

/**
 * robot blocks
 */
//% weight= 0 color=#0abcff icon="\uf207" block="Robot"


namespace Robot {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    
    //% groups="Positional"
    //% blockId=robot_init block="go straight at full speed"
    export function init(): void {
        let i = 0
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
