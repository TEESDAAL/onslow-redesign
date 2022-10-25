<script>
    export let internals;
    export let externals;
    import FaChevronUp from "svelte-icons/fa/FaChevronUp.svelte";
</script>

<details>
    <summary>
        <h2>Subject Overview</h2>
        <span class="icon"><FaChevronUp /></span>
    </summary>
    <h3>Internals</h3>
    {#each internals as internal}
        <div>
            <a href={internal.link} target="_blank" rel="noreferrer">
                {internal.id} - {internal.credits} Credits
            </a>
            <p>{internal.description}</p>
        </div>
    {/each}
    <h3>Externals</h3>
    {#each externals as external}
        <div>
            <a href={external.link} target="_blank" rel="noreferrer">
                {external.id} - {external.credits} Credits
            </a>
            <p>{external.description}</p>
        </div>
    {/each}
</details>

<style>
    details {
        margin-top: 10vh;
        text-align: center;
        user-select: none;
        width: 35%;
    }

    details > summary span.icon {
        margin-left: 10px;
        padding-bottom: calc(60px / 5);
        width: 60px;
        height: 60px;
        transition: all 0.3s;
    }

    details[open] summary span.icon {
        transform: rotate(180deg);
    }

    summary {
        display: flex;
        cursor: pointer;
        justify-content: center;
    }
    h2 {
        /* margin-bottom: 1vh; */
        font-family: "Poppins";
        font-style: normal;
        font-weight: 700;
        font-size: 50px;
        line-height: 75px;
        text-align: center;

        color: #000000;
    }

    h3 {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 600;
        font-size: 35px;
        line-height: 45px;
        /* line-height: 5px; */
        text-align: center;
        margin-bottom: 0vh;
        margin-top: 5vh;
    }

    a {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 600;
        font-size: 30px;
        line-height: 45px;
        margin-bottom: 10vh;
    }
    p {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 400;
        font-size: 33px;
        line-height: 50px;
        text-align: center;
    }
    div {
        margin-top: 50px;
    }
</style>
