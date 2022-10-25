<script lang="ts">
    import Icon from "./Icon.svelte";
</script>

<nav>
    <section>
        <Icon
            imagePath="/onslow-logo.png"
            text="About Onslow"
            url="about-us.html"
        />
        <Icon
            imagePath="/subjects-icon.png"
            text="Subjects"
            url="subjects-us.html"
            scaling={1.3}
        />
        <Icon
            imagePath="/international-icon.png"
            text="International"
            url="international.html"
        />
    </section>
    <section id="lower-section">
        <Icon imagePath="careers-icon.png" text="Careers" url="careers.html" />
        <Icon
            imagePath="/enrollment-icon.png"
            text="Enrollment"
            url="enrollment.html"
        />
    </section>
</nav>

<style>
    nav {
        margin-top: 70px;
        margin-bottom: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 70%;
    }

    section {
        display: flex;
        width: 100%;
        justify-content: space-around;
        align-items: center;
    }
    #lower-section {
        width: 66.5%;
    }
</style>
