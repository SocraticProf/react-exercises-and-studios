export default function HobbyLinks( ){
    let hobbyLinks = ["https://www.humblebundle.com", "https://isthereanydeal.com"];

    return(
        <div>
            <a href = {hobbyLinks[0]}>Humble Bundle</a>
            <a href = {hobbyLinks[1]}>Is There Any Deal</a>
        </div>
    );
}