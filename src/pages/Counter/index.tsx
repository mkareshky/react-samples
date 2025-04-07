import { Link } from 'react-router-dom'
import { useNameContext } from '../../contexts/NameContext'
import { allStudents } from '../../assets/data';
import { sum } from '../../helpers/SumArray';


const Page1 = () => {

    const numbers = [1, 2, 3, 4, 5];
    const total = sum(...numbers);

    const { name, setName } = useNameContext();

    const calcGrade = (score: number) => {
        let grade: string = "D";
        if (score >= 90) grade = "A";
        else if (score < 90 && score >= 75) grade = "B";
        else if (score < 75 && score >= 60) grade = "C";
        return grade;
    }

    const student_grad = allStudents.map((item) => {
        return {
            student: item.name,
            grade: calcGrade(item.score)
        }
    })

    const avg_all = allStudents.reduce((tot, curr) => tot + curr.score, 0) / allStudents.length;

    const subjectScore = allStudents.reduce((acc, student) => {
        if (!acc[student.subject]) {
            acc[student.subject] = { total: 0, count: 0 }
        }
        acc[student.subject].total += student.score;
        acc[student.subject].count++;

        return acc;
    }, {} as { [key: string]: { total: number, count: number } });




    const avg_sub: { [key: string]: number } = {}

    for (const item in subjectScore) {
        avg_sub[item] = subjectScore[item].total / subjectScore[item].count;
    }

    const renderScores = () => {
        const result = [];

        for (const item in avg_sub) {
            result.push(
                <p key={item}>
                    <strong>{item}: </strong>{avg_sub[item]}
                </p>
            );
        }
        return <div>{result}</div>
    }

    return (
        <>
            <Link to="/">Go to Home</Link>
            <h1>{name}</h1>
            <div>Sum of <strong>{numbers.reverse().join(",")}</strong> is <strong>{total}</strong></div>
            <input type="text" onChange={e => setName(e.target.value)} />
            <div>
                {
                    student_grad.map((item) => (
                        <p key={item.student}>
                            <strong>{item.student}: </strong>{item.grade}
                        </p>
                    ))
                }
            </div>
            <hr />
            <strong>Average: </strong>{avg_all}
            <hr />
            <>{renderScores()}</>
        </>
    )
}
export default Page1;
