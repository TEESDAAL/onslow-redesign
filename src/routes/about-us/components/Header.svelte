<script>
    export let title;
    export let image_path;
</script>

<header style="background-image: url({image_path});">
    <h1>{title}</h1>
</header>

<style>
    header {
        background-size: cover;
        background-repeat: no-repeat;
        width: 100vw;
        height: 50vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    @media (orientation: landscape) {
        header {
            background-position: 0 -8vw;
        }
    }
    h1 {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 700;
        font-size: max(70px, 6vw);
        line-height: 144px;
        text-align: center;
        color: #ffffff;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
</style>
