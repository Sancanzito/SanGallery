import { BrowserRouter as Router, Route, Routes,Navigate,Outlet } from 'react-router-dom';
import MyNav from "./components/MyNav";
import Home from './components/Home';
import Gallery from './components/Gallery';
import 'bootstrap/dist/css/bootstrap.min.css';
import nI from "./assets/asset/nI.jpg";
import nII from "./assets/asset/nII.jpg";
import nIII from "./assets/asset/nIII.jpg";
import nIV from "./assets/asset/nIV.jpg";
import nV from "./assets/asset/nV.jpg";
import grad1 from"./assets/asset/grad1.jpg";
import grad2 from'./assets/asset/grad2.jpg';
import grad3 from "./assets/asset/grad3.jpg";
import grad4 from "./assets/asset/grad4.jpg";
import img2 from "./assets/asset/img2.jpg";
import img3 from "./assets/asset/img3.jpg";
import img4 from "./assets/asset/img4.jpg";
import img5 from "./assets/asset/img5.jpg";
import img6 from "./assets/asset/img6.jpg";
import img7 from "./assets/asset/img7.jpg";
import img8 from "./assets/asset/img8.jpg";
import img9 from "./assets/asset/img9.jpg";
import img10 from "./assets/asset/img10.jpg";
import img11 from "./assets/asset/img11.jpg";
import img12 from "./assets/asset/img12.jpg";
import img13 from "./assets/asset/img13.jpg";
import img14 from "./assets/asset/img14.jpg";
import img15 from "./assets/asset/img15.jpg";
import img16 from "./assets/asset/img16.jpg";
import img17 from "./assets/asset/img17.jpg";
import img18 from "./assets/asset/img18.jpg";
import img19 from "./assets/asset/img19.jpg";
import img20 from "./assets/asset/img20.jpg";
import img21 from "./assets/asset/img21.jpg";
import img22 from "./assets/asset/img22.jpg";
import img23 from "./assets/asset/img23.jpg";
import img24 from "./assets/asset/img24.jpg";
import img25 from "./assets/asset/img25.jpg";
import img26 from "./assets/asset/img26.jpg";
import img27 from "./assets/asset/img27.jpg";
import img29 from "./assets/asset/img29.jpg";
import img30 from "./assets/asset/img30.jpg";
import img31 from "./assets/asset/img31.jpg";
import img32 from "./assets/asset/img32.jpg";
import img33 from "./assets/asset/img33.jpg";
import img34 from "./assets/asset/img34.jpg";
import img35 from "./assets/asset/img35.jpg";
import img36 from "./assets/asset/img36.jpg";
import r1 from "./assets/asset/r1.jpeg";
import r2 from "./assets/asset/r2.jpeg";
import r3 from "./assets/asset/r3.jpeg";
import r4 from "./assets/asset/r4.jpeg";
import r5 from "./assets/asset/r5.jpeg";
import r6 from "./assets/asset/r6.jpeg";
import r7 from "./assets/asset/r7.jpeg";
import r8 from "./assets/asset/r8.jpeg";
import r9 from "./assets/asset/r9.jpeg"
import r10 from "./assets/asset/r10.jpeg"
import r11 from "./assets/asset/r11.jpeg"
import r12 from "./assets/asset/r12.jpeg"
import r13 from "./assets/asset/r13.jpeg"
import r14 from "./assets/asset/r14.jpeg"
import r15 from "./assets/asset/r15.jpeg"
import r16 from "./assets/asset/r16.jpeg"
import r17 from "./assets/asset/r17.jpeg"
import r18 from "./assets/asset/r18.jpeg"
import r19 from "./assets/asset/r19.jpeg"
import r20 from "./assets/asset/r20.jpeg"
import r21 from "./assets/asset/r21.jpeg"
import r22 from "./assets/asset/r22.jpeg"
import r23 from "./assets/asset/r23.jpeg"
import r24 from "./assets/asset/r24.jpeg"
import r25 from "./assets/asset/r25.jpeg"
import r26 from "./assets/asset/r26.jpeg"
import r27 from "./assets/asset/r27.jpeg"
import r28 from "./assets/asset/r28.jpeg"
import r29 from "./assets/asset/r29.jpeg"
import r30 from "./assets/asset/r30.jpeg"
import r31 from "./assets/asset/r31.jpeg"
import r32 from "./assets/asset/r32.jpeg"
import r33 from "./assets/asset/r33.jpeg"
import r34 from "./assets/asset/r34.jpeg"
import r35 from "./assets/asset/r35.jpeg"
import r36 from "./assets/asset/r36.jpeg"
import r37 from "./assets/asset/r37.jpeg"
import r38 from "./assets/asset/r38.jpeg"
import r39 from "./assets/asset/r39.jpeg"
import r40 from "./assets/asset/r40.jpeg"
import r41 from "./assets/asset/r41.jpeg"
import r42 from "./assets/asset/r42.jpeg"
import r43 from "./assets/asset/r43.jpeg"
import r44 from "./assets/asset/r44.jpeg"
import r45 from "./assets/asset/r45.jpeg"
import r46 from "./assets/asset/r46.jpeg"
import r47 from "./assets/asset/r47.jpeg"
import r48 from "./assets/asset/r48.jpeg"
import r49 from "./assets/asset/r49.jpeg"
import r50 from "./assets/asset/r50.jpeg"
import r51 from "./assets/asset/r51.jpeg"
import r52 from "./assets/asset/r52.jpeg"
import r53 from "./assets/asset/r53.jpeg"
import r54 from "./assets/asset/r54.jpeg"
import r55 from "./assets/asset/r55.jpeg"
import r56 from "./assets/asset/r56.jpeg"
import r57 from "./assets/asset/r57.jpeg"
import r58 from "./assets/asset/r58.jpeg"
import r59 from "./assets/asset/r59.jpeg"
import r60 from "./assets/asset/r60.jpeg"
import r61 from "./assets/asset/r61.jpeg"
import r62 from "./assets/asset/r62.jpeg"
import r63 from "./assets/asset/r63.jpeg"
import r64 from "./assets/asset/r64.jpeg"
import r65 from "./assets/asset/r65.jpeg"
import r66 from "./assets/asset/r66.jpeg"
import r67 from "./assets/asset/r67.jpeg"
import r68 from "./assets/asset/r68.jpeg"
import r69 from "./assets/asset/r69.jpeg"
import r70 from "./assets/asset/r70.jpeg"
import r71 from "./assets/asset/r71.jpeg"
import r72 from "./assets/asset/r72.jpeg"
import r73 from "./assets/asset/r73.jpeg"
import r74 from "./assets/asset/r74.jpeg"
import r75 from "./assets/asset/r75.jpeg"
import r76 from "./assets/asset/r76.jpeg"
import r77 from "./assets/asset/r77.jpeg"
import r78 from "./assets/asset/r78.jpeg"
import r79 from "./assets/asset/r79.jpeg"
import r80 from "./assets/asset/r80.jpeg"
import r81 from "./assets/asset/r81.jpeg"
import r82 from "./assets/asset/r82.jpeg"
import r83 from "./assets/asset/r83.jpeg"
import r84 from "./assets/asset/r84.jpeg"
import r85 from "./assets/asset/r85.jpeg"
import r86 from "./assets/asset/r86.jpeg"
import r87 from "./assets/asset/r87.jpeg"
import r88 from "./assets/asset/r88.jpeg"
import r89 from "./assets/asset/r89.jpeg"
import r90 from "./assets/asset/r90.jpeg"
import r91 from "./assets/asset/r91.jpeg"
import r92 from "./assets/asset/r92.jpeg"
import r93 from "./assets/asset/r93.jpeg"
import r94 from "./assets/asset/r94.jpeg"
import r95 from "./assets/asset/r95.jpeg"
import r96 from "./assets/asset/r96.jpeg"
import r97 from "./assets/asset/r97.jpeg"
import r98 from "./assets/asset/r98.jpeg"
import r99 from "./assets/asset/r99.jpeg"
import chacha from"./assets/asset/chacha.mp4";
import speech from"./assets/asset/speech.mp4";
import Message from './components/Message';
import AddQuestion from './components/AddQuestion';
import Test from './components/Test';
import QuestionList from './components/Questionlist';
import { useState } from 'react';

