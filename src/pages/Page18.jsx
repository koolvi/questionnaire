/* eslint-disable */
import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import RadioGroup from '../components/RadioGroup';
import Button from '../components/Button';
import Counter from '../components/Counter';
import TextFieldInput from '../components/TextFieldInput';
import mediaQueries from '../mediaQueries';
import QuestionCardLayout from '../components/QuestionCardLayout/index';
import colors from '../style/colors';


const Page18 = (props) => {
  const { classes, onClickNext, onClickBack } = props;

  const [refrigerator, setRefrigerator] = useState({ size: '', type: '', article: '' });
  const [rangeHood, setRangeHood] = useState({ type: '' }); // вытяжка
  const [cookingSurface, setCookingSurface] = useState({ type: '', burners: 0 }); // варочная поверхность, количество конфорок
  const [oven, setOven] = useState({ type: '' }); // духовой шкаф
  const [microwave, setMicrowave] = useState({ type: '' }); //микроволновка
  const [coffeeMachine, setCoffeeMachine] = useState({ type: '' }); // кофемашина
  const [dishwasher, setDishwasher] = useState({ type: '' }); // посудомойка
  const [freezer, setFreezer] = useState({ type: '', height: '' }); // морозилка, высота
  const [shredder, setShredder] = useState({ text: '' }); // измельчитель в мойке
  const [wineCooler, setWineCooler] = useState({ text: '' }); // винный холодильник
  const [other, setOther] = useState({ text: '' });


  const isMobile = useMediaQuery(mediaQueries.mobile);

  const checkForDisabled = () => {
    if (refrigerator.type.length === 0) return true;
    if (rangeHood.type.length === 0) return true;
    if (cookingSurface.type.length === 0) return true;
    // if ((cookingSurface.type.length === 0) || (cookingSurface.burners === 0)) return true;
    if (oven.type.length === 0) return true;
    if (microwave.type.length === 0) return true;
    if (coffeeMachine.type.length === 0) return true;
    if (dishwasher.type.length === 0) return true;
    if (freezer.type.length === 0) return true;
    if (shredder.text.length === 0) return true;
    if (wineCooler.text.length === 0) return true;
    return false;
  };

  const getAnswer = () => {
    onClickNext({
      id: 18,
      question: 'Какая техника потребуется в кухне?',
      answer: [
        { "Холодильник": `${refrigerator.type}, размер: ${(refrigerator.size.length === 0) ? '-' : refrigerator.size}, артикул: ${(refrigerator.article.length === 0) ? '-' : refrigerator.article}`},
        { "Вытяжка": rangeHood.type},
        { "Варочная поверхность": `${cookingSurface.type}, кол-во конфорок: ${cookingSurface.burners}`},
        { "Духовой шкаф": oven.type},
        { "СВЧ": microwave.type},
        { "Кофемашина": coffeeMachine.type},
        { "ПММ": dishwasher.type},
        { "Морозильная камера": `${freezer.type}, высота: ${(freezer.height.length === 0) ? '-' : freezer.height}`},
        { "Измельчитель в мойке": `${shredder.text}`},
        { "Винный холодильник": `${wineCooler.text}`},
        { "Другое": `${other.text}`}], 
    });
  };

  return (
    <QuestionCardLayout
      disableMarginPadding={true}
      questionNumber={18}
      questionText="Какая техника потребуется в кухне?"
      onClickBack={onClickBack}
    >
      <div className={classes.conteinerAnswer}>
        <div className={classes.answer}>
{/* холодильник */}
          <div className={classes.conteinerType}>
            <div className={classes.name}>
              <p>Холодильник</p>
            </div>
            <div className={classes.conteinerParam}>
              <div className={classes.param}>
                {(isMobile)
                  ? null
                  : <p className={classes.paramName}>Тип</p>
                }
                <RadioGroup
                  row={(isMobile) ? false : true}
                  isItalicText
                  value={refrigerator.type}
                  onChange={e => setRefrigerator({ ...refrigerator, type: e.target.value })}
                  answerVariants={[
                    { id: 0, value: 'Не требуется', label: 'Не требуется' },
                    { id: 1, value: 'Встраиваемый', label: 'Встраиваемый' },
                    { id: 2, value: 'Отдельностоящий', label: 'Отдельностоящий' },
                    { id: 3, value: 'Side-by-Side', label: 'Side-by-Side' },
                  ]}
                />
              </div>
              <div className={classes.param}>
                <div className={classes.input}>
                  <TextFieldInput
                    label="Размер (обязательно)"
                    value={refrigerator.size}
                    onChange={writingText => setRefrigerator({ ...refrigerator, size: writingText })}
                  />
                </div>
              </div>
              <div className={classes.param}>
                <div className={classes.input}>
                  <TextFieldInput
                    label="Артикул (если имеется)"
                    value={refrigerator.article}
                    onChange={writingText => setRefrigerator({ ...refrigerator, article: writingText })}
                  />
                </div>
              </div>
            </div>
          </div>
{/* вытяжка */}
          <div className={classes.conteinerType}>
            <div className={classes.name}>
              <p>Вытяжка</p>
            </div>
            <div className={classes.conteinerParam}>
              <div className={classes.param}>
                {(isMobile)
                  ? null
                  : <p className={classes.paramName}>Тип</p>
                }
                <RadioGroup
                  style={{ width: (isMobile) ? 'auto' : '400px' }}
                  isItalicText
                  row={(isMobile) ? false : true}
                  value={rangeHood.type}
                  onChange={e => setRangeHood({ ...rangeHood, type: e.target.value })}
                  answerVariants={[
                    { id: 0, value: 'Не требуется', label: 'Не требуется' },
                    { id: 1, value: 'Встроенная', label: 'Встроенная' },
                    { id: 2, value: 'Купольная', label: 'Купольная' },
                    { id: 3, value: 'Островная', label: 'Островная' },
                    { id: 4, value: 'Наклонная', label: 'Наклонная' },
                    { id: 5, value: 'Плоская', label: 'Плоская' },
                    { id: 6, value: 'Угловая', label: 'Угловая' },
                  ]}
                />
              </div>
            </div>
          </div>
{/* варочная поверхность */}
          <div className={classes.conteinerType}>
            <div className={classes.name}>
              <p>Варочная поверхность</p>
            </div>
            <div className={classes.conteinerParam}>
              <div className={classes.param}>
                {(isMobile)
                  ? null
                  : <p className={classes.paramName}>Тип</p>
                }
                <RadioGroup
                  row={(isMobile) ? false : true}
                  isItalicText
                  value={cookingSurface.type}
                  onChange={e => setCookingSurface({ ...cookingSurface, type: e.target.value })}
                  answerVariants={[
                    { id: 0, value: 'Не требуется', label: 'Не требуется' },
                    { id: 1, value: 'Газовая', label: 'Газовая' },
                    { id: 2, value: 'Электрическая', label: 'Электрическая' },
                  ]}
                />
              </div>
              {(cookingSurface.type === 'Не требуется')
                ? null
                : (
                  <div className={classes.param}>
                    <p className={classes.paramName}>Кол-во конфорок (обязат. поле)</p>
                    <Counter
                      value={cookingSurface.burners}
                      onClick={newValue => setCookingSurface({ ...cookingSurface, burners: newValue })}
                    />
                  </div>)
              }
            </div>
          </div>
{/* духовой шкаф */}
          <div className={classes.conteinerType}>
            <div className={classes.name}>
              <p>Духовой шкаф</p>
            </div>
            <div className={classes.conteinerParam}>
              <div className={classes.param}>
                {(isMobile)
                  ? null
                  : <p className={classes.paramName}>Тип</p>
                }
                <RadioGroup
                  row={(isMobile) ? false : true}
                  isItalicText
                  value={oven.type}
                  onChange={e => setOven({ ...oven, type: e.target.value })}
                  answerVariants={[
                    { id: 0, value: 'Не требуется', label: 'Не требуется' },
                    { id: 1, value: 'Газовый', label: 'Газовый' },
                    { id: 2, value: 'Электрический', label: 'Электрический' },
                  ]}
                />
              </div>
            </div>
          </div>
{/* микроволновка */}
          <div className={classes.conteinerType}>
            <div className={classes.name}>
              <p>СВЧ</p>
            </div>
            <div className={classes.conteinerParam}>
              <div className={classes.param}>
                {(isMobile)
                  ? null
                  : <p className={classes.paramName}>Тип</p>
                }
                <RadioGroup
                  row={(isMobile) ? false : true}
                  isItalicText
                  value={microwave.type}
                  onChange={e => setMicrowave({ ...microwave, type: e.target.value })}
                  answerVariants={[
                    { id: 0, value: 'Не требуется', label: 'Не требуется' },
                    { id: 1, value: 'Встраиваемая', label: 'Встраиваемая' },
                    { id: 2, value: 'Отдельностоящая', label: 'Отдельностоящая' },
                  ]}
                />
              </div>
            </div>
          </div>
{/* кофемашина  */}
          <div className={classes.conteinerType}>
            <div className={classes.name}>
              <p>Кофемашина</p>
            </div>
            <div className={classes.conteinerParam}>
              <div className={classes.param}>
                {(isMobile)
                  ? null
                  : <p className={classes.paramName}>Тип</p>
                }
                <RadioGroup
                  row={(isMobile) ? false : true}
                  isItalicText
                  value={coffeeMachine.type}
                  onChange={e => setCoffeeMachine({ ...coffeeMachine, type: e.target.value })}
                  answerVariants={[
                    { id: 0, value: 'Не требуется', label: 'Не требуется' },
                    { id: 1, value: 'Встраиваемая', label: 'Встраиваемая' },
                    { id: 2, value: 'Отдельностоящая', label: 'Отдельностоящая' },
                  ]}
                />
              </div>
            </div>
          </div>
{/* ПММ */}
          <div className={classes.conteinerType}>
            <div className={classes.name}>
              <p>Посудомоечная машина</p>
            </div>
            <div className={classes.conteinerParam}>
              <div className={classes.param}>
                {(isMobile)
                  ? null
                  : <p className={classes.paramName}>Тип</p>
                }
                <RadioGroup
                  row={(isMobile) ? false : true}
                  isItalicText
                  value={dishwasher.type}
                  onChange={e => setDishwasher({ ...dishwasher, type: e.target.value })}
                  answerVariants={[
                    { id: 0, value: 'Не требуется', label: 'Не требуется' },
                    { id: 1, value: 'Ширина 45', label: 'Ширина 45' },
                    { id: 2, value: 'Ширина 60', label: 'Ширина 60' },
                  ]}
                />
              </div>
            </div>
          </div>
{/* морозилка */}
          <div className={classes.conteinerType}>
            <div className={classes.name}>
              <p>Морозильная камера</p>
            </div>
            <div className={classes.conteinerParam}>
              <div className={classes.param}>
                {(isMobile)
                  ? null
                  : <p className={classes.paramName}>Тип</p>
                }
                <RadioGroup
                  row={(isMobile) ? false : true}
                  isItalicText
                  value={freezer.type}
                  onChange={e => setFreezer({ ...freezer, type: e.target.value })}
                  answerVariants={[
                    { id: 0, value: 'Не требуется', label: 'Не требуется' },
                    { id: 1, value: 'Отдельностоящая', label: 'Отдельностоящая' },
                    { id: 2, value: 'Встраиваемая', label: 'Встраиваемая' },
                  ]}
                />
              </div>
              <div className={classes.param}>
                {/* <p className={classes.paramName}>Высота</p> */}
                <div className={classes.input}>
                  <TextFieldInput
                    label="Высота"
                    value={freezer.size}
                    onChange={writingText => setFreezer({ ...refrigerator, height: writingText })}
                  />
                </div>
              </div>
            </div>
          </div>
{/* измельчитель */}
          <div className={classes.conteinerType}>
            <div className={classes.name}>
              <p>Измельчитель в мойке</p>
            </div>
            <div className={classes.conteinerParam}>
              <div className={classes.param}>
                {(isMobile)
                  ? null
                  : <p className={classes.paramName}>Наличие</p>
                }
                <RadioGroup
                  row
                  value={shredder.type}
                  onChange={e => setShredder({ ...shredder, text: e.target.value })}
                  answerVariants={[
                    { id: 0, value: 'Требуется', label: 'Требуется' },
                    { id: 1, value: 'Не требуется', label: 'Не требуется' },
                  ]}
                />
              </div>
            </div>
          </div>
{/* винный холодильник */}
          <div className={classes.conteinerType}>
            <div className={classes.name}>
              <p>Винный холодильник</p>
            </div>
            <div className={classes.conteinerParam}>
              <div className={classes.param}>
                {(isMobile)
                  ? null
                  : <p className={classes.paramName}>Наличие</p>
                }
                <RadioGroup
                  row
                  value={wineCooler.type}
                  onChange={e => setWineCooler({ ...wineCooler, text: e.target.value })}
                  answerVariants={[
                    { id: 0, value: 'Требуется', label: 'Требуется' },
                    { id: 1, value: 'Не требуется', label: 'Не требуется' },
                  ]}
                />
              </div>
            </div>
          </div>
{/* другое */}
          <div className={classes.conteinerType}>
            <div className={classes.name}>
              <p>Другое</p>
            </div>
            <div className={classes.conteinerParam}>
              <div className={classes.param}>
                {/* <div className={classes.name}>
                  <p>Другое</p>
                </div> */}
                <div className={classes.input}>
                  <TextFieldInput
                    label="Поле для ввода"
                    value={other.size}
                    onChange={writingText => setOther({ ...other, text: writingText })}
                  />
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
      <Button
        disabled={checkForDisabled()}
        onClick={() => getAnswer()}
      />
    </QuestionCardLayout>
  );
};

const styles = {
  conteinerAnswer: {
    width: '100%',
    marginBottom: '50px',
    display: 'flex',
    justifyContent: 'flex-start',
  },
  answer: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    [`@media ${mediaQueries.mobile}`]: {
      width: '100%',
    },
  },
  conteinerType: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    [`@media ${mediaQueries.mobile}`]: {
      marginBottom: '40px',
    },
  },
  name: {
    color: '#979fde',
    marginTop: '0px',
    marginBottom: '0px',
    background: '#dbdfff',
    paddingLeft: '30px',
  },
  conteinerParam: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '30px',
  },
  param: {
    display: 'flex',
    alignItems: 'center',
  },
  paramName: {
    marginRight: '80px',
    color: 'gray',
    [`@media ${mediaQueries.mobile}`]: {
      width: '150px',
      marginRight: '60px',
      color: 'black',
    },
  },
  input: {
    flex: 1,
    paddingRight: '30px',
  },
};

export default withStyles(styles)(Page18);
