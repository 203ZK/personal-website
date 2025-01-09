import Section from "../Section";

import todoGif from "../../media/todo-gif.gif";
import styles from "../../styles/projects-indiv.module.css";

function TodoList() {
    return (
        <>
            <div className={styles.projectIntro}>
                <h2>To-Do List</h2>
                <img src={todoGif} className={styles.projectGif} />
                <p className={styles.projectDescription}>
                    I began learning <strong>web development</strong> in 2024, from the renowned <a href="https://www.theodinproject.com/" className={styles.odinLink}>Odin Project</a>. I decided to pick up this skill because I realised that in order to create things that people or organisations can use in their daily lives, this is the <i>one thing</i> I'd need to learn.
                    <br/><br/>
                    As part of the curriculum, I had the opportunity to gradually expand my skillsets by building small, bite-sized applications, such as this one! I'd say that this particular project was significantly challenging because it integrated all the things I'd learnt in previous lessons: <strong>Javascript</strong>, <strong>HTML</strong>, <strong>CSS</strong>, and a bit of OOP.
                    <br/><br/>
                    Without being able to rely on frameworks, it forced me to practise <strong>writing neat and organised code.</strong> While the end product isn't the prettiest or the most complex, what it <i>did</i> do is give me a sneak peek of the power of web development.
                </p>
                
                <div className={styles.returnSection}>
                    <Section title="Back to Projects" link="/projects" />
                    <Section title="Go to GitHub" link="https://github.com/203ZK/To-Do-List/tree/main" target="__blank" />
                </div>
            </div>
        </>
    );
}

export default TodoList;