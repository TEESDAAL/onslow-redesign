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
        <p>
            Please note this is a skelton page and therefore only the pages
            required to show the proof of concept have been created
        </p>
        <p>Click <a href="13DTC">here</a> to see the template subject page</p>
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
