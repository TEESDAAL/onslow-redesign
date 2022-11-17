<script>
    export let imageList;
    import { onMount } from "svelte";
    import { each } from "svelte/internal";
    let Carousel; // for saving Carousel component class
    let carousel; // for calling methods of the carousel instance
    onMount(async () => {
        const module = await import("svelte-carousel");
        Carousel = module.default;
    });

    const handleNextClick = () => {
        carousel.goToNext();
    };
    let loaded = false;

    let waiting = 0;

    const onload = (el) => {
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
    <h1>Explore Our subjects</h1>
    <div class="bar" />
    <svelte:component this={Carousel} bind:this={carousel}>
        {#each imageList as image}
            <a href={image[2]}>
                <div class="carousel-holder">
                    <h2>{image[1]}</h2>
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
    h1 {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 800;
        font-size: 40px;
        line-height: 75px;
        text-align: center;

        color: #000000;
    }
    .bar {
        width: 80%;
        height: 3px;
        background-color: black;
        margin-bottom: 10px;
    }
    #thing {
        width: var(--carousel-width);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
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
    .carousel-holder > h2 {
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
    @media (orientation: portrait) {
        h1 {
            font-size: 6vw;
            line-height: normal;
        }
        .carousel-holder > h2 {
            position: fixed;
            box-sizing: border-box;
            width: 90%;
            margin: 0 5%;
            transform: translate(0, -25%);
            font-size: 5vw;
        }
        :root {
            --carousel-width: 90vw;
            --carousel-height: calc(var(--carousel-width) / (1.618 * 2));
        }
    }
</style>
