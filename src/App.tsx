import React, {ChangeEvent, useState} from 'react'
import './App.css'
import style from "./StyleForCounter.module.css";

function App() {
    const [maxCount, setMaxCount] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0)
    return (
        <div className={style.container}>
            <Settings setMaxCount={setMaxCount} maxCount={maxCount} setStartValue={setStartValue}
                      startValue={startValue}/>
            <Counter startValue={startValue} maxCount={maxCount} setStartValue={setStartValue}/>
        </div>
    )
}

type CounterPropsType = {
    startValue: number;
    maxCount: number;
    setStartValue: React.Dispatch<React.SetStateAction<number>>;
};

const Counter = (props: CounterPropsType) => {
    const incHandler = () => {
        props.setStartValue((prevValue) => prevValue + 1);
    };

    const resetHandler = () => {
       props.setStartValue(props.startValue)
        debugger
        console.log(props.startValue)
    };
    const disabledHandler = () => {
        return props.startValue === props.maxCount;
    };
    return (
        <div className={style.containerStyle}>
            <div className={style.childStyle}>
                <div>
                    <div><input className={style.inputCount} type="text" value={props.startValue}/></div>
                </div>
            </div>
            <div className={style.childStyle2}>
                <button onClick={incHandler} disabled={disabledHandler()}>inc</button>
                <button onClick={resetHandler}>reset</button>
            </div>
        </div>
    );
};
type SettingsType = {
    maxCount: number;
    startValue: number;
    setMaxCount: React.Dispatch<React.SetStateAction<number>>;
    setStartValue: React.Dispatch<React.SetStateAction<number>>;
};
const Settings = (props: SettingsType) => {
    const [maxCountSettings, setMaxCount] = useState(props.maxCount)
    const [startValueSettings, setStartValue] = useState(props.startValue)
    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxCount(+e.currentTarget.value)
    }
    const startValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(+e.currentTarget.value)
    }
    const onClickHandlerSet = () => {
        props.setMaxCount(maxCountSettings)
        props.setStartValue(startValueSettings)
    }

    return (
        <div className={style.containerStyle}>
            <div className={style.parentStyle}>
                <div className={style.childStyle}>
                    <div className={style.inputGroup}><span> max value:</span><input onChange={maxValueHandler}
                                                                                     className={style.input}
                                                                                     type="number"/></div>
                    <div className={style.inputGroup}><span> start value:</span><input onChange={startValueHandler}
                                                                                       className={style.input}
                                                                                       type="number"/></div>
                </div>
            </div>
            <div className={style.childStyle2}>
                <button onClick={onClickHandlerSet}>set</button>
            </div>
        </div>
    )
}
export default App
