export default function Header(props) {
    return (
      <header className="profile">
        <img src={require('../images/photo.JPG')} alt="James Ishaku" id="profile__img"/>
        <h3 id="twitter">{props.name}</h3>
        <p id="slack">js_nerd</p>
      </header>
    )
}