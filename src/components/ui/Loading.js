import css from "./Loading.module.css";
import ReactDOM from 'react-dom';

export default function Loading({isLoading, isFull}) {
    if (!isLoading) return null;

    if (isFull) {
        return ReactDOM.createPortal(
            <div className={css.ldsDualRing}></div>,
            document.getElementById("loading")
        );
    } else {
        return <div className={css.ldsEllipsis}>
            <div/>
            <div/>
            <div/>
            <div/>
        </div>
    }
}