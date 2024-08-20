const paginas= {
factura:`<aside>
  <nav>
   <a href="/"><img src="imagenes/home.svg"></a> 
    <a href="/repositorio"><img src="imagenes/folder.svg"></a>
  </nav>
  <a href="/"><div><img class="logout"src="imagenes/power.svg"</div></a>
</aside>


<div class="wrapper">
<header class= headert>
  <div class="cabeza"><input type= "text" placeholder= "buscar" id="buscar"><span><img src="imagenes/bell.svg"> 
  <a href="/envimg"><img class="user" src="imagenes/trash.svg"></a></span> </div>
<div class="cabeza2">
<h1>Nueva factura</h1>
<span class="check">
  <span>
  <input type="checkbox">
  <label>Recurrente</label>
  </span>
  <span class="botones">
<button class="hecho">Hecho</button>
    </span>
</span>
</div>
</header>
<main>
  <div class="inclient">
  <label for="cliente"><b>Cliente</b></label>
  <select class="cliente" name="Tipocliente" required>
    <option value="default">--Selecciona opcion--</option>
    <option value="normal">Normal</option>
    <option value="especial">Especial</option>
    <option value="vip">Vip</option>
    <option value="empresa">Empresa</option>
    <option value="autonomo">Autónomo</option>
  </select>
    </div>

<div class=datos>
  <span class= "direcciones">
  <span class="datoscompañia">
    <span><b>Compañia</b></span>
    <span>Ferron S.A</span>
    <span>Cif:36648392</span>
    <span>R. Tragaldabas,14</span>
    <span>Coiros de arriba</span>
  </span>
  <span class="datoscompañia">
    <span><b>facturacion</b></span>
    <span>Ferron S.A</span>
    <span>Cif:36648392</span>
    <span>R. Tragaldabas,14</span>
    <span>Coiros de arriba</span>
    </span>
  </span>
    <span class="inputs">
      <label for="factura">Nº Factura</label>
      <input class="factura" name="Nfactura" type="text" placeholder="Nº. Factura">
      <label for="fecha">Fecha factura</label>
      <input class="fecha" name="FECHA" type="date" required pattern="\d{4}-\d{2}-\d{2}">
  </span>
</div>
  <table class="tabla">
    <thead>
      <tr class="first">
        <th class="orden">#</th>
        <th class="tprod">Productos</th>
        <th class="tcant">Cantidad</th>
        <th class="tpru">Precio unidad</th>
        <th class="ttol">Precio total</th>
        <th class="borrar"></th>
      </tr>
    </thead>
    <tbody class ="tabbody">

    </tbody>
  </table>
  <div class="pie">
    <button class="abrirmenu">agregar producto</button>
    <span><table class="suma">
      <tbody>
        <tr>
          <th class="sum">suma total:</th>
          <th class="sumt" name="MONTANTE">0</th>
        </tr>
      </tbody>
    </table></span>
  </div>
  <div class="menu">
    <input class= "producto" type="text" placeholder="producto"> 
    <input class= "cantidad" type="number" placeholder="cantidad">
    <input class= "precio" type="number" placeholder="precio"> 
   <button class=introducir>introducir</button> </div>

  </main>
  <script async type="module" src="../javascript/scriptfact.js"></script>
  </div>

<div class="popup">
  <h3>¿Esta usted seguro?</h3>
  <div class="popbot">
  <button class="popsi">Si</button>
  <button class="popno">No</button>
  </div>
</div>`,
  repositorio:` <aside>
    <nav>
     <a href="/"> <img class="home" title="login" src="imagenes/home.svg"></a>
     <a href="/factura"> <img title="Nueva factura" src="imagenes/news.svg"></a>

    </nav>
     <div><a href="/"><img class="logout" title="logout" src="imagenes/power.svg"></a></div>

  </aside>


  
  <header class= headert>
    <div class="cabeza"><input type= "text" placeholder= "buscar"><span><img src="imagenes/bell.svg"> <img class="user" src="imagenes/trash.svg"></span> </div>
    <div class=facturillas>
      <h2>Facturas</h2>
      <a href="/factura"class="hecho">Crear nueva</a>
    </div>
    <div> 
      <button class="brep" id= "brep1" type="reset""reset">Todas</button>
           <button class="brep"id= "brep2">Pagadas</button>
      <button class="brep" id="brep3">No pagadas</button>
    </div>
      <table>
        <thead>
          <th>Fecha</th>
          <th>Nº Factura</th>
          <th>tipo Cliente</th>
          <th>Montante</th>
          <th>Estado</th>
          <th class="minith"></th>
          <th class="minith"></th>
          <th class="minith"></th>
          
      
          </thead>
        <tbody>

        </tbody>
      </table>
    <table class="suma">
      <tbody>
        <tr>
          <th class="sum">suma total:</th>
          <th class="sumt1">0</th>
        </tr>
  </header>`
    }
module.exports={paginas}