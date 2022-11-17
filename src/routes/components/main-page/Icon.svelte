<script>
    export let imagePath;
    export let text;
    export let url;
    export let scaling = 1;
    export let last_child = false;
</script>

<!-- <img alt="test" src="" /> -->

<a href={url} id="last_child_{last_child}">
    <div class="icon">
        <img
            alt="{text} icon"
            src={imagePath}
            style="width: calc(min(13vw, 120px) * {scaling});"
        />
    </div>
    <h2 class="superfluous-text">{text}</h2>
</a>

<style>
    :root {
        --icon-size: max(20vw, calc(70vw / 3));
    }
    .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 5px;
    }

    a {
        width: var(--icon-size);
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;

        font-family: "Poppins";
        font-weight: 700;
        font-size: 20px;
        line-height: 52px;
        text-align: center;

        color: #000000;
    }

    @media (orientation: portrait) {
        a {
            margin: 20px;
            font-size: 10px;
            line-height: normal;
            white-space: nowrap;
        }
        #last_child_true {
            grid-column-end: 2;
            width: 200%;
        }
    }
</style>
