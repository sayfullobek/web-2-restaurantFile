import {useEffect, useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import {PageNation} from "../component/PageNation";

export const Region = () => {
    const [name, setName] = useState('')
    const [region, setRegion] = useState([])
    const [id, setId] = useState('')
    const [currentPage, setCurrentPage] = useState(1);
    const [prePage] = useState(10)

    const saveRegion = async () => {
        if (name.trim().length === 0) {
            return toast.warning("name not null")
        }
        try {
            const data = {
                name
            }
            await axios.post("http://localhost:8080/api/region", data)
            toast.success("successfully saved region")
            setTimeout(() => {
                window.location.reload()
            }, 2000)
        } catch (e) {
            toast.error("error")
        }
    }

    const editRegion = async () => {
        if (name.trim().length === 0) {
            return toast.warning("name not null")
        }
        try {
            const data = {
                name
            }
            await axios.put("http://localhost:8080/api/region/" + id, data)
            toast.success("successfully edited region")
            setTimeout(() => {
                window.location.reload()
            }, 2000)
        } catch (e) {
            toast.error("error")
        }
    }

    const deleteRegion = async () => {
        try {
            await axios.delete("http://localhost:8080/api/region/" + id)
            toast.success("deleted")
            setTimeout(() => {
                window.location.reload()
            }, 2000)
        } catch (err) {
            toast.error("error")
        }
    }

    const getAll = async () => {
        try {
            const res = await axios.get("http://localhost:8080/api/region")
            setRegion(res.data._embedded.list)
            // setPageSize(res.data.page.size)
            // setTotalElements(res.data.page.totalElements)
            // setTotalPages(res.data.page.totalPages)
        } catch (err) {

        }
    }
    useEffect(() => {
        getAll()
    }, [])

    const indexOfLastData = currentPage * prePage;
    const indexOfFirstData = indexOfLastData - prePage;
    const currentData = region.slice(indexOfFirstData, indexOfLastData);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className={"container"}>
            <h1 className={"text-center m-5 text-primary"}>region pages</h1>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                +add
            </button>

            {currentData.length === 0 ? (
                <h1 className={"text-center text-danger"}>hozircha malumot joq</h1>
            ) : (
                <table className={"table mt-3"}>
                    <thead>
                    <tr>
                        <th>T/r</th>
                        <th>name</th>
                        <th colSpan={2}>action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {region.map((item, i) => (
                        <tr>
                            <td>{i + 1}</td>
                            <td>{item.name}</td>
                            <td>
                                <button onClick={() => setId(item.id)} type="button" className="btn btn-warning"
                                        data-bs-toggle="modal"
                                        data-bs-target="#editModal">
                                    edit
                                </button>
                            </td>
                            <td>
                                <button onClick={() => setId(item.id)} type="button" className="btn btn-danger"
                                        data-bs-toggle="modal"
                                        data-bs-target="#deleteModal">
                                    delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
            <PageNation totalData={region.length} perPage={prePage} paginate={paginate}/>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">add region</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"/>
                        </div>
                        <div className="modal-body">
                            <input type="text" placeholder={"enter region name"} value={name}
                                   onChange={e => setName(e.target.value)} className={"form-control"}/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                            <button onClick={() => saveRegion()} type="button" className="btn btn-primary">Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="editModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="editModalLabel">add region</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"/>
                        </div>
                        <div className="modal-body">
                            <input type="text" placeholder={"enter region name"} value={name}
                                   onChange={e => setName(e.target.value)} className={"form-control"}/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                            <button onClick={() => editRegion()} type="button" className="btn btn-primary">Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="deleteModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="deleteModalLabel">delete region</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                            <button onClick={() => deleteRegion()} type="button" className="btn btn-primary">delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}