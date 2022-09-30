## Usage

Import needed components inside `<script>`.

### Import components from the package

```html
<script>
    import {
        LButton,
        LBox,
        //...
    } from '@ztl-uwu/labui';
    //...
</script>

<LBox>
    <LButton>Button</LButton>
</LBox>
```

### Import components directly from files

This can provide lower build time and imporve the performance.

```html
<script>
    import Button as LButton from '@ztl-uwu/labui/src/components/Button.svelte';
    import Box as LBox from '@ztl-uwu/labui/src/components/Box.svelte';
    //...
</script>

<LBox>
    <LButton>Button</LButton>
</LBox>
```