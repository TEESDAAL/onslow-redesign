<script lang="ts">
    import ImageCarousel from "./components/ImageCarousel.svelte";
    import MainHeader from "./components/MainHeader.svelte";
    import Nav from "./components/Nav.svelte";
    let imageList: string[][] = [
        ["/MicrosoftTeams-image.png", "1st image"],
        ["/MicrosoftTeams-image (1).png", "2nd image"],
        ["/MicrosoftTeams-image (2).png", "3rd image"],
        ["/MicrosoftTeams-image (3).png", "4th image"],
        ["/MicrosoftTeams-image (4).png", "5th image"]
        ];
</script>

<MainHeader />
<div id="content">
    <Nav/>
    <div class="h-bar"/>
    <ImageCarousel imageList={imageList}/>
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