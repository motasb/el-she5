type phoneProps = {
    num:string;
}
export default function PhoneNumper ({num}:phoneProps){
    return(
    <div className={`${num} phone` }>
        <p>{num}</p>  
        <a href={`tel:${num}`}>
            <i className="fa-solid fa-phone"></i>
        </a>
    </div>
    )
}