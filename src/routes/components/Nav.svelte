<script lang="ts">
    import Icon from "./Icon.svelte";
</script>

<nav>
    <section>
        <Icon imagePath="url('https://ichef.bbci.co.uk/news/640/cpsprodpb/AFE8/production/_96723054_0d6ac4ea-ab1b-4700-ada9-4632cbea4908.jpg')" text="crow" url="#"/>
        <Icon imagePath="url('https://ichef.bbci.co.uk/news/640/cpsprodpb/AFE8/production/_96723054_0d6ac4ea-ab1b-4700-ada9-4632cbea4908.jpg')" text="crow" url="#"/>
        <Icon imagePath="url('https://ichef.bbci.co.uk/news/640/cpsprodpb/AFE8/production/_96723054_0d6ac4ea-ab1b-4700-ada9-4632cbea4908.jpg')" text="crow" url="#"/>
    </section>
    <section id="lower-section">
        <Icon imagePath="url('https://ichef.bbci.co.uk/news/640/cpsprodpb/AFE8/production/_96723054_0d6ac4ea-ab1b-4700-ada9-4632cbea4908.jpg')" text="crow" url="#"/>
        <Icon imagePath="url('https://ichef.bbci.co.uk/news/640/cpsprodpb/AFE8/production/_96723054_0d6ac4ea-ab1b-4700-ada9-4632cbea4908.jpg')" text="crow" url="#"/>
    </section>
</nav>

<style>
    nav {
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        width: 50%;
    }

    section {
        display: flex;
        width: 100%;
        justify-content: space-around;
    }
    #lower-section {
        width:66.5%;
    }
</style>