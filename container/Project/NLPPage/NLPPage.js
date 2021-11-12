// import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
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
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import axios from 'axios';

// const url =
//   process.env.NEXT_PUBLIC_NODE_ENV == 'development'
//     ? 'http://localhost:3001'
//     : 'https://fast-falls-78644.herokuapp.com';

// const url = 'http://localhost:3001';
const url = 'https://fast-falls-78644.herokuapp.com';

export default function NLPPage(props) {
  const [textIndex, setTextIndex] = useState(0);
  const [data, setData] = useState([]);

  const chooseLabelsHandler = (labels) => {
    data[textIndex]['label'] = labels;
    data[textIndex]['isLabeled'] = true;
    data[textIndex]['updatedAt'] = new Date().toUTCString();
    setTextIndex(textIndex + 1);
  };

  const chooseInvalidHandler = () => {
    data[textIndex]['isInvalid'] = true;
    data[textIndex]['updatedAt'] = new Date().toUTCString();
    setTextIndex(textIndex + 1);
  };

  const fetchDataHandler = async () => {
    console.log(url);
    setTextIndex(0);
    const res = await axios.get(url + `/project/getNLPTexts`);
    setData(res.data.texts);
  };

  const postDataHandler = async () => {
    setTextIndex(0);
    setData([]);
    const sendData = data.slice(0, textIndex);
    const res = await axios.post(url + `/project/NLPTexts`, {
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
        title="Natural Language Processing"
      />
      <div className={classes.NLPSection}>
        <img
          className={classes.NLPSectionTopicImage}
          src={
            'https://images.squarespace-cdn.com/content/v1/56e2e0c520c6472a2586add2/1593683608007-L71NCKC2O54GFBHPB0W9/CP%2BLogos%2B2%2B%25288%2529.jpg'
          }
        />
        <h3 className={classes.NLPSectionTitle}>Developed Machine Learning Model with HuggingFace</h3>
        <Grid container spacing={2} sx={{ padding: '20px' }} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={6}>
            <Card sx={{ margin: '0 auto', height: 300 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://miro.medium.com/max/2400/1*XAHtR9rKv8SJ4ESELxm2iQ.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Thai Sentimental Model
                </Typography>
                <Typography variant="body" color="text.primary">
                  Developed model Thai sentimental poom-sci/WangchanBERTa-finetuned-sentiment from&nbsp;
                  <Link href="https://medium.com/airesearch-in-th/wangchanberta-%E0%B9%82%E0%B8%A1%E0%B9%80%E0%B8%94%E0%B8%A5%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%A1%E0%B8%A7%E0%B8%A5%E0%B8%9C%E0%B8%A5%E0%B8%A0%E0%B8%B2%E0%B8%A9%E0%B8%B2%E0%B9%84%E0%B8%97%E0%B8%A2%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%83%E0%B8%AB%E0%B8%8D%E0%B9%88%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%81%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%AA%E0%B8%B8%E0%B8%94%E0%B9%83%E0%B8%99%E0%B8%82%E0%B8%93%E0%B8%B0%E0%B8%99%E0%B8%B5%E0%B9%89-d920c27cd433">
                    <div className={classes.link}>WangchanBERTa</div>
                  </Link>
                </Typography>
              </CardContent>
              <CardActions>
                <Link href="https://huggingface.co/poom-sci/WangchanBERTa-finetuned-sentiment">
                  <Button size="small">Go to model</Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ margin: '0 auto', height: 300 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://res.cloudinary.com/practicaldev/image/fetch/s--ozy733MJ--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/q5e65ugnue96bir3usyk.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  English Sentimental Model
                </Typography>
                <Typography variant="body" color="text.primary">
                  Developed model poom-sci/bert-base-uncased-multi-emotion from&nbsp;
                  <Link href="https://huggingface.co/bert-base-uncased">
                    <div className={classes.link}>bert-base-cased</div>
                  </Link>
                </Typography>
              </CardContent>
              <CardActions>
                <Link href="https://huggingface.co/poom-sci/bert-base-uncased-multi-emotion">
                  <Button size="small">Go to model</Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <Grid item xs={12} md={12}>
          <div className={classes.MoreInfo}>
            <h4>Find Out More Info Here</h4>
            <div>
              <Link href="https://github.com/poom-sci/getting-started-with-nlp">
                <div className={classes.link}>Github</div>
              </Link>
            </div>
            {/* <div>
              <Link href="https://github.com/poom-sci/TREASON/blob/master/Treason%20Documentation.pdf">
                <div className={classes.link}>Document</div>
              </Link>
            </div> */}
          </div>
        </Grid>
      </div>
      <Divider style={{ padding: '30px 50px', backgroundColor: 'white' }} />
      {/*
      <div className={classes.textChooseSection}>
        <h3 style={{ margin: '20px' }}>พื้นที่สำหรับการช่วยให้คแะนนข้อมูล ว่าเป็นแง่ ดี/กลาง/ร้าย </h3>
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
      </div> */}
      {/* <Divider variant="middle" light /> */}
      {/* <ImageSlider /> */}
      {/* <ProjectCards /> */}
    </div>
  );
}
