export let a = "import preprocess from 'svelte-preprocess'; // Line to add\n" +
"/* ... */\n" +
"export default {\n" +
"    /* ... */\n" +
"    plugins: [\n" +
"        svelte({\n" +
"        /* ... */\n" +
"            preprocess: preprocess(), // Line to add\n" +
"        })\n" +
"    }),\n" +
"    /* ... */\n" +
"}"