<script>
    export let required_stationary;
    import Title from "./Title.svelte";
</script>

<section>
    <Title title={"Required Stationary"} />
    {#each required_stationary as item}
        <p>{item}</p>
    {/each}
</section>

<style>
    section {
        width: 70%;
    }
    p {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 400;
        font-size: 33px;
        line-height: 50px;
        text-align: center;
    }
    @media (orientation: portrait) {
        p {
            font-size: 4vw;
            line-height: normal;
        }
    }
</style>
