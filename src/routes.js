import demo from './routes/demo.svelte';
import color from './routes/color.svelte';
import index from './routes/index.svelte';
import notfound from './routes/notfound.svelte';

export default {
    '/': index,
    '/demo': demo,
    '/color': color,
    '*': notfound
};
