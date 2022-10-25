<script>
    import { fade } from "svelte/transition";

    let y_pos;
</script>

<svelte:window bind:scrollY={y_pos} />
<a href="/" id="is-collapsed-{y_pos > 0}">
    <img src="/onslow-logo.png" alt="onslow-logo" />
    {#if !(y_pos > 0)}
        <h2 in:fade={{ duration: 1000 }}>Onslow&nbsp;College</h2>
    {/if}
</a>

<style>
    * {
        transition: 0.5s;
    }
    img {
        height: 80%;
        margin-left: 15px;
        margin-right: 20px;
        margin-top: 2px;
    }
    h2 {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 700;
        font-size: 25px;
        text-align: center;
    }
    a {
        top: 20px;
        left: 20px;
        border-radius: 50px;
        height: 100px;
        width: 350px;
        background-color: rgba(200, 200, 200, 0.5);
        display: flex;
        align-items: center;
        filter: drop-shadow(10px);
        position: -webkit-sticky;
        position: fixed;
        z-index: 2;
        text-decoration: none;
        color: black;
    }
    #is-collapsed-true {
        width: 100px;
    }
</style>
