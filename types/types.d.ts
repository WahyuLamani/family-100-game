interface Question{
    id: number;
    category: string;
    question: string;
    show: boolean;
    surveys : TopSurvey[];
}


type TopSurvey = {
    id: number;
    value: string;
    points: number;
}