function proveraForme(forma) {
  var ime = forma.ime.value;
  if (ime == '') {
    alert('Molimo unesite ime!');
    return false;
  }
  var prezime = forma.prezime.value;
  if (prezime == '') {
    alert('Molimo unesite prezime!');
    return false;
  }
  if (ime[0] != ime[0].toUpperCase() || prezime[0] != prezime[0].toUpperCase()) {
    alert('Molimo unesite ime i prezime sa velikim pocetnim slovom.');
    return false;
  }

  var jmbg = forma.jmbg.value;
  if (jmbg.length == '' || jmbg.length != 13 || isNaN(jmbg)) {

    alert('JMBG mora biti broj od 13 cifara');
    return false;
  }

  return true;
}

function checkboxChecked(checkBox) {
  if (checkBox.checked == true) {
    document.getElementById('sel1').disabled = false;
  } else {
    document.getElementById('sel1').disabled = true;
  }
  document.getElementById('submitbtn').style.backgroundColor = 'white';

}

function premiumSelect() {
  var option = document.getElementById('sel1');

  if (option.value == 1) {
    document.getElementById('submitbtn').style.backgroundColor = 'silver';
  } else if (option.value == 2) {
    document.getElementById('submitbtn').style.backgroundColor = 'gold';
  } else {
    document.getElementById('submitbtn').style.backgroundColor = 'skyblue';
  }
}