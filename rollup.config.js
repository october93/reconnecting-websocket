import typescript from 'rollup-plugin-typescript2';
import babel from 'rollup-plugin-babel';

export default {
    input: 'reconnecting-websocket.ts',
    plugins: [typescript(), babel()],
    output: [
        {
            file: 'dist/reconnecting-websocket-iife.js',
            format: 'iife',
            name: 'ReconnectingWebSocket',
        },
        {
            file: 'dist/reconnecting-websocket-amd.js',
            format: 'amd',
            name: 'ReconnectingWebSocket',
        },
        {
            file: 'dist/reconnecting-websocket-cjs.js',
            format: 'cjs',
        },
        {
            file: 'dist/reconnecting-websocket.mjs',
            format: 'es',
        },
    ],
};
