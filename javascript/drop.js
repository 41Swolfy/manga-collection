function createDropdownMenu() {
    // create header element
    const header = document.createElement("header");
    header.classList.add("heading");

    // create link element
    const link = document.createElement("a");
    link.classList.add("head-link");
    link.setAttribute("href", "/index.html");

    // create h1 element
    const h1 = document.createElement("h1");
    h1.textContent = "Tsubasa List";

    // append h1 to link and link to header
    link.appendChild(h1);
    header.appendChild(link);

    // append header to body
    document.body.appendChild(header);
//huh
    // create dropdowns
    for (let i = 1; i <= 3; i++) {
        // create dropdown element
        const dropdown = document.createElement("div");
        dropdown.classList.add("dropdown");
        dropdown.setAttribute("id", `dropdown-${i}`);

        // create button element
        const button = document.createElement("button");
        button.classList.add("drop-btn");
        button.textContent = i === 1 ? "Ongoing/Collecting ▼" : i === 2 ? "Completed ▼" : "Dropped ▼";

        // create dropdown content element
        const dropdownContent = document.createElement("div");
        dropdownContent.classList.add("dropdown-content");

        // create links for dropdown content
        const links = [
            { href: `/Ongoing/O_af.html`, text: "A-F" },
            { href: `/Ongoing/O_gl.html`, text: "G-L" },
            { href: `/Ongoing/O_mq.html`, text: "M-Q" },
            { href: `/Ongoing/O_rs.html`, text: "R-S" },
            { href: `/Ongoing/O_tz.html`, text: "T-Z" },
        ];

        if (i === 2) {
            links.forEach((link, index) => {
                link.href = link.href.replace("Ongoing", "Completed");
                link.href = link.href.replace("/O_af", "/C_af");
                link.href = link.href.replace("/O_gl", "/C_gl");
                link.href = link.href.replace("/O_mq", "/C_mq");
                link.href = link.href.replace("/O_rs", "/C_rt");
                link.href = link.href.replace("/O_tz", "/C_uz");

                if (index === 3) {
                    link.text = "R-T";
                } else if (index === 4) {
                    link.text = "U-Z";
                }
            });
        } else if (i === 3) {
            links.forEach((link) => {
                link.href = link.href.replace("Ongoing", "Dropped");
                link.href = link.href.replace("/O_af", "/D_af");
                link.href = link.href.replace("/O_gl", "/D_gl");
                link.href = link.href.replace("/O_mq", "/D_mq");
                link.href = link.href.replace("/O_rs", "/D_rt");
                link.href = link.href.replace("/O_tz", "/D_uz");
            });
        }

        // create links and append to dropdown content
        links.forEach((link) => {
            const a = document.createElement("a");
            a.setAttribute("href", link.href);
            a.textContent = link.text;
            dropdownContent.appendChild(a);
        });

        // easter egg
        if (i === 3) {
            const easterEgg = document.createElement("a");
            easterEgg.setAttribute("href", "/swolfy.html");

            dropdownContent.appendChild(easterEgg);
        }

        // append button and dropdown content to dropdown
        dropdown.appendChild(button);
        dropdown.appendChild(dropdownContent);

        // append dropdown to body
        document.body.appendChild(dropdown);
    }

}

createDropdownMenu();