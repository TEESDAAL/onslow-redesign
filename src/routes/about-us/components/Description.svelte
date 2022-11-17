<script>
    export let description;
</script>

<p>{description}</p>

<style>
    p {
        margin-top: 4vh;
        font-family: "Poppins";
        font-style: normal;
        font-weight: 400;
        font-size: 33px;
        line-height: 50px;
        text-align: center;

        color: #000000;
    }

    @media (orientation: portrait) {
        p {
            margin-top: 0;
            font-size: 4vw;
            line-height: normal;
        }
    }
</style>
