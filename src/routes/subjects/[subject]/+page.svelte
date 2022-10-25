<script>
    import Header from "./components/Header.svelte";
    import Info from "./components/Info.svelte";
    import RequiredStationary from "./components/RequiredStationary.svelte";
    import Timetable from "./components/Timetable.svelte";
    import SubjectOverview from "./components/SubjectOverview.svelte";
    import NavBar from "../../components/NavBar.svelte";
    import Footer from "../../components/Footer.svelte";
    /** @type {import('./$types').PageData} */
    export let data;
    let subject = data.post;
</script>

<NavBar />
<main>
    <Header title={subject.titles[0]} image_path={subject.image_path} />
    <Info title={subject.titles[1]} description={subject.description} />
    <RequiredStationary required_stationary={subject.required_stationary} />
    <Timetable timetable_src={subject.timetable_path} />
    <SubjectOverview
        internals={subject.internals}
        externals={subject.externals}
    />
    <Footer />
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>
