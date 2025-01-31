// Cybersecurity Awareness Simulation Game

const scenarios = [
    {
        question: "You get a SMS message directing you to a link about a lost package. What do you do?",
        options: [
            "Click the link",
            "Ignore",
            "Block and report as spam"
        ],
        correct: 2,
        feedback: [
            "❌ Clicking the link could lead to a phishing attack! Never click suspicious links.",
            "⚠️ Ignoring is okay, but reporting can help others avoid scams.",
            "✅ Correct! Reporting helps prevent future scams."
        ]
    },
    {
        question: "A call comes through from the government! They are asking for personal details for tax purposes. What do you do?",
        options: [
            "Provide the information over the phone",
            "Hang up and call back using official contact numbers",
            "Report the call to authorities"
        ],
        correct: 2,
        feedback: [
            "❌ Never provide sensitive information over the phone unless verified.",
            "⚠️ Good response, but also report it to prevent others from falling victim.",
            "✅ Correct! Government agencies will never call for sensitive information."
        ]
    },
    {
        question: "A friend’s account sends you a direct message with a link claiming they won a prize and encouraging you to click. What do you do?",
        options: [
            "Click the link to claim your prize",
            "Contact your friend through another platform to verify",
            "Block the account and report it as hacked"
        ],
        correct: 2,
        feedback: [
            "❌ Clicking could expose you to scams or malware!",
            "⚠️ Verifying is good practice, but reporting ensures action is taken.",
            "✅ Correct! Reporting prevents further compromise."
        ]
    },
    {
        question: "While browsing, a pop-up appears claiming your antivirus software is out of date and prompts you to download an update. What do you do?",
        options: [
            "Download the update immediately",
            "Close the pop-up and check for updates directly through the software",
            "Report the pop-up as suspicious software"
        ],
        correct: 1,
        feedback: [
            "❌ Fake updates can install malware! Always verify updates directly.",
            "✅ Correct! Always update software through official channels.",
            "⚠️ Reporting helps, but verifying first is crucial."
        ]
    },
    {
        question: "You notice unusual login attempts on your accounts after using the same password across multiple sites. What do you do?",
        options: [
            "Ignore it; it’s probably nothing serious",
            "Change passwords for all accounts immediately and enable multi-factor authentication (MFA)",
            "Report the activity to your service providers"
        ],
        correct: 1,
        feedback: [
            "❌ Ignoring it puts all your accounts at risk!",
            "✅ Correct! Changing passwords and enabling MFA improves security.",
            "⚠️ Reporting is useful, but changing your password is the top priority."
        ]
    },
    {
        question: "During a video call, someone impersonates your boss using deepfake technology, requesting sensitive company information. What do you do?",
        options: [
            "Provide the requested information without verification",
            "Ask for confirmation through another communication channel (e.g., text or email)",
            "End the call and report the incident to IT security"
        ],
        correct: 2,
        feedback: [
            "❌ Deepfake scams are a real threat! Always verify requests.",
            "⚠️ Verification is good, but reporting helps prevent future attacks.",
            "✅ Correct! IT security needs to investigate and mitigate the threat."
        ]
    },
    {
        question: "You receive an alert from your software provider about a recent security breach that could affect your organization. What do you do?",
        options: [
            "Dismiss the alert as irrelevant",
            "Follow up with your IT department for further investigation and remediation steps",
            "Share the alert with other departments for awareness and action"
        ],
        correct: 1,
        feedback: [
            "❌ Ignoring alerts can lead to security breaches!",
            "✅ Correct! IT should assess the situation and take action.",
            "⚠️ Spreading awareness helps, but IT must verify first."
        ]
    }
];

let score = 0;
let currentScenario = 0;

function displayScenario() {
    const scenario = scenarios[currentScenario];
    document.getElementById("question").innerText = scenario.question;
    document.getElementById("options").innerHTML = "";
    scenario.options.forEach((option, index) => {
        document.getElementById("options").innerHTML += `<button onclick="selectOption(${index})">${option}</button>`;
    });
}

function selectOption(index) {
    const scenario = scenarios[currentScenario];
    alert(scenario.feedback[index]);
    if (index === scenario.correct) {
        score += 10;
    } else {
        score -= 10;
    }
    currentScenario++;
    if (currentScenario < scenarios.length) {
        displayScenario();
    } else {
        alert(`Game Over! Your final security score: ${score}`);
    }
}

document.addEventListener("DOMContentLoaded", displayScenario);
