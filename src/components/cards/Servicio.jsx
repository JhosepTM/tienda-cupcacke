const Servicio = () => (
    <div class="pricing-table l-block color-first">
        <header class="pricing-table__header center">
            <span class="pricing-table__title">Gratis</span>
        </header>
        <div class="pricing-table__price center t3">$ 0 USD</div>
        <div class="pricing-table__description smaller center">
            Estudia gratis, obtén certificados y prueba la experiencia EDteam.
        </div>
        <ul class="pricing-table__features small">
            <li class="pricing-table__feature icon-check">
                <svg class="svg-icon before"><use href="img/icons.svg#check"></use></svg>
                <span>Acceso a cursos gratuitos</span>
            </li>
            <li class="pricing-table__feature icon-check">
                <svg class="svg-icon before"><use href="img/icons.svg#check"></use></svg>
                <span>Aprende desarrollo web gratis</span>
            </li>
            <li class="pricing-table__feature icon-check">
                <svg class="svg-icon before"><use href="img/icons.svg#check"></use></svg>
                <span>Acceso gratis a clases demo de cursos premium</span>
            </li>
            <li class="pricing-table__feature icon-check">
                <svg class="svg-icon before"><use href="img/icons.svg#check"></use></svg>
                <span>Acceso a EDtaller en vivo</span>
            </li>
            <li class="pricing-table__feature icon-check">
                <svg class="svg-icon before"><use href="img/icons.svg#check"></use></svg>
                <span>Certificado de culminación</span>
            </li>
        </ul>
        <footer class="pricing-table__footer">
            <a class="button--ghost button--small full center" href="https://app.ed.team">¡Comienza hoy!</a>
        </footer>
    </div>
)

export default Servicio;