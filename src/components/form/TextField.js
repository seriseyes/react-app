import css from "./Form.module.css";

export default function TextField({value, caption, description, type, name, required, placeholder, inline, onChange}) {
    return <div style={inline ? {flexDirection: "row", alignItems: "center"} : null} className={css.tfWrap}>
        {caption || required ? <label className={`${css.tfCaption} ${required ? css.tfRequired : ""}`}>{caption || ""}</label> : null}
        <input name={name} onChange={onChange} value={value} className={css.tf} type={type ? type : "text"} placeholder={placeholder}/>
        {description ? <label className={css.tfDescription}>{description}</label> : null}
    </div>;
}