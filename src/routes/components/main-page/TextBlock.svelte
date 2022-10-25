<script lang="ts">
    export let title;
    export let description;
    export let link;
</script>

<div class="info-block">
    <h1>{title}</h1>
    <div class="bar" />
    <p>{description}</p>
    <a href={link[0]}>{link[1]}</a>
</div>

<style>
    .info-block {
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;
        background-color: #f1f1f180;
        padding: 10px;
        margin-top: 50px;
        text-align: center;
    }
    .info-block :is(p, a) {
        font-size: 1.2em;
        margin-left: 20px;
        margin-right: 20px;
    }
    .bar {
        margin-top: 10px;
        margin-bottom: 20px;
        height: 3px;
        width: 70%;
        background-color: black;
    }
    .info-block > a {
        margin-top: 10px;
        font-weight: bold;
        font-size: 1.3em;
    }
</style>
