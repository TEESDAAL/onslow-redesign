<script>
    export let title;
    export let description;
    import Title from "./Title.svelte";
    import Description from "./Description.svelte";
</script>

<section>
    <Title {title} />
    <Description {description} />
</section>

<style>
    section {
        width: 70%;
    }
</style>
