export default function Certifications()
{
    return(
        <section className="certifications">
            <h2>Certifications</h2>
            <div className="carousel">
                <div className="carousel-inner">
                    <img src='/images/cert-ai102.png' alt="AI-102 Certification" />
                    <img src='/images/cert-ai900.png' alt="AI-900 Certification" />
                    {/* <img src="images/cert-az900.png" alt="AZ-900 Certification" />
                    <img src="images/cert-datacamp.png" alt="DataCamp Certification" /> */}
                </div>
                <button className="carousel-btn prev">&lt;</button>
                <button className="carousel-btn next">&gt;</button>
            </div>
        </section>

    );
}