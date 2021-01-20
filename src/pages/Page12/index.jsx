// стилевое предпочтение (не более 3 вариантов)
// картинками: минимализм, классический стиль и тд (смотри в листике)
//
import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import HelpIcon from '@material-ui/icons/Help';
// import Popover from '@material-ui/core/Popover';
import MultilineInput from '../../components/MultilineInput';
import Button from '../../components/Button';
import mediaQueries from '../../mediaQueries';
import QuestionCardLayout from '../../components/QuestionCardLayout/index';
// import CheckboxLabel from '../../components/CheckboxLabel';
import ItemWithPopover from './ItemWithPopover';

import scandinavian from './images/scandinavian.png';
import provence from './images/provence.png';
import modern from './images/modern.png';
import minimalizm from './images/minimalizm.png';
import loft from './images/loft.png';
import hightech from './images/hightech.png';
import fusion from './images/fusion.png';
import functionalism from './images/functionalism.png';
import english from './images/english.png';
import classic from './images/classic.png';
import artdeco from './images/artdeco.png';
import aclectika from './images/aclectika.png';


const Page12 = (props) => {
  const { classes, onClickNext } = props;
  const [answer, setAnswer] = useState({
    id: 12,
    answer: [
      {
        id: 0,
        imgSrc: scandinavian,
        name: 'Скандинавский стиль',
        checked: false,
        description: `Основные составляющие скандинавского стиля - лаконичность и красота форм, использование природного 
        материала, комфорт и функциональность. Преобладают пастельные тона, используют натуральные материалы (древесина, 
        натуральный камень, хлопок и тд) Притягательностью скандинавского стиля являются яркие акценты - яркие подушки, пледы или шторы.`,
      },
      {
        id: 1,
        imgSrc: provence,
        name: 'Прованс',
        checked: false,
        description: `Прованс — это своеобразное воплощение мечты о беззаботной размеренной жизни в тихой уютной деревушке 
        на берегу лазурного моря. Основные признаки: нежные, ненасыщенные цвета в отделке; потолочные балки; деревянная 
        состаренная мебель; натуральные ткани; цветочные мотивы в текстильном оформлении; букеты из луговых трав и цветов.`,
      },
      {
        id: 2,
        imgSrc: modern,
        name: 'Модерн',
        checked: false,
        description: `Главная особенность стиля модерн – отказ от строгих прямых линий и симметрии. Предпочтение отдается 
        плавным изгибающимся линиям. Ключевые особенности: обилие древесины, предпочтение натуральным материалам, акцент 
        на цветочные и животные орнаменты, витиеватость и плавность форм, витраж, наличие кованых элементов`,
      },
      {
        id: 3,
        imgSrc: minimalizm,
        name: 'Минимализм',
        checked: false,
        description: `Минимализм в интерьере — это вид проектирования внутренней обстановки помещений, отличающийся 
        лаконичностью, ясностью структурных композиций и простотой форм. Основные черты стиля: использование натуральных 
        материалов, много свободного пространства, геометричность форм, закрытые системы хранения, 
        монохромная цветовая гамма, отказ от лишнего декора`,
      },
      {
        id: 4,
        imgSrc: loft,
        name: 'Лофт',
        checked: false,
        description: `Стиль лофт – это дизайн интерьеров, который отличает обилие 
        свободного пространства и сохранение в помещении промышленных деталей. Главные особенности: высокие потолки, 
        кирпичная кладка стен сохраняется или имитируется, цементные полы, провода и трубы становятся элементом оформления, 
        большие пространства разделяют на зоны, в комнатах должны быть максимально большие окна.`,
      },
      {
        id: 5,
        imgSrc: hightech,
        name: 'Хай-тек',
        checked: false,
        description: `Хай-тек - в нём сочетается высокая функциональность и 
        минимализм, базируется на использовании высоких технологий. Основные черты стиля: четкие и прямые линии, стекло, бетон, металл и кирпич в оформлении, использование новейших 
        технических разработок, минимум узоров, сухость и сдержанность во всем оформлении.`,
      },
      {
        id: 6,
        imgSrc: fusion,
        name: 'Фьюжн',
        checked: false,
        description: `Фьюжн – стиль дизайнерский, декоративный, поэтому главное, на что он опирается, это: «вкус», гармония, 
        видимость простоты, чувство меры.`,
      },
      {
        id: 7,
        imgSrc: functionalism,
        name: 'Функционализм',
        checked: false,
        description: `Функциональный дизайн – это движение, в котором форма напрямую подчинена цели и предназначению, 
        а не эстетике. Во главе угла стоит функция предмета, материала, помещения, и от функции на сто процентов зависит 
        внешний вид.`,
      },
      {
        id: 8,
        imgSrc: english,
        name: 'Английский стиль',
        checked: false,
        description: `Основная концепция английского стиля – идеальная жизнь в идеальном доме. Основные черты стиля: 
        обилие дерева (красное, орех и дуб), богато, но сдержанно декорированного, мягкую мебель (кресла, пуфы, диваны 
        с закругленными формами), традиционные узоры (полоску, клетку, пейсли и цветы), колониальные мотивы, и, конечно, камин`,
      },
      {
        id: 9,
        imgSrc: classic,
        name: 'Классический стиль',
        checked: false,
        description: `Классика – это отображение статусности и респектабельности владельца. Помимо престижа, классика 
        характеризуется следующими качествами: высокой комфортабельностью; визуальной привлекательностью; практичностью; 
        гармонией во всем; сдержанностью.`,
      },
      {
        id: 10,
        imgSrc: artdeco,
        name: 'Арт-Деко',
        checked: false,
        description: `Арт-деко – эталон гламура, материалы, его создающие, должны переливаться и сиять, порождая ощущение 
        шика и богемы. Поэтому в фаворе у стиля глянец, полировка и лак.`,
      },
      {
        id: 11,
        imgSrc: aclectika,
        name: 'Эклектика',
        checked: false,
        description: `Эклектичный интерьер – это искусственное смешение стилей, подчиненное общей идее. Особенности стиля: 
        компактность и функциональность, общая идея, мебель имеет динамичные формы, нетрадиционное сочетание рисунков, 
        перьев, тканей, рюшей и лент`,
      },
    ],
    comments: '',
  });

  const handleNameChecked = (selectedId) => {
    const newAnswer = answer.answer.map((item) => {
      if (item.id === selectedId) {
        return {
          id: item.id,
          name: item.name,
          imgSrc: item.imgSrc,
          checked: !item.checked,
        };
      }
      return item;
    });
    setAnswer({ ...answer, answer: newAnswer });
  };

  const getNamesOnlyTrue = () => {
    const newAnswer = answer.answer.filter(item => (item.checked));
    const names = newAnswer.map(item => item.name);
    onClickNext({ ...answer, answer: names });
  };

  const renderContent = () => {
    return (
      <div className={classes.allListItems}>
        {answer.answer.map(item => (
          <ItemWithPopover
            item={item}
            handleNameChecked={handleNameChecked}
          />
        ))}
      </div>
    );
  };

  return (
    <QuestionCardLayout
      questionNumber={answer.id}
      questionText="Отметьте какой стиль интерьера Вам нравится? (максимум можно отметить 3 варианта)"
    >
      <div className={classes.answer}>
        {renderContent()}
        <div className={classes.comments}>
          <MultilineInput
            label="Комментарии"
            value={answer.comments}
            onChange={writingText => setAnswer({ ...answer, comments: writingText })}
          />
        </div>
      </div>
      <Button onClick={() => getNamesOnlyTrue()} />
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
  allListItems: {
    display: 'flex',
    // width: '600px',
    // flexDirection: 'column',
    flexWrap: 'wrap',
  },
  // checkbox: {
  //   [`@media ${mediaQueries.mobile}`]: {
  //     width: '50%',
  //   },
  //   width: '33%',
  // },
  listItem: {
    // width: '350px',
    width: '50%',
  //   display: 'flex',
  //   flexDirection: 'column',
  //   // border: '1px solid black',
  //   paddingTop: '5px',
  //   // paddingLeft: '20px',
  //   // paddingRight: '20px',
  //   // paddingBottom: '15px',
  //   marginBottom: '40px',
  //   marginLeft: '20px',
  //   marginRight: '20px',
  },
  nameAndCheckbox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerImage: {
    width: '250px',
  },
  image: {
    width: '250px',
    // height: '70px',
  },
  comments: {
    width: '100%',
  },
};

export default withStyles(styles)(Page12);
