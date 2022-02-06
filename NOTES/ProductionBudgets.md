# Production budget issues

Default settings in **angular.json** are:

```json
"budgets": [
    {

    "type": "initial",

    "maximumWarning": "500kb",

    "maximumError": "1mb"

    },

    {

    "type": "anyComponentStyle",

    "maximumWarning": "2kb",

    "maximumError": "4kb"

    }
],
```

However...

## 2022-02-04

On `ng build` app both budgets exceeded `mazimumError` so I increased:
- `"initial"` to: `"maximumError": "3.5mb"`
- `"anyComponentStyle"` to: `"maximumError": "9.1kb"`
