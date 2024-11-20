type mainProps = {
    h2: string;
    p?:string;
}
export default function MainHeading({h2 , p }:mainProps){
    return(
    <div className="main-heading">
        <h2>{h2}</h2>
        {p && <p>{p}</p>}
    </div>
    )
}