export function renderProjects() {
  return `
    <div class="main__wrapper">
        <section id="projects">
          <h2 class="main__title">My Projects</h2>
          <div class="project">
            <div class="project__element" onClick="">
              <h6 class="project__date">November 2023</h6>
              <h3 class="project__title">Matrices calculator</h3>
              <p class="project__desc">
                After I learnt about arrays, vectors and the math behind them, I
                was tasked to develop a complex project as another final
                project, so I teamed with some other classmates and made a
                little calculator that could receive two NxN matrices and make
                addition or multiplication. It also included an option to make a
                transposed 3x3 matrix of the given matrix.
              </p>
            </div>

            <div class="project__element">
              <h6 class="project__date">June 2024</h6>
              <h3 class="project__title">Basic game projects</h3>
              <p class="project__desc">
                In my learning process at the University, I've been tasked to
                develop some simple and very known games as final projects in
                order to show my knowledge, and so I did: Minesweeper and
                Tic-tac-toe.
              </p>
            </div>

            <div class="project__element">
              <h6 class="project__date">November 2024</h6>
              <h3 class="project__title">Teaching application</h3>
              <p class="project__desc">
                Time passes at the University, and the tasks get more complex,
                this time I was asked to make an app that demonstrates a proper
                management of the Analysis and Design stages of the Software's
                lifespan, so I built an app where an administrator receives
                teaching applications and promotes them to a test stage (to
                verify the quality of the applicant) or just reject them, with
                enough application promotions, the applicant would be fully
                hired. On the other side, the applicants could choose which job
                they want to apply to, and after submitting an application, they
                could see the progress of it.
              </p>
            </div>
          </div>
        </section>
        </div>
    `;
}
