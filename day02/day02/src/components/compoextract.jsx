import '../styles/style.css'

function getImageUrl(imageId, size = 's') {
    return (
      'https://i.imgur.com/' +
      imageId +
      size +
      '.jpg'
    );
  }
  
  export default function Profile({title,profession,awards,discoverd,imgaeurl}) {
    return (
        <section className="profile">
          <h2><span>{title}</span></h2>
          <img
            className="avatar"
            src={getImageUrl(imgaeurl)}
            alt="Maria Skłodowska-Curie"
            width={70}
            height={70}
          />
          <ul>
            <li>
              <b>Profession: </b>
              <span>{profession}</span>
            </li>
            <li>
              <b>Awards: 4 </b>
              (<span>{awards}</span>)
            </li>
            <li>
              <b>Discovered: </b>
              <span>{discoverd}</span>
            </li>
          </ul>
        </section>
    );
  }
  

  