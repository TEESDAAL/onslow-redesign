<script lang="ts">
    import Icon from "./Icon.svelte";
</script>

<nav>
    <section>
        <Icon imagePath="/onslow-logo.png" text="About Onslow" url="about-us" />
        <Icon
            imagePath="/subjects-icon.png"
            text="Subjects"
            url="subjects"
            scaling={1.3}
        />
        <Icon
            imagePath="/international-icon.png"
            text="International"
            url="international"
        />
        <Icon imagePath="careers-icon.png" text="Careers" url="careers" />
        <Icon
            imagePath="/enrollment-icon.png"
            text="Enrollment"
            url="enrollment"
            last_child={true}
        />
    </section>
</nav>

<style>
    nav {
        margin-top: 70px;
        margin-bottom: 50px;
        width: 70%;
    }

    section {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }

    @media (orientation: portrait) {
        section {
            display: grid;
            grid-template-columns: auto auto;
            column-gap: 20px;
        }
        nav {
            margin: 0;
        }
    }
</style>
