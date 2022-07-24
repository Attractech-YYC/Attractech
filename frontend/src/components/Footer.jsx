const year = new Date().getFullYear();

export const Footer = () => {
    return (
        <div className="text-center bg-dark py-2 footer">
            <p className="mt-2 mb-2 text-white fs-6">&copy; Attractech {year}</p>
        </div>
    )
}