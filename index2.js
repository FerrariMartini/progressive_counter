let queuedDateTime = "Sep 27, 2020 @ 20:08:00.000";

setInterval(function () {
  var _segundo = 1000;
  var _minuto = _segundo * 60;
  var _hora = _minuto * 60;
  var _dia = _hora * 24;

  var atual = new Date();
  var fim = new Date("06/02/2017 18:00:00");

  var diferenca = fim - atual;

  var dias = Math.floor(diferenca / _dia);
  var horas = Math.floor((diferenca % _dia) / _hora);
  var minutos = Math.floor((diferenca % _hora) / _minuto);
  var segundos = Math.floor((diferenca % _minuto) / _segundo);


}, 1000);
