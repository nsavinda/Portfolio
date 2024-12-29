let commandHistory = [];
let historyIndex = -1;

document.getElementById('input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const command = this.value.trim();
        if (command) {
            handleCommand(command);
            commandHistory.unshift(command);
            historyIndex = -1;
        }
        this.value = '';
    } else if (event.key === 'ArrowUp') {
        if (commandHistory.length > 0 && (historyIndex + 1) < commandHistory.length) {
            historyIndex++;
            this.value = commandHistory[historyIndex];
            event.preventDefault(); // Prevent the default action to ensure cursor moves to end
            this.setSelectionRange(this.value.length, this.value.length);

    
        }
    } else if (event.key === 'ArrowDown') {
        if (historyIndex > 0) {
            historyIndex--;
            this.value = commandHistory[historyIndex];
            this.setSelectionRange(this.value.length, this.value.length);
        } else {
            historyIndex = -1;
            this.value = '';
        }
    }
});

// Include all your existing functions and window.onload setup here...


function handleCommand(input) {
    const output = document.getElementById('output');
    const sanitizedInput = input.trim().toLowerCase();

    if (sanitizedInput === '') return; // Prevent empty command execution

    const args = sanitizedInput.split(' '); // Split input to allow arguments
    const command = args[0]; // The first word is the command
    const tabName = args.slice(1).join(' '); // Join the rest as the tab name

    switch (command) {
        case 'about':
            output.innerHTML += `  <p>Site Reliability Engineering Intern at WSO2 and a third-year Computer Science undergraduate at the University of Colombo School of Computing, passionate about DevOps and Linux. Excited about continuous learning and growth in these domains. Actively seeking opportunities to expand my knowledge and skills through hands-on experiences and collaborative projects.
                </p>
                <p>
                    Experienced with Linux, including Arch Linux and Ubuntu, and skilled in automating tasks using Shell Scripting. Experienced in Python, TypeScript, and JavaScript, specializing in the MERN stack. Proficient with Git, GitHub and GitHub Actions for seamless development, version control, and deployment workflows. 
                </p> 
                <p>
                    Enthusiastically exploring Generative AI while actively participating in hackathons.
                    
                </p>
                <p>
                    Let's connect! I'm always open to new opportunities, collaborations, and engaging discussions in the tech community.   </p>
           `;
            break;
        case 'contact':
            output.innerHTML += `<p>Email: <a href="mailto:hwnsavinda@gmail.com">hwnsavinda@gmail.com</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/nsavinda" target="_blank">nsavinda</a></p>
            <p>GitHub: <a href="https://www.github.com/nsavinda" target="_blank">nsavinda</a></p>`;

            break;
        case 'projects':
            output.innerHTML += `<p>Check out my GitHub: <a href="https://github.com/nsavinda" target="_blank">nsavinda</a></p>
            <p>Current Projects:<br><br>
            - <a href="https://github.com/Project-Testify" target="_blank">Testify</a><br>
                <ul>
                <li> 3rd year group project </li>
                <li> Online Exam Platform with AI based question generation and grading </li>
                </ul>
            - <a href="https://github.com/Elixir-Craft/terminalAI" target="_blank">Terminal AI</a><br>
                <ul>
                <li> Open Source project </li>
                <li> Command-line tool for AI-powered text and code generation using Gemini AI, OpenAI, and GPT4ALL APIs. </li>
                </ul>
            - <a href="https://github.com/Elixir-Craft/servefiles" target="_blank">Servefiles</a><br>
                <ul>
                <li> Open Source project </li>
                <li> An HTTPS server that serves static files on a local network from a directory with basic authentication. </li>
                </ul>
            - <a href="https://github.com/wanderlust-group-project-1/wanderlust" target="_blank">Wanderlust</a><br>
                <ul>
                <li> 2nd year group project </li>
                <li> A camping equipment renting and guide booking system. </li>
                <li> Implemented using MVC architecture with PHP, MySQL, jQuery, JavaScript, and Docker. </li>
                </ul>

            - <a href="https://github.com/nsavinda/publisher-subscriber" target="_blank">Publisher-Subscriber CLI</a><br>
                <ul>
                <li> Univesity project </li>
                <li>A publisher subscriber socket application supporting multiple servers with P2P. </li>
                </ul>
            - <a href="https://github.com/nsavinda/git-hooks" target="_blank">Git Hooks</a><br>
                <ul>
                <li> Open Source project </li>
                <li> A collection of Git hooks to improve workflow security and productivity. </li>
                </ul>
            </p>`;
            break;
        case 'help':
            output.innerHTML += `<p>Available commands:<br> - about<br> - contact<br> - projects<br> - clear<br> - help<br> - nirmalfetch<br> - tab<br> - tab [name]</p>`;
            break;
        case 'clear':
            output.innerHTML = '';
            break;
            case 'nirmalfetch':
                output.innerHTML += `<div style="display: flex; justify-content: start; align-items: flex-start; margin-bottom: 20px;">
                    <div style="flex: 1; padding: 10px; min-width: 150px;">
                        <img src="image.png" alt="Your Image" style="width: 100%; height: auto; max-width: 100%; border-radius: 5px;">
                    </div>
                    <div style="flex: 2; padding: 10px; background-color: #333; color: #fff; border-radius: 5px;">
            <strong>Name:</strong> Nirmal Savinda<br>
            <strong>Role:</strong> Site Reliability Engineering Intern<br>
            <strong>Location:</strong> Matugama, Sri Lanka<br>
            <strong>Email:</strong> <a href="mailto:hwnsavinda@gmail.com">hwnsavinda@gmail.com</a><br>
            <strong>GitHub:</strong> <a href="https://www.github.com/nsavinda" target="_blank">nsavinda</a><br>
            <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/nsavinda" target="_blank">nsavinda</a><br>
            <strong>Summary:</strong> SRE intern and final year Computer Science undergraduate at UCSC, passionate about Linux, DevOps, Cloud, and Generative AI.<br>
            <strong>Skills:</strong> Python, TypeScript, JavaScript, Go, PHP, Shell Script, SQL; FastAPI, Express, React, Next.js<br>
            <strong>Operating Systems:</strong> Arch Linux, Ubuntu, Alma Linux, Windows<br>
            <strong>Tools/Platforms:</strong> Docker, AWS, DigitalOcean, GitHub Actions, Netlify, Postman, Jenkins<br>
        </div>
                </div>`;
                break;
        case 'tab':
            if (tabName) {
                if (switchTab(tabName)) {
                    output.innerHTML += `<p>Switched to ${tabName} tab.</p>`;
                } else {
                    output.innerHTML += `<p>Tab not found: ${tabName}</p>`;
                }
            } else {
                output.innerHTML += listTabs();
            }
            break;
        case 'exit':
            output.innerHTML += ``
            openTerminal();
            break;
        default:
            output.innerHTML += `<p>Command not found: ${input}</p>`;
            break;
    }
    output.scrollTop = output.scrollHeight; // Keeps the latest output visible
}

