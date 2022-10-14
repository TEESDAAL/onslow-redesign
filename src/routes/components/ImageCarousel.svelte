<script lang="ts">
    export let imageList: string[][];
    import { onMount } from "svelte";
    import { each } from "svelte/internal";
    let Carousel: any; // for saving Carousel component class
    let carousel: any; // for calling methods of the carousel instance
    onMount(async () => {
        const module = await import("svelte-carousel");
        Carousel = module.default;
    });

    const handleNextClick = () => {
        carousel.goToNext();
    };
</script>

<div id="thing">
    <svelte:component this={Carousel} bind:this={carousel}>
        {#each imageList as image}
            <div class="carousel-holder">
                <h1>{image[1]}</h1>
                <img src={image[0]} alt={image[1]} />
            </div>
        {/each}
    </svelte:component>
</div>

<style>
    :root {
        --carousel-width: 60vw;
        --carousel-height: calc(var(--carousel-width) / 2);
    }
    #thing {
        width: var(--carousel-width);
    }
    img {
        width: var(--carousel-width);
        height: var(--carousel-height);
        object-fit: cover;
    }
</style>
