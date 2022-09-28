## Installation

1. Install SCSS

    Install Components

    ```bash
    npm install --save svelte-preprocess node-sass
    ```

    open `rollup.config.js`

    ```javascript
    import preprocess from 'svelte-preprocess'; // Line to add
    /* ... */
    export default {
        /* ... */
        plugins: [
            svelte({
            /* ... */
                preprocess: preprocess(), // Line to add
            })
        }),
        /* ... */
    }
    ```

2. Install LabUI

    ```bash
    npm i --save @ztl-uwu/labui
    ```