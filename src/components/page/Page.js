import React from 'react';
import './page.css'
import { Link, useHistory, useLocation } from 'react-router-dom'

const Page = () => {
    const location = useLocation();

    const currentUrl = location.pathname

    console.log('Page',currentUrl)

    const main = 
    <div>
        <div className="page">
        </div>
    </div>

    const experience = 
    <div>
        <div className="page__experience">
        </div>
    </div>


    const team = 
    <div>
        <div className="page__team">
        </div>
    </div>
    

    const menuNavigation = (currentUrl) => {
        if (currentUrl == "/" ) {return main}
        else if (currentUrl == '/team') {return team}
        else if (currentUrl == '/experience') {return experience}
    }


        return (
            <div>
                {
                    menuNavigation(currentUrl)                
                }
            </div>
        )

}

export default Page;