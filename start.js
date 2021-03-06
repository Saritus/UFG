var audio, background, button_audio, button_lyric, button_ok, button_ufg, input_audio, input_lyric, input_ufg, label_audio, label_ufg, logo, ufg, version;

background = new Layer({
  image: "resources/background2.png"
});

background.fluid({
  autoWidth: true,
  autoHeight: true
});

logo = new Layer({
  width: 670,
  height: 330,
  image: "resources/UFCLogo.png"
});

logo.centerX();

version = new Layer({
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  height: 50,
  html: "<p><center><b>Version: 0.4.94</b></center></p>"
});

version.fluid({
  xAlign: 'left',
  yAlign: 'bottom',
  autoWidth: true
});

audio = new Layer({
  width: 600,
  height: 250,
  backgroundColor: "rgba(0, 0, 0, 0)"
});

audio.centerX();

audio.fluid({
  yAlign: 'bottom',
  yOffset: -340
});

label_audio = new Layer({
  parent: audio,
  width: audio.width,
  height: 70,
  html: "<p><h1><center>Audio</center></h1></p>",
  backgroundColor: "rgba(0, 0, 0, 0.35)"
});

label_audio.centerX();

input_audio = new Input({
  parent: audio,
  setup: true,
  placeholder: "Audio-Datei",
  placeholderColor: "#fff",
  type: "text",
  width: 450,
  height: 50,
  y: audio.height - 160
});

button_audio = new Layer({
  parent: audio,
  width: 70,
  height: 70,
  x: audio.width - 70,
  y: audio.height - 160,
  image: "blues/folder_open.png"
});

button_audio.on(Events.Click, function() {
  return load_audio.click();
});

input_lyric = new Input({
  parent: audio,
  setup: true,
  placeholder: "Lyric-Datei",
  placeholderColor: "#fff",
  type: "text",
  width: 450,
  height: 50,
  y: audio.height - 70
});

button_lyric = new Layer({
  parent: audio,
  width: 70,
  height: 70,
  x: audio.width - 70,
  y: audio.height - 70,
  image: "blues/folder_open.png"
});

button_lyric.on(Events.Click, function() {
  return load_audio.click();
});

ufg = new Layer({
  width: 600,
  height: 160,
  backgroundColor: "rgba(0, 0, 0, 0)"
});

ufg.centerX();

ufg.fluid({
  yAlign: 'bottom',
  yOffset: -160
});

label_ufg = new Layer({
  parent: ufg,
  width: ufg.width,
  height: 70,
  html: "<p><h1><center>UFC</center></h1></p>",
  backgroundColor: "rgba(0, 0, 0, 0.35)"
});

label_ufg.centerX();

input_ufg = new Input({
  parent: ufg,
  setup: true,
  placeholder: "UFC-Datei",
  placeholderColor: "#fff",
  type: "text",
  width: 450,
  height: 50,
  y: ufg.height - 70
});

button_ufg = new Layer({
  parent: ufg,
  width: 70,
  height: 70,
  x: ufg.width - 70,
  y: ufg.height - 70,
  image: "blues/folder_open.png"
});

button_ufg.on(Events.Click, function() {
  return load_ufg.click();
});

button_ok = new Layer({
  width: audio.width,
  height: 70,
  image: "resources/blue_button_long.png",
  html: '<center><h1>OK</h1></center>'
});

button_ok.centerX();

button_ok.fluid({
  yAlign: 'bottom',
  yOffset: -70
});

button_ok.on(Events.Click, function() {
  return ok_button.click();
});

window.addEventListener('resize', (function(event) {
  logo.centerX();
  audio.centerX();
  ufg.centerX();
  return button_ok.centerX();
}), false);
