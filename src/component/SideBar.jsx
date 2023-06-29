import {Link, useNavigate, useLocation} from 'react-router-dom'

export const SideBar = () => {
    const navigate = useNavigate()
    const logout = () => {
        localStorage.clear()
        navigate("/")
    }

    const location = useLocation().pathname

    const sideArr = [
        {name: 'asosi', link: '/auth/admin'},
        {name: "bo'lim", link: '/auth/admin/category'},
        {name: "mahsulot", link: '/auth/admin/product'},
        {name: "viloyat", link: '/auth/admin/region'},
        {name: "district", link: '/auth/admin/district'},
        {name: "buyrutmalar", link: '/auth/admin/'},
    ]
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{width: "20%", height: '100vh',color:'rgba(199, 132, 33, 0.911)'}}>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <svg className="bi me-2" width="40" height="32">
                    <use xlinkHref="#bootstrap"/>
                </svg>
                <span style={{color:"blue"}} className="fs-4">Admin panel</span>
            </a>
            <hr/>
            <ul className="nav nav-pills flex-column mb-auto">
                {sideArr.map(item => (
                    <li className="nav-item">
                        <Link to={item.link}
                              className={location === item.link ? "nav-link active" : "nav-link"}
                              aria-current="page">
                            <svg className="bi me-2" width="16" height="16">
                                <use xlinkHref="#home"/>
                            </svg>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <hr/>
            <div className="dropdown">
                <a href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
                   id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                    <img
                        src="https://cdn.vox-cdn.com/thumbor/lFpg-UG0RdzRI428Mn_fwVLLYIM=/0x0:6000x4000/1200x900/filters:focal(2520x1520:3480x2480)/cdn.vox-cdn.com/uploads/chorus_image/image/60318957/2023.01.15.Menu.167.Raw.CML.0354.83.jpg"
                        alt="" width="32" height="32"
                        className="rounded-circle me-2"/>
                    <strong>restaurant</strong>
                </a>
                <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                    <li><Link className={"dropdown-item"} style={{color:"rgb(225, 137, 13)"}} to={"/"}>orqaga <i className="bi bi-box-arrow-left"></i>
                    </Link></li>
                    <li>
                        <hr className="dropdown-divider"/>
                    </li>
                    <li>
                        <button className="dropdown-item" style={{color:"red"}} onClick={() => logout()}>chiqish <i
                            className="bi bi-sign-turn-left"></i></button>
                    </li>
                </ul>
            </div>
        </div>
    )
}