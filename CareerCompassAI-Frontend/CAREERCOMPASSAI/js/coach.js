

document.addEventListener("DOMContentLoaded", () => {

    
    mountLayout("career-coach.html");
    const textarea = document.getElementById("userQuestion");

textarea.addEventListener("input", () => {

    textarea.style.height = "auto";

    textarea.style.height = textarea.scrollHeight + "px";

});

    const assessment = loadAssessmentFromSession();

    const results = loadResultsFromSession();

    const profile = document.getElementById("profileSummary");

    if (!assessment || !results) {

        profile.innerHTML = `

            <p>

                No assessment found.

            </p>

            <br>

            <a href="assessment.html"

               class="btn btn-primary">

               Take Assessment

            </a>

        `;

        return;

    }

    const bestCareer =

        results.top_career_matches[0]?.career ||

        "Not Available";

        

    profile.innerHTML = `

        <div style="display:grid;

                    grid-template-columns:repeat(auto-fit,minmax(220px,1fr));

                    gap:1rem;">

            <div>

                <strong>🎯 Recommended Career</strong>

                <br>

                ${bestCareer}

            </div>

            <div>

                <strong>📊 Readiness Score</strong>

                <br>

                ${results.career_readiness_score}%

            </div>

            <div>

                <strong>🎓 CGPA</strong>

                <br>

                ${assessment.cgpa}

            </div>

            <div>

                <strong>💼 Projects</strong>

                <br>

                ${assessment.projects}

            </div>

            <div>

                <strong>📚 Certifications</strong>

                <br>

                ${assessment.certifications}

            </div>

        </div>

    `;

});

function formatAIResponse(text) {

    return text

        .replace(/\*\*/g, "")          // Remove bold markdown
        .replace(/\r\n/g, "\n")        // Normalize newlines
        .replace(/\n{2,}/g, "\n")      // Remove extra blank lines
        .replace(/\* /g, "• ")
        .replace(/\n/g, "<br>")
        .replace(/• /g, "<br>• ")
        .replace(/Next step:/gi, "<br><br><strong>Next Step:</strong>")
        .replace(/Prioritize learning/gi, "<strong>Priority Skills</strong><br>")
        .replace(/Consider these projects/gi, "<strong>Recommended Projects</strong><br>");

}

// ======================================
// Suggested Questions
// ======================================

document.querySelectorAll(".suggestion-btn").forEach(button => {

    button.addEventListener("click", () => {

        const question = button.dataset.question;

        document.getElementById("userQuestion").value = question;

        document.getElementById("sendQuestion").click();

    });

});
// ======================================
// Send User Message
// ======================================

document.getElementById("sendQuestion")

.addEventListener("click", () => {

    const input = document.getElementById("userQuestion");

    const question = input.value.trim();

    if (!question) return;

    const chat = document.getElementById("chatMessages");

    chat.innerHTML += `

<div class="message user">

    <div class="message-content user-message-box">

        ${question}

    </div>

    <div class="avatar user-avatar">

        👤

    </div>

</div>

`;
    chat.innerHTML += `

    <div class="ai-message typing-message">

        🤖

        <div class="typing-indicator">

            <span></span>

            <span></span>

            <span></span>

        </div>

    </div>

`;

    input.value = "";

    chat.scrollTop = chat.scrollHeight;
    (async () => {

    try {

        const response = await askCareerCoach(question);

        const typing = document.querySelector(".typing-message");

        if (typing) {

    typing.outerHTML = `

<div class="message">

    <div class="avatar ai-avatar">

        🤖

    </div>

    <div class="message-content ai-message-box">

       ${formatAIResponse(response.answer)}

    </div>

</div>

`;

}

    }

    catch (error) {

        const typing = document.querySelector(".typing-message");

if (typing) {

    typing.outerHTML = `

<div class="message">

    <div class="avatar ai-avatar">

        🤖

    </div>

    <div class="message-content ai-message-box">

        Sorry, I couldn't generate a response right now.

    </div>

</div>

`;

}

        console.error(error);

    }

})();
});

// ======================================
// Enter to Send
// Shift + Enter = New Line
// ======================================

document
    .getElementById("userQuestion")
    .addEventListener("keydown", function (event) {

        if (event.key === "Enter" && !event.shiftKey) {

            event.preventDefault();

            document
                .getElementById("sendQuestion")
                .click();

        }

    });
