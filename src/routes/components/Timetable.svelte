<script lang="ts">
    import { loop_guard } from "svelte/internal";

    export let CALENDAR = {
        "Jul 25": [
            {
                link: "#",
                title: "Lorem Ipsum",
                description: "Dollar sit amet",
                location: "Consecutor",
            },
        ],
        "Jul 23": [
            {
                link: "#",
                title: "Lorem Ipsum",
                description: "Dollar sit amet",
                location: "Consecutor",
            },
        ],
        "Jul 18": [
            {
                link: "#",
                title: "Lorem Ipsum",
                description: "Dollar sit amet",
                location: "Consecutor",
            },
        ],
        "Jul 7": [
            {
                link: "#",
                title: "Lorem Ipsum",
                description: "Dollar sit amet",
                location: "Consecutor",
            },
            {
                link: "#",
                title: "Lorem Ipsum",
                description: "Dollar sit amet",
                location: "Consecutor",
            },
        ],
    };
</script>

<div id="holder">
    <h1 id="important-dates">Important dates</h1>
    <div class="bar" />
    <table id="info">
        {#each Object.entries(CALENDAR) as day}
            {#each day[1] as event}
                <tr>
                    <td class="date"><h1>{day[0]}</h1></td>
                    <td class="info">
                        <div class="event-info">
                            <div class="text-holder">
                                {#if "link" in event}
                                    <a href={event.link}
                                        ><h2>{event.title}</h2></a
                                    >
                                {:else}
                                    <h2>{event.title}</h2>
                                {/if}
                                <h4>- {event.description}</h4>
                                <h4>- {event.location}</h4>
                            </div>
                        </div>
                    </td>
                </tr>
            {/each}
        {/each}
    </table>
</div>

<style>
    #holder {
        border-radius: 10px;
        width: 50%;
        text-align: center;
        padding: 10px;
        background-color: #f1f1f180;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .bar {
        height: 2.5px;
        width: 60%;
        background-color: black;
        margin-bottom: 20px;
    }
    #important-dates {
        margin-bottom: 10px;
    }
    .date {
        border-right: 3px solid #151515;
        width: 40%;
        height: 6em;
    }
    #info {
        border-spacing: 0 0;
        width: 100%;
        background-color: #f1f1f1;
        border-radius: 10px;
    }
    .info {
        width: 70%;
    }
    .text-holder {
        display: inline-block;
        text-align: right;
        width: auto;
    }
</style>
