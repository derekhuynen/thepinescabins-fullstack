import react, {useEffect, useState} from 'react'
import '../css/Nav.css'

export default function SearchBar() {
    const [SearchBar, setSearchBar] = useState("");

    useEffect(() => {
        setSearchBar("SearchBar")
    }, [])

    return (
        <div className={"search-container"}>
            <div className={"search"}>
                <div className={"search-text"}>Start your search</div>
            </div>
        </div>
    )
}