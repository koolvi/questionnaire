import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MultilineInput from '../components/MultilineInput';
import Button from '../components/Button';
import mediaQueries from '../mediaQueries';
import RadioGroup from '../components/RadioGroup';
import QuestionCardLayout from '../components/QuestionCardLayout/index';


const Page43 = (props) => {
  const { classes, onClickNext } = props;
  const [answer, setAnswer] = useState({
    id: 43,
    question: `Есть ли предпочтение по размеру и типу межкомнатных дверей? Одностворчатые, двустворчатые, со скрытым коробом,
    из мдф, из массива, под покраску, стеклянные в металлической раме, стеклянные монолитные, зеркальные, встроенные раздвижные,
     раздвижные по поверхности стены, с росписью, с резьбой, с фасками, монолитные, высотой 2100, 2200, 2300, 2500, под потолок
      или др., ширина`,
    answer: '',
    comments: '',
  });

  return (
    <QuestionCardLayout
      questionNumber={answer.id}
      questionText={answer.question}
    >
      <div className={classes.answer}>
        <RadioGroup
          value={answer.answer}
          onChange={e => setAnswer({ ...answer, answer: e.target.value })}
          answerVariants={[
            { id: 0, value: 'Да', label: 'Да' },
            { id: 1, value: 'Нет', label: 'Нет' },
          ]}
        />
        <MultilineInput
          label="Комментарии"
          value={answer.comments}
          onChange={writingText => setAnswer({ ...answer, comments: writingText })}
        />
      </div>
      <Button
        disabled={(answer.answer.length === 0)}
        onClick={() => onClickNext(answer)}
      />
    </QuestionCardLayout>
  );
};

const styles = {
  answer: {
    marginBottom: '50px',
    width: '100%',
    [`@media ${mediaQueries.mobile}`]: {
      width: '100%',
      flex: 1,
    },
  },
};

export default withStyles(styles)(Page43);
