var calcular_subida = 10; var decidir = 10; var lâmpada_tirada = true; var lâmpada = true; var lâmpada_trocada_com_sucesso;
var escada_posicionada_abaixo_da_lampada = true; var nao_chegou_ao_topo_da_escada = true; var lampada_queimada = true; var lampada_no_terminal = false; var lampada_nao_esta_fixada_terminal = true; var nao_chegou_ao_inicio_da_escada = true;
alert("Subir na escada"); alert("Retirar a lâmpada"); alert("Instalar a nova lâmpada"); alert("Descer da escada"); alert("Localizar a escada");
if (escada_posicionada_abaixo_da_lampada) { alert("Calcular subida"); } else { alert("Avisar o operador"); }
alert("Iniciar a subida");
for (var i = 0; i < calcular_subida; i++) { alert("Subir"); }
alert("Localizar a lâmpada"); alert("Testar a lâmpada");
if (lampada_queimada) { while (lampada_no_terminal) { alert("Girar sentido anti-horário"); alert("Guardar no recipiente"); } } else { alert("Avisar o operador"); alert("Pegar nova lâmpada");
while (lampada_nao_esta_fixada_terminal) { alert("Girar sentido horário"); } }
alert("Iniciar descida");
for (var i = calcular_subida; i > 0; i--) { alert("Descer"); }
lâmpada_trocada_com_sucesso = true; alert("Lâmpada trocada com sucesso!");