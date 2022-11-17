<script>
    import Header from "./components/Header.svelte";
    import NavBar from "../components/NavBar.svelte";
    import Footer from "../components/Footer.svelte";
    import Title from "./components/Title.svelte";
    import Info from "./components/Info.svelte";
    import Value from "./components/Value.svelte";
    let values = {
        Whānau: "Onslow College is about being an extended family. It is a collective who cares. We take the time to know each other, and we work hard to make sure that everyone feels safe. Whānau show care for each other.",
        Whenua: "School is important for being a place for akōnga to find sustenance so that they can grow and strive. This means that at Onslow, we focus on wellbeing and identity. This is shown in all that we do and say to sustain growth and the ability to thrive.",
        Whakapapa:
            "Layers make up who we are. The way these layers combine make us unique. It also identifies all that akōnga bring with them each day. The way our families and influences make us who we are and how they connect us.",
        Diversity:
            "At Onslow College we pride ourselves in including and accepting people of different social, socio-economic, learning styles, ethnic, genders, faith, sexual orientation. Valuing diversity is inclusion.",
        Community:
            "A group of people that care about each other and feel they belong together. Onslow is a group of people who balance the rights of the individual against what is best for the group.",
    };
    console.log(Object.entries(values));
</script>

<NavBar />
<main>
    <Header title={"About us"} image_path={"/about-us.jpg"} />
    <Info
        title={"Our Mission"}
        description={"\
Here at onslow our mission is to make academic excellence achieveable for all, and to prepare our \
students for the world that they will face outside of college, whilst providing a safe place for students to grow and express themselves."}
    />
    <Info
        title={"Our Values"}
        description={"To ensure we accomplish our mission we have chosen five values that best represent Onslow College."}
    />
    {#each Object.entries(values) as value}
        <Value name={value[0]} description={value[1]} />
    {/each}
</main>
<Footer />

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>
