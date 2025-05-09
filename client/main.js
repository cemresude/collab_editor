import * as Y from 'yjs'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import { WebsocketProvider } from 'y-websocket'
import { QuillBinding } from 'y-quill'
import { io } from 'socket.io-client'

var socket = io('http://localhost:3000');
const ydoc = new Y.Doc();
const provider = new WebsocketProvider('ws://localhost:3000', 'quill-room', ydoc);
const user = {
  name: "Sen",
  color: '#0080ff'
}
const Font = Quill.import('formats/font');
Font.whitelist = ['ariel', 'times-new-roman', 'courier', 'open-sans', 'raleway', 'lato', 'montserrat', 'ubuntu', 'merriweather', 'oswald', 'source-sans-pro', 'playfair-display', 'rubik'];
Quill.register(Font, true);



const quill = new Quill('#editor-container', {
  placeholder: 'Buraya yazmaya başlayın',
  theme: 'snow',
  modules: {
    toolbar: [
      [{ 'font': Font.whitelist }],
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'align': [] }],
      ['link', 'image'],
      ['clean']
    ]
  }
});

const ytext = ydoc.getText('quill');
const binding = new QuillBinding(ytext, quill, provider.awareness);
provider.awareness.setLocalStateField('user', {
  name: 'Sen',
  color: '#0080ff'
});
const shareButton = document.getElementById("share-btn");
const docTitle = document.getElementById("doc-title");
const editor1 = document.getElementById("editor");
const avatar = document.getElementById("avatar");
const menuOptions = document.getElementById("menu-options");
const clientsTotal = document.getElementById('clients-total');
const colors = ['#34a853', '#fbbc05', '#4285f4', '#ff6d01', '#46bdc6', '#d61d1d']


shareButton.addEventListener("click", async () => {
  const content = editor.innerHTML;
  const title = docTitle.value || "Adsız Belge";

  try {
    const res = await fetch("/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });

    const result = await res.json();
    if (result.success) {
      alert(`Belge başarıyla kaydedildi. Versiyon: ${result.version}`);
    }
  } catch (err) {
    alert("Bir hata oluştu.");
    console.error(err);
  }
});
function setFont(fontName) {
  editor.style.fontFamily = fontName
}
function setSize(size) {
  editor.style.fontSize = size + "px"
}
function setColor(color) {
  editor.style.color = color
}
const fontSelect = document.getElementById("font-select");
if (fontSelect) {
  fontSelect.addEventListener("change", function(e) {
    setFont(e.target.value);
  });
}
const fontSizeSelect = document.getElementById("font-size-select");
fontSizeSelect.addEventListener("change", function(e) {
  setSize(e.target.value)
})
bolder.addEventListener("click", () => {
  document.execCommand("bold");
})
italic.addEventListener("click", () => {
  document.execCommand("italic");
})
underline.addEventListener("click", () => {
  document.execCommand("underline");
})

colorButton.addEventListener("click", (e) => {
  e.stopPropagation();
  const isVisible = colorPicker.style.display === "block";
  colorPicker.style.display = isVisible ? "none" : "block";

  const rect = colorButton.getBoundingClientRect();
  colorPicker.style.top = `${rect.bottom + window.scrollY}px`;
  colorPicker.style.left = `${rect.left + window.scrollX}px`;
});

document.addEventListener("click", () => {
  colorPicker.style.display = "none";
});
/*burada ufak hatalar var, düzelecek */
document.querySelectorAll(".color-option").forEach((option) => {
  option.addEventListener("click", (e) => {
    e.stopPropagation();
    const color = option.dataset.color;

    // Editör içine odaklan
    document.getElementById("editor").focus();

    // execCommand ile renk uygula
    document.execCommand("styleWithCSS", false, true);
    document.execCommand("foreColor", false, color);

    colorPicker.style.display = "none";
  });
});

socket.on('clients-total', (data) => {
  clientsTotal.innerText = `Total Clients: ${data}`;
});
document.addEventListener("DOMContentLoaded", function () {
  const pdfButton = document.getElementById("export-pretty-pdf");
  if (pdfButton) {
    pdfButton.addEventListener("click", function () {
      const editorContainer = document.getElementById("editor-container");
      if (editorContainer) {
        const opt = {
          margin:       0.5,
          filename:     'belge.pdf',
          image:        { type: 'jpeg', quality: 0.98 },
          html2canvas:  { scale: 2 },
          jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        html2pdf().from(editorContainer).set(opt).save();
      } else {
        console.error("Editor container not found.");
      }
    });
  } else {
    console.error("PDF export button not found.");
  }
});
