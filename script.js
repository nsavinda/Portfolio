document.getElementById('input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        handleCommand(this.value);
        this.value = '';
    }
});

function handleCommand(input) {
    const output = document.getElementById('output');
    const sanitizedInput = input.trim().toLowerCase();

    // Prevent empty command execution
    if (sanitizedInput === '') return;

    switch (sanitizedInput) {
        case 'about':
            output.innerHTML += `<p>I'm a software developer with a passion for Linux and open-source technologies.</p>`;
            break;
        case 'contact':
            output.innerHTML += `<p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>`;
            break;
        case 'projects':
            output.innerHTML += `<p>Check out my GitHub: <a href="https://github.com/yourusername" target="_blank">yourusername</a></p>`;
            break;
        case 'resume':
            output.innerHTML += `<p>Download my resume: <a href="resume.pdf" target="_blank">Resume</a></p>`;
            break;
        case 'help':
            output.innerHTML += `<p>Available commands:<br> - about<br> - contact<br> - projects<br> - resume<br> - clear<br> - help<br> - nirmalfetch</p>`;
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
            <strong>Phone:</strong> +94716024489<br>
            <strong>GitHub:</strong> <a href="https://www.github.com/nsavinda" target="_blank">nsavinda</a><br>
            <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/nsavinda" target="_blank">nsavinda</a><br>
            <strong>Summary:</strong> SRE intern and final year Computer Science undergraduate at UCSC, passionate about Linux, DevOps, Cloud, and Generative AI.<br>
            <strong>Current Projects:</strong> TESTIFY, WANDERLUST, PUBLISHER-SUBSCRIBER CLI, TERMINAL AI, SERVEFILES<br>
            <strong>Skills:</strong> Python, TypeScript, JavaScript, Go, PHP, Shell Script, SQL; FastAPI, Express, React, Next.js<br>
            <strong>Operating Systems:</strong> Arch Linux, Ubuntu, Alma Linux, Windows<br>
            <strong>Tools/Platforms:</strong> Docker, AWS, DigitalOcean, GitHub Actions, Netlify, Postman, Jenkins<br>
        </div>
                </div>`;
                break;
            
            
            
        default:
            output.innerHTML += `<p>Command not found: ${input}</p>`;
            break;
    }
    output.scrollTop = output.scrollHeight; // Keeps the latest output visible
}

window.onload = function() {
    document.getElementById('output').innerHTML += `<p>Welcome to my personal terminal. Type 'help' for available commands.</p>`;
}
