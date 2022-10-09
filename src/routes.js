import demo from './routes/demo.svelte';
import color from './routes/guide/color.svelte';
import typography from './routes/guide/typography.svelte';
import index from './routes/index.svelte';
import install from './routes/start/install.svelte';
import usage from './routes/start/usage.svelte';
import notfound from './routes/notfound.svelte';

export default {
    '/': index,
    '/demo': demo,
    '/guide/color': color,
    '/guide/typography': typography,
    '/start/install': install, 
    '/start/usage': usage, 
    '*': notfound
};
