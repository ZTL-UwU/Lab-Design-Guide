# Installation

## Install using starter template

1. Download the [starter template](https://github.com/ZTL-UwU/LabUI-starter/releases) & extract.

2. Build the project on top of the template.

Use the following commands:

| Command   | Description                                   |
| :-------- | :-------------------------------------------- |
| `dev`     | Development (port 8080)                       |
| `build`   | Build your app for production!                |

## Install to existing project

1. Install SCSS

    Install Components.

    ```bash
    npm install --save svelte-preprocess node-sass
    ```

    open `rollup.config.js`.

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
