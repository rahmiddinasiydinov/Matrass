import './Card.scss';

interface Itechno{
    name: string, 
    video: string, 
    desc:string
}

export const TechnoCard: React.FC<Itechno> = ({name, video, desc}) => {
    
    return (
      <div className="techno__card">
            <h3 className="techno__card--title">{name}</h3>
        <iframe
          width="407"
          height="300"
          src={video}
          title="YouTube video player"
          className='techno__card--video'
          allow="fullscreen; accelerometer;clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        >Video failed</iframe>
            <p className="techno__card--desc">{ desc}</p>
      </div>
    );
}

