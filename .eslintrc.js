module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "amd": true,
        "node": true,
        "es6": true
    },
    "extends": ["eslint:recommended", "plugin:react/recommended", "plugin:prettier/recommended"],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "no-console": ["off"],
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single",
            { "avoidEscape": true, "allowTemplateLiterals": false }
        ],
        "prettier/prettier": ["error", { "singleQuote": true, "useTabs": true }],
        "react/display-name": ["off"]

    }
};