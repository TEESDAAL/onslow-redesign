<script>
    // [{name, image, link},]
    export let teachers;
</script>

<section>
    <h2>Meet Our teachers</h2>
    <div class="teacher-container">
        {#each teachers as teacher}
            <div class="icon">
                <img alt="{teacher.name} image" />
                <a href={teacher.link}> {teacher.name}</a>
            </div>
        {/each}
    </div>
</section>
