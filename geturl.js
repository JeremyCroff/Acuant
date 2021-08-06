const txt = document.getElementById( 'AcuantWebWorkerSource' ).textContent;
const url = URL.createObjectURL( new Blob( [ txt ], {type : 'text/javascript'} ) );
const acuantConfig = {
 path: url
}
