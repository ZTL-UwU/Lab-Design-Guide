<script>
    import { LInput, LLink } from "@ztl-uwu/labui";
    let demo_text = 'The quick brown fox jumps over the lazy dog';
</script>

<h1>Typography</h1>

<h2>Font</h2>
<p>For English, we recommend using the font <LLink href="https://github.com/JulietaUla/Montserrat">Montserrat</LLink>. Here is a demo bellow.</p>

<div class="card-outer" style="margin-bottom: 50px;">
    <h1>Montserrat
        <div style="float: right;">
            <LInput width="400px" placeholder={demo_text} bind:value={demo_text}></LInput>
        </div>
    </h1>
    <div class="card-holder">
        <div class="font-box">
            <div class="font-name">
                Regular
                <span style="float: right;">400</span>
            </div>
            <div class="regular">
                {demo_text}
            </div>
        </div>
        <div class="font-box">
            <div class="font-name">
                Italic
                <span style="float: right;">400</span>
            </div>
            <div class="italic">
                {demo_text}
            </div>
        </div>
        <div class="font-box">
            <div class="font-name">
                Thin
                <span style="float: right;">100</span>
            </div>
            <div class="thin">
                {demo_text}
            </div>
        </div>
        <div class="font-box">
            <div class="font-name">
                ExtraLight
                <span style="float: right;">200</span>
            </div>
            <div class="exlight">
                {demo_text}
            </div>
        </div>
        <div class="font-box">
            <div class="font-name">
                Light
                <span style="float: right;">300</span>
            </div>
            <div class="light">
                {demo_text}
            </div>
        </div>
        <div class="font-box">
            <div class="font-name">
                Medium
                <span style="float: right;">500</span>
            </div>
            <div class="medium">
                {demo_text}
            </div>
        </div>
        <div class="font-box">
            <div class="font-name">
                SemiBold
                <span style="float: right;">600</span>
            </div>
            <div class="sbold">
                {demo_text}
            </div>
        </div>
        <div class="font-box">
            <div class="font-name">
                Bold
                <span style="float: right;">700</span>
            </div>
            <div class="bold">
                {demo_text}
            </div>
        </div>
        <div class="font-box">
            <div class="font-name">
                ExtraBold
                <span style="float: right;">800</span>
            </div>
            <div class="exbold">
                {demo_text}
            </div>
        </div>
        <div class="font-box">
            <div class="font-name">
                Black
                <span style="float: right;">900</span>
            </div>
            <div class="black">
                {demo_text}
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    @import '../../styles/main.scss';

    .card-outer {
        padding: 25px 60px 40px 60px;
        background-color: $white3;
        border-radius: $border-radius-large;
    }

    .card-holder {
        margin-top: 30px;
        font-size: 35px;
    }

    .font-name {
        font-weight: 300;
        font-size: 16px;
        color: $grey;
    }

    .font-box {
        margin-bottom: 20px;
    }

    .regular { font-weight: 400; }
    .italic { font-style: italic; }
    .thin { font-weight: 100; }
    .exlight { font-weight: 200; }
    .light { font-weight: 300; }
    .medium { font-weight: 500; }
    .sbold { font-weight: 600; }
    .bold { font-weight: 700; }
    .exbold { font-weight: 800; }
    .black { font-weight: 900; }
</style>
