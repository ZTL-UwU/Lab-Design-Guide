<script>
</script>

<h1>Color</h1>

<h2>Primary Colors</h2>
<div class="color-card-holder">
    <div class="color-card first">
        <div class="color-primary green"><span class="color-name">#23A536</span></div>
        <div class="color-secondary green9"><span class="color-name">#1E5020</span></div>
        <div class="color-secondary green8"><span class="color-name">#226B27</span></div>
        <div class="color-secondary green7"><span class="color-name">#24882F</span></div>
        <div class="color-secondary green6"><span class="color-name">#23A536</span></div>
        <div class="color-secondary green5"><span class="color-name">#57B558</span></div>
        <div class="color-secondary green4"><span class="color-name">#7CC479</span></div>
        <div class="color-secondary black-font green3"><span class="color-name">#9ED399</span></div>
        <div class="color-secondary black-font green2"><span class="color-name">#BFE2BB</span></div>
        <div class="color-secondary black-font green1 last"><span class="color-name">#DFF1DC</span></div>
    </div>
    <div class="color-card middle">
        <div class="color-primary yellow"><span class="color-name">#F9B705</span></div>
        <div class="color-secondary yellow9"><span class="color-name">#4F3B14</span></div>
        <div class="color-secondary yellow8"><span class="color-name">#765716</span></div>
        <div class="color-secondary yellow7"><span class="color-name">#A07616</span></div>
        <div class="color-secondary yellow6"><span class="color-name">#CB9612</span></div>
        <div class="color-secondary yellow5"><span class="color-name">#F9B705</span></div>
        <div class="color-secondary yellow4"><span class="color-name">#FFC247</span></div>
        <div class="color-secondary black-font yellow3"><span class="color-name">#FFCE6F</span></div>
        <div class="color-secondary black-font yellow2"><span class="color-name">#FFDA93</span></div>
        <div class="color-secondary black-font yellow1 last"><span class="color-name">#FFE6B7</span></div>
    </div>
    <div class="color-card middle">
        <div class="color-primary blue"><span class="color-name">#5BB2EC</span></div>
        <div class="color-secondary blue9"><span class="color-name">#33556F</span></div>
        <div class="color-secondary blue8"><span class="color-name">#407397</span></div>
        <div class="color-secondary blue7"><span class="color-name">#4E92C0</span></div>
        <div class="color-secondary blue6"><span class="color-name">#5BB2EC</span></div>
        <div class="color-secondary blue5"><span class="color-name">#7EBEEF</span></div>
        <div class="color-secondary blue4"><span class="color-name">#9BCBF3</span></div>
        <div class="color-secondary black-font blue3"><span class="color-name">#B6D8F6</span></div>
        <div class="color-secondary black-font blue2"><span class="color-name">#CFE5F9</span></div>
        <div class="color-secondary black-font blue1 last"><span class="color-name">#E7F2FC</span></div>
    </div>
    <div class="color-card middle">
        <div class="color-primary red"><span class="color-name">#F06A5E</span></div>
        <div class="color-secondary red9"><span class="color-name">#723730</span></div>
        <div class="color-secondary red8"><span class="color-name">#9A473F</span></div>
        <div class="color-secondary red7"><span class="color-name">#C4584E</span></div>
        <div class="color-secondary red6"><span class="color-name">#F06A5E</span></div>
        <div class="color-secondary red5"><span class="color-name">#F78477</span></div>
        <div class="color-secondary red4"><span class="color-name">#FC9E91</span></div>
        <div class="color-secondary black-font red3"><span class="color-name">#FFB6AB</span></div>
        <div class="color-secondary black-font red2"><span class="color-name">#FFCEC7</span></div>
        <div class="color-secondary black-font red1 last"><span class="color-name">#FFE7E2</span></div>
    </div>
</div>

<style>
    .color-card-holder {
        display: flex;
    }

    .color-card {
        width: calc(25% - 15px);
    }
    
    .color-primary {
        border-radius: 8px 8px 0 0;
        position: relative;
        height: 120px;
    }

    .color-secondary {
        position: relative;
        height: 30px;
    }

    .color-secondary.last {
        border-radius: 0 0 8px 8px;
    }

    .color-name {
        font-family: 'Fira Code', consolas, monospace;
    }

    .color-primary > .color-name {
        position: absolute;
        right: 15px;
        bottom: 12px;
        color: #fff;
        font-size: 17px;
        font-weight: 600;
    }

    .color-secondary > .color-name {
        position: absolute;
        right: 15px;
        bottom: 8px;
        color: #fff;
        font-size: 12px;
        font-weight: 500;
    }

    .black-font > .color-name {
        color: #707070;
    }

    .first {
        margin-left: 0;
    }

    .middle {
        margin-left: 20px;
    }

    .green { background-color: #23a536; }
    .green1 { background-color: #DFF1DC; }
    .green2 { background-color: #BFE2BB; }
    .green3 { background-color: #9ED399; }
    .green4 { background-color: #7CC479; }
    .green5 { background-color: #57B558; }
    .green6 { background-color: #23A536; }
    .green7 { background-color: #24882F; }
    .green8 { background-color: #226B27; }
    .green9 { background-color: #1E5020; }

    .yellow { background-color: #f9b705; }
    .yellow1 { background-color: #ffe6b7; }
    .yellow2 { background-color: #ffda93; }
    .yellow3 { background-color: #ffce6f; }
    .yellow4 { background-color: #ffc247; }
    .yellow5 { background-color: #f9b705; }
    .yellow6 { background-color: #cb9612; }
    .yellow7 { background-color: #a07616; }
    .yellow8 { background-color: #765716; }
    .yellow9 { background-color: #4f3b14; }

    .blue { background-color: #5bb2ec; }
    .blue1 { background-color: #e7f2fc; }
    .blue2 { background-color: #cfe5f9; }
    .blue3 { background-color: #b6d8f6; }
    .blue4 { background-color: #9bcbf3; }
    .blue5 { background-color: #7ebeef; }
    .blue6 { background-color: #5bb2ec; }
    .blue7 { background-color: #4e92c0; }
    .blue8 { background-color: #407397; }
    .blue9 { background-color: #33556f; }

    .red { background-color: #f06a5e; }
    .red1 { background-color: #ffe7e2; }
    .red2 { background-color: #ffcec7; }
    .red3 { background-color: #ffb6ab; }
    .red4 { background-color: #fc9e91; }
    .red5 { background-color: #f78477; }
    .red6 { background-color: #f06a5e; }
    .red7 { background-color: #c4584e; }
    .red8 { background-color: #9a473f; }
    .red9 { background-color: #723730; }
</style>
