export function DownloadDoc() {
    return (
        <>
            <table className="table">
                <thead className="table">
                    <tr className="text-warning">
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        </div></td>
                        <td>first pdf title</td>
                        <td>first pdf Description</td>
                        <td>
                            <button className="btn btn-dark">Download</button>
                        </td>
                    </tr>
                    <tr>
                        <td><div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        </div></td>
                        <td>second pdf title</td>
                        <td>second pdf Description</td>
                        <td>
                            <button className="btn btn-dark">Download</button>
                        </td>
                    </tr>
                    <tr>
                        <td><div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        </div></td>
                        <td>third pdf title</td>
                        <td>third pdf Description</td>
                        <td>
                            <button className="btn btn-dark">Download</button>
                        </td>
                    </tr>
                    <tr>
                        <td><div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        </div></td>
                        <td>four pdf title</td>
                        <td>four pdf Description</td>
                        <td>
                            <button className="btn btn-dark">Download</button>
                        </td>
                    </tr>
                    <tr>
                        <td><div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        </div></td>
                        <td>five pdf title</td>
                        <td>five pdf Description</td>
                        <td>
                            <button className="btn btn-dark">Download</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}