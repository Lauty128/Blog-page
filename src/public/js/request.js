export async function getArticles({page:r=0,size:t=4}){try{let e=`/api/articles?page=${r}&size=${t}`,a=await fetch(e).then(r=>r.json());return a}catch(n){Error("Ocurrio un error durante la operacion")}}export async function getBooks(){try{let r=await fetch("/api/books").then(r=>r.json());return r}catch(t){Error("Ocurrio un error durante la operacion")}}