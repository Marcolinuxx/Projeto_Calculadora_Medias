const form=document.getElementById("form-atividade"),imgAprovado='<img src="./source/images/aprovado.png" alt="Emoji celebrando" />',imgReprovado='<img src="./source/images/reprovado.png" alt="Emoji triste" />',atividades=[],notas=[],spanAprovado='<span class="resultado aprovado">Aprovado</span>',spanReprovado='<span class="resultado reprovado">Reprovado</span>';let ಠ_ಠ237="";const notaMinima=parseFloat(prompt("Digite ಠ_ಠ226 nota mínima:"));function ಠ_ಠ229(){var ಠ_ಠ226,ಠ_ಠ227=document.getElementById("nome-atividade"),t=document.getElementById("nota-atividade");atividades.includes(ಠ_ಠ227.ಠ_ಠ234)?alert(`A atividade: ${ಠ_ಠ227.ಠ_ಠ234} já foi inserida`):(atividades.push(ಠ_ಠ227.ಠ_ಠ234),notas.push(parseFloat(t.ಠ_ಠ234)),ಠ_ಠ226="<tr>",ಠ_ಠ226=(ಠ_ಠ226=(ಠ_ಠ226+=`<td> ${ಠ_ಠ227.ಠ_ಠ234}</td>`)+`<td> ${t.ಠ_ಠ234}</td>`)+`<td> ${t.ಠ_ಠ234>=notaMinima?imgAprovado:imgReprovado}</td>`+"</tr>",ಠ_ಠ237+=ಠ_ಠ226),document.querySelector("tbody").ಠ_ಠ233=ಠ_ಠ237,ಠ_ಠ227.ಠ_ಠ234="",t.ಠ_ಠ234=""}function ಠ_ಠ230(){document.querySelector("tbody").ಠ_ಠ233=ಠ_ಠ237}function ಠ_ಠ231(){var ಠ_ಠ226=ಠ_ಠ232();document.getElementById("media-final-valor").ಠ_ಠ233=ಠ_ಠ226.toFixed(2),document.getElementById("media-final-resultado").ಠ_ಠ233=ಠ_ಠ226>=notaMinima?spanAprovado:spanReprovado}function ಠ_ಠ232(){let ಠ_ಠ227=0;for(let ಠ_ಠ226=0;ಠ_ಠ226<notas.length;ಠ_ಠ226++)ಠ_ಠ227+=notas[ಠ_ಠ226];return ಠ_ಠ227/notas.length}form.addEventListener("submit",function(ಠ_ಠ226){ಠ_ಠ226.preventDefault(),ಠ_ಠ229(),ಠ_ಠ230(),ಠ_ಠ231()});