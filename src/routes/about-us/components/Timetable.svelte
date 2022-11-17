<script>
    export let timetable_src;
</script>

<section>
    <h2>Timetable</h2>
    <img alt="timetable" src={timetable_src} />
</section>

<style>
    section {
        text-align: center;
        width: 60%;
        margin-top: 10vh;
    }
    img {
        width: 100%;
    }
    h2 {
        margin-bottom: 5vh;
        font-family: "Poppins";
        font-style: normal;
        font-weight: 700;
        font-size: 50px;
        line-height: 75px;
        text-align: center;
        color: #000000;
    }
</style>