function App() {
  const Image=[nI,nII,nIII,nIV,nV];
  const image=[grad1,grad2,grad3,grad4,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17,img18,img19,img20,img21,img22,img23,img24,img25,
    img26,img27,img29,img30,img31,img32,img33,img34,img35,img36,r1,r2,r3,r4,r5,r6,
    r7,r8, r9,r10,r11,r12,r13,r14,r15,r16,r17, r18, r19, r20, r21, r22, r23, r24, r25, r26, r27,r28,r29,r30,
    r31,r32,r33,r34,r35,r36,r37,r38,r39,r40,r41,r42,r43,r44,r45,r46,r47,r48,r49,r50,r51,r52,r53,r54,r55,r56,
    r57,r58,r59,r60,r61,r62,r63,r64,r65,r66,r67,r68,r69,r70,r71,r72,r73,r74,r75,r76,r77,r78,r79,
    r80,r81,r82,r83,r84,r85,r86,r87,r88,r89,r90,r91,r92,r93,r94,r95,r96,r97,r98,r99];
    const video=[chacha,speech];

    const [questions, setQuestions] = useState([]);

  const addQuestion = (question) => {
    setQuestions([...questions, question]);
  };

  const deleteQuestion = (index) => {
    setQuestions(questions.filter((_, i) => i !== index));
  };
  return (
    <Router  basename={import.meta.env.DEV ? '/' : '/SanGallery/'}>  {/* Wrap the application with Router */}
    <>
    <MyNav/>
      <Routes>
      <Route path="/" element={<Navigate to="/home" />} />  
        <Route path="/home" element={<Home Image={Image}/>}/>
        <Route path="/gallery" element={<Gallery image={image} video={video}/>}/>
        <Route path='/message' element={<Message/>}/>
        <Route path='/AddQuestion' element={<AddQuestion addQuestion={addQuestion} />}/>
        <Route path='/Questionlist' element={<QuestionList questions={questions} deleteQuestion={deleteQuestion} />}/>
        <Route path='/Test' element={<Test questions={questions} />}/>
      </Routes>
      <Outlet/>
    </>
    </Router>
  )
}

export default App