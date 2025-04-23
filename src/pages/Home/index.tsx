import { Suspense, useEffect, useState } from 'react'
import './Styles.css'
import '../../shared/global.css'
import { useNameContext } from '../../contexts/NameContext'
import { Link } from 'react-router-dom'
import SearchResults from '../SearchResults'
import { allStudents } from '../../assets/data'

function Home() {
  const [count, setCount] = useState(0)
  const { name, setName } = useNameContext()
  const [query, setQuery] = useState('');


  const gradeStudents = (score: number) => {
    let grade = "D";
    if (score >= 90) grade = "A";
    else if (score < 90 && score >= 75) grade = "B";
    else if (score < 75 && score >= 60) grade = "C";
    return grade;
  };

  const stu_grade = allStudents.map(item => {
    return {
      name: item.name,
      grade: gradeStudents(item.score)
    }
  })

  const stu_avg = allStudents.reduce((total, allStudents) => total + allStudents.score, 0) / allStudents.length;

  const subjectScores = allStudents.reduce((acc, student) => {
    if (!acc[student.subject]) {
      acc[student.subject] = { total: 0, count: 0 };
    }
    acc[student.subject].total += student.score;
    acc[student.subject].count++;
    return acc;
  }, {} as { [key: string]: { total: number, count: number } });

  const subject_avg: { [key: string]: number } = {};

  for (const subject in subjectScores) {
    subject_avg[subject] = subjectScores[subject].total / subjectScores[subject].count;
  }

  const renderScores = () => {
    const result = [];
    for (const item in subject_avg) {
      result.push(<p key={item}>{item}: {subject_avg[item]}</p>);
    }

    return <div>{result}</div>;
  }

  useEffect(() => {
    console.log("----Runs after every render");
  });


  useEffect(() => {
    console.log("----Runs only once when the component mounts");
  }, []);


  useEffect(() => {
    console.log("----Runs when 'count' changes");
  }, [count]);


  useEffect(() => {
    console.log("----Effect runs");

    return () => {
      console.log("----Cleanup runs before unmounting or before next effect runs");
    };
  }, [count]);

  return (
    <>
      <div className="card">
        <div>
          <Link to="/page1">Go to Page1</Link>
          <br />
          <Link to="/page2">Go to Page2</Link>
          <br />
          <Link to="/parent">Go to Parent</Link>
          <br />
          <Link to="/reconciliation">Go to Reconciliation</Link>
          <br />
          <Link to="/controlled-login">Go to Controlled Login Form</Link>
          <br />
          <Link to="/un-controlled-login">Go to UnControlled Login Form</Link>
          <br />
          <Link to="/accordian">Go to Accordian Page</Link>
          <br />
          <Link to="/random-color-generator">Go to Random Color Generator Page</Link>
          <br />
          <Link to="/star-rating">Go to Star Rating Page</Link>
          <br />
          <Link to="/image-slider">Go to Image Slider Page</Link>
          <br />
          <Link to="/load-more-product">Go to Load More Product Page</Link>
          <br />
          <Link to="/tree-view">Go to Tree View Page</Link>
          <br />
          <Link to="/qr-code">Go to QR Code Page</Link>
          <br />
          <Link to="/theme-switch">Go to Theme Switch Page</Link>
          <br />
          <Link to="/scroll-indicator">Go to Scroll Indicator Page</Link>
          <br />
          <Link to="/tabs">Go to Tabs Page</Link>
          <br />
          <Link to="/modal-popup">Go to Modal Popup Page</Link>
          <br />
          <Link to="/gitHub-profile-finder">Go to GitHub Profile Finder Page</Link>
          <br />
          <Link to="/search-autocomplete">Go to Search Autocomplete Page</Link>
          <br />
          <Link to="/tic-tac-toe">Go to Tic Tac Toe Page</Link>
          <br />
          <Link to="/show-selected">Go Show Selected Page</Link>
          <br />
          <br />
        </div>
        <button onClick={() => { setCount((count) => count + 1); setName(count.toString()) }}>
          count is {count}
        </button>
        <div style={{ whiteSpace: "pre-line", fontFamily: "sans-serif" }}>
          {
            stu_grade.map((student) => (
              <p key={student.name}>
                <strong>{student.name}: </strong>{student.grade}
              </p>
            ))
          }
        </div>
        <p>Average by Subject</p>
        <>{renderScores()}</>
        <p>Average: {stu_avg}</p>
        <p>Name of context: {name}</p>
        <br />
        <label>
          Search albums:
          <input value={query} onChange={e => setQuery(e.target.value)} />
        </label>
        <Suspense fallback={<h2>Loading...</h2>}>
          <SearchResults query={query} />
        </Suspense>
      </div>
    </>
  )
}

export default Home
