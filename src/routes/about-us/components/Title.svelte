<script>
    export let title;
</script>

<h2>{title}</h2>

<style>
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
    @media (orientation: portrait) {
        h2 {
            margin-top: 30px;
            margin-bottom: 10px;
            font-size: 6vw;
            line-height: normal;
        }
    }
</style>
