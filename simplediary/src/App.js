import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

const dummyList = [
  {
    id: 1,
    author: '황종수',
    content: '하이1',
    emotion: 1,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: '박채영',
    content: '하이2',
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: '흰구름',
    content: '하이3',
    emotion: 3,
    created_date: new Date().getTime(),
  },
];

function App() {
  return (
    <div className='App'>
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
