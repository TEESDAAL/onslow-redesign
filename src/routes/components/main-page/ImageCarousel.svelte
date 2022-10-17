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
    let loaded = false;

    let waiting = 0;

    const onload = (el: any) => {
        waiting++;
        el.addEventListener("load", () => {
            waiting--;
            if (waiting === 0) {
                loaded = true;
            }
        });
    };
</script>

<div id="thing">
    <svelte:component this={Carousel} bind:this={carousel}>
        {#each imageList as image}
            <a href={image[2]}>
                <div class="carousel-holder">
                    <h1>{image[1]}</h1>
                    <img use:onload src={image[0]} alt={image[1]} />
                </div>
            </a>
        {/each}
    </svelte:component>
</div>

<style>
    :root {
        --carousel-width: 50vw;
        --carousel-height: calc(var(--carousel-width) / (1.618 * 2));
    }
    #thing {
        width: var(--carousel-width);
    }
    img {
        width: var(--carousel-width);
        height: var(--carousel-height);
        object-fit: cover;
    }
    a {
        text-decoration: none;
        color: black;
    }
    .carousel-holder > h1 {
        text-align: center;
        width: 50%;
        margin: 0 auto;
        top: calc(var(--carousel-height) * 0.3);
        border-radius: 10px;
        z-index: 100;
        position: relative;
        background-color: white;
        filter: drop-shadow(1px);
    }
</style>
