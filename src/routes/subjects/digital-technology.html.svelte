<script lang="ts">
    import Header from "./components/Header.svelte";
    import Info from "./components/Info.svelte";
    import RequiredStationary from "./components/RequiredStationary.svelte";
    import { page } from "$app/stores";
    import subject_info from "./subject-info.json";
    console.log($page.url.pathname);
    let relevant_info = subject_info[$page.url.pathname];
</script>

<main>
    <Header
        title={relevant_info.titles[0]}
        image_path={relevant_info.image_path}
    />
    <Info
        title="{relevant_info.titles[1]},"
        description={relevant_info.description}
    />
    <RequiredStationary
        required_stationary={relevant_info.required_stationary}
    />
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>
