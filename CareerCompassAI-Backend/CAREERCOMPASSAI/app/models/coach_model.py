from pydantic import BaseModel


class CoachRequest(BaseModel):

    question: str

    assessment: dict

    results: dict