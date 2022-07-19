import css from "./Layout.module.css";

/**
 * Доторх элементүүд нь босоо чиглэлд байрлана
 *
 * @author Баярхүү.Лув 2022.07.19
 * @param onClick {function} - Дээр нь дарах үед ажиллах функц
 * @param style {Object} - Style
 * @param className {string} - className
 * @param children {React.Element} - Дотор нь харуулах элемент
 * @returns {JSX.Element} div
 */
export default function Row({onClick, style, className, children}) {
    return (
        <div onClick={onClick} style={style}
             className={`${css.row}${className ? " " + className : ""}`}>
            {children}
        </div>
    );
};