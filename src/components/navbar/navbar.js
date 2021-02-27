import "./style.scss";
import {Search} from "react-feather";
import React, { useRef, useState, useEffect } from "react";
import {useHistory, useLocation} from "react-router-dom";
import { ArrowLeft } from "react-feather";

const Navbar = ({onTyping, title, withBack}) => {

    const history = useHistory();
    const location = useLocation();
    const path = location.pathname;
    const $input = useRef();
    const doneTypingInterval = 1000;

    const [Typing, setTyping] = useState(null);

    const handleKeyUp = () => {
        clearTimeout(Typing);
        setTyping(setTimeout(doneTyping, doneTypingInterval));
    }

    const handleKeyDown = () => {
        clearTimeout(Typing);
    }

    const doneTyping = () => {
        const value = $input.current.value;
        onTyping(value);
    }

    const handleBackButton = () => {
        history.goBack();
    }

    useEffect(() => {
        path === '/search' && $input.current.focus();
    }, []);

    return (
        <div className="navbar">
            {
                title ?
                (
                    <div className="title-bar">
                        <div className="action-box">
                            {withBack && <button onClick={handleBackButton}><ArrowLeft/></button>}
                        </div>
                        <h1 className="title">{title}</h1>
                    </div>
                )
                :
                (
                    <div className="search-box" onClick={() => path !== '/search' && history.push("/search")}>
                        <input type="text"
                               disabled={path !== '/search'}
                               placeholder="Cari barang kesukaanku"
                               ref={$input}
                               onKeyUp={handleKeyUp}
                               onKeyDown={handleKeyDown}
                        />
                        <div className="icon">
                            <Search />
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Navbar;