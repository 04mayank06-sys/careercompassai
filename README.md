# Career Compass AI

Career Compass AI is an AI-powered career guidance platform that helps students identify suitable technology career paths based on their academic profile, technical skills, interests, projects, and certifications.

The platform provides personalized career recommendations, career readiness analysis, skill gap detection, learning roadmaps, and an AI Career Coach that offers tailored career guidance and suggestions.

---

# Features

## Career Assessment

- Analyze technical skills and interests
- Evaluate CGPA, projects, and certifications
- Generate personalized career recommendations

## Career Readiness Score

- Overall readiness percentage
- Career match analysis
- Skill gap identification

## Skill Gap Analysis

- Identify missing skills for recommended careers
- Understand improvement areas
- Track career readiness

## Personalized Learning Roadmap

Receive recommendations for:

- Skills to learn
- Projects to build
- Certifications
- Career roadmap

## AI Career Coach

The AI Career Coach provides personalized guidance based on your assessment results.

You can ask questions such as:

- What skills should I learn next?
- Which certifications are recommended?
- What projects should I build?
- How can I improve my profile?
- How should I prepare for interviews?
- Which career suits me best?

## Career Explorer

Explore various technology career paths, including:

- Frontend Developer
- Backend Developer
- Full Stack Developer
- Data Scientist
- AI/ML Engineer
- Cybersecurity Analyst
- UI/UX Designer
- Cloud Engineer

## Modern User Interface

- Responsive design
- Premium dark theme
- Interactive dashboard
- Smooth animations
- Clean and intuitive user experience

---

# Tech Stack

## Frontend

- HTML5
- CSS3
- JavaScript (ES6)

## Backend

- Python
- FastAPI

## AI

- Google Gemini API

---

# Repository Structure

This project is maintained using two Git branches.

| Branch | Description |
|---------|-------------|
| frontend | HTML, CSS and JavaScript files |
| backend | FastAPI backend, REST APIs and datasets |

Both branches are required to run the complete application.

---

# Prerequisites

Install the following before running the project:

- Python 3.10 or above
- Git
- Visual Studio Code (Recommended)
- Live Server Extension for VS Code

---

# Step 1 - Create Two Separate Project Folders

Create two folders anywhere on your computer.

Example:

```
CareerCompassAI-Frontend
CareerCompassAI-Backend
```

---

# Step 2 - Backend Setup

Open a terminal.

Navigate to your backend folder.

```bash
cd CareerCompassAI-Backend
```

Clone the repository.

```bash
git clone https://github.com/Sarthak-vats-cse/CAREERCOMPASSAI.git
```

Move into the repository.

```bash
cd CAREERCOMPASSAI
```

Switch to the backend branch.

```bash
git checkout backend
```

Create a virtual environment.

```bash
python -m venv venv
```

Activate the virtual environment.

### Windows

```bash
venv\Scripts\activate
```

### macOS / Linux

```bash
source venv/bin/activate
```

Install the required dependencies.

```bash
pip install -r requirements.txt
```

Run the FastAPI server.

```bash
uvicorn main:app --reload
```

Backend will run at:

```
http://127.0.0.1:8000
```

Swagger Documentation:

```
http://127.0.0.1:8000/docs
```

Keep this terminal running while using the application.

---

# Step 3 - Frontend Setup

Open another terminal.

Navigate to your frontend folder.

```bash
cd CareerCompassAI-Frontend
```

Clone the repository.

```bash
git clone https://github.com/Sarthak-vats-cse/CAREERCOMPASSAI.git
```

Move into the repository.

```bash
cd CAREERCOMPASSAI
```

Switch to the frontend branch.

```bash
git checkout frontend
```

Open the project in Visual Studio Code.

Locate:

```
index.html
```

Right-click and select:

```
Open with Live Server
```

The application will automatically open in your browser.

---

# Running the Project

Both the frontend and backend must run simultaneously.

Backend:

```
http://127.0.0.1:8000
```

Frontend:

Run using Live Server.

---

# How to Use

1. Open the application.
2. Click **Start Assessment**.
3. Complete the assessment by entering:
   - Technical skills
   - CGPA
   - Projects
   - Certifications
   - Career interests
4. Click **Analyze Career**.
5. View your:
   - Career Readiness Score
   - Career Recommendations
   - Skill Gap Analysis
   - Learning Roadmap
6. Navigate to the **AI Career Coach**.
7. Ask career-related questions and receive personalized AI guidance.

---

# Key Features

- AI-powered Career Recommendations
- Career Readiness Assessment
- Skill Gap Detection
- Personalized Learning Roadmap
- Certification Suggestions
- AI Career Coach
- Career Explorer
- Responsive User Interface
- FastAPI REST APIs
- Google Gemini AI Integration

---

# Future Enhancements

- Resume Analyzer
- Resume Builder
- User Authentication
- User Profiles
- Job Recommendation System
- Dashboard Analytics
- Database Integration

---

# Important Note

The frontend communicates with the FastAPI backend using REST APIs.

If the backend server is not running, career recommendations, assessment analysis, and the AI Career Coach will not function correctly.

Ensure the FastAPI server is running before opening the frontend.

---

# Team

Developed as a Hackathon Project.

Team Members:

- Sarthak Vats
- Mayank Srivastava
- Saanwaree

---

# License

This project is developed for educational and learning purposes.
