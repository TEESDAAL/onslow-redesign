<script>
    import Title from "./Title.svelte";
    export let timetable_src;
</script>

<section>
    <Title title={"Timetable"} />
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
    @media (orientation: portrait) {
        section {
            margin-top: 10px;
        }
    }
</style>
