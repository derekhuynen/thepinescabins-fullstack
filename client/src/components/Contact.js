import '../css/Test2.css';
import React from "react";
import { Button } from "@material-ui/core";
import Email from "../CabinPhotos/Email.png"
import Phone from "../CabinPhotos/Phone.png"


export default function Contact() {

    return (


        <div className='outerContainer'>
            {/*<div className='contactForm'>*/}
            {/*    <form id='contact-form' noValidate className={'form'}>*/}
            {/*        /!* Row 1 of form *!/*/}
            {/*        <div className='rowformRow'>*/}
            {/*            <div className='col-6'>*/}
            {/*                <input*/}
            {/*                    type='text'*/}
            {/*                    name='name'*/}
            {/*                    className='formInputOne'*/}
            {/*                    placeholder='Name'*/}
            {/*                />*/}
            {/*            </div>*/}
            {/*            <div className='col-6'>*/}
            {/*                <input*/}
            {/*                    type='email'*/}
            {/*                    name='email'*/}
            {/*                    className='formInputOne'*/}
            {/*                    placeholder='Email address'*/}
            {/*                />*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        /!* Row 2 of form *!/*/}
            {/*        <div className='rowformRow'>*/}
            {/*            <div className='col'>*/}
            {/*                <input*/}
            {/*                    type='text'*/}
            {/*                    name='subject'*/}
            {/*                    className='formInputSubject'*/}
            {/*                    placeholder='Subject'*/}
            {/*                />*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        /!* Row 3 of form *!/*/}
            {/*        <div className='rowformRow'>*/}
            {/*            <div className='colMessage'>*/}
            {/*        <textarea*/}
            {/*            rows={5}*/}
            {/*            name='message'*/}
            {/*            className='form-controlMessage'*/}
            {/*            placeholder='Message'*/}
            {/*        />*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className={"buttonDiv"}>*/}
            {/*            <Button variant='outlined' type='submit'>Submit</Button>*/}
            {/*        </div>*/}
            {/*    </form>*/}
            {/*</div>*/}

            <div className={"bottomSection"}>
            <div className={"bottomCenter"}>
                <div className={"infoBox"}>
                    <div className={"infoBoxUpper"}>
                        <img src={Email} alt={"Email Logo"}/>
                    </div>
                    <div className={"infoBoxLower"}>
                        <h3>info@thepinescabins.com</h3>
                    </div>
                </div>


                <div className={"infoBox"}>
                    <div className={"infoBoxUpper"}>
                        <img src={Phone} alt={"Phone Logo"}/>
                    </div>
                    <div className={"infoBoxLower"}>
                        <h3>(714) 333-6783</h3>
                    </div>
                </div>

            </div>
            </div>

        </div>


    )
}