function QuestionCard(){
    const questionObject  = {
        "ID": 829,
        "Title": "Consecutive Numbers Sum",
        "Acceptance": "37.5%",
        "Difficulty": "Hard",
        "Frequency": 1.7290600615878309,
        "Link": "https://leetcode.com/problems/consecutive-numbers-sum"
    };

    return (
        <div>
            <p>Id: <span>{questionObject.ID}</span></p>
            <p>Title: <span>{questionObject.Title}</span></p>
            <p>Acceptance: <span>{questionObject.Acceptance}</span></p>
            <p>Difficulty: <span>{questionObject.Difficulty}</span></p>
            <p>Frequency: <span>{questionObject.Frequency}</span></p>
            <a href={questionObject.Link} target="_blank" rel="noopener noreferrer">Link</a>
        </div>
    );
}


export default function MyApp() {
    return (
        <>
            <p>Hello</p>
            <QuestionCard />
        </>
    );
}