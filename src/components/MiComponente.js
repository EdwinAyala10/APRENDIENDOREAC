import React from "react";
import Resources from "./Resources";
import { Request } from "./Request";
export function MiComponente(){
        return (
           <React.Fragment>             
                <div  className="form d-flex flex-column flex-lg-row" id='addd-edwin' >
                    <div  className="d-flex flex-column flex-row-fluid gap-7 gap-lg-10 ">
                        <div  className="d-flex flex-column gap-7 gap-lg-10">
                            <div  className="card card-flush py-4">
                                <div  className="card-header">
                                    <div  className="card-title">
                                        <h2>Solicitud</h2>
                                    </div>
                                </div>
                                <div className="card-body pt-0">
                                    <div className="row">
                                        <div className="col-12 col-sm-8 col-md-6 col-xl-4 " >
                                            <label className="required form-label">Tipo De Solicitud</label>
                                            <select className="form-select mb-2" name="tax" data-control="select2" data-hide-search="true" data-placeholder="Seleccione tipo de solicitud">
                                                <option value={0} >Seleccione tipo de solicitud </option>
                                                <Resources resul = 'TIPO SOLICITUD'/>   
                                            </select>
                                        </div>
                                        <div className="col-12 col-sm-8 col-md-6 col-xl-4 " >
                                            <label className="required form-label">Cliente</label>
                                            <select className="form-select mb-2" name="tax" data-control="select2" data-hide-search="false" data-placeholder="Seleccione un cliente">
                                                <option  value={0}>Seleccione un cliente</option>
                                            </select>
                                        </div>
                                        <div className="col-12 col-sm-8 col-md-6 col-xl-4 " >
                                            <label className="required form-label">Contacto</label>
                                            <select className="form-select mb-2" name="tax" data-control="select2" data-hide-search="true" data-placeholder="Seleccione un contacto">
                                                <option value={0} > Seleccione un contacto</option>
                                            </select>
                                        </div>
                                        <div className="col-12 col-sm-8 col-md-6 col-xl-4 " >
                                            <label className="required form-label">Categoria</label>
                                            <select className="form-select mb-2" name="tax" data-control="select2" data-hide-search="true" data-placeholder="Seleccione una categoria">
                                                <option value={0}>eleccione una categoria</option>
                                                <Resources resul = 'CATEGORIA'/>
                                            </select>
                                        </div>
                                        <div className="col-12 col-sm-8 col-md-6 col-xl-4 " >
                                            <label className="required form-label">Documento</label>
                                            <select className="form-select mb-2" name="tax" data-control="select2" data-hide-search="true" data-placeholder="Seleccione un documento">
                                                <option value={0}>Seleccione un documento</option>
                                                <Resources resul = 'DOCUMENTO'/>  
                                            </select>
                                        </div>
                                        <div className="col-12 col-sm-8 col-md-6 col-xl-4 " >
                                            <label className="required form-label">Serie</label>
                                            <select className="form-select mb-2" name="tax" data-control="select2" data-hide-search="true" data-placeholder="Seleccione Serie">
                                                <option value={0} >Seleccione Serie</option>
                                            </select>    
                                        </div>
                                        <div className="col-12 col-sm-8 col-md-6 col-xl-4 " > 
                                            <label className="required form-label">Nro.</label>
                                            <input type="number" name="product_name" className="form-control mb-2" placeholder=""  />
                                        </div>
                                        <div className="col-12 col-sm-8 col-md-6 col-xl-8"  >
                                            <div className="d-flex justify-content-end">
                                                <button type="button" id="kt_ecommerce_add_product_submit" className="btn btn-primary">
                                                    <span className="svg-icon svg-icon-2 svg-icon-lg-1 svg-icon-gray-500 top-50 translate-middle-y ms-0">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                            <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="currentColor"></rect>
                                                            <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="currentColor"></path>
                                                        </svg>
                                                    </span>
                                                    <span className="indicator-label">Buscar</span>
                                                    <span className="indicator-progress">Please wait...
                                                    <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row" >
                                        <div data-edwin className="col-12" >
                                            <ul className="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-bold mb-n2">
                                                <li className="nav-item">
                                                    <a className="nav-link text-active-primary pb-4 active" data-bs-toggle="tab" href="#kt_ecommerce_add_product_general">Productos</a>
                                                </li>
                                            </ul>
                                            <div className="tab-content mt-5">
                                                <div className="tab-pane fade show active" id="kt_ecommerce_add_product_general" role="tab-panel">
                                                    <div className="d-flex flex-column gap-7 gap-lg-10">
                                                        <div className="card card-flush py-4">
                                                            <div className="card-body pt-0 pb-0"> 
                                                                <table className="table align-middle table-row-dashed fs-6  m-0 border-b-1 table-bordered" id="kt_table_users">
                                                                    <thead>
                                                                        <tr className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0 btn-light" >
                                                                            <th style={{borderTopLeftRadius:"10px"}} className="b-t-l-r-10 text-center px-5">Nro</th>
                                                                            <th className="min-w-125px">Código</th>
                                                                            <th className="min-w-125px">Marca</th>
                                                                            <th className="min-w-125px ">Descripción</th>
                                                                            <th className="min-w-125px text-center">Unidad</th>
                                                                            <th className="min-w-125px">Unidad Reclamo</th>
                                                                            <th style={{borderToprRightRadius:"10px"}} className="b-t-r-r-10 min-w-125px"></th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody className="text-gray-600 fw-bold">
                                                                        <tr>
                                                                            <td className="text-center px-5"  >
                                                                                <p className="m-0" > 1</p>  
                                                                            </td>
                                                                            <td className="">
                                                                                <p className="m-0" > 000234</p>
                                                                            </td>
                                                                            <td>
                                                                                <p className="m-0" > Volvo</p>
                                                                            </td>
                                                                            <td>
                                                                                <p className="m-0" > Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut quaerat optio,</p>
                                                                            </td>
                                                                            <td>
                                                                                <p className="m-0 text-center " > 1</p>
                                                                            </td>
                                                                            <td className="">
                                                                                <input type="number" name="product_name" className="form-control form-control-sm" placeholder="" />
                                                                            </td>
                                                                            <td className="text-center" >
                                                                                <div className="form-check form-check-sm form-check-custom form-check-solid d-block chk-dark">
                                                                                    <input className="form-check-input" type="checkbox"  />
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-edwin className="col-12" >
                                            <ul className="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-bold mb-n2">  
                                                <li className="nav-item">
                                                    <a className="nav-link text-active-primary pb-4 active" data-bs-toggle="tab" href="#kt_ecommerce_add_vehicle_general">Vehículo</a>
                                                </li>
                                            </ul>
                                            <div className="tab-content mt-5">
                                                <div className="tab-pane fade show active" id="kt_ecommerce_add_vehicle_general" role="tab-panel">
                                                    <div className="d-flex flex-column gap-7 gap-lg-10">
                                                        <div className="card card-flush py-4">
                                                            <div className="card-body pt-0 pb-0"> 
                                                                <table className="table align-middle table-row-dashed fs-6  m-0 border-b-1 table-bordered" id="kt_table_users">
                                                                    <thead>
                                                                        <tr className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0 btn-light" >
                                                                            <th style={{borderTopLeftRadius:"10px"}} className="b-t-l-r-10 min-w-125px px-5">Marca</th>
                                                                            <th className="min-w-125px">Modelo(Vehículo)</th>
                                                                            <th className="min-w-125px">Año</th>
                                                                            <th className="min-w-125px ">Placa</th>
                                                                            <th style={{borderToprRightRadius:"10px"}} className=" b-t-r-r-10 min-w-125px">Modelo(Motor)</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody className="text-gray-600 fw-bold">
                                                                        <tr>
                                                                            <td className=" px-5"  >
                                                                            <select className="form-select form-select-sm " name="tax" data-control="select2" data-hide-search="true" data-placeholder="Seleccione un marca">
                                                                                    <option></option>
                                                                                    <option value="0">Volvo</option>
                                                                                    <option >Ford</option>
                                                                                    <option value="2">Cat</option>
                                                                                </select>
                                                                            </td>
                                                                            <td className="">
                                                                                <input type="text" name="product_name" className="form-control form-control-sm" placeholder="" />
                                                                            </td>
                                                                            <td>
                                                                                <input type="text" name="product_name" className="form-control form-control-sm " placeholder="" />
                                                                            </td>
                                                                            <td>
                                                                                <input type="text" name="product_name" className="form-control form-control-sm " placeholder="" />
                                                                            </td>
                                                                            <td className="">
                                                                                <input type="text" name="product_name" className="form-control form-control-sm" placeholder="" />
                                                                            </td>
                                                                            
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-12" >
                                            <div className="row" >
                                                <div className="col-4" >
                                                    <p className="m-0  fw-bolder text-muted">Tipo de trabajo que realiza: </p>
                                                </div>
                                                <div className="col-8" > 
                                                    <div className="d-flex gap-3">
                                                        <div className="form-check form-check-sm form-check-custom form-check-solid d-block chk-dark mx-4">
                                                            <input name="tp-use" id="id-cnst" className="form-check-input c-pointer" type="radio"  />
                                                            <label htmlFor="id-cnst" className="c-pointer form-label">Construcción</label> 
                                                        </div>
                                                        <div className="form-check form-check-sm form-check-custom form-check-solid d-block chk-dark mx-4">
                                                            <input name="tp-use" id="id-tc" className="form-check-input c-pointer" type="radio"  />
                                                            <label htmlFor="id-tc" className="c-pointer form-label">Transporte de Carga</label> 
                                                        </div>
                                                        <div className="form-check form-check-sm form-check-custom form-check-solid d-block chk-dark mx-4">
                                                            <input name="tp-use" id="id-min" className="form-check-input c-pointer" type="radio"  />
                                                            <label htmlFor="id-min" className="c-pointer form-label" >Mineria</label> 
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 mt-10" >
                                            <div className="form-check form-check-sm form-check-custom form-check-solid d-block chk-dark mb-5">
                                                <input name="tp-sdfs" id="id-1sdf" className="form-check-input c-pointer" type="radio"  />
                                                <label htmlFor="id-1sdf" className="c-pointer form-label">Dejo de funcionar</label> 
                                            </div>
                                            <div className="form-check form-check-sm form-check-custom form-check-solid d-block chk-dark mb-5">
                                                <input name="tp-sdfs" id="id-12df" className="form-check-input c-pointer" type="radio"  />
                                                <label htmlFor="id-12df" className="c-pointer form-label">Presentó sonido durante el funcionamiento</label> 
                                            </div>
                                            <div className="form-check form-check-sm form-check-custom form-check-solid d-block chk-dark mb-5">
                                                <input name="tp-sdfs" id="id-13df" className="form-check-input c-pointer" type="radio"  />
                                                <label htmlFor="id-13df" className="c-pointer form-label">Construcción</label> 
                                            </div>
                                            <div className="form-check form-check-sm form-check-custom form-check-solid d-block chk-dark mb-5">
                                                <input name="tp-sdfs" id="id-14df" className="form-check-input c-pointer" type="radio"  />
                                                <label htmlFor="id-14df" className="c-pointer form-label">Otros</label> 
                                            </div>
                                            <div>
                                                <textarea    type="text" className="form-control mb-2" name="search"  placeholder="Detalle de la solicitud"></textarea>					
                                            </div>
                                        </div>
                                        <div className="col-12 mt-5" >
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            <button type="button" id="kt_ecommerce_add_product_cancel" className="btn btn-light me-5">Cancel</button>
                                            <button type="submit" id="kt_ecommerce_add_product_submit" className="btn btn-primary">
                                                <span className="indicator-label">Generar</span>
                                                <span className="indicator-progress">Please wait...
                                                <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
 
                <div className="form d-flex flex-column flex-lg-row mt-10 " >
                    <div className="d-flex flex-column flex-row-fluid gap-7 gap-lg-10 me-lg-10" >
                        <div className="card card-flush py-4">
                            <div className="card-body pt-0" >
                                <div className="row" >
                                    <div data-edwin className="col-12" >

                                        <ul className="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-bold mb-n2">
                                        
                                            <li className="nav-item">
                                                <a className="nav-link text-active-primary pb-4 active" data-bs-toggle="tab" href="#kt_ecommerce_add_solicitud_general">Solicitud</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link text-active-primary pb-4 " data-bs-toggle="tab" href="#kt_ecommerce_add_prodicto_ii_general">Productos</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link text-active-primary pb-4 " data-bs-toggle="tab" href="#kt_ecommerce_comprobantes_general">Comprobante</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link text-active-primary pb-4 " data-bs-toggle="tab" href="#kt_ecommerce_provedore_general">Proveedor</a>
                                            </li>
                                            
                                        </ul>
                                        <div className="tab-content mt-5">
                                            <div className="card card-flush py-4 pb-0">
                                                <div className="card-body pt-0 pb-0" >
                                                    <div className="row" >
                                                        <div className="col-6" >
                                                            <div className="d-flex gap-3 ">
                                                                <label  className="c-pointer form-label w-120px">Tipo de Solicitud</label>
                                                                <p className="m-0 fw-bolder text-muted" >Listo</p>
                                                            </div>
                                                            <div className="d-flex gap-3">
                                                                <label  className="c-pointer form-label w-120px">Nro De solicitud</label>
                                                                <p className="m-0 fw-bolder text-muted" >Listo</p>
                                                            </div>
                                                            <div className="d-flex gap-3">
                                                                <label  className="c-pointer form-label w-120px">Cliente</label>
                                                                <p className="m-0 fw-bolder text-muted" >0003453 GRuA SAN loene san gira</p>
                                                            </div>
                                                            <div className="d-flex gap-3">
                                                                <label  className="c-pointer form-label w-120px">Responsable</label>
                                                                <p className="m-0 fw-bolder text-muted" >GFLORES</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-6" >
                                                            <div className="d-flex gap-3 ">
                                                                <label className="c-pointer form-label w-120px">F. Creación</label>
                                                                <p className="m-0 fw-bolder text-muted" >12/04/2022</p>
                                                            </div>
                                                            <div className="d-flex gap-3">
                                                                <label className="c-pointer form-label w-120px">H. Creación</label>
                                                                <p className="m-0 fw-bolder text-muted" >1:50 AM</p>
                                                            </div>
                                                            <div className="d-flex gap-3">
                                                                <label className="c-pointer form-label w-120px">Categoria</label>
                                                                <p className="m-0 fw-bolder text-muted" >Fallad e producto</p>
                                                            </div>
                                                            <div className="d-flex gap-3">
                                                                <label className="c-pointer form-label w-120px">Estado</label>
                                                                <p className="m-0 fw-bolder text-muted" >GENERADO</p>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-content mt-0">
                                            <div className="tab-pane fade show active" id="kt_ecommerce_add_solicitud_general" role="tab-panel">
                                                <div className="d-flex flex-column gap-7 gap-lg-10">
                                                    <div className="card card-flush py-4">
                                                        <div className="card-body pt-0 pb-0">
                                                            <label className="form-label">Detalle Solicitud</label>
                                                            <textarea readOnly value={''} type="text" className="form-control mb-2" name="" placeholder="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam nam, </textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade " id="kt_ecommerce_add_prodicto_ii_general" role="tab-panel">
                                                <div className="d-flex flex-column gap-7 gap-lg-10">
                                                    <div className="card card-flush py-4">
                                                        <div className="card-body pt-0 pb-0">
                                                            <label className="form-label">Detalle Producto</label>
                                                            <div className="table-responsive" >
                                                                <table className="table align-middle table-row-dashed fs-6  m-0 border-b-1 table-bordered" id="">                                         
                                                                    <thead>
                                                                        <tr className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0 btn-light">
                                                                            <th className="b-t-l-r-10 px-5">Nro</th>
                                                                            <th className="text-center">Codigo</th>
                                                                            <th className="text-center">Marca</th>
                                                                            <th className="min-w-125px">Descripción</th>
                                                                            <th className="text-center">Línea</th>
                                                                            <th className="text-center">Origen</th>
                                                                            <th className="text-center">Un</th>
                                                                            <th className="">Proveedor</th>
                                                                            <th  className="b-t-r-r-10 ">Costo</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody className="text-gray-600 fw-bold">
                                                                        <tr>
                                                                            <td className="text-center px-5">1
                                                                            </td>
                                                                            <td className="">09242345</td>
                                                                            <td className="text-center">Volvo</td>
                                                                            <td> Lorem ipsum dolor sit amet consectetur  </td>
                                                                            <td className="text-center">01</td>
                                                                            <td className="text-center">02</td>
                                                                            <td className="text-center" >01</td>
                                                                            <td>
                                                                                <select className="form-select form-select-sm mb-0" name="tax" data-control="select2" 
                                                                                data-hide-search="true" data-placeholder="Proveedor">
                                                                                    <option></option>
                                                                                    <option value="0">Volvo</option>
                                                                                    <option value="1">Ford</option>
                                                                                    <option value="2">Cat</option>
                                                                                </select>
                                                                            </td>
                                                                            <td className="">
                                                                                125.00
                                                                            </td>
                                                                            
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade " id="kt_ecommerce_comprobantes_general" role="tab-panel">
                                                <div className="d-flex flex-column gap-7 gap-lg-10">
                                                    <div className="card card-flush py-4">
                                                        <div className="card-body pt-0 pb-0">
                                                            <label className="form-label">Detalle de Comprobante</label>
                                                            <div className="table-responsive bg-lightNot badge-light-info rounded p-5" >
                                                                <table className="table align-middle  fs-6  m-0 " id="">
                                                                
                                                                    
                                                                    <tbody className="text-gray-600 fw-bold">
                                                                        <tr className="bg-white" >
                                                                            <td className="w-50px px-5">
                                                                                <label className="c-pointer form-label m-0">Factura: </label>
                                                                            </td>
                                                                            <td className="">
                                                                                <p className="m-0 fw-bolder text-muted">F03-000333</p>
                                                                            </td>
                                                                            <td className="w-140px px-5">
                                                                                <label className="c-pointer form-label m-0">Guia Remisión:</label>
                                                                            </td>
                                                                            <td>
                                                                                <p className="m-0 fw-bolder text-muted">0000-2343453</p>    
                                                                            </td>                                                            
                                                                        </tr>
                                                                        <tr >
                                                                            <td className="w-50px px-5">
                                                                                <label className="c-pointer form-label m-0">Vendedor: </label>
                                                                            </td>
                                                                            <td className="">
                                                                                <p className="m-0 fw-bolder text-muted">Sabrina</p>
                                                                            </td>
                                                                            <td className="w-140px px-5">
                                                                                <label className="c-pointer form-label m-0">Suc: </label>
                                                                            </td>
                                                                            <td  >
                                                                                <div className="d-flex gap-3">
                                                                                    <p className="m-0 fw-bolder text-muted w-120px ">03 - Ate</p>
                                                                                    <label className="c-pointer form-label m-0">Alm: </label>
                                                                                    <p className="m-0 fw-bolder text-muted">03 - Ate</p>
                                                                                </div>   
                                                                            </td>                                                            
                                                                        </tr>
                                                                        <tr className="bg-white">  
                                                                            <td className="w-50px px-5">
                                                                                <label className="c-pointer form-label m-0">F. Venta: </label>
                                                                            </td>
                                                                            <td className="">
                                                                                <p className="m-0 fw-bolder text-muted">31 de Marzo 2022 </p>
                                                                            </td>
                                                                            <td colSpan={2} className="px-5">
                                                                                <p className="m-0 fw-bolder text-muted"> LIMA-BARRANCO</p>
                                                                            </td>                                                           
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>

                                                            <div className="table-responsive mt-5" >
                                                                <table className="table align-middle table-row-dashed fs-6  m-0 border-b-1 table-bordered" id="">
                                                        
                                                                    <thead>
                                                                        <tr className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0 btn-light">
                                                                            
                                                                            <th className="b-t-l-r-10  text-center px-5">Nro</th>
                                                                            <th className="text-center">Codigo</th>
                                                                            <th className="min-w-125px">Descripción</th>
                                                                            <th className="text-center">Cant.</th>
                                                                            <th  className="b-t-r-r-10 ">P. Venta Tot.</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody className="text-gray-600 fw-bold">
                                                                        <tr>
                                                                            <td className="text-center px-5">1
                                                                            </td>
                                                                            <td className="">09242345</td>
                                                                            <td> Lorem ipsum dolor sit amet consectetur  </td>
                                                                            <td className="text-center" >01</td>
                                                                            <td className="">
                                                                                125.00
                                                                            </td>
                                                                            
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade " id="kt_ecommerce_provedore_general" role="tab-panel">
                                                <div className="d-flex flex-column gap-7 gap-lg-10">
                                                    <div className="card card-flush py-4">
                                                        <div className="card-body pt-0 pb-0">
                                                            <label className="form-label">Seguimiento de Proveedor</label>
                                                            <div className="table-responsive" >
                                                                <table className="table align-middle table-row-dashed fs-6  m-0 border-b-1 table-bordered" id="">
                                                                    <thead>
                                                                        <tr className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0 btn-light">
                                                                            
                                                                            <th  className="b-t-l-r-10  px-5">Nro</th>
                                                                            <th className="text-center">Codigo</th>
                                                                            <th className="text-center">Marca</th>
                                                                            <th className="min-w-125px">Descripción</th>
                                                                            <th className="text-center">Línea</th>
                                                                            <th className="text-center">Origen</th>
                                                                            <th className="text-center">Un</th>
                                                                            <th className="">Proveedor</th>
                                                                            <th  className="b-t-r-r-10 ">Orden Cmpra</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody className="text-gray-600 fw-bold">
                                                                        <tr>
                                                                            <td className="text-center px-5">1
                                                                            </td>
                                                                            <td className="">09242345</td>
                                                                            <td className="text-center">Volvo</td>
                                                                            <td> Lorem ipsum dolor sit amet consectetur  </td>
                                                                            <td className="text-center">01</td>
                                                                            <td className="text-center">02</td>
                                                                            <td className="text-center" >01</td>
                                                                            <td>
                                                                                COSIBO SRL
                                                                            </td>
                                                                            <td className="">
                                                                                <select className="form-select form-select-sm mb-0" name="tax" data-control="select2" 
                                                                                data-hide-search="true" data-placeholder="Proveedor">
                                                                                    <option></option>
                                                                                    <option value="0">00</option>
                                                                                    <option value="1">001</option>
                                                                                    <option value="2">0345</option>
                                                                                </select>
                                                                            </td>
                                                                            
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <button type="button" id="kt_ecommerce_add_product_cancel" className="btn btn-light me-5">Cancel</button>
                                    
                                        <button type="submit" id="kt_ecommerce_add_product_submit" className="btn btn-primary">
                                            <span className="indicator-label">Terminar</span>
                                            <span className="indicator-progress">Please wait...
                                            <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                                        </button>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-column gap-7 gap-lg-10 w-100 w-lg-400px mb-7 ">
                        <div className="card card-flush py-4">
                            <div className="card-body pt-0">
                                <label className="form-label">Comentarios:</label>
                                <textarea type="text" className="form-control mb-2" name="" placeholder="Nuevo Comentario"></textarea>
                                <div className="d-flex justify-content-end" >
                                    <button type="submit" id="kt_ecommerce_add_product_submit" className="btn btn-primary btn-sm float-end ">
                                        <span className="indicator-label">Guardar</span>
                                        <span className="indicator-progress">Please wait...
                                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                                    </button>
                                </div>
                                <div className="card-body position-relative px-0 pt-3" id="kt_activities_tetr_body">
                                    
                                    <div id="kt_activities_scroll" className="position-relative scroll-y me-n5 pe-5" data-kt-scroll="true" data-kt-scroll-height="auto" data-kt-scroll-wrappers="#kt_activities_body" data-kt-scroll-dependencies="#kt_activities_header, #kt_activities_footer" data-kt-scroll-offset="5px">

                                        <div className="timeline">
                                            <div className="timeline-item mt-3">
                                                <div className="timeline-line w-40px"></div>
                                                <div className="timeline-icon symbol symbol-circle symbol-40px">
                                                    <div className="symbol-label bg-light">
                                                        <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                <path opacity="0.3" d="M5.78001 21.115L3.28001 21.949C3.10897 22.0059 2.92548 22.0141 2.75004 21.9727C2.57461 21.9312 2.41416 21.8418 2.28669 21.7144C2.15923 21.5869 2.06975 21.4264 2.0283 21.251C1.98685 21.0755 1.99507 20.892 2.05201 20.7209L2.886 18.2209L7.22801 13.879L10.128 16.774L5.78001 21.115Z" fill="currentColor" />
                                                                <path d="M21.7 8.08899L15.911 2.30005C15.8161 2.2049 15.7033 2.12939 15.5792 2.07788C15.455 2.02637 15.3219 1.99988 15.1875 1.99988C15.0531 1.99988 14.92 2.02637 14.7958 2.07788C14.6717 2.12939 14.5589 2.2049 14.464 2.30005L13.74 3.02295C13.548 3.21498 13.4402 3.4754 13.4402 3.74695C13.4402 4.01849 13.548 4.27892 13.74 4.47095L14.464 5.19397L11.303 8.35498C10.1615 7.80702 8.87825 7.62639 7.62985 7.83789C6.38145 8.04939 5.2293 8.64265 4.332 9.53601C4.14026 9.72817 4.03256 9.98855 4.03256 10.26C4.03256 10.5315 4.14026 10.7918 4.332 10.984L13.016 19.667C13.208 19.859 13.4684 19.9668 13.74 19.9668C14.0115 19.9668 14.272 19.859 14.464 19.667C15.3575 18.77 15.9509 17.618 16.1624 16.3698C16.374 15.1215 16.1932 13.8383 15.645 12.697L18.806 9.53601L19.529 10.26C19.721 10.452 19.9814 10.5598 20.253 10.5598C20.5245 10.5598 20.785 10.452 20.977 10.26L21.7 9.53601C21.7952 9.44108 21.8706 9.32825 21.9221 9.2041C21.9737 9.07995 22.0002 8.94691 22.0002 8.8125C22.0002 8.67809 21.9737 8.54505 21.9221 8.4209C21.8706 8.29675 21.7952 8.18392 21.7 8.08899Z" fill="currentColor" />
                                                            </svg>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="timeline-content mb-5 mt-n2">
                                                    <div className="overflow-auto pe-3">
                                                        <div className=" fw-bold mb-2">
                                                            <p className="m-0 fw-bolder text-muted">Invitation for crafting engaging designs that speak human workshop</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="timeline-item mt-3">
                                                <div className="timeline-line w-40px"></div>
                                                <div className="timeline-icon symbol symbol-circle symbol-40px">
                                                    <div className="symbol-label bg-light">
                                                        <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                <path opacity="0.3" d="M5.78001 21.115L3.28001 21.949C3.10897 22.0059 2.92548 22.0141 2.75004 21.9727C2.57461 21.9312 2.41416 21.8418 2.28669 21.7144C2.15923 21.5869 2.06975 21.4264 2.0283 21.251C1.98685 21.0755 1.99507 20.892 2.05201 20.7209L2.886 18.2209L7.22801 13.879L10.128 16.774L5.78001 21.115Z" fill="currentColor" />
                                                                <path d="M21.7 8.08899L15.911 2.30005C15.8161 2.2049 15.7033 2.12939 15.5792 2.07788C15.455 2.02637 15.3219 1.99988 15.1875 1.99988C15.0531 1.99988 14.92 2.02637 14.7958 2.07788C14.6717 2.12939 14.5589 2.2049 14.464 2.30005L13.74 3.02295C13.548 3.21498 13.4402 3.4754 13.4402 3.74695C13.4402 4.01849 13.548 4.27892 13.74 4.47095L14.464 5.19397L11.303 8.35498C10.1615 7.80702 8.87825 7.62639 7.62985 7.83789C6.38145 8.04939 5.2293 8.64265 4.332 9.53601C4.14026 9.72817 4.03256 9.98855 4.03256 10.26C4.03256 10.5315 4.14026 10.7918 4.332 10.984L13.016 19.667C13.208 19.859 13.4684 19.9668 13.74 19.9668C14.0115 19.9668 14.272 19.859 14.464 19.667C15.3575 18.77 15.9509 17.618 16.1624 16.3698C16.374 15.1215 16.1932 13.8383 15.645 12.697L18.806 9.53601L19.529 10.26C19.721 10.452 19.9814 10.5598 20.253 10.5598C20.5245 10.5598 20.785 10.452 20.977 10.26L21.7 9.53601C21.7952 9.44108 21.8706 9.32825 21.9221 9.2041C21.9737 9.07995 22.0002 8.94691 22.0002 8.8125C22.0002 8.67809 21.9737 8.54505 21.9221 8.4209C21.8706 8.29675 21.7952 8.18392 21.7 8.08899Z" fill="currentColor" />
                                                            </svg>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="timeline-content mb-5 mt-n2">
                                                    <div className="overflow-auto pe-3">
                                                        <div className=" fw-bold mb-2">
                                                            <p className="m-0 fw-bolder text-muted">Invitation for crafting engaging designs that speak human workshop</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="timeline-item mt-3">
                                                <div className="timeline-line w-40px"></div>
                                                <div className="timeline-icon symbol symbol-circle symbol-40px">
                                                    <div className="symbol-label bg-light">
                                                        <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                <path opacity="0.3" d="M5.78001 21.115L3.28001 21.949C3.10897 22.0059 2.92548 22.0141 2.75004 21.9727C2.57461 21.9312 2.41416 21.8418 2.28669 21.7144C2.15923 21.5869 2.06975 21.4264 2.0283 21.251C1.98685 21.0755 1.99507 20.892 2.05201 20.7209L2.886 18.2209L7.22801 13.879L10.128 16.774L5.78001 21.115Z" fill="currentColor" />
                                                                <path d="M21.7 8.08899L15.911 2.30005C15.8161 2.2049 15.7033 2.12939 15.5792 2.07788C15.455 2.02637 15.3219 1.99988 15.1875 1.99988C15.0531 1.99988 14.92 2.02637 14.7958 2.07788C14.6717 2.12939 14.5589 2.2049 14.464 2.30005L13.74 3.02295C13.548 3.21498 13.4402 3.4754 13.4402 3.74695C13.4402 4.01849 13.548 4.27892 13.74 4.47095L14.464 5.19397L11.303 8.35498C10.1615 7.80702 8.87825 7.62639 7.62985 7.83789C6.38145 8.04939 5.2293 8.64265 4.332 9.53601C4.14026 9.72817 4.03256 9.98855 4.03256 10.26C4.03256 10.5315 4.14026 10.7918 4.332 10.984L13.016 19.667C13.208 19.859 13.4684 19.9668 13.74 19.9668C14.0115 19.9668 14.272 19.859 14.464 19.667C15.3575 18.77 15.9509 17.618 16.1624 16.3698C16.374 15.1215 16.1932 13.8383 15.645 12.697L18.806 9.53601L19.529 10.26C19.721 10.452 19.9814 10.5598 20.253 10.5598C20.5245 10.5598 20.785 10.452 20.977 10.26L21.7 9.53601C21.7952 9.44108 21.8706 9.32825 21.9221 9.2041C21.9737 9.07995 22.0002 8.94691 22.0002 8.8125C22.0002 8.67809 21.9737 8.54505 21.9221 8.4209C21.8706 8.29675 21.7952 8.18392 21.7 8.08899Z" fill="currentColor" />
                                                            </svg>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="timeline-content mb-5 mt-n2">
                                                    <div className="overflow-auto pe-3">
                                                        <div className=" fw-bold mb-2">
                                                            <p className="m-0 fw-bolder text-muted">Invitation for crafting engaging designs that speak human workshop</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex flex-column flex-row-fluid gap-7 gap-lg-10 d-none ">
                        <div className="d-flex flex-column gap-7 gap-lg-10">
                            <div className="card card-flush py-4">
                                <div className="card-body pt-0" >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </React.Fragment>
        );
}   
export function MiComponente2(){
    
    return (
       <React.Fragment>    
            <h1>Otros component Login amigos</h1> 
            <hr/>
            <select className="form-select mb-2" name="tax" data-control="select2" data-hide-search="true" data-placeholder="Seleccione tipo de solicitud">
                <option></option>
                <Resources resul = 'CATEGORIA'/>   
            </select>     
       </React.Fragment>
    );

}  
//export {MiComponente, MiComponente2};


