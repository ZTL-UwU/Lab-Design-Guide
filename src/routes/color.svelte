<script>
</script>

<h1>Color</h1>

<div class="color-card-holder">
    <div class="color-card first green">
        <span class="color-name">Green</span>
    </div>
    <div class="color-card middle yellow">
        <span class="color-name">Yellow</span>
    </div>
    <div class="color-card middle blue">
        <span class="color-name">Blue</span>
    </div>
    <div class="color-card middle red">
        <span class="color-name">Red</span>
    </div>
</div>

<style>
    .color-card-holder {
        display: flex;
    }

    .color-card {
        height: 120px;
        width: calc(25% - 18px);
        border-radius: 8px;
        position: relative;
    }

    .color-name {
        position: absolute;
        right: 15px;
        bottom: 12px;
        color: #FFF;
        font-size: 17px;
        font-weight: 600;
    }

    .first {
        margin-left: 0;
    }

    .middle {
        margin-left: 24px;
    }

    .green {
        background-color: #23a536;
    }

    .yellow {
        background-color: #f9b705;
    }

    .blue {
        background-color: #5bb2ec;
    }

    .red {
        background-color: #f06a5e;
    }
</style>
