document.getElementById("addButton").addEventListener("click", function () {
    let labelText = document.getElementById("labelInput").value;
    let type = document.getElementById("typeSelect").value;

    if (labelText === "") {
        alert("Enter a label name!");
        return;
    }

    let div = document.createElement("div");
    div.style.marginBottom = "10px";

    let label = document.createElement("label");
    label.innerText = labelText + ": ";
    div.appendChild(label);

    let input;

    if (type === "radio") {
        let genderOptions = ["Male", "Female", "Others"];

        let radioGroup = document.createElement("div");

        genderOptions.forEach(option => {
            let r = document.createElement("input");
            r.type = "radio";
            r.name = labelText; 
            r.value = option;

            let lbl = document.createElement("label");
            lbl.innerText = option;

            radioGroup.appendChild(r);
            radioGroup.appendChild(lbl);
            radioGroup.appendChild(document.createElement("br"));
        });

        div.appendChild(radioGroup);
    }

    else if (type === "checkbox") {
        input = document.createElement("input");
        input.type = "checkbox";
        div.appendChild(input);
    }

    else {
        input = document.createElement("input");
        input.setAttribute("type", type);
        div.appendChild(input);
    }

    document.getElementById("formArea").appendChild(div);

    document.getElementById("labelInput").value = "";
});


document.getElementById("saveButton").addEventListener("click", function () {

    let formArea = document.getElementById("formArea");
    let elements = formArea.querySelectorAll("div");

    let result = {};

    elements.forEach(div => {
        let label = div.querySelector("label");
        if (!label) return;

        let labelName = label.innerText.replace(":", "");

        let radios = div.querySelectorAll("input[type='radio']");
        let checkbox = div.querySelector("input[type='checkbox']");
        let input = div.querySelector("input[type='text'], input[type='number'], input[type='date']");

        if (radios.length > 0) {
            radios.forEach(r => {
                if (r.checked) result[labelName] = r.value;
            });
        }
        else if (checkbox) {
            result[labelName] = checkbox.checked ? "Checked" : "Not checked";
        }
        else if (input) {
            result[labelName] = input.value;
        }
    });

    alert("Form saved successfully!");
});
