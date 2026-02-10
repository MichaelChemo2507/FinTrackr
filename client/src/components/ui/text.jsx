export default function Text({ children, style = {} }) {
    return (
        <p style={style}>
            {children}
        </p>
    );
}