interface Question{
    id: number;
    question: string;
    surveys : TopSurvey[];
}


type TopSurvey = {
    id: number;
    value: string;
    points: number;
}