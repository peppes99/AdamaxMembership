{\rtf1\ansi\ansicpg1252\cocoartf2820
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import React, \{ useEffect, useState \} from 'react';\
import firebase from '../firebase';\
\
function Dashboard() \{\
  const [subscriptions, setSubscriptions] = useState([]);\
\
  useEffect(() => \{\
    const fetchData = async () => \{\
      const snapshot = await firebase.firestore().collection('subscriptions').get();\
      setSubscriptions(snapshot.docs.map(doc => (\{ id: doc.id, ...doc.data() \})));\
    \};\
    fetchData();\
  \}, []);\
\
  return (\
    <div className="dashboard-container">\
      <h2>Dashboard</h2>\
      <ul>\
        \{subscriptions.map(sub => (\
          <li key=\{sub.id\}>\{sub.name\} - \{sub.status\}</li>\
        ))\}\
      </ul>\
    </div>\
  );\
\}\
\
export default Dashboard;\
}