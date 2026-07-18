from fastapi import APIRouter

from app.models.coach_model import CoachRequest

from app.services.coach_service import ask_career_coach


router = APIRouter()


@router.post("/career-coach")
def career_coach(request: CoachRequest):

    answer = ask_career_coach(

        question=request.question,

        assessment=request.assessment,

        results=request.results

    )

    return {

        "answer": answer

    }