const year = new Date().getFullYear();

export const Footer = () => {
    return (
        <div className="text-center bg-dark py-2">
            <p className="mt-3 text-white fs-6">&copy; Attractech {year}</p>
        </div>
    )
}