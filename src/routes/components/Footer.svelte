<footer>
    <div id="basic-info">
        <h3 id="name">Onslow College</h3>
        <p id="address">Burma Road, Johnsonville, Wellington 6035</p>
    </div>
    <div id="contact-info">
        <h3>Contact us</h3>
        <p>Phone: (+64) 4 478 8189</p>
        <p>
            Email: <a id="email" href="mailto:principalpa@onslow.school.nz"
                >principalpa@onslow.school.nz</a
            >
        </p>
    </div>
    <div class="navigation">
        <h3>Important Links</h3>
        <a href="/">Home</a>

        <a href="about-us">About Onslow</a>
    </div>
</footer>

<style>
    footer {
        display: flex;
        margin-top: 5vh;
        width: 100vw;
        min-height: 20vh;
        background-color: rgba(4, 36, 27, 0.8);
        color: #fff;
        font-size: 1.5em;
        justify-content: space-around;
        align-items: center;
    }
    a {
        color: white;
    }
    footer div {
        display: flex;
        flex-direction: column;
        width: 30%;
        min-height: calc(20vh * 0.7);
    }
    footer div :is(p, a) {
        opacity: 0.8;
        font-size: 0.8em;
    }
    #email {
        font-size: 1em;
    }

    @media (max-aspect-ratio: 5/4) {
        footer {
            flex-direction: column;
        }
        footer div {
            width: 90%;
            font-size: max(0.8em, 2.5vw);
            min-height: 0;
            margin: 20px 0;
        }
    }
</style>
