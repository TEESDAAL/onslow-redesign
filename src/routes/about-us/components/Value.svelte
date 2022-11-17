<script>
    export let name;
    export let description;
</script>

<section>
    <h3>{name}</h3>
    <div class="bar" />
    <p>{description}</p>
</section>

<style>
    section {
        width: 60%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    h3 {
        margin-top: 5vh;
        font-family: "Poppins";
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        text-align: center;

        color: rgba(4, 36, 27, 0.8);
    }
    .bar {
        margin-bottom: 2vh;
        height: 2px;
        background-color: #b03b3e;
        width: 40%;
    }
    p {
        margin-top: 4vh;
        font-family: "Poppins";
        font-style: normal;
        font-weight: 400;
        font-size: 25px;
        text-align: center;

        color: #000000;
    }
    @media (orientation: portrait) {
        h3 {
            margin: 20px 0 0 0;
            font-size: 5vw;
            line-height: normal;
        }

        p {
            margin: 0;
            font-size: 4vw;
            line-height: normal;
        }
        .bar {
            width: 70%;
        }
    }
</style>
