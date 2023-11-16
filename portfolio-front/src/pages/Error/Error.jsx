function Error() {
    return (
        <div className="error-page__ctn error">
            <h1 className="error__title">404</h1>
            <p className="error__txt">Oups! La page que vous demandez n'existe pas.</p>
            <a className="error__link" href="/">Retourner sur la page d'accueil
            </a>
        </div>

    )
}

export default Error