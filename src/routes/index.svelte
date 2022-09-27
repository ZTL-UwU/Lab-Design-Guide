<script>
	import { push } from 'svelte-spa-router';
    import { LButton } from '@ztl-uwu/labui';
</script>

<div class="banner">
    <img alt="banner" class="icon" src="./banner.png" />
    <br>
	<LButton size="large" on:click={() => push('/demo')}>Demo</LButton>
	<LButton size="large" on:click={() => push('/color')}>Color</LButton>
</div>

<style>
    .banner {
        text-align: center;
        background-color: #f2f5fa;
        width: 100vw;
        position: absolute;
        top: 65px;
        left: 0;
    }

    .icon {
        width: 100%;
        max-width: 800px;
        margin-top: 50px;
        margin-bottom: 50px;
    }
</style>