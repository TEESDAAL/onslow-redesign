<script>
    import { goto, afterNavigate } from "$app/navigation";
    import { page } from "$app/stores";
    import { base } from "$app/paths";

    let previousPage = base;

    afterNavigate(({ from }) => {
        previousPage = from?.url.pathname || previousPage;
    });

    let values = {
        Whānau: "Onslow College is about being an extended family. It is a collective who cares. We take the time to know each other, and we work hard to make sure that everyone feels safe. Whānau show care for each other.",
        Whenua: "School is important for being a place for akōnga to find sustenance so that they can grow and strive. This means that at Onslow, we focus on wellbeing and identity. This is shown in all that we do and say to sustain growth and the ability to thrive.",
        Whakapapa:
            "Layers make up who we are. The way these layers combine make us unique. It also identifies all that akōnga bring with them each day. The way our families and influences make us who we are and how they connect us.",
        Diversity:
            "At Onslow College we pride ourselves in including and accepting people of different social, socio-economic, learning styles, ethnic, genders, faith, sexual orientation. Valuing diversity is inclusion.",
        Community:
            "A group of people that care about each other and feel they belong together. Onslow is a group of people who balance the rights of the individual against what is best for the group.",
    };
</script>

<img src="\onslow-logo.svg" alt="onslow-logo" />

<main>
    <div class="warning">
        <h1>{$page.status}</h1>
        <h2>{$page.error.message}</h2>
        {#if $page.status == "404"}
            <p>Looks like the page you are looking for doesn't exist :(</p>
            <p>
                Please note that this is just a skeleton project so some pages
                may be missing.
            </p>
        {:else}
            <p>Something is wrong with the page you are trying to vist :(</p>
        {/if}

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
