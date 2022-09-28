import demo from './routes/demo.svelte';
import color from './routes/guide/color.svelte';
import index from './routes/index.svelte';
import install from './routes/start/install.svelte';
import notfound from './routes/notfound.svelte';

export default {
    '/': index,
    '/demo': demo,
    '/guide/color': color,
    '/start/install': install, 
    '*': notfound
};