function switchTab(tabName) {
    const tabs = document.getElementsByClassName("tab");
    const tabNames = Array.from(tabs).map(tab => tab.textContent.trim().toLowerCase());

    const tabIndex = tabNames.indexOf(tabName.toLowerCase());
    if (tabIndex !== -1) {
        tabs[tabIndex].click();
        return true;
    }
    return false;
}

function listTabs() {
    const tabs = document.getElementsByClassName("tab");
    const tabNames = Array.from(tabs).map(tab => `- ${tab.textContent}`).join('<br>');
    return `<p>Available tabs:<br>${tabNames}</p>`;
}




function openTab(evt, tabName) {
    var i, tabcontent, tabs;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tabs = document.getElementsByClassName("tab");
    for (i = 0; i < tabs.length; i++) {
        tabs[i].style.backgroundColor = "";
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.style.backgroundColor = "#222";
}

window.onload = function() {
    document.getElementById('output').innerHTML += `<p>Welcome to my personal terminal. Type 'help' for available commands.</p>
    <p>Available commands:<br> - about<br> - contact<br> - projects<br> - clear<br> - help<br> - nirmalfetch<br> - tab<br> - tab [name]</p>
    `;

    document.getElementsByClassName("tab")[0].click(); // Automatically open the first tab
}


function openTerminal() {
  var x = document.getElementById("terminal-container");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

document.getElementById('terminal').addEventListener('click', function() {
    document.getElementById('input').focus();
});
