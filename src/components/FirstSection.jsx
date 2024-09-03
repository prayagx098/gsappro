import first from "../assets/first.jpg"
import { LuSlidersHorizontal } from "react-icons/lu";

import smg1 from "../assets/Hogan.svg"
import smg2 from "../assets/Baldwin.svg"
import smg3 from "../assets/flickr.svg"
import smg4 from "../assets/Sulzer.svg"
const FirstSection = () => {
    return (
        <section>
            <div className="h-[100vh - 10rem] flex [&>*]:flex-1">
                <div className="flex justify-center">
                    <div className="flex flex-col justify-around">
                        <h1 style={{color:"navyblue"}} className="txt text-8xl font-bold p-3">
                            <span className="border-b-8 border-navy_blue">E</span>thnic
                        </h1>
                        <p className="opacity-50 txt">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea vitae veritatis ab officia est, <br /> voluptatum autem quo voluptates dicta consequuntur quam aliquam ad, nihil temporibus eveniet explicabo exercitationem ipsam alias!
                        </p>
                    </div>
                </div>
                <div
                className="bg-1 flex flex-col justify-around"
                    style={{
                        backgroundImage: `url(${first})`,
                        backgroundPosition: "center",
                        backgroundSize:"cover",
                        height:"70vh",
                        backgroundRepeat:"no-repeat"
                    }}>
                        <div className="w-96 px-12 py-20 text-dark flex flex-col gap-4">
                            <span className="text-xl txt">Space</span>
                            <h1 className="txt text-xl font-bold">Build Your Dreams</h1>
                            <p className="txt text-sm leading-6 text-grey-200">
                                Lorem ipsum dolor sit amet conse em commodi ratione  similique itaque dignissimos.
                                Imp Labom alugit distinctio ea assumenda blanditiis, obcaecati nisi!
                            </p>
                        </div>
                        <div className="flex items-center relative">
                            <div className="btn-1 bg-navy_blue text-white p-4 absolute left-[-3rem]">

                                <LuSlidersHorizontal/>

                            </div>
                            <div className="overflow-hidden">
                                <button className="btn-2 bg-white text-navy_blue py-3 px-6 font-bold">Start Now</button>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="h-20 border-t border-t-[rgbe(1,1,1,.1)]">
                <div className="grid grid_ py-3 gap-4 place-item-center [&>*]:w-40">
                    <img className="icon" src="" alt="" />
                    <img className="icon" src={smg2} alt="" />
                    <img className="icon" src={smg3} alt="" />
                    <img className="icon" src={smg4} alt="" />
                </div>
            </div>
        </section>
    );
}

export default FirstSection