<script>
    import { each } from "svelte/internal";

    export let name;
    export let image_path;
    export let highest_role;
    export let description;
    export let contact_info;
</script>

<div class="general-info-holder">
    <img src={image_path} alt="{name} image" class="profile-img" />
    <h1 class="title">{name}</h1>
    <h2 class="role-name">{highest_role}</h2>
    <div class="bar" />
    <h3 class="role-description">{description}</h3>
    <div class="bar" />
    <h2 class="contact-info">Contact Info</h2>
    {#each Object.keys(contact_info) as contact_method}
        <p>{contact_method}: {contact_info[contact_method]}</p>
    {/each}
</div>

<style>
    .general-info-holder {
        box-sizing: border-box;
        padding: 50px;
        width: calc(100% - 150px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: rgba(4, 36, 27, 0.8);
        color: white;
        border-radius: 100px;
        text-align: center;
    }
    .profile-img {
        width: 100%;
        border-radius: 50%;
        margin-bottom: 20px;
    }

    .title {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        text-align: center;
    }

    .role-name {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 200;
        font-size: 20px;
    }

    .bar {
        margin: 20px 0;
        width: 80%;
        height: 2px;
        background-color: white;
    }
    .role-description {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        text-align: center;
    }

    @media (orientation: portrait) {
        .role-description {
            display: none;
        }

        .general-info-holder .bar:nth-last-of-type(1) {
            display: none;
        }
        .general-info-holder {
            width: 100%;
            border-radius: 10px;
        }
    }
</style>
