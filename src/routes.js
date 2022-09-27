import demo from './routes/demo.svelte';
import color from './routes/color.svelte';
import notfound from './routes/notfound.svelte';

export default {
    '/': demo,
    '/color': color,
    '*': notfound
};
