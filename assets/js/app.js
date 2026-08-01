const produtos=[
{nome:'Notebook Lenovo',preco:'R$ 2.999,90'},
{nome:'Air Fryer Philips',preco:'R$ 399,90'},
{nome:'Smartphone Samsung',preco:'R$ 1.899,90'},
{nome:'Monitor LG 27"',preco:'R$ 899,90'}
];
const area=document.getElementById('produtos');
produtos.forEach(p=>{
area.innerHTML+=`
<div class="col-md-3">
<div class="card h-100 shadow-sm">
<div class="card-body">
<div style="height:160px;background:#eef2f7;border-radius:8px" class="mb-3 d-flex align-items-center justify-content-center">📦</div>
<h5>${p.nome}</h5>
<p class="text-primary fw-bold">${p.preco}</p>
<a href="#" class="btn btn-warning w-100">Ver Oferta</a>
</div></div></div>`;
});
