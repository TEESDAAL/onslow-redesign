<script>
    export let required_stationary;
</script>

<section>
    <h2>Required Stationary</h2>
    {#each required_stationary as item}
        <p>{item}</p>
    {/each}
</section>

<style>
    section {
        width: 70%;
    }
    h2 {
        margin-top: 10vh;
        margin-bottom: 4vh;
        font-family: "Poppins";
        font-style: normal;
        font-weight: 700;
        font-size: 50px;
        line-height: 75px;
        text-align: center;

        color: #000000;
    }

    p {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 400;
        font-size: 33px;
        line-height: 50px;
        text-align: center;
    }
</style>
