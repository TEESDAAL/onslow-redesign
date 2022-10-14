<script lang="ts">
    export let imagePath: string;
    export let text: string;
    export let url: string;
</script>

<a href={url}>
    <div class="icon" style="background-image: {imagePath};" />
    <h2>{text}</h2>
</a>

<style>
    :root {
        --icon-size: max(7vw, 90px);
    }
    .icon {
        background-size: cover;
        border-radius: 100%;
        width: var(--icon-size);
        height: var(--icon-size);
    }
    a {
        text-align: center;
        /* margin-top: 0; */
    }
</style>
