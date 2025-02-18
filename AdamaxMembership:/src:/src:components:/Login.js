{\rtf1\ansi\ansicpg1252\cocoartf2820
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import React, \{ useState \} from 'react';\
import \{ useNavigate \} from 'react-router-dom';\
import firebase from '../firebase';\
\
function Login() \{\
  const [email, setEmail] = useState('');\
  const [password, setPassword] = useState('');\
  const navigate = useNavigate();\
\
  const handleLogin = async () => \{\
    try \{\
      await firebase.auth().signInWithEmailAndPassword(email, password);\
      navigate('/dashboard');\
    \} catch (error) \{\
      alert('Errore di accesso: ' + error.message);\
    \}\
  \};\
\
  return (\
    <div className="login-container">\
      <h2>Login</h2>\
      <input type="email" placeholder="Email" value=\{email\} onChange=\{(e) => setEmail(e.target.value)\} />\
      <input type="password" placeholder="Password" value=\{password\} onChange=\{(e) => setPassword(e.target.value)\} />\
      <button onClick=\{handleLogin\}>Accedi</button>\
    </div>\
  );\
\}\
\
export default Login;\
}