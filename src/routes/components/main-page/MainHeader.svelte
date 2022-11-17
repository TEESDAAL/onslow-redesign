<script lang="ts">
    import { fade } from "svelte/transition";
    let wanted_height = "100vh";
    let paused = true;
    let video_height;
    let timeout_completed = false;
    setTimeout(() => {
        timeout_completed = true;
        paused = false;
    }, 2000);

    let y_pos;
    $: {
        if (y_pos > 0) {
            paused = true;
        } else {
            if (timeout_completed) {
                paused = false;
            }
        }
    }
</script>

<header>
    <!-- {#if paused === true && y_pos === 0} -->
    <h1 out:fade>Discover Onslow College</h1>
    <!-- {/if} -->
    <div id="video-holder">
        <video loop id="video-background" src="/onslow_intro.mp4" muted />
    </div>
</header>

<svelte:window bind:scrollY={y_pos} />

<style>
    :root {
        --video-height: 66vh;
    }
    header {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: min(3em, 5vw);
        width: 100%;
        max-height: 60vh;
    }

    #video-holder {
        width: 100%;
        overflow-y: hidden;
        max-height: 60vh;
    }
    h1 {
        display: flex;
        justify-content: center;
        align-content: center;
        text-align: center;
        color: white;
        text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
        width: 50%;
        font-weight: bolder;
        z-index: 1;
        position: absolute;
        transform: translate(0, calc(-50% / 4));
    }
    video {
        transition: height 1s;
        width: 100%;
        /* top: calc(-100vh + var(--video-height)); */
        position: relative;
    }
</style>
