export function renderHome() {
  return `
      <section class="hero" id="hero">
        <div class="hero__content">
          <h1>I am Daniel Roland</h1>
          <p>Future Software Engineer and video game enthusiast.</p>
        </div>
      </section>
      <div class="main__wrapper">
        <section id="about">
          <h2 class="main__title">About Me</h2>
          <div class="about">
            <h3 class="about__title--upper">Profile</h3>
            <p class="about__desc">
              I have always been interested in knowing how video games work, the
              logic behind the art of programming, and knowing why many programs
              lack the optimization of others. Always willing to learn something
              new, from success and failure, to become a great QA developer.
            </p>
            <h3 class="about__title">Skills</h3>
            <ul class="about__skills">
              <li class="about__skill">
                <span>HTML</span>
                <progress value="35" max="100"></progress>
              </li>

              <li class="about__skill">
                <span>CSS</span>
                <progress value="35" max="100"></progress>
              </li>

              <li class="about__skill">
                <span>JavaScript</span>
                <progress value="30" max="100"></progress>
              </li>

              <li class="about__skill">
                <span>Python</span>
                <progress value="50" max="100"></progress>
              </li>

              <li class="about__skill">
                <span>React</span>
                <progress value="50" max="100"></progress>
              </li>

              <li class="about__skill">
                <span>C++</span>
                <progress value="60" max="100"></progress>
              </li>

              <li class="about__skill">
                <span>C#</span>
                <progress value="65" max="100"></progress>
              </li>
            </ul>
            <h3 class="about__title">Education</h3>
            <ul class="about__education">
              <li>High School Diploma</li>
            </ul>
            <h3 class="about__title">Languages</h3>
            <ul class="about__languages">
              <li>Spanish</li>
              <li>English</li>
            </ul>
            <h3 class="about__title">Interests and hobbies</h3>
            <ul class="about__hobbies">
              <li>Videogame research</li>
              <li>Reading</li>
              <li>Basic Excel tables</li>
              <li>Listening to soft music</li>
            </ul>
          </div>
        </section>
      </div>
    `;
}
