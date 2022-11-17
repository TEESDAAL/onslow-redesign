<script>
    import ImageCarousel from "./components/main-page/ImageCarousel.svelte";
    import MainHeader from "./components/main-page/MainHeader.svelte";
    import Nav from "./components/main-page/Nav.svelte";
    import Timetable from "./components/main-page/Timetable.svelte";
    import TextBlock from "./components/main-page/TextBlock.svelte";
    import NavBar from "./components/NavBar.svelte";
    import { getStudentWellBeingInfo, getCareerInfo } from "./data/store.js";
    import Footer from "./components/Footer.svelte";
    let imageList = [
        ["/DTC.png", "13 Digital Technologies", "subjects/13DTC"],
        ["/BIO.jpg", "13 Biology", "subjects/13BIO"],
        ["/SCI.jpg", "11 General Science", "subjects/11SCI"],
        ["/MAT.jpg", "12 Mathmatics", "subjects/12MAT"],
        ["/ECO.jpg", "10 Business and Economics", "subjects/12BSE"],
    ];
    let wellbeing_info = getStudentWellBeingInfo();
    let career_info = getCareerInfo();
</script>

<NavBar />
<MainHeader />
<div id="content">
    <Nav />
    <div class="h-bar" />
    <ImageCarousel {imageList} />
    <Timetable />
    <TextBlock
        title={wellbeing_info.title}
        description={wellbeing_info.description}
        link={wellbeing_info.link}
    />
    <TextBlock
        title={career_info.title}
        description={career_info.description}
        link={career_info.link}
    />
    <Footer />
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
