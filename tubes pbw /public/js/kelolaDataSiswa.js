let elDownload = document.querySelector('.template');

elDownload.addEventListener('click',async (e)=>{
    const template = await fetch('/siswa/template');
    const templateBlob = await template.blob();
    const templateURL = URL.createObjectURL(templateBlob);

    const anchor = document.createElement("a");
    anchor.href = templateURL;
    anchor.download = "templateSiswa";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);

    URL.revokeObjectURL(templateURL);
});