<script>
    import InfoSideBar from "./components/InfoSideBar.svelte";
    import InfoBox from "./components/InfoBox.svelte";
    import { teachers } from "../../data/database.json";
    import NavBar from "../../components/NavBar.svelte";
    import Footer from "../../components/Footer.svelte";
    /** @type {import('./$types').PageData} */

    export let data;
    let teacher_name = data.post.name;
    let teacher = teachers[teacher_name];
    let test = {
        name: teacher.name,
        pronouns: teacher.pronouns,
        highest_role: teacher.highest_role,
        roles: teacher.roles,
        contact_info: teacher.contact_info,
        about_me: teacher.about_me,
        qualifications: teacher.qualifications,
        subjects: teacher.subjects,
        image_path: teacher.image_path,
    };
    console.log(teacher_name, teacher);
    let qualifications = "";
    console.log();
    for (const qualification of test.qualifications) {
        qualifications += `    - ${qualification}<br>`;
    }

    let subjects_taught = "I teach; ";
    for (let i = 0; i < test.subjects.length; i++) {
        let subject = test.subjects[i];
        if (i == test.subjects.length - 2 && test.subjects.length != 1) {
            subjects_taught += `<a href="../subjects/${subject}">${subject}<a>, and `;
        } else {
            subjects_taught += `<a href="../subjects/${subject}">${subject}<a>, `;
        }
    }
    subjects_taught += ".";
</script>

<NavBar />

<main>
    <div class="info-container">
        <InfoSideBar
            name={test.name}
            image_path={test.image_path}
            highest_role={test.highest_role[0]}
            description={test.highest_role[1]}
            contact_info={test.contact_info}
        />
    </div>
    <div id="side-bar">
        <InfoBox title="About Me" description={test.about_me} />
        <InfoBox title="Qualifications" description={qualifications} />
        <InfoBox title="What I teach" description={subjects_taught} />
    </div>
</main>
<Footer />

<style>
    main {
        display: flex;
        flex-direction: row;
        margin-top: 100px;
    }

    .info-container {
        display: flex;
        justify-content: center;
        width: max(40%, 500px);
    }
    #side-bar {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: calc(100% - max(30%, 400px));
        justify-content: space-between;
    }
    @media (orientation: portrait) {
        main {
            flex-direction: column;
            margin-top: 0;
        }
        main :is(.info-container, #side-bar) {
            width: 100%;
        }
    }
</style>
