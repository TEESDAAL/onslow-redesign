<script lang="ts">
    export let imagePath: string;
    export let text: string;
    export let url: string;
    export let scaling: number = 1;
</script>

<!-- <img alt="test" src="" /> -->

<a href={url}>
    <div class="icon">
        <img
            alt="{text} icon"
            src={imagePath}
            style="width: calc(7vw * {scaling});"
        />
    </div>
    <h2>{text}</h2>
</a>

<style>
    :root {
        --icon-size: max(7vw, 90px);
    }
    .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        /* border-radius: 100%; */
        width: var(--icon-size);
        height: var(--icon-size);
        /* border: 1px solid black; */
        margin-bottom: 5px;
    }
    a {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
