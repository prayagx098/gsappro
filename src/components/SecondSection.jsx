import third from "../assets/third.jpg"
import mone from "../assets/mone.jpg"
import somal from "../assets/somal.jpg"

const SecondSection = () => {
    return <section className="section-2 h-screen">
            <div className="h-full flex [&>*]:flex-1 items-center">
                <div className="flex items-center justify-center">
                    <div className="w-[385px] [&>*]:w-48 [&>*]:h-48 flex flex-wrap items-center justify-center overflow-hidden">
                        <div></div>
                        <div style={{backgroundImage:`url(${third})`,backgroundSize:"cover"}} className="box box-1 overflow-hidden">

                            <p>Latest</p>
                            <p className="num">01</p>

                        </div>
                        <div style={{backgroundImage:`url(${mone})`,backgroundSize:"cover"}}  className="box box-2 overflow-hidden">

                            <p>Inovative</p>
                            <p className="num">02</p>

                        </div>
                        <div style={{backgroundImage:`url(${somal})`,backgroundSize:"cover"}} className="box box-3">

                            <p>Designs</p>
                            <p className="num">03</p>

                        </div>
                    </div>
                </div>
                <div className="relative overflow-hidden">
                    <div className="text-content_s2 w-80 flex flex-col gap-4">
                        <h1 className="leading-normal text-navy_blue text-8xl font-bold overflow-hidden">postin</h1>
                        <div className="h-7 absolute top-24 pt-1 left-6 overflow-hidden">
                            <h3 className="sm_text text-gray-200 text-xl font-bold">Branding proect</h3>
                        </div>
                        <p className="text-grey-500 leading-6 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint labore quam incidunt repudiandae modi magnam, sapiente tempora sunt maxime est totam numquam deleniti earum vel? Sequi eveniet inventore quod ducimus.</p>
                        <button className="btn">more</button>
                    </div>
                </div>
            </div>
    </section>
};

export default SecondSection