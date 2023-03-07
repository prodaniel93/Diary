const DiaryItem = ({ author, content, created_date, emotion, id }) => {
  return (
    <div className='DiaryItem'>
      <div className='info'>
        <span>
          작성자 : {author} | 감정점수 : {emotion}
        </span>
        <br />
        <span className='date'>{new Date(created_date).toLocaleString()}</span>
        {/* toLocaleString() : 시간을 보기좋게 만들어줌. */}
      </div>
      <div className='content'>{content}</div>
    </div>
  );
};

export default DiaryItem;
