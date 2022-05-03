import './About.scss'
import { Container } from "@mui/material";


export const About: React.FC = () => {
    return (
      <Container maxWidth="xl">
        <div id="about-us" className="about">
          <div className="about__wrapper">
            <h2 className="about__title">Dream Cloud kompaniyasi haqida</h2>
            <p className="about__text">
              Penatibus viverra gravida rhoncus in. At turpis morbi ante tortor
              a est. Habitant adipiscing ut sed pulvinar tellus, ut urna,
              fermentum:
            </p>
            <ul className="about__list">
              <li className="about__item">
                Penatibus viverra gravida rhoncus in.
              </li>
              <li className="about__item">
                Dolor integer in interdum viverra risus dolor enim.
              </li>
              <li className="about__item">
                Turpis senectus eu, eget aenean nulla pellentesque sed ut
                tempor.
              </li>
            </ul>
          </div>
          <div className="about__wrapper">
            <iframe
              width="625"
              height="401"
              src="https://www.youtube.com/embed/p3N_woHHLOs"
              title="YouTube video player"
              allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="about__video"
            ></iframe>
          </div>
        </div>
        <div id="about-us" className="about">
          <div className="about__wrapper">
            <iframe
              width="625"
              height="401"
              src="https://www.youtube.com/embed/XaMV5Y8TKsc"
              title="YouTube video player"
              allow="accelerometer;fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="about__video"
            ></iframe>
          </div>
          <div className="about__wrapper">
            {" "}
            <p className="about__text">
              Libero erat praesent ullamcorper eget tortor sed et. Nec id
              lobortis gravida vitae. Scelerisque id fusce vitae ut. Integer sed
              vulputate sed nec. Arcu id mattis erat et id.
            </p>
            <ol className="about__list--ordered">
              <li className="about__item">
                Id risus phasellus laoreet eget. A nec pulvinar.
              </li>
              <li className="about__item">
                Eu justo, tincidunt fringilla diam nulla.
              </li>
              <li className="about__item">
                Amet, nullam cras lacus, fermentum leo tellus sagittis.
              </li>
              <li className="about__item">
                Facilisi mauris condimentum sagittis odio rhoncus semper.
              </li>
            </ol>
            <p className="about__desc">
              Ac tortor volutpat pellentesque mauris nisi, praesent. Et tempus
              accumsan est elementum feugiat arcu mauris tincidunt. Eget
              faucibus pharetra et luctus eget ut fames. A cursus elementum
              egestas eu scelerisque id.
            </p>
          </div>
        </div>
      </Container>
    );
}