export const Footer=()=>{
    const year=  new Date().getFullYear()
    return(
        <div className="pt-5 ps-4 bg-dark bg-gradient text-light">
            <div className="col-6">
                <p className="h2 fw-semibold">Zima Travels & Tours</p>
                <p className="h6 pt-3 pb-3">Experience the world like never before with Zima Travels. We specialize in creating personalized, unforgettable travel experiences</p>
                <p className="h4 ">Follow us</p>
            </div>

        <div className="text-center display-9">
            copyrights&copy;{year}
        </div>
        </div>
    )
}