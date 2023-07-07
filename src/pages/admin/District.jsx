export const District =()=>{
    return(
        <div>
            <h1 className={"text-danger"}>Quring</h1>
        </div>
    )
}
// import axios from "axios";
// import {useEffect, useState} from "react";
// import {DeleteDistrict, EditDistrict, GetDistrictList, SaveDidtrict} from "../server/service/DistrictService.js";
// import {Pagination} from "../component/Pagination.jsx";
// import {Loading} from "../component/Loading.jsx";
// import {Link} from "react-router-dom";
// import {Api} from "../server/Api.js";
//
// export const District =()=> {
//
//     const [district, setdistrict] = useState([])
//     const [loading, setLoading] = useState(false)
//     const [region, setRegion] = useState([])
//     const [search, setSearch] = useState('')
//     const getAll = async () => {
//         try {
//             await GetDistrictList(setdistrict)
//             const res = await axios.get("http://localhost:8080/api/region")
//             setRegion(res.data._embedded.list)
//             setLoading(true)
//         } catch (err) {
//             console.log(err)
//         }
//     }
//     useEffect(() => {
//         getAll()
//     }, [])
//     const deleteDistrict = async (id) => {
//         const confirm = window.confirm("Mahsulotni o'chirmoqchimisiz?")
//         if (confirm) {
//             await DeleteDistrict(id)
//         }
//     }
//
//     const indexOfLastData = currentPage * prePage;
//     const indexOfFirstData = indexOfLastData - prePage;
//     const currentData = district.slice(indexOfFirstData, indexOfLastData);
//     const paginate = (pageNumber) => setCurrentPage(pageNumber);
//     const filter = district.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
//     return(
//      <div className={"container"}>
//          {loading ? (
//              <>
//                  <div className="mt-5 w-100 d-flex align-items-center justify-content-between">
//                      <div className={"w-25 d-flex align-items-center justify-content-between"}>
//                          <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas"
//                                  data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i
//                              className="bi bi-plus-circle"/></button>
//                          <input type="search" placeholder={"mahsulot qidirish..."} value={search}
//                                 onChange={e => setSearch(e.target.value)}
//                                 className={"form-control m-3 mt-0 mb-0"}/>
//                      </div>
//                      <h3>Mahsulot</h3>
//                  </div>
//                  <AddProduct region={district} getAll={getAll}/>
//                  {district.length === 0 ? (
//                      <h1 className={"text-center text-danger"}>Hozircha mahsulotlar mavjud emas...</h1>
//                  ) : (
//                      search.length === 0 ? (
//                          <>
//                              <GetDistrict products={currentData} deleteDistrict={deleteDistrict} categories={categories}
//                                          getAll={getAll}/>
//                              <Pagination totalData={products.length} perPage={prePage}
//
//                                          paginate={paginate}/>
//                          </>
//                      ) : (
//
//                          filter.length === 0 ? (
//                              <h1 className={"text-center text-danger"}>Qidiruv natijasida mahsulot topilmadi...</h1>
//                          ) : (
//                              <>
//                                  <GetDistrict products={filter} deleteProduct={deleteProduct} categories={categories}
//                                              getAll={getAll}/>
//                                  <Pagination totalData={filter.length} perPage={prePage}
//                                              paginate={paginate}/>
//                              </>
//                          )
//                      )
//                  )}
//              </>
//          ) : (
//              <Loading/>
//          )}
//      </div>
//     )
// }
// const AddProduct = ({region, getAll}) => {
//     const [name, setName] = useState('')
//     const [regionId, setRegionId] = useState('')
//
//     const SaveDidtrict = async () => {
//         const data = {
//             name,  regionId,
//         }
//         await SaveDidtrict(data)
//         setName("")
//         setRegionId("")
//         await getAll()
//         return (
//             <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight"
//                  aria-labelledby="offcanvasRightLabel">
//                 <div className="offcanvas-header">
//                     <h5 className="offcanvas-title" id="offcanvasRightLabel">qoshish</h5>
//                     <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"/>
//                 </div>
//                 <div className="offcanvas-body">
//                     <form>
//                         <label htmlFor="name" className={"m-2 text-primary"}> nomini kiriting</label>
//                         <input type="text" placeholder={"nomi..."} className={"form-control"} id={"name"} name={"name"}
//                                value={name} onChange={e => setName(e.target.value)}/>
//
//
//                         <label htmlFor="categoryId" className={"m-2 text-primary"}>mahsulot qaysiga tegishli</label>
//                         <select name="categoryId" value={regionId} onChange={e => setRegionId(e.target.value)}
//                                 id="categoryId"
//                                 className={"form-select"}>
//                             <option value="0" selected={true}>tanlang</option>
//                             {region.map(item => (
//                                 // eslint-disable-next-line react/jsx-key
//                                 <option value={item.id}>{item.name}</option>
//                             ))}
//                         </select>
//                         <button type={"button"} onClick={() => SaveDidtrict()} className={"btn btn-primary mt-3"}><i
//                             className="bi bi-plus-circle"/>{" "}save
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         )
//     }
// }
// const GetDistrict = ({district, deleteDistrict, categories, getAll}) => {
//     const [status, setStatus] = useState(''),
//     [district, setDistrict] = useState({});
//     return (
//         <div>
//             <table className={"table shadow mt-5"}>
//                 <thead>
//                 <tr>
//                     <th>T/r</th>
//                     <th>nomi</th>
//                     <th>region</th>
//                 </tr>
//                 </thead>
//                 <tbody>
//                 {district.map((item, i) => (
//                     <tr>
//                         <td>{i + 1}</td>
//                         <td>{item.name}</td>
//
//                         <td>{item.category.name}</td>
//                         <td>
//                             <Link className={"btn btn-success"} to={`/auth/admin/district/${item.id}`}>
//                                 <i className="bi bi-eye"/>
//                             </Link>
//                         </td>
//                         <td>
//                             <button className={"btn btn-warning"} type="button" data-bs-toggle="offcanvas"
//                                     data-bs-target="#addOffcanvasRight" aria-controls="addOffcanvasRight"
//                                     onClick={() => setDistrict(item)}><i
//                                 className="bi bi-pencil-square"/></button>
//                         </td>
//                         <td>
//                             <button className={"btn btn-danger"} onClick={() => deleteDistrict(item.id)}><i
//                                 className="bi bi-trash3"/></button>
//                         </td>
//                     </tr>
//                 ))}
//                 </tbody>
//             </table>
//
//             <EditDistrict region ={region} getAll={getAll} district={district}/>
//
//             <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
//                  aria-hidden="true">
//                 <div className="modal-dialog">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <h1 className="modal-title fs-5"
//                             <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
//                         </div>
//                         <div className="modal-footer">
//                             <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
// const EditDistrict = ({region, getAll, district}) => {
//     const [name, setName] = useState(discription.name)
//
//     const editDiscription = async () => {
//         const data = {
//             name,
//         }
//
//         await EditDistrict(data, discription.id)
//         setName("")
//         await getAll()
//     }
//     return (
//         <div className="offcanvas offcanvas-end" tabIndex="-1" id="addOffcanvasRight"
//              aria-labelledby="offcanvasRightLabel">
//             <div className="offcanvas-header">
//                 <h5 className="offcanvas-title" id="offcanvasRightLabel">mahsulotni taxrirlash</h5>
//                 <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"/>
//             </div>
//             <div className="offcanvas-body">
//                 <form>
//                     <label htmlFor="name" className={"m-2 text-primary"}> nomini kiriting</label>
//                     <input type="text" placeholder={"nomi..."} className={"form-control"} id={"name"} name={"name"}
//                            value={name} onChange={e => setName(e.target.value)}/>
//
//                     <button type={"button"} onClick={() => editDiscription()} className={"btn btn-primary mt-3"}><i
//                         className="bi bi-plus-circle"/>{""}edit
//                     </button>
//                 </form>
//             </div>
//         </div>
//     )
// }
//
