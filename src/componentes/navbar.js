export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg bg-light d-flex justify-content-center">
        <div id="navbar-location" class="container-fluid">
            <a class="navbar-brand" href="#"><img src="img/logo.png" id="nav-f"/></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul id="li-d" class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">INICIO</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#">QUIENES SOMOS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#">PRODUCTOS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#">CONTACTO</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}