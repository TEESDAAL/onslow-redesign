<script>
    import { goto, afterNavigate } from "$app/navigation";
    import { page } from "$app/stores";
    import { base } from "$app/paths";

    let previousPage = base;

    afterNavigate(({ from }) => {
        previousPage = from?.url.pathname || previousPage;
    });
</script>

<img src="\onslow-logo.svg" alt="onslow-logo" />

<main>
    <div class="warning">
        <h1>{$page.status}</h1>
        <h2>{$page.error.message}</h2>
        {#if $page.status == "404"}
            <p>Looks like the page you are looking for doesn't exist :(</p>
            <p>
                Please note that this is just a skeleton project and so some
                pages may be missing.
            </p>
        {:else}
            <p>Something is wrong with the page you are trying to vist :(</p>
        {/if}

        <p>Click <a href="/">here</a> to return to the homepage</p>
    </div>
</main>

<style>
    img {
        width: 40vw;
        position: absolute;
        z-index: -1;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0.2;
    }
    main {
        min-width: 100vw;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    main .warning h1 {
        font-size: 5em;
        margin-bottom: 20px;
    }
    main .warning h2 {
        font-size: 2em;
        margin-bottom: 20px;
    }
    main .warning p {
        font-size: 1.5em;
        margin-bottom: 20px;
    }
    main .warning p a {
        font-weight: bold;
    }
</style>
