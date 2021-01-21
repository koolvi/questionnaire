/* eslint-disable */
import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import RadioGroup from '../components/RadioGroup';
import Button from '../components/Button';
import Counter from '../components/Counter';
import TextFieldInput from '../components/TextFieldInput';
import mediaQueries from '../mediaQueries';
import QuestionCardLayout from '../components/QuestionCardLayout/index';
import colors from '../style/colors';


const Page18 = (props) => {
  const { classes, onClickNext } = props;

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


  const getAnswer = () => {
    onClickNext({ id: 18, answer: [
      { "Холодильник:": ` размер: ${(refrigerator.size.length === 0) ? '-' : refrigerator.size}, тип: ${refrigerator.type}, артикул: ${(refrigerator.article.length === 0) ? '-' : refrigerator.article}`},
      { "Вытяжка:": ` тип: ${rangeHood.type}`},
      { "Варочная поверхность:": ` тип: ${cookingSurface.type}, кол-во конфорок: ${cookingSurface.burners}`},
      { "Духовой шкаф:": ` тип: ${oven.type}`},
      { "СВЧ:": ` тип: ${microwave.type}`},
      { "Кофемашина:": ` тип: ${coffeeMachine.type}`},
      { "ПММ:": ` тип: ${dishwasher.type}`},
      { "Морозилка:": ` тип: ${freezer.type}, высота: ${(freezer.height.length === 0) ? '-' : freezer.height}`},
      { "Измельчитель в мойке:": ` ${shredder.text}`},
      { "Винный холодильник:": ` ${wineCooler.text}`},
      { "Другое:": ` ${other.text}`},
    ] });
  };

  return (
    <QuestionCardLayout
      questionNumber={18}
      questionText="Какая техника потребуется в кухне?"
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
                <p className={classes.paramName}>Размер</p>
                <div className={classes.input}>
                  <TextFieldInput
                    label="Поле для ввода"
                    value={refrigerator.size}
                    onChange={writingText => setRefrigerator({ ...refrigerator, size: writingText })}
                  />
                </div>
              </div>
              <div className={classes.param}>
                <p className={classes.paramName}>Тип</p>
                <RadioGroup
                  row
                  value={refrigerator.type}
                  onChange={e => setRefrigerator({ ...refrigerator, type: e.target.value })}
                  answerVariants={[
                    { id: 0, value: 'Встраиваемый', label: 'Встраиваемый' },
                    { id: 1, value: 'Отдельностоящий', label: 'Отдельностоящий' },
                    { id: 2, value: 'Side-by-Side', label: 'Side-by-Side' },
                  ]}
                />
              </div>
              <div className={classes.param}>
                <p className={classes.paramName}>Артикул (если имеется)</p>
                <div className={classes.input}>
                  <TextFieldInput
                    label="Поле для ввода"
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
                <p className={classes.paramName}>Тип</p>
                <RadioGroup
                  style={{ width: '400px' }}
                  row
                  value={rangeHood.type}
                  onChange={e => setRangeHood({ ...rangeHood, type: e.target.value })}
                  answerVariants={[
                    { id: 0, value: 'Встроенная', label: 'Встроенная' },
                    { id: 1, value: 'Купольная', label: 'Купольная' },
                    { id: 2, value: 'Островная', label: 'Островная' },
                    { id: 3, value: 'Наклонная', label: 'Наклонная' },
                    { id: 4, value: 'Плоская', label: 'Плоская' },
                    { id: 5, value: 'Угловая', label: 'Угловая' },
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
                <p className={classes.paramName}>Тип</p>
                <RadioGroup
                  row
                  value={cookingSurface.type}
                  onChange={e => setCookingSurface({ ...cookingSurface, type: e.target.value })}
                  answerVariants={[
                    { id: 0, value: 'Газовая', label: 'Газовая' },
                    { id: 1, value: 'Электрическая', label: 'Электрическая' },
                  ]}
                />
              </div>
              <div className={classes.param}>
                <p className={classes.paramName}>Кол-во конфорок</p>
                <Counter
                  value={cookingSurface.burners}
                  onClick={newValue => setCookingSurface({ ...cookingSurface, burners: newValue })}
                />
              </div>
            </div>
          </div>
{/* духовой шкаф */}
          <div className={classes.conteinerType}>
            <div className={classes.name}>
              <p>Духовой шкаф</p>
            </div>
            <div className={classes.conteinerParam}>
              <div className={classes.param}>
                <p className={classes.paramName}>Тип</p>
                <RadioGroup
                  row
                  value={oven.type}
                  onChange={e => setOven({ ...oven, type: e.target.value })}
                  answerVariants={[
                    { id: 0, value: 'Газовый', label: 'Газовый' },
                    { id: 1, value: 'Электрический', label: 'Электрический' },
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
                <p className={classes.paramName}>Тип</p>
                <RadioGroup
                  row
                  value={microwave.type}
                  onChange={e => setMicrowave({ ...microwave, type: e.target.value })}
                  answerVariants={[
                    { id: 0, value: 'Встраиваемая', label: 'Встраиваемая' },
                    { id: 1, value: 'Отдельностоящая', label: 'Отдельностоящая' },
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
                <p className={classes.paramName}>Тип</p>
                <RadioGroup
                  row
                  value={coffeeMachine.type}
                  onChange={e => setCoffeeMachine({ ...coffeeMachine, type: e.target.value })}
                  answerVariants={[
                    { id: 0, value: 'Встраиваемая', label: 'Встраиваемая' },
                    { id: 1, value: 'Отдельностоящая', label: 'Отдельностоящая' },
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
                <p className={classes.paramName}>Тип</p>
                <RadioGroup
                  row
                  value={dishwasher.type}
                  onChange={e => setDishwasher({ ...dishwasher, type: e.target.value })}
                  answerVariants={[
                    { id: 0, value: 'Ширина 45', label: 'Ширина 45' },
                    { id: 1, value: 'Ширина 60', label: 'Ширина 60' },
                    { id: 2, value: 'Не требуется', label: 'Не требуется' },
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
                <p className={classes.paramName}>Тип</p>
                <RadioGroup
                  row
                  value={freezer.type}
                  onChange={e => setFreezer({ ...freezer, type: e.target.value })}
                  answerVariants={[
                    { id: 0, value: 'Отдельностоящая', label: 'Отдельностоящая' },
                    { id: 1, value: 'Встраиваемая', label: 'Встраиваемая' },
                    { id: 2, value: 'Не требуется', label: 'Не требуется' },
                  ]}
                />
              </div>
              <div className={classes.param}>
                <p className={classes.paramName}>Высота</p>
                <div className={classes.input}>
                  <TextFieldInput
                    label="Поле для ввода"
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
                <p className={classes.paramName}>Наличие</p>
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
                <p className={classes.paramName}>Наличие</p>
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
      <Button onClick={() => getAnswer()} />
    </QuestionCardLayout>
  );
};

const styles = {
  conteinerAnswer: {
    width: '100%',
    marginBottom: '50px',
    display: 'flex',
    justifyContent: 'flex-start',
    [`@media ${mediaQueries.mobile}`]: {
      width: '100%',
      flex: 1,
    },
  },
  answer: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  conteinerType: {
    display: 'flex',
    flexDirection: 'column',
  },
  name: {
    color: colors.PRIMARY,
  },
  conteinerParam: {
    display: 'flex',
    flexDirection: 'column',
  },
  param: {
    display: 'flex',
    alignItems: 'center',
  },
  paramName: {
    marginRight: '80px',
    color: 'gray',
  },
  input: {
    flex: 1,
  },
};

export default withStyles(styles)(Page18);
