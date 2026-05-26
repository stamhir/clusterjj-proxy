{\rtf1\ansi\ansicpg1252\cocoartf2870
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\froman\fcharset0 Times-Roman;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;}
\margl1440\margr1440\vieww12920\viewh15780\viewkind1
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs24 \cf0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 exports.handler = async function(event, context) \{\
\
const allowedReferrer = "yourproject.netlify.app";\
\
const referer = event.headers.referer || "";\
\
if (!referer.includes(allowedReferrer)) \{\
return \{\
statusCode: 403,\
body: "Access denied"\
\};\
\}\
\
return \{\
statusCode: 200,\
headers: \{\
"Content-Type": "application/json"\
\},\
body: JSON.stringify(\{\
url: "https://claude.ai/share/YOUR-REAL-LINK"\
\})\
\};\
\};\
}