import React from 'react';
import { useState } from 'react'
import { UploadDoc } from '../component/fileUpload/UploadDoc';
import { ReviewDoc } from '../component/fileUpload/ReviewDoc';
import { DownloadDoc } from '../component/fileUpload/DownloadDoc';

export const TabComponent = () => {
    
    const [activeTab, setActiveTab] = useState(1);

    const handleNextClick = () => {
        // Increment the activeTab state to show the next tab
        if(activeTab > 2){
            setActiveTab(1)
        }else{
            setActiveTab(activeTab + 1);
        }
    }
    var dict = [
        'Upload Document',
        'Review Document',
        'Download Document']

    return (

        <div className="nk-content mt-0 ml-0">
            <div className="container-fluid">
                <div className="nk-content-inner">
                    <div className="nk-content-body">
                        <div className="content-page ml-3">
                            <div className="nk-block">
                                <div className="card card-bordered">
                                    <div className="card-inner card-inner-xl">
                                        <ul className="nav nav-tabs d-flex justify-content-evenly">
                                            {dict.map((item, index) => (
                                                <li className="nav-item" key={index}>
                                                    <a
                                                        className={`nav-link ${index + 1 === activeTab ? 'active' : ''} ${index + 1 > activeTab ? 'disabled' : ''}`}
                                                        data-bs-toggle="tab"
                                                        href={`#tabItem${index + 1}`}> {item} </a>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="tab-content h-100 mx-auto">
                                            {dict.map((item, index) => (
                                                <div
                                                    className={`tab-pane ${index + 1 === activeTab ? 'active' : ''}`}
                                                    id={`tabItem${index + 1}`}
                                                    key={index}
                                                >
                                                    {item === 'Upload Document' && <UploadDoc index = {index} handleClick={handleNextClick}/>}
                                                    {item === 'Review Document' && <ReviewDoc index = {index} handleClick={handleNextClick}/>}
                                                    {item === 'Download Document' && <DownloadDoc />}
                                                    {/* <div className="container d-flex justify-content-end">
                                                        {index !== 2 && <button className="btn btn-danger" onClick={handleNextClick}>{'Next'}</button>}
                                                    </div> */}
                                                </div>
                                            ))}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

