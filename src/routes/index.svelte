<script lang="ts">
    import ImageCarousel from "./components/ImageCarousel.svelte";
    import MainHeader from "./components/MainHeader.svelte";
    import Nav from "./components/Nav.svelte";
    let imageList: string[][] = [
        ["/blue.png", "1st image"],
        ["/green.png", "2nd image"],
        ["/purple.png", "3rd image"],
        ["/red.png", "4th image"],
        ["/yellow.png", "5th image"],
    ];
</script>

<MainHeader />
<div id="content">
    <Nav />
    <div class="h-bar" />
    <ImageCarousel {imageList} />
</div>

<style>
    #content {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .h-bar {
        width: 70%;
        height: 3px;
        background-color: black;
    }
</style>
