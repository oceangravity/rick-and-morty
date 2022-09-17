const plugin = require('tailwindcss/plugin')
// const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,ts}'],
    theme: {
        extend: {
            colors: {
                "custom-1": "#343030",
                "custom-2": "#F4F6F9",
                "custom-3": "#a4aeb4",
                "custom-4": "#FCB430",
                "custom-5": "#B7C4CB",
                "custom-6": "#666666",
                "custom-7": "#339DFF",
                "custom-8": "#707070",
                "custom-9": "#4A90E2",
                "custom-10": "#222226",
                "custom-11": "#3CC480",
                "custom-12": "#BEBEBF",
                "custom-13": "#57545A",
                "custom-14": "#EC4444"
            },
            fontFamily: {
                "lato-2": ['"Lato 2"'],
                "roboto": ['"Roboto"']
            },
            fontSize: {
                '10': '.625rem',
                '2xs': '0.53rem'
            },
            backgroundImage: {
                'invoices-off': "url('/src/assets/invoices-off.svg')",
                'invoices-on': "url('/src/assets/invoices-on.svg')",
                'direct-invoice-off': "url('/src/assets/direct-invoice-off.svg')",
                'direct-invoice-on': "url('/src/assets/direct-invoice-on.svg')",
                'config-off': "url('/src/assets/config-off.svg')",
                'config-on': "url('/src/assets/config-on.svg')"
            }
        }
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/typography'),
        plugin(function ({addVariant, e, postcss}) {
            addVariant('firefox', ({container, separator}) => {
                const isFirefoxRule = postcss.atRule({
                    name: '-moz-document',
                    params: 'url-prefix()',
                })
                isFirefoxRule.append(container.nodes)
                container.append(isFirefoxRule)
                isFirefoxRule.walkRules((rule) => {
                    rule.selector = `.${e(`firefox${separator}${rule.selector.slice(1)}`)}`
                })
            })
        }),
    ],
}
