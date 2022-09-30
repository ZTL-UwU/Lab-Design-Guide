<script>
    import md from './install.md';
	import { push } from 'svelte-spa-router';
    import { LMDContainer, LButton } from '@ztl-uwu/labui';
</script>

<LMDContainer content={ md }>
</LMDContainer>

<LButton color="yellow" on:click={() => push('/start/usage')}>Usage</LButton>
