export default function Card(props) {
    return (
        <a href="#" className="card text-center" style="line-height: 0px;">
            <img className="card-d p-2" src={props.thumbnail} alt="imagen" />
            <div>
                <h5 class="card-title" style="font-size: 17px;">{props.title}</h5>
                <p>{props.description}</p>
            </div>
        </a>
    )
}