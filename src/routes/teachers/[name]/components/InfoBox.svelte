<script lang="ts">
    export let title;
    export let description;
</script>

<div class="info-block">
    <h1>{title}</h1>
    <div class="bar" />
    <p>{@html description}</p>
</div>

<style>
    .info-block {
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 60%;
        background-color: rgba(241, 241, 241);
        padding: 30px;
        /* margin-top: 50px; */
        text-align: center;
        filter: drop-shadow(2px 2px 2px darkgrey);
    }
    h1 {
        margin-bottom: 20px;
    }
    .info-block p {
        font-size: 1.2em;
        margin-left: 20px;
        margin-right: 20px;
    }

    @media (orientation: portrait) {
        .info-block {
            box-sizing: border-box;
            width: 100%;
            margin-top: 20px;
        }
    }
</style>
