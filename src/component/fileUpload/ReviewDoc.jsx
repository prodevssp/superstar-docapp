import { useEffect, useState } from "react";
import { fileData } from "../demoData/filedata";
import { FullPageLoader } from "../Loader/FullPageLoader";

export function ReviewDoc({ index, handleClick }) {
    const [updatedText, setUpdatedText] = useState("");
    const [selectFile, setSelectFile] = useState();
    const [fileContent, setFileContent] = useState("");
    const [selectedText, setSelectedText] = useState("");
    const [temp, setTemp] = useState(0);
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const [insertText, setInsertText] = useState('');
    let result;
    const selectFileChange = (event) => {
        setUpdatedText('')
        setSelectFile(event.target.value)
        fileData.filter((item) => item.id === event.target.value && setFileContent(item.message));

    }
    // select text function from textarea
    const selectText = () => {
        setSelectedText(window.getSelection().toString())
        setUpdatedText(window.getSelection().toString())
        setTemp(temp + 1)
    }
    // Rewrite button functionality
    const handleClickRewrite = () => {
        const toChange = document.querySelector(".some-text");
        const fixedWords = toChange.innerHTML.trim().replace(new RegExp(selectedText, "i"), updatedText)
        if (selectedText) {
            toChange.innerHTML = fixedWords;
            result = toChange.innerHTML
            setFileContent(toChange.innerHTML)
            setUpdatedText('')
            setTemp(temp + 1)
        } else {
            setError('Please Select text or line')
        }
    }
    // Insert button functionality
    const handleClickInsert = () => {
        let curPos = document.getElementById("text1").selectionStart;
        let x = document.getElementById("text1").value;
        result = [x.slice(0, curPos), insertText, x.slice(curPos)].join(' ')
        setFileContent(result);
        setTemp(temp + 1)

    }
    // update text function
    const handleUpdateText = (e) => {
        setUpdatedText(e.target.value)
    }
    // save review doc info
    const handleSave = () => {
        setLoading(true)
        setTimeout(() => {
            setFileContent(result);
            setLoading(false)
        }, 5000)
    }

    useEffect(() => {
        setFileContent(result);
    }, [temp])
    return (
        <>
            {loading && <FullPageLoader />}
            {!loading && <div className='container mb-2' style={{ height: '520px' }}>
                <div className="row " style={{ height: 'inherit' }}>
                    <div className="col-8 border">
                        <div className="mb-3 mt-2">
                            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={selectFileChange} value={selectFile}>
                                <option>Select file</option>
                                <option value="0">file.pdf</option>
                                <option value="1">filetwo.docx</option>
                            </select>
                        </div>
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">File Content</label>
                        <textarea
                            className="form-control mb-1 some-text"
                            id="text1"
                            rows="3"
                            defaultValue={fileContent}
                            onMouseUp={selectText}
                            style={{ height: '350px' }}></textarea>

                        <div className="container d-flex justify-content-end mt-2">
                            <button className="btn btn-danger px-4" onClick={handleSave}>{'Save'}</button>
                        </div>
                    </div>
                    <div className="col-4 border">
                        <div className="mb-3 mt-2">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Rewrite Text</label>
                            <textarea
                                className="form-control mb-1 "
                                id="insert"
                                rows="3"
                                defaultValue={selectedText}
                                value={updatedText}
                                onChange={handleUpdateText}
                                style={{ height: '150px' }}></textarea>
                            <div className="container d-flex justify-content-end">
                                <button type='button' className="btn btn-danger" onClick={handleClickRewrite}>Rewrite</button>
                            </div>
                        </div>
                        <div className="mb-3 mt-2">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Insert Text</label>
                            <textarea
                                className="form-control mb-1 "
                                id="insert"
                                rows="3"
                                value={insertText}
                                onChange={(e) => setInsertText(e.target.value)}
                                style={{ height: '150px' }}></textarea>
                            <div className="container d-flex justify-content-end">
                                <button type='button' className="btn btn-danger px-4" onClick={handleClickInsert}>Insert</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
            <div className="container d-flex justify-content-end">
                {index !== 2 && <button className="btn btn-danger px-4" onClick={handleClick}>{'Next'}</button>}
            </div>
            {error && <div className="alert alert-pro alert-danger mt-3">
                <div className="alert-text">
                    <h6>Text Not Inserted please click on Insert Button</h6>
                    <p>{error}</p>
                </div>
            </div>}
        </>
    )
}