import React from "react";

import Submit from "../components/forms";
import Buttons from "../components/buttons";
import Checklist from "../components/checklist";


export default function Cards({ children, ...restProps }) {
    return <></>
}

Cards.Create = function CardsCreate({ onClick, children, ...restProps}) {
    return <Submit.Card>
                    <div style={{display: 'flex', flexWrap: 'wrap'}}>
                    <Buttons.Round onClick={onClick} >x</Buttons.Round>
                    <Submit.Title>Create</Submit.Title>
                    </div>
                    <div>
                    <Submit.Frame>
                    <Submit.Title style={{fontSize: '15px'}}>Core Details</Submit.Title>
                    <Submit.Input placeholder={'Item Number'}/>
                    <Submit.Input placeholder={'Facility'}/>
                    <Submit.Input placeholder={'Template'}/>
                    <Submit.Input placeholder={'Printer'}/>
                    </Submit.Frame>
                    </div>
                    <div>
                    <Submit.Frame>
                        <Submit.Title style={{fontSize: '15px'}}>Addressing</Submit.Title>
                        <Submit.Input placeholder={'Company'}/>
                        <Submit.Input placeholder={'Address'}/>
                        <Submit.Input placeholder={'Phone Number'}/>
                        <Submit.Input placeholder={'CCN'}/>
                    </Submit.Frame>
                   </div>
                   <div>
                    <Submit.Frame>
                        <Submit.Title style={{fontSize: '15px'}}>Attributes</Submit.Title>
                        <Submit.Input placeholder={'Display Name'}/>
                        <Submit.Input placeholder={'Description'}/>
                        <Submit.Input placeholder={'Instructions'}/>
                        <Submit.Input placeholder={'Color Bar'}/>
                        <Submit.Input placeholder={'Contains'}/>
                    </Submit.Frame>
                    </div>
                </Submit.Card>
}

Cards.Read = function CardsRead({ onClick, children, ...restProps}) {
    return <Submit.Card>
                    <div style={{display: 'flex', flexWrap: 'wrap'}}>
                    <Buttons.Round onClick={onClick}>x</Buttons.Round>
                    <Submit.Title>Read</Submit.Title>
                    </div>
                    <div>
                    <Submit.Frame>
                    <Submit.Title style={{fontSize: '15px'}}>Core Details</Submit.Title>
                    <Submit.Input placeholder={'Item Number'}/>
                    <Submit.Input placeholder={'Facility'}/>
                    <Submit.Input placeholder={'Template'}/>
                    <Submit.Input placeholder={'Printer'}/>
                    </Submit.Frame>
                    </div>
                    <div>
                    <Submit.Frame>
                        <Submit.Title style={{fontSize: '15px'}}>Addressing</Submit.Title>
                        <Submit.Input placeholder={'Company'}/>
                        <Submit.Input placeholder={'Address'}/>
                        <Submit.Input placeholder={'Phone Number'}/>
                        <Submit.Input placeholder={'CCN'}/>
                    </Submit.Frame>
                   </div>
                </Submit.Card>
}

Cards.Update = function CardsUpdate({ onClick, children, ...restProps}) {
    return <Submit.Card>
                    <div style={{display: 'flex', flexWrap: 'wrap'}}>
                    <Buttons.Round onClick={onClick}>x</Buttons.Round>
                    <Submit.Title>Update</Submit.Title>
                    </div>
                    <div>
                    <Submit.Frame>
                    <Submit.Title style={{fontSize: '15px'}}>Core Details</Submit.Title>
                    <Submit.Input placeholder={'Item Number'}/>
                    <Submit.Input placeholder={'Facility'}/>
                    <Submit.Input placeholder={'Template'}/>
                    <Submit.Input placeholder={'Printer'}/>
                    </Submit.Frame>
                    </div>
                </Submit.Card>
}

Cards.Delete = function CardsDelete({ onClick, children, ...restProps}) {
    return <Submit.Card>
                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                    <Buttons.Round onClick={onClick}>x</Buttons.Round>
                    <Submit.Title>Delete</Submit.Title>
                </div>

                    <Submit.Frame>
                        <Submit.Title style={{fontSize: '15px'}}>List Test</Submit.Title>
                        <div>
                        <Checklist>
                        <Checklist.UL>
                            <Checklist.LI>
                                <Checklist.Label>Item 1
                                    <Checklist.Input type='checkbox' name=''/>
                                    <Checklist.Check></Checklist.Check>
                                </Checklist.Label>
                            </Checklist.LI>
                            <Checklist.LI>
                                <Checklist.Label>Item 2
                                    <Checklist.Input type='checkbox' name=''/>
                                    <Checklist.Check></Checklist.Check>
                                </Checklist.Label>
                            </Checklist.LI>
                            <Checklist.LI>
                                <Checklist.Label>Item 3 
                                    <Checklist.Input type='checkbox' name=''/>
                                    <Checklist.Check></Checklist.Check>
                                </Checklist.Label>
                            </Checklist.LI>
                            <Checklist.LI>
                                <Checklist.Label>Item 4
                                    <Checklist.Input type='checkbox' name=''/>
                                    <Checklist.Check></Checklist.Check>
                                </Checklist.Label>
                            </Checklist.LI>
                        </Checklist.UL>
                        </Checklist>
                        </div>
                    </Submit.Frame>

            </Submit.Card>
}

Cards.Test = function CardsTest({ onClick, children, ...restProps}) {
    return(
    <div>
                        <Checklist.UL>
                            <Checklist.LI>
                                <Checklist.Label>Salt Lake
                                    <Checklist.Input type='checkbox' name=''/>
                                    <Checklist.Check></Checklist.Check>
                                </Checklist.Label>
                            </Checklist.LI>
                            <Checklist.LI>
                                <Checklist.Label>Buckeye
                                    <Checklist.Input type='checkbox' name=''/>
                                    <Checklist.Check></Checklist.Check>
                                </Checklist.Label>
                            </Checklist.LI>
                            <Checklist.LI>
                                <Checklist.Label>DeLand
                                    <Checklist.Input type='checkbox' name=''/>
                                    <Checklist.Check></Checklist.Check>
                                </Checklist.Label>
                            </Checklist.LI>
                            <Checklist.LI>
                                <Checklist.Label>Glendive
                                    <Checklist.Input type='checkbox' name=''/>
                                    <Checklist.Check></Checklist.Check>
                                </Checklist.Label>
                            </Checklist.LI>
                            <Checklist.LI>
                                <Checklist.Label>Williamson
                                    <Checklist.Input type='checkbox' name=''/>
                                    <Checklist.Check></Checklist.Check>
                                </Checklist.Label>
                            </Checklist.LI>
                        </Checklist.UL>
                        </div>
    )}