let DragArea = document.querySelector(".IconApp");
let DragText = DragArea.querySelector("h3");
let btn = DragArea.querySelector("button");
let inp = DragArea.querySelector("input");
let MyFile;
btn.onclick = ()=>
    {
        inp.click();
    }
inp.addEventListener("change",function()
    {
        MyFile = this.files[0];
        DragArea.classList.add("active");
        ShowResult();
    })
DragArea.addEventListener("dragover",(e)=>
    {
        e.preventDefault();
        DragArea.classList.add("active");
        DragText.textContent = "Release to upload a file.";
    })
DragArea.addEventListener("dragleave",(e)=>
    {
        e.preventDefault();
        DragArea.classList.remove("active");
        DragText.textContent = "Drag & Drop";
    })
DragArea.addEventListener("drop",(e)=>
    {
        e.preventDefault();
        MyFile = e.dataTransfer.files[0];
        ShowResult();
    })
function ShowResult()
    {
        let FileType = MyFile.type;
        let ValidEx = ["image/jpeg","image/jpg","image/png"];
        if(ValidEx.includes(FileType))
            {
                let fileReader = new FileReader();
                fileReader.onload = ()=>
                    {
                        let url = fileReader.result;
                        let img = `<img src="${url}" alt=""></img>`;
                        DragArea.innerHTML = img;
                    }
                fileReader.readAsDataURL(MyFile);
            }
        else
            {
                alert("This file is not valid to upload. Please upload a jpg/jpeg/png file.");
                DragArea.classList.remove("active");
                DragText.textContent = "Drag & Drop";
            }
    }