import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom'
// import MaterialIcon from './materialIcon';
import MaterialIcon from '@material/react-material-icon';



const navigationArr = [
    {
        link: "/Booking",
        icon: "blur_circular",
        name: "Booking"
    },
    {
        link: "/sampling",
        icon: "email",
        name: "SAMPLING"
    },
    {
        link: "/production",
        icon: "send",
        name: "PRODUCTION"
    },
    {
        link: "/inbox",
        icon: "view_compact",
        name: "INBOX"
    },
    {
        link: "/inbox",
        icon: "person",
        name: "INBOX"
    }
];

class Sidenav extends React.Component {
    state = {
        drawer: false
    }
    navImage = (ele, index) => {

        return (
            <div className="nav_icon_wrapper" key={index}>
                <Link to={ele.link}>
                    <MaterialIcon className="nav_icon" icon={ele.icon || "email"} />
                </Link>
            </div>
        );
    };

    render() {
        return (
            <React.Fragment>
                <section className="sidnav">
                    <div className="sidnav_up">
                        {navigationArr.map((ele, index) => this.navImage(ele, index))}
                    </div>
                </section>
            </React.Fragment>
        );

    };
}


export default Sidenav;
