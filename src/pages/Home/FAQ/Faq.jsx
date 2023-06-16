import React from 'react'
import { Fade, Slide } from "react-awesome-reveal";

function Faq() {
    return (
        <div>

            <div className='w-10/12 mx-auto text-center my-10'>

                <h4 className='text-lg md:text-xl text-[#FF7703] font-bold'>FAQS</h4>
                <h2 className='text-2xl md:text-4xl font-bold text-gray-500'>Frequently Asked Questions</h2>
            </div>
            <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10'>
                <Slide>

                    <div className='md:my-5'>
                        <div className="collapse collapse-plus bg-[#FF7703] my-2">
                            <input type="radio" name="my-accordion-1" checked="checked" />
                            <div className="collapse-title text-xl font-medium text-white">
                                Can I use it for my clients?
                            </div>
                            <div className="collapse-content text-white">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-[#FF7703] my-2">
                            <input type="radio" name="my-accordion-1" />
                            <div className="collapse-title text-xl font-medium text-white">
                                Is there a money back guarantee?
                            </div>
                            <div className="collapse-content text-white">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-[#FF7703] my-2">
                            <input type="radio" name="my-accordion-1" />
                            <div className="collapse-title text-xl font-medium text-white">
                                Do I get free updates?
                            </div>
                            <div className="collapse-content text-white">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                            </div>
                        </div>
                    </div>
                </Slide >
                <Slide direction={'right'}>
                    <div className='md:my-5'>
                        <div className="collapse collapse-plus bg-[#FF7703] my-2">
                            <input type="radio" name="my-accordion-2" checked="checked" />
                            <div className="collapse-title text-xl font-medium text-white">
                                What courses are available?
                            </div>
                            <div className="collapse-content text-white">
                                <p>Guitar, Piano, Ukulele, Violin, Drums, Flute</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-[#FF7703] my-2">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium text-white">
                                How long are the courses?
                            </div>
                            <div className="collapse-content text-white">
                                <p>2 years</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-[#FF7703] my-2">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium text-white">
                                Where is Arpeggio Music School and Workshop located and how do I get in touch?
                            </div>
                            <div className="collapse-content text-white">
                                <p>Head Quarter: 361/ A, MM Ali Road Circle, Dampara Chattogram
                                    Halisahar branch: Block L, Lane 3, Road 1, House 14, Halishahar, Chattogram</p>
                            </div>
                        </div>
                    </div>
                </Slide>



            </div>
        </div>
    )
}

export default Faq