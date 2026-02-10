export default function Icon({ url , style }) {
    return (
        <>
            {url && <img src={url} alt="icon" style={style} />}
        </>
    );
}