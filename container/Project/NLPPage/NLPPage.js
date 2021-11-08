// import Head from 'next/head';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/router';
// import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Divider from '@material-ui/core/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

// import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import classes from './NLPPage.module.css';
import TopicImage from '../../../components/UI/TopicImage/TopicImage';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CircleIcon from '@mui/icons-material/Circle';
import ClearIcon from '@mui/icons-material/Clear';

import axios from 'axios';

export default function NLPPage(props) {
  const [textIndex, setTextIndex] = useState(0);
  const [data, setData] = useState([]);

  const chooseLabelsHandler = (labels) => {
    data[textIndex]['label'] = labels;
    data[textIndex]['isChecked'] = true;
    data[textIndex]['updatedAt'] = new Date().toUTCString();
    setTextIndex(textIndex + 1);
  };

  const chooseInvalidHandler = () => {
    data[textIndex]['isInvalid'] = true;
    setTextIndex(textIndex + 1);
  };

  const fetchDataHandler = async () => {
    setTextIndex(0);
    const res = await axios.get(`https://fast-falls-78644.herokuapp.com/project/getNLPTexts`);
    setData(res.data.texts);
  };

  const postDataHandler = async () => {
    setTextIndex(0);
    setData([]);
    const sendData = data.slice(0, textIndex);
    const res = await axios.post(`https://fast-falls-78644.herokuapp.com/project/NLPTexts`, {
      data: sendData,
    });
  };

  const resetHandler = () => {
    setTextIndex(0);
    setData([]);
  };

  let showText = 'กดปุ่ม fetch เพื่อเริ่ม';
  if (textIndex < data.length) {
    showText = data[textIndex]['text'];
  } else if (data.length != 0 && textIndex >= data.length) {
    showText = 'กำหนดคะแนนข้อมูลเรียบร้อย กด send data ด้านล่างเพื่อส่งข้อมูลไปเก็บ';
  }

  return (
    <div className={classes.container}>
      <TopicImage
        coverImage="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bert-and-ernie-gettyimages-1039579634.jpg?crop=1.00xw:0.754xh;0,0.0440xh&resize=480:*"
        alt_text="homepage_cover_image"
        title="Sentimental Analysis"
      />
      <div className={classes.textChooseSection}>
        <div style={{ margin: '20px' }}>จำนวนข้อที่ทั้งหมด : {data.length}</div>
        <div style={{ margin: '20px' }}>ข้อที่ทำอยู่ : {textIndex}</div>
        <Button
          variant="outlined"
          onClick={() => {
            chooseInvalidHandler();
          }}
          color={'warning'}
          disabled={textIndex >= data.length}
          startIcon={<ClearIcon />}
        >
          Invalid
        </Button>
        <div style={{ margin: '20px' }}>{showText}</div>
        <Stack spacing={2} direction="row" justifyContent="center" sx={{ marginBottom: '10px' }}>
          <Button
            variant="outlined"
            color={'primary'}
            onClick={() => {
              chooseLabelsHandler(0);
            }}
            disabled={textIndex >= data.length}
            startIcon={<AddIcon />}
          >
            Positive
          </Button>
          <Button
            variant="outlined"
            color={'secondary'}
            onClick={() => {
              chooseLabelsHandler(1);
            }}
            disabled={textIndex >= data.length}
            startIcon={<CircleIcon />}
          >
            Neutral
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              chooseLabelsHandler(2);
            }}
            color={'error'}
            disabled={textIndex >= data.length}
            startIcon={<RemoveIcon />}
          >
            Negative
          </Button>
        </Stack>

        <TableContainer component={Paper}>
          <Table sx={{}} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Text ที่ทำแล้ว</TableCell>
                <TableCell align="right">Score</TableCell>
                <TableCell align="right">Edit</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => {
                if (index >= textIndex) {
                  return null;
                }
                return (
                  <TableRow key={row.text} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      {row.text}
                    </TableCell>
                    <TableCell align="right">{row.label}</TableCell>
                    <TableCell align="right">
                      <Button
                        variant="contained"
                        onClick={() => {
                          setData((oldData) => {
                            setTextIndex(textIndex - 1);
                            const newData = oldData.filter((element, i) => {
                              return row._id != element._id;
                            });
                            return newData;
                          });
                        }}
                      >
                        Remove
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <Stack spacing={2} direction="row" justifyContent="center" style={{ margin: '20px' }}>
          <Button
            variant="contained"
            onClick={() => {
              fetchDataHandler();
            }}
          >
            Fetch Data
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              resetHandler();
            }}
          >
            Reset Data
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              postDataHandler();
            }}
            color="success"
            disabled={textIndex <= 0}
          >
            Send Data
          </Button>
        </Stack>
      </div>

      {/* <Divider variant="middle" light /> */}
      {/* <ImageSlider /> */}
      {/* <ProjectCards /> */}
    </div>
  );
}
