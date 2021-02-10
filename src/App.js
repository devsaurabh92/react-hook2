import React from 'react';
import ParentComponent from './callback/ParentComponent';
import CounterOne from './custom/CounterOne';
import CounterTwo from './custom/CounterTwo';
import DocTitleOne from './custom/DocTitleOne';
import DocTitleTwo from './custom/DocTitleTwo';
import UserForm from './custom/UserForm';
import Counter from './memo/Counter';
import FocusInput from './refs/FocusInput';
import HookTimer from './refs/HookTimer';

function App() {
  return (
    <div className="App">
   {/*} <ParentComponent/> 
   <Counter/>
   <FocusInput/>
   <HookTimer/>{*/}
   <DocTitleOne/>
   <DocTitleTwo/>
   <CounterOne/>
   <CounterTwo/>
   <UserForm/>
    </div>
  );
}

export default App;
