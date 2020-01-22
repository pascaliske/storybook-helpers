import clear from 'rollup-plugin-clear'
import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import { module, main, browser, dependencies } from './package.json'

export default () => ({
    input: 'src/index.ts',
    output: [
        {
            format: 'es',
            file: module,
        },
        {
            format: 'cjs',
            file: main,
        },
        {
            format: 'umd',
            file: browser,
            name: 'storybookHelpers',
            globals: {
                tslib: 'tslib',
            },
        },
    ],
    external: [...Object.keys(dependencies || {})],
    plugins: [
        clear({
            targets: ['dist'],
            watch: true,
        }),
        typescript({
            typescript: require('typescript'),
            useTsconfigDeclarationDir: true,
            tsconfigOverride: {
                exclude: ['rollup.config.ts'],
            },
        }),
        terser(),
    ],
})
