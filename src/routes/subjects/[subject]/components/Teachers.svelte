<script>
    // [{name, image, link},]
    export let teachers = [];
    import Title from "./Title.svelte";
    // import image from ""
</script>

<section>
    <Title title={"Meet Our teachers"} />
    <div class="teacher-container">
        {#each teachers as teacher}
            <a href={`../teachers/${teacher.id}`}>
                <img
                    src={`../../../../../teacher/${teacher.id}.png`}
                    alt="{teacher.name} image"
                />
                <p>{teacher.name}</p>
            </a>
        {/each}
    </div>
</section>

<style>
    section {
        width: 60%;
    }
    a {
        color: #000000;
        text-decoration: none;
        text-align: center;
        margin: 0 5vw;
    }
    p {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 400;
        font-size: 25px;
    }
    img {
        width: max(7vw, 100px);
        border-radius: 50%;
    }
    .teacher-container {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }

    @media (orientation: portrait) {
        p {
            font-size: 4vw;
        }
        section {
            width: 100%;
        }
    }
</style>
